'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "b0b047dd7ab89e1ec73ae70192a03b33",
"assets/assets/alert.png": "5aa78b73ecb35e0a3dcbd090163308dd",
"assets/assets/done.png": "52171a5a0675268e129a81ff01246df6",
"assets/assets/fonts/Texta-Black.ttf": "a5491a9fe37e05cddb38669eee47acc7",
"assets/assets/fonts/Texta-BlackIt.ttf": "809ac5514e3bf1ab28da7e897e5b6a6d",
"assets/assets/fonts/Texta-Bold.ttf": "3223f9d3f5f50605e83d39c17393dc91",
"assets/assets/fonts/Texta-BoldIt.ttf": "8b753a7456d30b890c1758933dd64416",
"assets/assets/fonts/Texta-BookIt.ttf": "7352de653796fe5484b12c893bdd54b3",
"assets/assets/fonts/Texta-Heavy.ttf": "85727d96312bd94692072483498d646c",
"assets/assets/fonts/Texta-HeavyIt.ttf": "18af99ac995233aaba6a5f55122fb7d2",
"assets/assets/fonts/Texta-It.ttf": "73a6daf0491eb1a3f0436dcaef220db8",
"assets/assets/fonts/Texta-Light.ttf": "4a5dd6a7d927337747e8c1a76db7693d",
"assets/assets/fonts/Texta-LightIt.ttf": "628471b2189143c24190c564f916b41d",
"assets/assets/fonts/Texta-Medium.ttf": "826d1f00430c7bb655efb6bfe98892ee",
"assets/assets/fonts/Texta-MediumIt.ttf": "cb7faf2be4f398bacbf81d14d2dabcfa",
"assets/assets/fonts/Texta-Regular.ttf": "66ba957be79ac215d64c6d697364d87b",
"assets/assets/fonts/Texta-Thin.ttf": "8f1154bcb672aa06f6d21c1c23a5c976",
"assets/assets/fonts/Texta-ThintIt.ttf": "42f9fe77ca0f17dd5269417e218c0ef9",
"assets/assets/fonts/TextaAlt-Black.ttf": "244530ceeefaa9ad6185e9aa403b466a",
"assets/assets/fonts/TextaAlt-BlackIt.ttf": "2513674a688c139e857c67ce496f7d95",
"assets/assets/fonts/TextaAlt-Bold.ttf": "997ae8af453368276991a3eac21893c8",
"assets/assets/fonts/TextaAlt-BoldIt.ttf": "47b911d02da1b9e73bdfcc88dcdf77b7",
"assets/assets/fonts/TextaAlt-BookIt.ttf": "9476a7909c80c32bf692d375625147b9",
"assets/assets/fonts/TextaAlt-Heavy.ttf": "e05fa318518c5735c2c5a919936a380a",
"assets/assets/fonts/TextaAlt-HeavyIt.ttf": "3fce42009ad6e303b6b4bb78ed803bcc",
"assets/assets/fonts/TextaAlt-It.ttf": "f4d8148d710a1d59d09583778c7ccabf",
"assets/assets/fonts/TextaAlt-Light.ttf": "db0e585bb49bd7fd1399ba16c198c768",
"assets/assets/fonts/TextaAlt-LightIt.ttf": "71530be8a915f5a207c23f243f1876d9",
"assets/assets/fonts/TextaAlt-Medium.ttf": "46570a447626716761bc567b66d16cdb",
"assets/assets/fonts/TextaAlt-MediumIt.ttf": "99131db45dbb088b657db659d28178b9",
"assets/assets/fonts/TextaAlt-Regular.ttf": "517d3bcc568bd426c9bd90e4c9384cc4",
"assets/assets/fonts/TextaAlt-Thin.ttf": "16b150ed27cd6d5cf9f8d3c652f9fdd5",
"assets/assets/fonts/TextaAlt-ThintIt.ttf": "84421928b28a71bd196b9b19fa56a0cb",
"assets/assets/fonts/textabook.ttf": "26cc4bf013aa59475d90be8df96a2ef5",
"assets/assets/fonts/TextaBook2.ttf": "75bbd669a3713f3e27b0beeb61eaab9a",
"assets/assets/home_ol.png": "1fd72a0b4ab396a013402e6f5a5bccd6",
"assets/assets/mail.png": "406f2ffcfb5478556df1eae81601e0c5",
"assets/assets/menu_calendar.png": "23acc0c8ff1da1a07370fe4b87f6d475",
"assets/assets/menu_home.png": "ab32dc0c5e2c6111a8a52bf7adf9655d",
"assets/assets/menu_onboarding.png": "8d2b6073510603e21ed844aabdfd2c78",
"assets/assets/menu_recruitment.png": "61d1794424b32d4d267e08a61b20a85a",
"assets/assets/menu_report.png": "4879ce54c5babb60472e28f4ba36496c",
"assets/assets/menu_settings.png": "35c279ef9c74ceccda6a819f54a32969",
"assets/assets/more.png": "48872501243cd173e89b04d1693ae5f2",
"assets/assets/phone.png": "0ae2f66e3ecf9b2e87b2a9aeb1a86422",
"assets/assets/search.png": "cacefd7d9d9dae0977ff022243433e8d",
"assets/assets/send.png": "1df0d1a089c1bee052ae276e864ccc06",
"assets/FontManifest.json": "23933a71f1ce777eb5a4bf39a2d31d3b",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "6f4dab81c3d4d7b28f343aba04059a16",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b37ae0f14cbc958316fac4635383b6e8",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5178af1d278432bec8fc830d50996d6f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "aa1ec80f1b30a51d64c72f669c1326a7",
"assets/packages/im_stepper/assets/me.jpg": "487511e754834bdf2e6771376d59707e",
"favicon.png": "1e0c2425b2bd02f524e0379e992334a2",
"icons/Icon-192.png": "1e0c2425b2bd02f524e0379e992334a2",
"icons/Icon-512.png": "1e0c2425b2bd02f524e0379e992334a2",
"index.html": "5bab0705dfe9c2321474733a63d830f4",
"/": "5bab0705dfe9c2321474733a63d830f4",
"main.dart.js": "7cf47f3f19828097be562d98c951e4a6",
"manifest.json": "e91def9277c9554aa4acd4c5bcad232e",
"style.css": "aed5cc443e508ccb86412bb2cda63eb2",
"version.json": "2a83df5b9f89633e79c84213588989af"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
