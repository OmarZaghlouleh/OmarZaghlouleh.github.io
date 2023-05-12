'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "a35eb50f0a09537857c7cc200e5ff3cb",
"assets/assets/icons/education.svg": "ca976c5a760a68d358dd6ae72ce86d2e",
"assets/assets/icons/facebook.svg": "c0cd138271276bb33a87c2d174015455",
"assets/assets/icons/github.svg": "8f89aca7635b9936745fd9f2efb2da9c",
"assets/assets/icons/instagram.svg": "b3b7a0210038e9a9f2fcb54f17d0f1c1",
"assets/assets/icons/linkedin.svg": "4eafd5a309a11425448bda0f61ed2781",
"assets/assets/icons/telegram.svg": "64dc510a1947203065ce534e8299e2a2",
"assets/assets/icons/whatsapp.svg": "41f1fc2e1b39c480f034af11355ae606",
"assets/FontManifest.json": "02d0eb5f62838faf8eb68508916f1b07",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "37c66e3cbf758e171872cf296704fe34",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/web/fonts/Oxanium-Bold.ttf": "5f1f51f77f243a9b4a841c510898222c",
"assets/web/fonts/Oxanium-Light.ttf": "fbf76eb2c6ae925ba1dacb2729b0889e",
"assets/web/fonts/Oxanium-Medium.ttf": "291c9dd8481735f63b649c5253dae423",
"assets/web/fonts/Oxanium-Regular.ttf": "8832dea97da19b8c4fc1735fbffe3696",
"assets/web/fonts/Oxanium-SemiBold.ttf": "de169c955dccc5ca711695871ee2c404",
"assets/web/icons/cv.png": "bcc08b5abd6dc8567de66d85e4d52550",
"assets/web/icons/education.png": "f12240a98fa50f0da699bc059218e91a",
"assets/web/icons/error.png": "d9f67fddbde3a21a66782a78fd72807c",
"assets/web/icons/facebook.png": "fbe6c0d34f7953e039b2a8552fa75789",
"assets/web/icons/github.png": "6c46032ff10f0b08ff5971ff7ea15091",
"assets/web/icons/instagram.png": "f8dc87de72a7e46a4018cf936f3d22f4",
"assets/web/icons/linkedin.png": "eafcee4812b3035ac6845b9e04bf4233",
"assets/web/icons/pause.png": "57f0c2deb2b26d53e0328b3751cada55",
"assets/web/icons/play.png": "09f14e2b4a0a69d5d979b653c7c16982",
"assets/web/icons/telegram.png": "ff17ff9c3f1885943772e4bb3527b07c",
"assets/web/icons/whatsapp.png": "2a1890951837c86e126d01c689f8860a",
"assets/web/images/cv_qr.png": "1c9682e146899f73f230d24efb0bf071",
"assets/web/images/facebook_qr.png": "3416f087a6afda7613b349f8804527fc",
"assets/web/images/github_qr.png": "831e43608b7a35d47bc5fb91f52cba17",
"assets/web/images/linkedin_qr.png": "c220aafc1801c43b6926ad37832c66bf",
"assets/web/images/telegram_qr.png": "0af88d17fe605b760ca129b985b9af99",
"assets/web/images/whatsapp_qr.png": "0f1d9ad14a7eb00195d0e4ce5ce4d39e",
"assets/web/jsons/path.json": "cabb4c2d5cbf7d451218bda0ee748c4e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "f17cb85027aeb75e9a4fc521cb79e477",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"fonts/Oxanium-Bold.ttf": "5f1f51f77f243a9b4a841c510898222c",
"fonts/Oxanium-Light.ttf": "fbf76eb2c6ae925ba1dacb2729b0889e",
"fonts/Oxanium-Medium.ttf": "291c9dd8481735f63b649c5253dae423",
"fonts/Oxanium-Regular.ttf": "8832dea97da19b8c4fc1735fbffe3696",
"fonts/Oxanium-SemiBold.ttf": "de169c955dccc5ca711695871ee2c404",
"icons/cv.png": "bcc08b5abd6dc8567de66d85e4d52550",
"icons/education.png": "f12240a98fa50f0da699bc059218e91a",
"icons/error.png": "d9f67fddbde3a21a66782a78fd72807c",
"icons/facebook.png": "fbe6c0d34f7953e039b2a8552fa75789",
"icons/github.png": "6c46032ff10f0b08ff5971ff7ea15091",
"icons/instagram.png": "f8dc87de72a7e46a4018cf936f3d22f4",
"icons/linkedin.png": "eafcee4812b3035ac6845b9e04bf4233",
"icons/pause.png": "57f0c2deb2b26d53e0328b3751cada55",
"icons/play.png": "09f14e2b4a0a69d5d979b653c7c16982",
"icons/telegram.png": "ff17ff9c3f1885943772e4bb3527b07c",
"icons/whatsapp.png": "2a1890951837c86e126d01c689f8860a",
"images/cv_qr.png": "1c9682e146899f73f230d24efb0bf071",
"images/facebook_qr.png": "3416f087a6afda7613b349f8804527fc",
"images/github_qr.png": "831e43608b7a35d47bc5fb91f52cba17",
"images/linkedin_qr.png": "c220aafc1801c43b6926ad37832c66bf",
"images/telegram_qr.png": "0af88d17fe605b760ca129b985b9af99",
"images/whatsapp_qr.png": "0f1d9ad14a7eb00195d0e4ce5ce4d39e",
"index.html": "524375d7a83f3f9dfab8fe66a1b01b6b",
"/": "524375d7a83f3f9dfab8fe66a1b01b6b",
"jsons/path.json": "cabb4c2d5cbf7d451218bda0ee748c4e",
"main.dart.js": "05dc91ee9708c023465d7ade088c3209",
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
