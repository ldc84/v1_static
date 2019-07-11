// 설치후 작업
var PRECACHE = 'precache-v1';
var RUNTIME = 'runtime';

// list the files you want cached by the service worker
PRECACHE_URLS = [
  '/v1_static/index.html',
  '/v1_static/css/style.css',
  '/v1_static/js/js.js'
];

// the rest below handles the installing and caching
self.addEventListener('install', event => {
  event.waitUntil(
     caches.open(PRECACHE).then(cache => cache.addAll(PRECACHE_URLS))
  );
});