const crypto = require('crypto');
function getStoreSafe() {
  try {
    const { getStore } = require('@netlify/blobs');
    return { store: getStore('portfolio-analytics') };
  } catch (e) {
    return {
      store: null,
      error: {
        name: e && e.name ? String(e.name) : 'Error',
        code: e && e.code ? String(e.code) : '',
        message: e && e.message ? String(e.message) : 'unknown_error',
      },
    };
  }
}

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
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: JSON.stringify({ error: 'method_not_allowed' }) };
  }

  const { store, error } = getStoreSafe();
  if (!store) {
    return { statusCode: 200, body: JSON.stringify({ ok: true, stored: false, warning: 'storage_unavailable', warningDetail: error || undefined }) };
  }
  let data = { version: 1, events: [] };
  try {
    const raw = await store.get('events.json');
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed && Array.isArray(parsed.events)) data.events = parsed.events;
    }
  } catch (_) {}

  let body = {};
  try { body = JSON.parse(event.body || '{}'); } catch (_) {}

  const ip = (event.headers['x-forwarded-for'] || '').split(',')[0].trim();
  const ua = event.headers['user-agent'] || '';
  const id = crypto.createHash('sha256').update(`${ip}|${ua}`).digest('hex');

  const visit = {
    ts: new Date().toISOString(),
    id,
    path: typeof body.path === 'string' ? body.path : '/',
    lang: typeof body.lang === 'string' ? body.lang : undefined,
    ref: typeof body.ref === 'string' ? body.ref : undefined,
  };

  data.events.push(visit);
  data.events = pruneEvents(data.events);

  try {
    await store.set('events.json', JSON.stringify(data), { consistency: 'strong' });
  } catch (_) {}

  return { statusCode: 200, body: JSON.stringify({ ok: true }) };
};
