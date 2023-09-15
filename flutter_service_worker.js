'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "20c37a2dc8bb48543076bb03f5de828f",
"assets/AssetManifest.json": "78830d803cb6cd3560aa73aa81e47e97",
"assets/FontManifest.json": "02d0eb5f62838faf8eb68508916f1b07",
"assets/fonts/MaterialIcons-Regular.otf": "c9033d148e9f29ee11e284b2feb0b0e1",
"assets/NOTICES": "af4a4359e0f3e08b2dfabd425d3fcfbc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/web/fonts/Oxanium-Bold.ttf": "5f1f51f77f243a9b4a841c510898222c",
"assets/web/fonts/Oxanium-Light.ttf": "fbf76eb2c6ae925ba1dacb2729b0889e",
"assets/web/fonts/Oxanium-Medium.ttf": "291c9dd8481735f63b649c5253dae423",
"assets/web/fonts/Oxanium-Regular.ttf": "8832dea97da19b8c4fc1735fbffe3696",
"assets/web/fonts/Oxanium-SemiBold.ttf": "de169c955dccc5ca711695871ee2c404",
"assets/web/jsons/error.json": "7c1d698ef18c56931b9b9e28780e5be2",
"assets/web/jsons/news.json": "2a9ab748995d9be420b96a4b449d6973",
"assets/web/jsons/path.gif": "01be9ac392df8ea53b15adad51f88225",
"assets/web/jsons/path.json": "cabb4c2d5cbf7d451218bda0ee748c4e",
"assets/web/jsons/path2.gif": "c07b2d94093bcbfbca21d5d73d6da265",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "f17cb85027aeb75e9a4fc521cb79e477",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"fonts/Oxanium-Bold.ttf": "5f1f51f77f243a9b4a841c510898222c",
"fonts/Oxanium-Light.ttf": "fbf76eb2c6ae925ba1dacb2729b0889e",
"fonts/Oxanium-Medium.ttf": "291c9dd8481735f63b649c5253dae423",
"fonts/Oxanium-Regular.ttf": "8832dea97da19b8c4fc1735fbffe3696",
"fonts/Oxanium-SemiBold.ttf": "de169c955dccc5ca711695871ee2c404",
"index.html": "5b0b0f11e3f3d1caf289b753f566b643",
"/": "5b0b0f11e3f3d1caf289b753f566b643",
"jsons/error.json": "7c1d698ef18c56931b9b9e28780e5be2",
"jsons/news.json": "2a9ab748995d9be420b96a4b449d6973",
"jsons/path.gif": "01be9ac392df8ea53b15adad51f88225",
"jsons/path.json": "cabb4c2d5cbf7d451218bda0ee748c4e",
"jsons/path2.gif": "c07b2d94093bcbfbca21d5d73d6da265",
"main.dart.js": "21b5a0d19f390dd42d849983110c479a",
"manifest.json": "14991adc7a0b82c415156cc292680ef3",
"splash/img/dark-1x.gif": "689286ac8ca0ff29dc0bf48d9b3bead9",
"splash/img/dark-2x.gif": "e829ad11c850b728486c82ab18b7b077",
"splash/img/dark-3x.gif": "68a0c965c7cb35022bfbd7cdedd693d1",
"splash/img/dark-4x.gif": "fcba0a0a53a360576fda63224c999b9b",
"splash/img/light-1x.gif": "689286ac8ca0ff29dc0bf48d9b3bead9",
"splash/img/light-2x.gif": "e829ad11c850b728486c82ab18b7b077",
"splash/img/light-3x.gif": "68a0c965c7cb35022bfbd7cdedd693d1",
"splash/img/light-4x.gif": "fcba0a0a53a360576fda63224c999b9b",
"version.json": "009c9e65172e010890f7f65fde438006"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
