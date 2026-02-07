'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "270ddce5d81a95166731bf4d4c45e748",
".git/config": "6cdaeafbdb6a1d7f1eeef7b823be28fc",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "68e1bc116126df97d245fabee08e3551",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "1d53d81f5202b11d0e197575297787ae",
".git/logs/refs/heads/main": "95fdeaabdf49158eea6785d7146ee650",
".git/logs/refs/remotes/origin/main": "c864b2cdd4dfd0c947f8ea10e53766aa",
".git/objects/02/72cc6b260173b7b5509f40b23c2c28db500179": "938ed9bc0ffab1bc2b72d4849164d562",
".git/objects/02/842d69ee38d5b7e4ba6ed21c124ea4dafe04e7": "dbf4a59cd13dddffb50f62aecdfd70e9",
".git/objects/08/27c17254fd3959af211aaf91a82d3b9a804c2f": "360dc8df65dabbf4e7f858711c46cc09",
".git/objects/0f/0810a081c9fde7747642f1bddcdb01b0d7e45b": "8b1c903254294e68751f1d34ee292611",
".git/objects/15/db25e820f2038cb8bfb6f29ced0c212a26bea0": "600192c62b6b03345dc55b03a25299fd",
".git/objects/17/2d8e7774f62a37cbe85eb26a4f374e91ffa111": "32b7bf08460c67c0d5b8dcacbc6034e8",
".git/objects/19/f709538bc5f88e910c792bd8e26ae658feb771": "c0031771464e4e006017197619b433e4",
".git/objects/1b/3c629ecd73cc289b687a4fcb0f07740305d2e0": "7a4e30289a0307a383ba715e46fe5217",
".git/objects/1c/8274182a0de83e971bfac8e201bfbb54e09bf9": "672ec34662a513dc12173d0bca4b5b2a",
".git/objects/22/de05f3140ece078b838bd895eafddfc22cd827": "75c3a9ef95ea182857c42d70d9c26c04",
".git/objects/28/6b583725be3c2525b7c06d5f9f7f6b7024b8d9": "b625c75915e4f69f5f2c069215249b5b",
".git/objects/33/0105c7776cbb07383f52b581c5e063d5494ae5": "e21b157cad0ad8a85d6571345dbcd709",
".git/objects/33/5bf2f096658f2b38206ed3153eae07cb29fa8a": "7b09d8f1031bce572b6367480cca1396",
".git/objects/3a/8cda5335b4b2a108123194b84df133bac91b23": "1636ee51263ed072c69e4e3b8d14f339",
".git/objects/3c/7c35acf9f5a9b5204ebeef4a01ed1d9f684181": "6e6fccc3436befe28055ffe3b444c5ce",
".git/objects/49/61c2ac8ee173bbf51e10ba71e12ffcca19be69": "397d6132c457a15f68fbe00e676c7022",
".git/objects/51/03e757c71f2abfd2269054a790f775ec61ffa4": "d437b77e41df8fcc0c0e99f143adc093",
".git/objects/51/2c709b62b54ab61afcd31ea83fcd2c6d28e98c": "867d58a23f0f6eb9333e49f8e219e930",
".git/objects/55/4889012e33a05cc09604b8d860ef20b093cf77": "bc86ffc8390f03bc0feadff6ec7d05a8",
".git/objects/5e/193c62dbd08219ae567fc13d9741768dc78b37": "3cfd5ce448869b3aed92ac3191e84ef2",
".git/objects/5f/e29d91391503071f9a0fc88dd710040b4cf9c5": "c692a7c19307ed764f87a951fd09b10e",
".git/objects/61/ade31f3909e8c878ddff6c357550cdba581eb7": "04bf171b6c40a8327775065c83e993a6",
".git/objects/62/9964d89c67f1c55ffe343ae5996de4e21e8c70": "a82acb5193e6ed264b44f875accc9c4e",
".git/objects/63/107310707def24178335c63707a155f19b930d": "760706a221347da6fd2c4b51cec2538f",
".git/objects/63/a079775e3afcd59defc76a0f00488192964698": "2f52c7a2d2c0753dcd4501f5a115fcdd",
".git/objects/64/67152292e7e6cde97ec4294be99e62d7e73f84": "de01e8a0cc12863d480ec27a47ea4f27",
".git/objects/68/43fddc6aef172d5576ecce56160b1c73bc0f85": "2a91c358adf65703ab820ee54e7aff37",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6b/d06091bb5660a6fef094856b6f967c9bd51383": "66ba44883c54b6c4b3dca9b936e4ed97",
".git/objects/6e/88dab68bb98cd24aeac93e5ba935b1ab257609": "66f0138a673edef87ca54f08030dc5dd",
".git/objects/6f/7661bc79baa113f478e9a717e0c4959a3f3d27": "985be3a6935e9d31febd5205a9e04c4e",
".git/objects/76/88c2a7e69380f80b6f827ff104c09f7ab0e91f": "432aa83e1d581a5a03cc0b29f0d4f52d",
".git/objects/7c/3463b788d022128d17b29072564326f1fd8819": "37fee507a59e935fc85169a822943ba2",
".git/objects/82/7743beffdba0afcccbecd4726a6fb7f48e88ef": "76358abeeb54042a3ba744b14ef8b879",
".git/objects/85/63aed2175379d2e75ec05ec0373a302730b6ad": "997f96db42b2dde7c208b10d023a5a8e",
".git/objects/88/c21b4758e0da70258551252552958e70e38e74": "c7052e98bb75722c008f1483e9238906",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/ac5b508ac3c5a072584e10834f3440e70d58ab": "130ad19b82fa04cac29b4bf538999beb",
".git/objects/8e/21753cdb204192a414b235db41da6a8446c8b4": "1e467e19cabb5d3d38b8fe200c37479e",
".git/objects/92/f5d93dbbeaa2b7743d8e3762743ffbaf4fd5d9": "5ae95aaa22ca22bf9ae5144e8d528e6a",
".git/objects/93/b363f37b4951e6c5b9e1932ed169c9928b1e90": "c8d74fb3083c0dc39be8cff78a1d4dd5",
".git/objects/9d/e1fae43f0547b8a26e83691d1bf4f939646faa": "a416454095ebb249326b37bc2957afa9",
".git/objects/a3/4432985111886cb15d9bacd1b93ddf58b4371a": "874223b6cb2e9e7829bd1834ffaa279b",
".git/objects/a6/3987c2139da5263ca73ac9dca0782e4836aed7": "2d5da20ee85592a6391ccabb2cc44cad",
".git/objects/a7/3f4b23dde68ce5a05ce4c658ccd690c7f707ec": "ee275830276a88bac752feff80ed6470",
".git/objects/a8/76e6ee6967db1eaee2ebc371ff9e754278da06": "a0e730733d93f9b38525fd4756928155",
".git/objects/ad/ccdcb8128ce763cc429c2b65b018c9d0bf8442": "f6413d8bdfa273c59e710661eba49487",
".git/objects/ad/ced61befd6b9d30829511317b07b72e66918a1": "37e7fcca73f0b6930673b256fac467ae",
".git/objects/b4/21e7fd23cd38edc972f48af8e185af9d28d6a3": "597713a76776308d2c8df9bf44b43fa2",
".git/objects/b6/f3e2963c0c74f774db7a82c69823ed032a46d4": "8f66329e100e53e11cd211e85fa9b762",
".git/objects/b6/f7470d0621b12e41698ac429d4b5e41cce77c8": "a16bd6718ebeb4d6affb7c4e9dea041d",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/3e39bd49dfaf9e225bb598cd9644f833badd9a": "666b0d595ebbcc37f0c7b61220c18864",
".git/objects/ba/6a856f337f2e5aed54f8b61d79a72d78c85562": "43064e650bd8243db1c447027d61a40b",
".git/objects/ba/708d8a3645cc1bebf4f7e40bff8275b6478c52": "2b814ca5a2bdd62f43e29c4e2d397177",
".git/objects/c0/8ef77613986a10db5f78fea41f95594a4ae769": "0fb16a27a00aabcb2b9450bea2bb3485",
".git/objects/c3/3e42853fc7f3ec7c390460ee92a2875e67ce94": "4007c9f24f0870df281cf71cc858eeb1",
".git/objects/c3/c2468abc53a7b14c42bb922aa38466a8339345": "b38e5eccc18049d5a43d929b8ba4b9aa",
".git/objects/c4/fd6e653e1be9489a26fcf78ce15c9c9d150637": "ea6f2e230a2db5bd81cef81e376ad536",
".git/objects/c8/3af99da428c63c1f82efdcd11c8d5297bddb04": "144ef6d9a8ff9a753d6e3b9573d5242f",
".git/objects/ca/f932b5949c6d86c6de0c89aee8d97b219291d4": "6cff22cc63a36c6f2ab96ddca7ceb984",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/7deeba0f5674f317f75b00623f5c163013582e": "1176cccca51792f385e685fb38c9a2e0",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/5b1d3499b3b3d3989fa2a461151ba2abd92a07": "a072a09ac2efe43c8d49b7356317e52e",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/ea/25c65aebfbcaf2212c62d4ccc6ac93b9d29dff": "75e9884caa48b89d546645c8030a638c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/4554cdd68a316886d0a0f041052682aad2c9c2": "50504b04990855f70bb089880b8207aa",
".git/objects/ed/d990a6b4a972cc2a0a4df30efc171244d37fe2": "404db3c3f07afc16a33b1b586b253d95",
".git/objects/f3/3e0726c3581f96c51f862cf61120af36599a32": "afcaefd94c5f13d3da610e0defa27e50",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f6/e6c75d6f1151eeb165a90f04b4d99effa41e83": "95ea83d65d44e4c524c6d51286406ac8",
".git/objects/fd/05cfbc927a4fedcbe4d6d4b62e2c1ed8918f26": "5675c69555d005a1a244cc8ba90a402c",
".git/refs/heads/main": "1f951834457cd098f3276ee98e79dae0",
".git/refs/remotes/origin/main": "1f951834457cd098f3276ee98e79dae0",
"assets/AssetManifest.bin": "65d9a6c5e2498fde583b8e496722e6a4",
"assets/AssetManifest.bin.json": "5011c5483558173d76b555b861553b62",
"assets/assets/Atanu_IUT_CV.pdf": "3c9bc458e63158f3e0148192728424df",
"assets/assets/img/atanu.png": "c1a7ed68a85a11fb8a6a040de371be7f",
"assets/FontManifest.json": "c75f7af11fb9919e042ad2ee704db319",
"assets/fonts/MaterialIcons-Regular.otf": "fde0e148403e3aace5aa59c6e8521177",
"assets/NOTICES": "40dd4a0488ca686b7a642ea8f4369a33",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Brands-Regular-400.otf": "c1e70f852a811c5e31a5581ec0fcf87b",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Free-Regular-400.otf": "8d0acfbf774979914d3c0d736f4be13e",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Free-Solid-900.otf": "6e9636f1198034a1f921218d6ed050fb",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "12c46a4ac62c247748d2d065728a45c7",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "e0e032c2fb9c4670568ccb1dd40fc2fc",
"/": "e0e032c2fb9c4670568ccb1dd40fc2fc",
"main.dart.js": "9192ab7febf8713eef0441017f726b2d",
"manifest.json": "aee7c4007fda52a6824c76eec5a84487",
"version.json": "cc132570d6d238130e38adc59e1f998d"};
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
