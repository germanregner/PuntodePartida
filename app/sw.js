// Service Worker de Punto de Partida — app instalable (2026-10-08, pedido del Director: instalar en Android y iPhone, sin tiendas, sin internet).
// Reemplaza al de 2026-09 (cache-first: dejaba a la gente pegada a una versión vieja, justo lo que se quiere evitar). Respaldo en _archivo/2026-10-08-motor-antes-pwa/.
//
// Estrategia «guardar y revalidar»: abre al instante lo guardado (por eso anda sin internet) y, en segundo plano, le pregunta al servidor si hay una versión
// nueva. Si la hay, la guarda y le avisa a la página, que ofrece «Actualizar». Para el servidor es barato: si no cambió, responde «sin cambios» y no manda el archivo.
// Alcance: solo la carpeta donde se publica este archivo (app/). Para forzar a todos a descartar lo guardado, subir el número de CACHE.
const CACHE = 'pdp-v3';
// Librerías externas que usa el Motor por capacidad (PeerJS, QR, Howler, JSXGraph): se guardan al instalar para que anden sin internet. Si una falla, no rompe la instalación.
const LIBS = [
  'https://cdn.jsdelivr.net/npm/peerjs@1.5.4/dist/peerjs.min.js',
  'https://cdn.jsdelivr.net/npm/qrcode-generator@1.4.4/qrcode.js',
  'https://cdnjs.cloudflare.com/ajax/libs/howler/2.2.4/howler.min.js',
  'https://cdn.jsdelivr.net/npm/jsxgraph@1.12.2/distrib/jsxgraphcore.min.js',
  'https://cdn.jsdelivr.net/npm/jsxgraph@1.12.2/distrib/jsxgraph.min.css',
];
const clave = u => { const x = new URL(u); return x.origin + x.pathname; }; // sin ?v=… ni #…: la misma página es una sola entrada
const version = r => r && (r.headers.get('etag') || r.headers.get('last-modified') || r.headers.get('content-length'));

self.addEventListener('install', e => e.waitUntil(
  caches.open(CACHE)
    .then(c => Promise.all(LIBS.map(u => fetch(u, { mode: 'no-cors' }).then(r => c.put(u, r)).catch(() => {}))))
    .then(() => self.skipWaiting())
));
self.addEventListener('activate', e => e.waitUntil(
  caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())
));

function avisar() { self.clients.matchAll({ type: 'window' }).then(cs => cs.forEach(c => c.postMessage({ tipo: 'pdp-actualizacion' }))); }

