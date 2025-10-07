'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "820929ca2c70383ea11fea84eafef839",
"version.json": "f2aadd9e98d57bee431f548e290fc69e",
"index.html": "82a1369b2deaca9748da7ac29f252e18",
"/": "82a1369b2deaca9748da7ac29f252e18",
"main.dart.js": "b374799f417a2a63f0f2cfdc89ff2e23",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "96400e981c1b8adb93d5009af1b651cf",
"assets/AssetManifest.json": "c47573fd25e26e495d30115f41f2c74f",
"assets/NOTICES": "bfd5c12d79ec3ac8ee23f65b23a44304",
"assets/FontManifest.json": "991290f79d205820882ce9b8d871d510",
"assets/AssetManifest.bin.json": "9c630256f1e68ddd276a40c9fe2b0f04",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/Font%2520Awesome%25207%2520Free-Solid-900.otf": "8b2a0d910046068708bb6c1f584247e7",
"assets/packages/font_awesome_flutter/lib/fonts/Font%2520Awesome%25207%2520Free-Regular-400.otf": "e11a5f69de9d20e3273406bac50a3050",
"assets/packages/font_awesome_flutter/lib/fonts/Font%2520Awesome%25207%2520Brands-Regular-400.otf": "723bee6170a87718fb70ae29f67d32c0",
"assets/packages/flutter_feather_icons/fonts/feather.ttf": "c96dc22ca29a082af83cce866d35cebc",
"assets/packages/csc_picker/lib/assets/country.json": "11b8187fd184a2d648d6b5be8c5e9908",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "d9f64ff88b970685988d305e2b704a1a",
"assets/fonts/MaterialIcons-Regular.otf": "591d4fd6ce55fbd93065247af68d1822",
"assets/assets/tutorial/2.png": "7dd314bd5264f6bc1ba100c6c6c05246",
"assets/assets/tutorial/3.png": "6224380d8392886963ee2739a5f0674c",
"assets/assets/tutorial/1.png": "99be4e2b306b1717aae78e6f43d4481f",
"assets/assets/images/logos/logo_transparent.png": "49238531bec9e7f65d16cf7694edb564",
"assets/assets/images/logos/your_farm.png": "4c11803a33a2fc4b3735c88c9462ea3e",
"assets/assets/images/logos/apple_logo_black.png": "1be8de544ba5972870816d98c71e83d5",
"assets/assets/images/logos/mail_logo.png": "89a80bfb19157fce63dd0c8d0ba669e1",
"assets/assets/images/logos/halfdevelopmentRed.png": "6763827b407e2a02f5b18bcef1c87013",
"assets/assets/images/logos/apple_logo.png": "1869a1bd190865c72a67c933eb558608",
"assets/assets/images/logos/halfdevelopmentBlau.png": "144b00909078697e804f1bb104d3fc45",
"assets/assets/images/logos/apple_logo_white.png": "b7dea37fe80a8c8167078c55e9c6323d",
"assets/assets/images/logos/google_logo.png": "ff629c02385f2f3a199b7e0b3065d077",
"assets/assets/images/backgrounds/Hintergrund-Drinkmate-RAW.gif": "4751e014a34b0161c6b772a30ba47df3",
"assets/assets/images/backgrounds/farm_market.png": "d001a24f291d8974197f724e67285bec",
"assets/assets/images/icons/EI_ganz.png": "1b2562277ca3a7345e9b3c8a8345fccb",
"assets/assets/images/icons/EI_riss.png": "4ec7006741c13c639cc8300c76d32ddb",
"assets/assets/images/icons/apple_black_icon.png": "af6b8451b3b076fd00e939e019d78507",
"assets/assets/images/icons/Ei-1.gif": "f0b606f7166832753fc91a82aa5eefc6",
"assets/assets/images/icons/apple_white_icon.png": "b7dea37fe80a8c8167078c55e9c6323d",
"assets/assets/images/icons/noun-chimney-sweep-1586846.png": "442aeef201a4ffc22796c761aba6a402",
"assets/assets/images/icons/EI_matsch.png": "d3ad01ce79f4ad1904abd628195a38f3",
"assets/assets/images/icons/toast.png": "9f04e487f35e3e56cd1af239c6c5c6fc",
"assets/assets/json/werwuerde.json": "834dd82a0281cce68c05d12a3bb846dd",
"assets/assets/json/games.json": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/json/werbistdu.json": "a584aa948fe01149d25446e928838391",
"assets/assets/json/verraeter.json": "5940a4ba5bf4a5f318d7a16f5e3068a0",
"assets/assets/json/paranoia.json": "8280346be3b3a331f498429e3a792a61",
"assets/assets/json/murdermystery.json": "0bf9d8bf17b553bc8bb282c365e47204",
"assets/assets/json/flaschendrehen.json": "07009526756b5fdb7e1aef2b77173c50",
"assets/assets/json/fakeoderfakt.json": "db5f00d2ac4d7d5544e618868fc00808",
"assets/assets/json/wuerdeeher.json": "4460023606267ccf22cb340a4e0393c7",
"assets/assets/json/wahrheit_oder_pflicht.json": "cf9f57c18b075d75ed50bc759bc760b9",
"assets/assets/json/eiermatsch.json": "0493d62f1bb5b1939b223fa1ead86d7c",
"assets/assets/sound/egg-explosion.mp3": "d063fb988408f2a881fd3e3d64f08878",
"assets/assets/sound/ticken.mp3": "01143b097f8a6ab434cbf7a3acf97299",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b"};
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
