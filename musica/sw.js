const CACHE_NAME = 'varian-pwa-v1';

// Lista de archivos esenciales para que la App funcione offline
const urlsToCache = [
  './',
  './index.html',
  './play.html',
  './descarga.html',
  './video.json',
  './manifest.json',
  'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css',
  'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.0/font/bootstrap-icons.css',
  'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js',
  'https://res.cloudinary.com/duwvw6q2c/image/upload/v1765742101/varian_lbd26r.webp'
];

// Instalación: Guarda los archivos en el caché del dispositivo
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Cache de Varian PWA iniciado');
        return cache.addAll(urlsToCache);
      })
  );
});

// Activación: Limpia versiones antiguas del caché
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('Borrando caché antiguo:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Interceptar peticiones: Permite que la App cargue desde el caché si no hay internet
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Retorna el archivo si está en caché, si no, lo busca en internet
        return response || fetch(event.request).then(fetchResponse => {
            // No guardamos videos pesados o audios en el caché dinámico para no llenar la memoria del celular
            if (!event.request.url.includes('video/upload')) {
                return caches.open(CACHE_NAME).then(cache => {
                    cache.put(event.request, fetchResponse.clone());
                    return fetchResponse;
                });
            }
            return fetchResponse;
        });
      })
      .catch(() => {
        // Si todo falla (offline total), redirige al index
        return caches.match('./index.html');
      })
  );
});