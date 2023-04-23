const cacheName = "my-pwa-cache-v1";
const filesToCache = ["index.html"];

this.addEventListener("install", (e) => {
  e.waitUntil(
    caches
      .open(cacheName)
      .then((cache) => {
        return cache.addAll(filesToCache);
      })
      .catch((error) => {
        console.error("Failed to add files to cache:", error);
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
