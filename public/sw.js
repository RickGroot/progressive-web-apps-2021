const CORE_CACHE = 1
const CORE_CACHE_NAME = `core-v${CORE_CACHE}`
const CORE_ASSETS = ["manifest.json", "css/index.css", "/offline", "js/index-min.js"] 

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CORE_CACHE_NAME)
        .then(cache => cache.addAll(CORE_ASSETS))
        .then(() => self.skipWaiting())
    )
})

self.addEventListener("activate", (event) => {
    event.waitUntil(clients.claim())
})

self.addEventListener("fetch", (event) => {
    const req = event.request
    
    // show cached request from cache
    event.respondWith(
        caches.match(req)
            .then(cachedRes => {
                if (cachedRes) {
                    return cachedRes
                }
                return fetch(req)
                    .then((fetchRes) => fetchRes)
                    .catch((err) => {
                        return caches.open(CORE_CACHE_NAME)
                        .then(cache => cache.match('/offline'))})
        })
    )

    /* Save all requests to cache */
    // event.respondWith(
    //     caches.open(CORE_CACHE_NAME).then(cache => {
    //         return cache.match(event.request)
    //             .then(response => {
    //                 if(response) {
    //                     return response
    //                 }
    //                 return fetch(event.request)
    //                 .then(response => {
    //                     cache.put(event.request, response.clone())
    //                     return response
    //                 })
    //             }).catch((err) => {
    //                 return caches.open(CORE_CACHE_NAME).then(cache => cache.match('/offline'))
    //             })
    //     })
    // )
            
})