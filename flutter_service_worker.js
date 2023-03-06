'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "b7d2d44117cb48fe1aaff23311dac8d8",
"assets/assets/icons/education.svg": "ca976c5a760a68d358dd6ae72ce86d2e",
"assets/assets/icons/facebook.svg": "c0cd138271276bb33a87c2d174015455",
"assets/assets/icons/github.svg": "5cfd7ab6e5646e21528e7329deba1ea7",
"assets/assets/icons/instagram.svg": "b3b7a0210038e9a9f2fcb54f17d0f1c1",
"assets/assets/icons/linkedin.svg": "4eafd5a309a11425448bda0f61ed2781",
"assets/assets/icons/telegram.svg": "64dc510a1947203065ce534e8299e2a2",
"assets/assets/icons/whatsapp.svg": "41f1fc2e1b39c480f034af11355ae606",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "2771e60026a8f0a9173f9a8245155eb6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/web/icons/education.png": "f12240a98fa50f0da699bc059218e91a",
"assets/web/icons/education.svg": "ca976c5a760a68d358dd6ae72ce86d2e",
"assets/web/icons/facebook.png": "fbe6c0d34f7953e039b2a8552fa75789",
"assets/web/icons/facebook.svg": "c0cd138271276bb33a87c2d174015455",
"assets/web/icons/github.png": "a48fcf3c5c10fbb8fe9e18808947524c",
"assets/web/icons/github.svg": "5cfd7ab6e5646e21528e7329deba1ea7",
"assets/web/icons/instagram.png": "f8dc87de72a7e46a4018cf936f3d22f4",
"assets/web/icons/instagram.svg": "b3b7a0210038e9a9f2fcb54f17d0f1c1",
"assets/web/icons/linkedin.png": "eafcee4812b3035ac6845b9e04bf4233",
"assets/web/icons/linkedin.svg": "4eafd5a309a11425448bda0f61ed2781",
"assets/web/icons/pause.png": "57f0c2deb2b26d53e0328b3751cada55",
"assets/web/icons/play.png": "09f14e2b4a0a69d5d979b653c7c16982",
"assets/web/icons/telegram.png": "ff17ff9c3f1885943772e4bb3527b07c",
"assets/web/icons/telegram.svg": "64dc510a1947203065ce534e8299e2a2",
"assets/web/icons/whatsapp.png": "2a1890951837c86e126d01c689f8860a",
"assets/web/icons/whatsapp.svg": "41f1fc2e1b39c480f034af11355ae606",
"assets/web/jsons/error1.json": "4a61d51cbb1148f2b3a8a3cbbb027f63",
"assets/web/jsons/error2.json": "5c9b86f61fe25d4d3053bf8e731fafac",
"assets/web/jsons/lines.json": "6e43697fc619cfd8b6e98ff643d98594",
"assets/web/jsons/path.json": "cabb4c2d5cbf7d451218bda0ee748c4e",
"assets/web/jsons/spinning.json": "e8d8c3311edd1111c9482ab20eb49ed9",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "f17cb85027aeb75e9a4fc521cb79e477",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"icons/education.png": "f12240a98fa50f0da699bc059218e91a",
"icons/education.svg": "ca976c5a760a68d358dd6ae72ce86d2e",
"icons/facebook.png": "fbe6c0d34f7953e039b2a8552fa75789",
"icons/facebook.svg": "c0cd138271276bb33a87c2d174015455",
"icons/github.png": "a48fcf3c5c10fbb8fe9e18808947524c",
"icons/github.svg": "5cfd7ab6e5646e21528e7329deba1ea7",
"icons/instagram.png": "f8dc87de72a7e46a4018cf936f3d22f4",
"icons/instagram.svg": "b3b7a0210038e9a9f2fcb54f17d0f1c1",
"icons/linkedin.png": "eafcee4812b3035ac6845b9e04bf4233",
"icons/linkedin.svg": "4eafd5a309a11425448bda0f61ed2781",
"icons/pause.png": "57f0c2deb2b26d53e0328b3751cada55",
"icons/play.png": "09f14e2b4a0a69d5d979b653c7c16982",
"icons/telegram.png": "ff17ff9c3f1885943772e4bb3527b07c",
"icons/telegram.svg": "64dc510a1947203065ce534e8299e2a2",
"icons/whatsapp.png": "2a1890951837c86e126d01c689f8860a",
"icons/whatsapp.svg": "41f1fc2e1b39c480f034af11355ae606",
"index.html": "8935462c95467335917cb6afc7630548",
"/": "8935462c95467335917cb6afc7630548",
"jsons/error1.json": "4a61d51cbb1148f2b3a8a3cbbb027f63",
"jsons/error2.json": "5c9b86f61fe25d4d3053bf8e731fafac",
"jsons/lines.json": "6e43697fc619cfd8b6e98ff643d98594",
"jsons/path.json": "cabb4c2d5cbf7d451218bda0ee748c4e",
"jsons/spinning.json": "e8d8c3311edd1111c9482ab20eb49ed9",
"main.dart.js": "57f9247769cc0c0da4ed113a5cf52fbd",
"manifest.json": "14991adc7a0b82c415156cc292680ef3",
"splash/splash.js": "d6c41ac4d1fdd6c1bbe210f325a84ad4",
"splash/style.css": "fc10f82368f2eb6aeb8762470dd101bd",
"version.json": "009c9e65172e010890f7f65fde438006"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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
