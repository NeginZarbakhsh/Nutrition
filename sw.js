// Keeps the app working offline (e.g. with bad signal inside Lidl),
// but always tries the newest version first so updates show up straight away.
const CACHE = 'sofreh-v21';
const FILES = ['./', './index.html', './manifest.webmanifest', './icon.svg'];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES.map(f => new Request(f, {cache: 'reload'})))).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  const sameOrigin = new URL(e.request.url).origin === location.origin;
  // skip the browser's HTTP cache for our own files, so a new version is never hidden
  const req = sameOrigin ? new Request(e.request, {cache: 'no-cache'}) : e.request;
  e.respondWith(
    fetch(req).then(r => {
      if (r.ok && sameOrigin) { const copy = r.clone(); caches.open(CACHE).then(c => c.put(e.request, copy)); }
      return r;
    }).catch(() => caches.match(e.request, {ignoreSearch: true}).then(r => r || caches.match('./index.html')))
  );
});
