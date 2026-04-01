const { getStore } = require('@netlify/blobs');

function pruneEvents(events, daysToKeep = 90, maxEvents = 20000) {
  const cutoff = Date.now() - daysToKeep * 24 * 60 * 60 * 1000;
  const kept = (events || []).filter((e) => {
    if (!e || typeof e !== 'object') return false;
    const ts = Date.parse(e.ts);
    return Number.isFinite(ts) && ts >= cutoff;
  });
  if (kept.length <= maxEvents) return kept;
  return kept.slice(kept.length - maxEvents);
}

exports.handler = async (event) => {
  if (event.httpMethod !== 'GET') {
    return { statusCode: 405, body: JSON.stringify({ error: 'method_not_allowed' }) };
  }

  const token = process.env.ANALYTICS_TOKEN;
  const provided = (event.queryStringParameters && event.queryStringParameters.token) || '';
  if (token && provided !== token) {
    return { statusCode: 401, body: JSON.stringify({ error: 'unauthorized' }) };
  }

  const store = getStore('portfolio-analytics');
  let events = [];
  try {
    const raw = await store.get('events.json');
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed && Array.isArray(parsed.events)) events = parsed.events;
    }
  } catch (_) {}

  events = pruneEvents(events);

  const todayKey = new Date().toISOString().slice(0, 10);
  const totalsByDay = {};
  const uniqueByDay = {};

  for (const e of events) {
    const day = typeof e.ts === 'string' ? e.ts.slice(0, 10) : null;
    if (!day) continue;
    totalsByDay[day] = (totalsByDay[day] || 0) + 1;
    if (!uniqueByDay[day]) uniqueByDay[day] = new Set();
    uniqueByDay[day].add(e.id);
  }

  const days = Object.keys(totalsByDay).sort();
  const last30 = days.slice(-30);
  const perDay = last30.map((d) => ({
    day: d,
    total: totalsByDay[d] || 0,
    unique: uniqueByDay[d] ? uniqueByDay[d].size : 0,
  }));

  const total = events.length;
  const today = totalsByDay[todayKey] || 0;
  const todayUnique = uniqueByDay[todayKey] ? uniqueByDay[todayKey].size : 0;
  const last7 = perDay.slice(-7).reduce((acc, d) => acc + d.total, 0);
  const last7Unique = new Set(
    events
      .filter((e) => typeof e.ts === 'string' && e.ts.slice(0, 10) >= perDay.slice(-7)[0]?.day)
      .map((e) => e.id)
  ).size;

  return {
    statusCode: 200,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      total,
      today,
      todayUnique,
      last7,
      last7Unique,
      perDay,
    }),
  };
};
