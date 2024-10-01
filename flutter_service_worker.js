'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/animations/error.json": "7c1d698ef18c56931b9b9e28780e5be2",
"assets/animations/loading.json": "cabb4c2d5cbf7d451218bda0ee748c4e",
"assets/animations/news.json": "2a9ab748995d9be420b96a4b449d6973",
"assets/animations/palestine.json": "6dba2d3e15a4c9214421232ccbe3e37e",
"assets/animations/welcome.json": "d7dfbc60fbdfbd16066311391d7707b8",
"assets/AssetManifest.bin": "60ded8f7fd2b95580bb41512d68f04c4",
"assets/AssetManifest.bin.json": "9f9cf04cebbcf50b7802a889070c211d",
"assets/AssetManifest.json": "0c79e786c03d8c0f2c3064bec801d7f8",
"assets/FontManifest.json": "234b5d4c26525804946148c0bbfd09f7",
"assets/fonts/MaterialIcons-Regular.otf": "bade180b22fd5ec80e2e0e0eb946217e",
"assets/fonts/Oxanium-Bold.ttf": "5f1f51f77f243a9b4a841c510898222c",
"assets/fonts/Oxanium-Light.ttf": "fbf76eb2c6ae925ba1dacb2729b0889e",
"assets/fonts/Oxanium-Medium.ttf": "291c9dd8481735f63b649c5253dae423",
"assets/fonts/Oxanium-Regular.ttf": "8832dea97da19b8c4fc1735fbffe3696",
"assets/fonts/Oxanium-SemiBold.ttf": "de169c955dccc5ca711695871ee2c404",
"assets/icons/cv.png": "22297063cf7240897bb115178b30655c",
"assets/icons/education.png": "a1067012066a14e0d32509cc3874578c",
"assets/NOTICES": "e2e86a3263a56a85697c7564eff225e9",
"assets/pages/mobile_server_error_page/index.html": "3cdd530cbccd0de5dcb77e8829240769",
"assets/pages/mobile_server_error_page/style.css": "4a848692263d783c89049f571823e800",
"assets/pages/not_found_page/index.html": "91febb8cd4cd6902b096a920907a277f",
"assets/pages/not_found_page/script.js": "7fa53ec40525c627c8b9419114a187b8",
"assets/pages/not_found_page/style.css": "6bd3e77be5412e9b2538df87c16d30de",
"assets/pages/web_server_error_page/index.html": "b422ac604d18e50cf61a30144b242055",
"assets/pages/web_server_error_page/script.js": "49d8f5a0195cef48c27ed8fc340c792b",
"assets/pages/web_server_error_page/style.css": "296db6844f6c92eb5fdf4fcc0e5bda3e",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/web/assets/animations/error.json": "7c1d698ef18c56931b9b9e28780e5be2",
"assets/web/assets/animations/loading.json": "cabb4c2d5cbf7d451218bda0ee748c4e",
"assets/web/assets/animations/news.json": "2a9ab748995d9be420b96a4b449d6973",
"assets/web/assets/animations/palestine.json": "6dba2d3e15a4c9214421232ccbe3e37e",
"assets/web/assets/animations/welcome.json": "d7dfbc60fbdfbd16066311391d7707b8",
"assets/web/assets/fonts/Oxanium-Bold.ttf": "5f1f51f77f243a9b4a841c510898222c",
"assets/web/assets/fonts/Oxanium-Light.ttf": "fbf76eb2c6ae925ba1dacb2729b0889e",
"assets/web/assets/fonts/Oxanium-Medium.ttf": "291c9dd8481735f63b649c5253dae423",
"assets/web/assets/fonts/Oxanium-Regular.ttf": "8832dea97da19b8c4fc1735fbffe3696",
"assets/web/assets/fonts/Oxanium-SemiBold.ttf": "de169c955dccc5ca711695871ee2c404",
"assets/web/assets/icons/cv.png": "22297063cf7240897bb115178b30655c",
"assets/web/assets/icons/education.png": "a1067012066a14e0d32509cc3874578c",
"assets/web/assets/pages/mobile_server_error_page/index.html": "3cdd530cbccd0de5dcb77e8829240769",
"assets/web/assets/pages/mobile_server_error_page/style.css": "4a848692263d783c89049f571823e800",
"assets/web/assets/pages/not_found_page/index.html": "91febb8cd4cd6902b096a920907a277f",
"assets/web/assets/pages/not_found_page/script.js": "7fa53ec40525c627c8b9419114a187b8",
"assets/web/assets/pages/not_found_page/style.css": "6bd3e77be5412e9b2538df87c16d30de",
"assets/web/assets/pages/web_server_error_page/index.html": "b422ac604d18e50cf61a30144b242055",
"assets/web/assets/pages/web_server_error_page/script.js": "49d8f5a0195cef48c27ed8fc340c792b",
"assets/web/assets/pages/web_server_error_page/style.css": "296db6844f6c92eb5fdf4fcc0e5bda3e",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "f17cb85027aeb75e9a4fc521cb79e477",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "4b16078b32a9bc6ed5d1b0936b81b931",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "54e36eeb954cc6714c1c00b107853904",
"/": "54e36eeb954cc6714c1c00b107853904",
"main.dart.js": "516fa652e631fe3e6d75ad64bd02ee11",
"manifest.json": "b2e4121448cd084e02d443dd372f614e",
"version.json": "536dc42524442522d15a255b5eeebed3"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
