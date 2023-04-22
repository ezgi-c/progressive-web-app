const cacheName = "my-pwa-cache-v1";
const filesToCache = [
  "/",
  "/index.html",
  "/manifest.json",
  "/logo192.png",
  "/logo512.png",
  "/favicon.ico",
];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
