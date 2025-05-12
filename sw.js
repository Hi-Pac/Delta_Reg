self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('attendance-cache-v1').then(cache => cache.addAll([
      './', 'index.html', 'style.css', './src/main.js'
    ]))
  );
});
self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});
