// Service worker de la web app del celular: permite instalarla y mostrar notificaciones.
const CACHE = 'alertas-lab-v1';
const FILES = ['celular.html', 'manifest.json', 'icon-192.png', 'icon-512.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
// Red primero; si no hay conexión, lo guardado (solo archivos propios)
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  if (e.request.method !== 'GET' || url.origin !== location.origin) return;
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request, {ignoreSearch: true})));
});
self.addEventListener('notificationclick', e => {
  e.notification.close();
  e.waitUntil(self.clients.matchAll({type: 'window'}).then(list => {
    const w = list.find(c => c.url.includes('celular.html'));
    return w ? w.focus() : self.clients.openWindow('celular.html');
  }));
});
