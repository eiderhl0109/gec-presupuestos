// GENERADO por vite.config.ts. No editar a mano.
const CACHE = "gecbcn-mwf2e7w1";
const FILES = ["./","./assets/index-BkYtF0Yp.css","./assets/index-C-0PUnqQ.js","./assets/html2canvas.esm-DXEQVQnt.js","./assets/purify.es-18JuyMri.js","./assets/index.es-vUjJUoZg.js","./manifest.webmanifest","./favicon.svg","./icon-192.png","./icon-512.png","./icon-maskable-512.png","./apple-touch-icon.png"];
self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(FILES)));
  self.skipWaiting();
});
// Solo borra sus cachés antiguas: en github.io comparte el almacén con las otras apps
self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then((k) => Promise.all(k.filter((x) => x.startsWith('gecbcn-') && x !== CACHE).map((x) => caches.delete(x)))));
  self.clients.claim();
});
self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;
  // La página: primero la red (para recibir versiones nuevas) y, sin conexión, la guardada
  if (req.mode === 'navigate') {
    e.respondWith(fetch(req).catch(() => caches.match('./', { ignoreVary: true })));
    return;
  }
  e.respondWith(caches.match(req, { ignoreVary: true }).then((hit) => hit || fetch(req)));
});
