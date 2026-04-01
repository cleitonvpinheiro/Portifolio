require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');
const path = require('path');
const fs = require('fs');
const crypto = require('crypto');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const publicCandidates = [
  path.join(__dirname, 'Portifolio', 'public'),
  path.join(__dirname, 'public'),
];

const publicDir =
  publicCandidates.find((dir) => fs.existsSync(path.join(dir, 'index.html'))) ||
  publicCandidates.find((dir) => fs.existsSync(dir)) ||
  publicCandidates[0];

app.use(express.static(publicDir));

const visitsFilePath = path.join(__dirname, 'visits.json');

function readVisitsData() {
  try {
    const raw = fs.readFileSync(visitsFilePath, 'utf8');
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== 'object') return { version: 1, events: [] };
    if (!Array.isArray(parsed.events)) return { version: 1, events: [] };
    return { version: 1, events: parsed.events };
  } catch (_) {
    return { version: 1, events: [] };
  }
}

function writeVisitsData(data) {
  fs.writeFileSync(visitsFilePath, JSON.stringify(data), 'utf8');
}

function pruneEvents(events, daysToKeep = 90, maxEvents = 20000) {
  const cutoff = Date.now() - daysToKeep * 24 * 60 * 60 * 1000;
  const kept = events.filter((e) => {
    if (!e || typeof e !== 'object') return false;
    const ts = Date.parse(e.ts);
    return Number.isFinite(ts) && ts >= cutoff;
  });
  if (kept.length <= maxEvents) return kept;
  return kept.slice(kept.length - maxEvents);
}

function isLocalRequest(req) {
  const ip = (req.ip || '').replace('::ffff:', '');
  return ip === '127.0.0.1' || ip === '::1';
}

function requireAnalyticsAccess(req, res) {
  const token = process.env.ANALYTICS_TOKEN;
  if (token && req.query.token !== token) {
    res.status(401).json({ error: 'unauthorized' });
    return false;
  }
  if (!token && !isLocalRequest(req)) {
    res.status(401).json({ error: 'unauthorized' });
    return false;
  }
  return true;
}

app.post('/api/visits/track', (req, res) => {
  const ip = (req.ip || '').replace('::ffff:', '');
  const ua = req.get('user-agent') || '';
  const id = crypto.createHash('sha256').update(`${ip}|${ua}`).digest('hex');

  const body = req.body && typeof req.body === 'object' ? req.body : {};
  const event = {
    ts: new Date().toISOString(),
    id,
    path: typeof body.path === 'string' ? body.path : '/',
    lang: typeof body.lang === 'string' ? body.lang : undefined,
    ref: typeof body.ref === 'string' ? body.ref : undefined,
  };

  const data = readVisitsData();
  data.events.push(event);
  data.events = pruneEvents(data.events);

  try {
    writeVisitsData(data);
  } catch (_) { }

  res.json({ ok: true });
});

app.get('/api/visits/stats', (req, res) => {
  if (!requireAnalyticsAccess(req, res)) return;

  const data = readVisitsData();
  const events = pruneEvents(data.events);

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

  res.json({
    total,
    today,
    todayUnique,
    last7,
    last7Unique,
    perDay,
  });
});

app.get('/stats', (req, res) => {
  if (!requireAnalyticsAccess(req, res)) return;
  const token = process.env.ANALYTICS_TOKEN ? `?token=${encodeURIComponent(process.env.ANALYTICS_TOKEN)}` : '';
  res.type('html').send(`<!doctype html>
<html lang="pt-BR">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>Visitas - Portfólio</title>
  <style>
    body{font-family:system-ui,-apple-system,Segoe UI,Roboto,Inter,Arial,sans-serif;margin:0;background:#0b1220;color:#e5e7eb}
    .wrap{max-width:960px;margin:0 auto;padding:32px}
    h1{font-size:24px;margin:0 0 16px}
    .grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:12px;margin:16px 0 24px}
    .card{background:#0f1a33;border:1px solid rgba(255,255,255,.08);border-radius:12px;padding:14px}
    .label{opacity:.8;font-size:12px}
    .value{font-size:24px;font-weight:700;margin-top:6px}
    table{width:100%;border-collapse:collapse;background:#0f1a33;border:1px solid rgba(255,255,255,.08);border-radius:12px;overflow:hidden}
    th,td{padding:10px 12px;border-bottom:1px solid rgba(255,255,255,.06);text-align:left;font-size:13px}
    th{font-size:12px;opacity:.85}
    tr:last-child td{border-bottom:none}
    .muted{opacity:.7}
    @media (max-width:860px){.grid{grid-template-columns:repeat(2,minmax(0,1fr))}}
  </style>
</head>
<body>
  <div class="wrap">
    <h1>Visitas</h1>
    <div class="grid">
      <div class="card"><div class="label">Total (90 dias)</div><div id="total" class="value">-</div></div>
      <div class="card"><div class="label">Hoje</div><div id="today" class="value">-</div><div id="todayUnique" class="muted"></div></div>
      <div class="card"><div class="label">Últimos 7 dias</div><div id="last7" class="value">-</div><div id="last7Unique" class="muted"></div></div>
      <div class="card"><div class="label">Últimos 30 dias</div><div id="last30" class="value">-</div></div>
    </div>
    <table>
      <thead>
        <tr><th>Dia</th><th>Total</th><th>Únicos</th></tr>
      </thead>
      <tbody id="rows"></tbody>
    </table>
    <div class="muted" style="margin-top:12px">Acesso: ${process.env.ANALYTICS_TOKEN ? 'token' : 'localhost'}</div>
  </div>
  <script>
    async function main(){
      const res = await fetch('/api/visits/stats${token}');
      if(!res.ok){document.body.innerHTML='<div class="wrap"><h1>Sem acesso</h1><div class="muted">Configure ANALYTICS_TOKEN ou abra via localhost.</div></div>'; return;}
      const data = await res.json();
      document.getElementById('total').textContent = data.total ?? '-';
      document.getElementById('today').textContent = data.today ?? '-';
      document.getElementById('todayUnique').textContent = (data.todayUnique != null) ? (data.todayUnique + ' únicos') : '';
      document.getElementById('last7').textContent = data.last7 ?? '-';
      document.getElementById('last7Unique').textContent = (data.last7Unique != null) ? (data.last7Unique + ' únicos') : '';
      const last30 = Array.isArray(data.perDay) ? data.perDay.reduce((a,d)=>a+(d.total||0),0) : 0;
      document.getElementById('last30').textContent = last30;
      const rows = document.getElementById('rows');
      rows.innerHTML = '';
      (data.perDay||[]).slice().reverse().forEach(d=>{
        const tr = document.createElement('tr');
        tr.innerHTML = '<td>'+d.day+'</td><td>'+d.total+'</td><td>'+d.unique+'</td>';
        rows.appendChild(tr);
      });
    }
    main();
  </script>
</body>
</html>`);
});

// Basic route
app.get('/', (req, res) => {
  res.sendFile(path.join(publicDir, 'index.html'));
});

function startServer(port, triesLeft = 10) {
  const server = app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });

  server.on('error', (err) => {
    if (err && err.code === 'EADDRINUSE' && triesLeft > 0) {
      startServer(port + 1, triesLeft - 1);
      return;
    }
    throw err;
  });
}

startServer(PORT);
