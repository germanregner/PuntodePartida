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

async function guardarYRevalidar(req, evento) {
  const cache = await caches.open(CACHE), k = clave(req.url);
  const guardado = await cache.match(k);
  const red = fetch(req.url, { cache: 'no-cache' }).then(async res => {
    if (res && res.ok) {
      const cambio = !!guardado && version(guardado) !== version(res);
      await cache.put(k, res.clone());
      if (cambio && req.mode === 'navigate') avisar(); // la página que está abierta ofrece «Actualizar»
    }
    return res;
  }).catch(() => null);
  if (guardado) { evento.waitUntil(red); return guardado; } // sin waitUntil el navegador puede cortar la revalidación antes de guardar
  return (await red) || Response.error();                    // primera vez, o algo que nunca se guardó
}

// Qué se guarda (2026-10-08): SOLO la Unidad instalable y sus archivos de instalación. Las demás páginas publicadas en la misma carpeta (Unidades viejas,
// encargos) también registran este archivo, pero acá pasan directo a internet, como siempre. Al sumar Unidades a la app, se agregan a esta lista.
const PROPIAS = /\/(en-a2-u01-back-to-basics\.html|manifest\.webmanifest|icons\/[^/]+)$/;
self.addEventListener('fetch', e => {
  const req = e.request; if (req.method !== 'GET') return;
  const u = new URL(req.url);
  if (u.origin === location.origin) { if (PROPIAS.test(u.pathname)) e.respondWith(guardarYRevalidar(req, e)); }
  else if (LIBS.includes(req.url)) e.respondWith(caches.match(req.url).then(c => c || fetch(req)));
});

// La primera visita no pasa por este service worker: la página le pide guardarse (y guardar el manifiesto y el ícono) para que ande sin internet.
self.addEventListener('message', e => {
  if (!e.data || e.data.tipo !== 'cachear' || !Array.isArray(e.data.urls)) return;
  e.waitUntil(caches.open(CACHE).then(c => Promise.all(e.data.urls.map(u => fetch(u, { cache: 'no-cache' }).then(r => r.ok && c.put(clave(u), r)).catch(() => {})))));
});