// Recursos con nombre = huella de su contenido (partición del Motor, 2026-10-13; CKPT-009 C-A2): un archivo con ese nombre NUNCA cambia, así que se guarda para siempre.
// La página compuesta (trae las imágenes y audios como archivos aparte) solo se guarda cuando TODOS sus recursos ya están guardados: nunca queda una página a medias.
const RECURSO = /\/pdp-assets\/[0-9a-f]{32}\.[a-z0-9]+$/;
const RE_REFS = /(?:\.\.\/)?pdp-assets\/[0-9a-f]{32}\.[a-z0-9]+/g;
const esPagina = (url, res) => /\.html?$/.test(new URL(url).pathname) || /text\/html/.test((res && res.headers.get('content-type')) || '');
async function pool(tareas, n) { let i = 0; const r = []; await Promise.all(Array.from({ length: n }, async () => { while (i < tareas.length) { const t = tareas[i++]; r.push(await t()); } })); return r; }
async function asegurarRecursos(cache, urlPagina, res) {
  // La página nombra el código (Fase 2) y el código nombra las imágenes y audios: se siguen las referencias de archivo a archivo hasta no encontrar nada nuevo.
  // Las rutas dentro del código se resuelven respecto de la PÁGINA (así las usa el navegador), no respecto del archivo de código.
  const visto = new Set(); let nivel = [...new Set((await res.clone().text()).match(RE_REFS) || [])].map(r => new URL(r, urlPagina).href); let completo = true;
  while (nivel.length) {
    nivel = nivel.filter(u => !visto.has(clave(u))); nivel.forEach(u => visto.add(clave(u)));
    const siguientes = [];
    const rs = await pool(nivel.map(u => async () => {
      try {
        let r = await cache.match(clave(u));
        if (!r) { const x = await fetch(u); if (!x.ok) return false; await cache.put(clave(u), x.clone()); r = x; }
        if (/\.js$/.test(new URL(u).pathname)) for (const m of (await r.clone().text()).match(RE_REFS) || []) siguientes.push(new URL(m, urlPagina).href);
        return true;
      } catch (_) { return false; }
    }), 6);
    if (!rs.every(Boolean)) completo = false;  // faltó alguno (sin red a mitad de camino): la página nueva NO se guarda y sigue la anterior
    nivel = siguientes;
  }
  return completo;
}
// Los audios piden «Range» (Safari lo exige): desde la copia guardada se contesta con la porción pedida.
async function conRango(resp, rango) {
  const m = /bytes=(\d*)-(\d*)/.exec(rango || ''); if (!m || (m[1] === '' && m[2] === '')) return resp;
  const buf = await resp.arrayBuffer(), n = buf.byteLength;
  const ini = m[1] === '' ? Math.max(0, n - Number(m[2])) : Number(m[1]), fin = (m[1] === '' || m[2] === '') ? n - 1 : Math.min(Number(m[2]), n - 1);
  if (ini > fin || ini >= n) return new Response(null, { status: 416, headers: { 'Content-Range': 'bytes */' + n } });
  return new Response(buf.slice(ini, fin + 1), { status: 206, statusText: 'Partial Content', headers: { 'Content-Type': resp.headers.get('Content-Type') || 'application/octet-stream', 'Content-Range': `bytes ${ini}-${fin}/${n}`, 'Content-Length': String(fin - ini + 1) } });
}
async function servirRecurso(req) {
  const cache = await caches.open(CACHE), k = clave(req.url);
  let r = await cache.match(k);
  if (!r) { const red = await fetch(req.url).catch(() => null); if (!red || !red.ok) return red || Response.error(); await cache.put(k, red.clone()); r = red; }
  return req.headers.get('range') ? conRango(r, req.headers.get('range')) : r;
}

// Guarda una página recién traída (si es compuesta, solo cuando TODOS sus recursos ya están guardados) y avisa si es una versión distinta de la que había.
async function guardarPagina(cache, req, res, guardado) {
  const k = clave(req.url);
  const cambio = !!guardado && version(guardado) !== version(res);
  if (guardado && !cambio) return;                  // misma versión que la guardada: no hay nada nuevo que traer
  if (esPagina(req.url, res) && !(await asegurarRecursos(cache, req.url, res))) return; // faltan recursos: no se guarda, sigue la versión anterior
  await cache.put(k, res);
  if (cambio && req.mode === 'navigate') avisar(); // la página que está abierta ofrece «Actualizar»
}
async function guardarYRevalidar(req, evento) {
  const cache = await caches.open(CACHE), k = clave(req.url);
  const guardado = await cache.match(k);
  const red = fetch(req.url, { cache: 'no-cache' }).catch(() => null);
  if (guardado) {                                   // abre al instante con lo guardado y revalida por detrás (sin waitUntil el navegador puede cortar antes de guardar)
    evento.waitUntil(red.then(res => (res && res.ok) ? guardarPagina(cache, req, res.clone(), guardado) : null).catch(() => {}));
    return guardado;
  }
  const res = await red;                            // primera vez: se muestra YA lo que llegó; los recursos se guardan por detrás (antes la página esperaba a bajarlos todos)
  if (res && res.ok) evento.waitUntil(guardarPagina(cache, req, res.clone(), null).catch(() => {}));
  return res || Response.error();
}

