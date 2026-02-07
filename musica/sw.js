const CACHE_NAME = 'varian-pwa-v2'; // Versión 2 para forzar refresco

const urlsToCache = [
  './',
  './index.html',
  './play.html',
  './video.json',
  './manifest.json',
  'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css',
  'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.0/font/bootstrap-icons.css',
  'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js',
  'https://res.cloudinary.com/duwvw6q2c/image/upload/v1765742101/varian_lbd26r.webp'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('Cache v2 de Varian iniciado');
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

self.addEventListener('fetch', event => {
  // Estrategia especial para video.json: Red primero, luego Caché
  if (event.request.url.includes('video.json')) {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          const resClone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, resClone));
          return response;
        })
        .catch(() => caches.match(event.request))
    );
  } else {
    // Para lo demás: Caché primero, luego Red
    event.respondWith(
      caches.match(event.request).then(response => {
        return response || fetch(event.request).then(fetchRes => {
          // No cachear videos pesados automáticamente
          if (!event.request.url.includes('video/upload')) {
            return caches.open(CACHE_NAME).then(cache => {
              cache.put(event.request, fetchRes.clone());
              return fetchRes;
            });
          }
          return fetchRes;
        });
      })
    );
  }
});