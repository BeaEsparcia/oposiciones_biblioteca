/**
 * Service Worker — Oposiciones Biblioteca PWA
 * Estrategia: Network-first con fallback a caché para garantizar siempre
 * la versión más reciente en línea y funcionamiento autónomo offline.
 */

const CACHE_NAME = 'oposiciones-biblioteca-v7';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './css/style.css',
  './manifest.json',
  './js/data/ley_16_1985_t7.js',
  './js/data/ley_10_2007.js',
  './js/data/ley_23_2011.js',
  './js/data/rd_635_2015.js',
  './js/data/ley_3_2011_clm.js',
  './js/data/decreto_33_2018_clm.js',
  './js/data/decreto_136_2012_clm.js',
  './js/data/reglamento_albacete_2022.js',
  './js/data/index.js',
  './js/storage.js',
  './js/engine.js',
  './js/app.js',
  './icons/favicon-32.png',
  './icons/favicon-64.png',
  './icons/icon-180.png',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-maskable-192.png',
  './icons/icon-maskable-512.png'
];

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    }).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  // Solo interceptar peticiones GET
  if (event.request.method !== 'GET') return;

  event.respondWith(
    fetch(event.request)
      .then((networkResponse) => {
        if (networkResponse && networkResponse.status === 200) {
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
        }
        return networkResponse;
      })
      .catch(() => {
        return caches.match(event.request, { ignoreSearch: true }).then((cachedResponse) => {
          if (cachedResponse) {
            return cachedResponse;
          }
          // Si solicita navegación HTML y falla la red, devolver index.html de la caché
          if (event.request.mode === 'navigate') {
            return caches.match('./index.html');
          }
        });
      })
  );
});
