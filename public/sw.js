const CACHE_NAME = 'jodhpur-cafe-v1';
const IMAGE_CACHE_NAME = 'jodhpur-cafe-images-v1';

const urlsToCache = [
  '/',
  '/index.html',
  '/src/main.tsx',
  '/src/App.tsx'
];

const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp'];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  
  // Handle image requests
  if (imageExtensions.some(ext => url.pathname.endsWith(ext))) {
    event.respondWith(
      caches.open(IMAGE_CACHE_NAME)
        .then((cache) => {
          return cache.match(event.request)
            .then((response) => {
              if (response) {
                return response;
              }
              
              return fetch(event.request)
                .then((response) => {
                  if (response.status === 200) {
                    cache.put(event.request, response.clone());
                  }
                  return response;
                });
            });
        })
    );
    return;
  }
  
  // Handle other requests
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME && cacheName !== IMAGE_CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
