/* Generated after Vite build. No external requests are cached. */
const PREFIX = 'atelier-b1-shell-' + encodeURIComponent(new URL(self.registration.scope).pathname) + '-';
const CACHE = PREFIX + "6960b7f1abfd0339";
const FILES = ["SOURCES.md","SOURCES.sample.md","assets/LearningPages-CW5hZu4A.css","assets/LearningPages.module-BX1LsS_S.js","assets/NotebookPage-BrzCxNwZ.js","assets/ReportPage-BdtIYRxH.css","assets/ReportPage-DbGepMVl.js","assets/ReviewPage-DjjrrGqN.js","assets/SettingsPage-CMYOaUk6.js","assets/SpeakButton-BF6tKqBa.js","assets/SpeakButton-Dvss83zr.css","assets/StatisticsPage-BnjksZnj.js","assets/WordPreviewPage-CuQZoVvp.js","assets/WordPreviewPage-D0xTMAgI.css","assets/activity-DXq4KNvb.js","assets/export-CZJvWkGk.js","assets/index-BkS9iUI1.js","assets/index-DDopuKFd.css","corpus-manifest.json","favicon.svg","icons/icon-192.png","icons/icon-512.png","import-report.json","import-report.sample.json","index.html","manifest.webmanifest","source-records.json","words.csv","words.json","words.sample.json"];
const scoped = path => new URL(path, self.registration.scope).href;
self.addEventListener('install', event => event.waitUntil((async () => {
  try { const cache = await caches.open(CACHE); await cache.addAll(FILES.map(scoped)); }
  catch (error) { await caches.delete(CACHE); throw error; }
})()));
self.addEventListener('activate', event => event.waitUntil((async () => {
  // Keep the previous shell for another open tab's old lazy chunks.
  const keys = (await caches.keys()).filter(key => key.startsWith(PREFIX));
  await Promise.all(keys.filter(key => key !== CACHE && !keys.slice(-2).includes(key)).map(key => caches.delete(key)));
  await self.clients.claim();
})()));
self.addEventListener('message', event => { if (event.data?.type === 'SKIP_WAITING') self.skipWaiting(); });
self.addEventListener('fetch', event => {
  const request = event.request;
  const url = new URL(request.url);
  if (request.method !== 'GET' || url.origin !== self.location.origin || !url.href.startsWith(self.registration.scope)) return;
  event.respondWith((async () => {
    const cache = await caches.open(CACHE);
    const cached = await cache.match(request, { ignoreSearch: true });
    if (cached) return cached;
    if (request.mode === 'navigate' && url.pathname === new URL(self.registration.scope).pathname) {
      // Keep HTML, hashed chunks and words from the same installed version.
      return await cache.match(scoped('index.html')) ?? fetch(request);
    }
    // An older open tab may still request its previous hashed assets.
    for (const key of (await caches.keys()).filter(key => key.startsWith(PREFIX) && key !== CACHE)) {
      const previous = await (await caches.open(key)).match(request, { ignoreSearch: true });
      if (previous) return previous;
    }
    return fetch(request);
  })());
});
