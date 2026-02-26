const cacheName = 'vibecalculator-v1';
const assets = ['./', './index.html', './manifest.json'];

// Installa il Service Worker e salva i file in cache
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll(assets);
    })
  );
});

// Risponde alle richieste usando la cache se offline
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});