// Qué se guarda (2026-10-08): SOLO la Unidad instalable y sus archivos de instalación. Las demás páginas publicadas en la misma carpeta (Unidades viejas,
// encargos) también registran este archivo, pero acá pasan directo a internet, como siempre. Al sumar Unidades a la app, se agregan a esta lista.
// Varias Unidades en una misma app (partición del Motor, Fase 3, 2026-10-13): ya NO hay una lista escrita acá. Las Unidades instalables se declaran en `unidades.json`
// (misma carpeta que este archivo; lo escribe promover_app.mjs). Sumar una Unidad = publicar su página, sus recursos y una línea en ese registro: este archivo no cambia.
// Solo se guardan las Unidades que estén en el registro y SOLO cuando se abren (nunca se bajan todas juntas: serían datos móviles de más).
const INSTALACION = /\/(manifest\.webmanifest|unidades\.json|icons\/[^/]+)$/;
const REGISTRO = new URL('unidades.json', self.registration.scope).href;
const RESPALDO = ['en-a2-u01-back-to-basics.html']; // si el registro no se pudo leer nunca (primera visita sin internet): lo que ya estaba instalado antes de existir el registro
async function paginasInstalables() {
  try {
    const c = await caches.open(CACHE); let r = await c.match(clave(REGISTRO));
    if (!r) { const red = await fetch(REGISTRO, { cache: 'no-cache' }).catch(() => null); if (red && red.ok) { await c.put(clave(REGISTRO), red.clone()); r = red; } }
    const j = r ? await r.json() : null;
    return new Set(j && Array.isArray(j.unidades) ? j.unidades.map(x => x.pagina) : RESPALDO);
  } catch (_) { return new Set(RESPALDO); }
}
async function refrescarRegistro() {
  try { const red = await fetch(REGISTRO, { cache: 'no-cache' }); if (red && red.ok) await (await caches.open(CACHE)).put(clave(REGISTRO), red); } catch (_) {}
}
async function paginaORed(req, evento) { // una página .html de la carpeta: se guarda solo si es una Unidad registrada; las demás (Unidades viejas, encargos) pasan directo a internet, como siempre
  const nombre = new URL(req.url).pathname.split('/').pop();
  let lista = await paginasInstalables();
  if (!lista.has(nombre) && req.mode === 'navigate') { await refrescarRegistro(); lista = await paginasInstalables(); } // ¿se sumó una Unidad nueva al registro desde la última vez?
  else if (req.mode === 'navigate') evento.waitUntil(refrescarRegistro());                                           // y el registro se mantiene al día por detrás
  return lista.has(nombre) ? guardarYRevalidar(req, evento) : fetch(req);
}
self.addEventListener('fetch', e => {
  const req = e.request; if (req.method !== 'GET') return;
  const u = new URL(req.url);
  if (u.origin === location.origin && u.href.startsWith(self.registration.scope)) {
    if (RECURSO.test(u.pathname)) e.respondWith(servirRecurso(req));
    else if (INSTALACION.test(u.pathname)) e.respondWith(guardarYRevalidar(req, e));
    else if (/\.html?$/.test(u.pathname)) e.respondWith(paginaORed(req, e));
  }
  else if (LIBS.includes(req.url)) e.respondWith(caches.match(req.url).then(c => c || fetch(req)));
});

// La primera visita no pasa por este service worker: la página le pide guardarse (y guardar el manifiesto y el ícono) para que ande sin internet.
self.addEventListener('message', e => {
  if (!e.data || e.data.tipo !== 'cachear' || !Array.isArray(e.data.urls)) return;
  e.waitUntil(caches.open(CACHE).then(c => Promise.all([...e.data.urls, REGISTRO].map(u => fetch(u, { cache: 'no-cache' }).then(async r => {
    if (!r.ok) return;
    if (esPagina(u, r) && !(await asegurarRecursos(c, u, r))) return; // página compuesta: se guarda recién cuando están todos sus recursos
    await c.put(clave(u), r);
  }).catch(() => {})))));
});
