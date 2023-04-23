const cacheName = "my-pwa-cache-v1";
const filesToCache = [
  "/",
  "/public/index.html",
  "/public/manifest.json",
  "/public/camera-icon(l).png",
  "/public/camera-icon(s).png",
];

this.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll(filesToCache);
    })
  );
});

this.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
