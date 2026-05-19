const CACHE_VERSION = '1.39'; // 修改此版本號以強制更新用戶端的快取
const CACHE_NAME = `business-card-express-v${CACHE_VERSION}`;
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon.svg',
];

const ALLOWED_CDN_ORIGINS = [
  'https://cdn.tailwindcss.com',
  'https://unpkg.com',
  'https://cdnjs.cloudflare.com',
  'https://fonts.googleapis.com',
  'https://fonts.gstatic.com'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('PWA: Caching assets');
      // 使用 Promise.allSettled 個別快取資源，防止單一檔案缺失（如 index.prod.html 或 index.html）導致整個預載入快取失敗
      return Promise.allSettled(
        ASSETS_TO_CACHE.map((url) =>
          fetch(url)
            .then((response) => {
              if (response.ok) {
                return cache.put(url, response);
              }
              throw new Error(`Fetch failed for ${url}: ${response.status}`);
            })
            .catch((err) => {
              console.warn('PWA Pre-cache warning:', err.message);
            })
        )
      ).then(() => self.skipWaiting());
    })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('PWA: Clearing old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      ).then(() => self.clients.claim());
    })
  );
});

self.addEventListener('fetch', (event) => {
  // 僅快取 GET 請求
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then((cacheResponse) => {
      if (cacheResponse) {
        return cacheResponse;
      }
      return fetch(event.request).then((networkResponse) => {
        // 檢查是否為有效的回應
        if (!networkResponse || networkResponse.status !== 200) {
          return networkResponse;
        }
        
        const url = new URL(event.request.url);
        const isAllowedCDN = ALLOWED_CDN_ORIGINS.some(origin => url.href.startsWith(origin));
        
        // 允許同源資源或特定的安全 CDN 資源
        if (url.origin === location.origin || isAllowedCDN) {
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
        }
        return networkResponse;
      }).catch(() => {
        // 離線且無快取時的處理（可選）
      });
    })
  );
});
