// 도전! 골든벨 서비스 워커 — 앱 파일을 캐시해 오프라인에서도 열리게 합니다.
const VERSION = 'gb-3aa67066';
const SHELL = ['./','./index.html','./manifest.webmanifest','./icons/icon-192.png','./icons/icon-512.png','./icons/apple-touch-icon.png'];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  if (e.request.method !== 'GET') return;
  // 앱 파일: 캐시 우선, 뒤에서 새 버전 받아 다음 실행에 반영
  if (url.origin === location.origin) {
    e.respondWith(caches.match(e.request).then(hit => {
      const fetching = fetch(e.request).then(res => { if (res.ok) caches.open(VERSION).then(c => c.put(e.request, res.clone())); return res; }).catch(() => hit);
      return hit || fetching;
    }));
    return;
  }
  // 글꼴 등 외부 파일: 있으면 캐시, 없으면 네트워크, 둘 다 없으면 기본 글꼴로 동작
  if (url.hostname.endsWith('gstatic.com') || url.hostname.endsWith('googleapis.com')) {
    e.respondWith(caches.match(e.request).then(hit => hit || fetch(e.request).then(res => { if (res.ok) caches.open(VERSION + '-ext').then(c => c.put(e.request, res.clone())); return res; }).catch(() => new Response('', {status: 204}))));
  }
});
