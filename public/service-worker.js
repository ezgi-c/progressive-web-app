/* eslint-disable no-restricted-globals */
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("my-cache").then((cache) => {
      return cache.addAll([
        // Add the files you want to cache here
        "/index.html",
        "/index.js",
        "/index.css",
        "/manifest.json",
        "/camera-icon.png",
        "/drop-light-abstract-night-photography-play-630759-pxhere.com.jpg",
        "/Components/CameraFeed.js",
        "/Components/Filter.js",
        "/hooks/useTakePicture.js",
        "/styles.css",
        "/service-worker.js"
      ]);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

