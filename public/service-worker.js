const cacheName = "my-pwa-cache-v1";
const filesToCache = [
  "/",
  "/index.html",
  "/manifest.json",
  "/camera-icon(l).png",
  "/camera-icon(s).png",
];

// eslint-disable-next-line no-restricted-globals
self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll(filesToCache);
    })
  );
});

// eslint-disable-next-line no-restricted-globals
self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
