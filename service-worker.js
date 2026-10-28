const CACHE='firebase-minhas-compras-v3-4';
const ARQUIVOS=['./','./index.html','./style.css','./app.js','./cloud.js','./manifest.webmanifest'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ARQUIVOS)));self.skipWaiting()});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))));self.clients.claim()});
self.addEventListener('fetch',e=>{if(e.request.method==='GET'&&new URL(e.request.url).origin===self.location.origin)e.respondWith(fetch(e.request).then(r=>{if(r.ok){const copia=r.clone();caches.open(CACHE).then(c=>c.put(e.request,copia))}return r}).catch(()=>caches.match(e.request)))});
