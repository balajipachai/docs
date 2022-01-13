/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "5d5384ff5b8759f88e0a4213506175f4"
  },
  {
    "url": "assets/css/0.styles.3e4faf6e.css",
    "revision": "2b05a5f02b9af194ad3c8c9ceab42707"
  },
  {
    "url": "assets/img/activities.36116c16.png",
    "revision": "36116c16687c3473ca786d4c7d62e016"
  },
  {
    "url": "assets/img/add_circle_outline.c5b0d45d.svg",
    "revision": "c5b0d45d9ff3b78a9ac4ac72a70ea50c"
  },
  {
    "url": "assets/img/add.0e3e08bc.svg",
    "revision": "0e3e08bcb441c2cb39bdfff7f56f06a2"
  },
  {
    "url": "assets/img/address-bar.a15ff370.png",
    "revision": "a15ff370eed2f8f0b8219ea3d4976318"
  },
  {
    "url": "assets/img/address.8c163b8f.png",
    "revision": "8c163b8f3c49e340a7c9546af4ed690e"
  },
  {
    "url": "assets/img/content_copy.72dd793a.svg",
    "revision": "72dd793a97203adfad3c50ebad310ee4"
  },
  {
    "url": "assets/img/control_point_duplicate.0028d2cc.svg",
    "revision": "0028d2cca15e5c298bc49d9f8058a0d3"
  },
  {
    "url": "assets/img/delete_forever.01754524.svg",
    "revision": "017545249afd67806be943eae9f18bc2"
  },
  {
    "url": "assets/img/directions_car.c9b170b8.svg",
    "revision": "c9b170b848c5d4b8dd0e61f16bd75c75"
  },
  {
    "url": "assets/img/directions_walk.27f1ba22.svg",
    "revision": "27f1ba221570d364f986a1bc342c3e05"
  },
  {
    "url": "assets/img/done_all.28f39764.svg",
    "revision": "28f397644d2d6fe6c3fde0446891cf26"
  },
  {
    "url": "assets/img/done.89e6f120.svg",
    "revision": "89e6f1201212082536271f14401d3d41"
  },
  {
    "url": "assets/img/flight.1eb2837a.svg",
    "revision": "1eb2837abbb46c402e137802482339bc"
  },
  {
    "url": "assets/img/ledger_logo.8d1c9c23.svg",
    "revision": "8d1c9c23425c3b507e87663b24e54d0e"
  },
  {
    "url": "assets/img/link.98f4f684.svg",
    "revision": "98f4f6841f3d482b15c3a9d79c8db50f"
  },
  {
    "url": "assets/img/logoSync.7d4e71a5.svg",
    "revision": "7d4e71a555356bf3338258bfd8ba32b2"
  },
  {
    "url": "assets/img/menu.55f68494.svg",
    "revision": "55f6849429de279d473c459c7ead3249"
  },
  {
    "url": "assets/img/message.759cf5c9.svg",
    "revision": "759cf5c9195a7ba83dfe7b47cd809ffe"
  },
  {
    "url": "assets/img/more_horiz.d644ed95.svg",
    "revision": "d644ed957e2662b1d22adb890310e64f"
  },
  {
    "url": "assets/img/mpp.58a89201.png",
    "revision": "58a892017c66b562945baeee15505c80"
  },
  {
    "url": "assets/img/preview.2a0e91e4.svg",
    "revision": "2a0e91e455559dd783005560c3ffcbe0"
  },
  {
    "url": "assets/img/qr_code_2.b60a5eec.svg",
    "revision": "b60a5eec09a98201dd9a090a00e521bb"
  },
  {
    "url": "assets/img/query_builder.3c7597b2.svg",
    "revision": "3c7597b2a77f9fe763c44489b872ac31"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/search.db5d8122.svg",
    "revision": "db5d8122836517965b6e0247a3a9691c"
  },
  {
    "url": "assets/img/send.5b08a89d.svg",
    "revision": "5b08a89d2dd3351ce4ef110d2909cb23"
  },
  {
    "url": "assets/img/settings.d31d71f9.png",
    "revision": "d31d71f992404bd7970a450cfe4ec99c"
  },
  {
    "url": "assets/img/signing.d77cdae1.png",
    "revision": "d77cdae154a592744275a3b510bf722a"
  },
  {
    "url": "assets/img/unfold_more.52bd8411.svg",
    "revision": "52bd8411f8aea9dba1e636497a1c3d3e"
  },
  {
    "url": "assets/img/wallet-detail-activity.0f9d89a3.png",
    "revision": "0f9d89a34631323541d04818f4a00ac4"
  },
  {
    "url": "assets/img/wallet.08efbe38.png",
    "revision": "08efbe38b38fce44fa3542a9a0dd156d"
  },
  {
    "url": "assets/js/10.4c25f804.js",
    "revision": "4d9f139d1b83319865e4dd8b250d5ca1"
  },
  {
    "url": "assets/js/100.50efb659.js",
    "revision": "42e1401c7bfbb2adcda0752d5026bed6"
  },
  {
    "url": "assets/js/101.a2b32351.js",
    "revision": "313af86cad261018ac9bc1e76a2772f9"
  },
  {
    "url": "assets/js/102.c26c0998.js",
    "revision": "6826f63cae75611a37fe0cb914a1a8c6"
  },
  {
    "url": "assets/js/103.99ebc373.js",
    "revision": "b32f0c20be3a924e5d559b78238c7a1d"
  },
  {
    "url": "assets/js/104.b94cd4a8.js",
    "revision": "65a2a06527a4774b48c0cfe7668d40f0"
  },
  {
    "url": "assets/js/105.5180cbc4.js",
    "revision": "b1674ebd19c9397709fa7b43e1821859"
  },
  {
    "url": "assets/js/106.1f481351.js",
    "revision": "46ff7bd4ae92a967e7d39b2109ce6336"
  },
  {
    "url": "assets/js/11.b94bfbf8.js",
    "revision": "acaab4ad78f0a2f94900e156629428d8"
  },
  {
    "url": "assets/js/12.026e2c3d.js",
    "revision": "20f6be26d63766e35c7d9f965a3fa0fb"
  },
  {
    "url": "assets/js/13.eab7bf49.js",
    "revision": "40f32c449433646b9158dd6c604e13df"
  },
  {
    "url": "assets/js/14.e3667f8b.js",
    "revision": "804147f0327fd13226f28b1b408cc165"
  },
  {
    "url": "assets/js/15.f2e09273.js",
    "revision": "0140d041a5d29220577b81991c707f20"
  },
  {
    "url": "assets/js/16.8794f970.js",
    "revision": "03b8fdf3c57edaac95a2bec6f1b912cb"
  },
  {
    "url": "assets/js/17.284c2b52.js",
    "revision": "92bb1fb543bb0588ed2280d994bee61c"
  },
  {
    "url": "assets/js/18.29bbfaa3.js",
    "revision": "13e8b0cbb4af0ee523537431cfe1dcde"
  },
  {
    "url": "assets/js/19.1be738a8.js",
    "revision": "8ba2d64363173b1c52621248b4623d9a"
  },
  {
    "url": "assets/js/20.4ec732ad.js",
    "revision": "1c8b55b291081be2beb7fe88307711ae"
  },
  {
    "url": "assets/js/21.2a84dde3.js",
    "revision": "c1683ce01e0d0d12b25d037fd5ed5521"
  },
  {
    "url": "assets/js/22.61337577.js",
    "revision": "13dc6cb0ed6cdf19e1bdafb061f3d3ee"
  },
  {
    "url": "assets/js/23.5b131fa1.js",
    "revision": "5954274585161aabdb11c7922e2b4300"
  },
  {
    "url": "assets/js/24.a560a5f3.js",
    "revision": "582a21ecc4b0c94a98e3f44a1b818e0f"
  },
  {
    "url": "assets/js/25.2d2b7c20.js",
    "revision": "b55e5a093c82778e6559292a4a4a8268"
  },
  {
    "url": "assets/js/26.3e5d02c5.js",
    "revision": "2ff99f4470330bafb12ded1ee2eeff56"
  },
  {
    "url": "assets/js/27.0714b2d7.js",
    "revision": "f7842e6c4c2dbcfd6387c2137cfd1b1e"
  },
  {
    "url": "assets/js/28.a2331bdb.js",
    "revision": "e90245475c46c0e13c3d25bf7bb0fbbe"
  },
  {
    "url": "assets/js/29.3eeeba85.js",
    "revision": "7a8200c37db8f710506d65d90e97a085"
  },
  {
    "url": "assets/js/3.1edea8f6.js",
    "revision": "82b8294e570e0d6b1a26e9df7bc7789e"
  },
  {
    "url": "assets/js/30.656f5494.js",
    "revision": "79928912ce5d3846154a66ed12f7fbfb"
  },
  {
    "url": "assets/js/31.faaea567.js",
    "revision": "40608be2f2b4a7f46af2da4cfa84322b"
  },
  {
    "url": "assets/js/32.c5fad2fa.js",
    "revision": "20c55ef8acf5532c46e414c71aef9ef9"
  },
  {
    "url": "assets/js/33.3a293a7d.js",
    "revision": "574af388961a9a6a6cb49691c8831756"
  },
  {
    "url": "assets/js/34.fab5c573.js",
    "revision": "b3cd69c6cae1a9c9f0355a38dd748dac"
  },
  {
    "url": "assets/js/35.73764677.js",
    "revision": "db81dc7d4752e488db7231c8647ced66"
  },
  {
    "url": "assets/js/36.bc34dc74.js",
    "revision": "2533b66cbcddf7c5ac03192d012ab035"
  },
  {
    "url": "assets/js/37.73944ce9.js",
    "revision": "cdb3d0247a6b612545a88d8b6aeb4ba7"
  },
  {
    "url": "assets/js/38.22920a2b.js",
    "revision": "464f4ace9b2a112593c77dad55cb2945"
  },
  {
    "url": "assets/js/39.caaf1001.js",
    "revision": "1e2a7fcb783ce076b21f7b60871c5365"
  },
  {
    "url": "assets/js/4.81f77f6c.js",
    "revision": "ed6c632df6b30c371ff2dc06191bbce1"
  },
  {
    "url": "assets/js/40.74ed6dfd.js",
    "revision": "0a8538a0b883ef46618a539f5a3fbd87"
  },
  {
    "url": "assets/js/41.b498ce60.js",
    "revision": "f374789d5db3a07d9abcfe45ddc39ac6"
  },
  {
    "url": "assets/js/42.71896364.js",
    "revision": "881db4aeb2f4ce33ae17ef2b4938f292"
  },
  {
    "url": "assets/js/43.db5ad3c0.js",
    "revision": "3ba61dd8867e927d7760a43fe457b4ee"
  },
  {
    "url": "assets/js/44.8c002810.js",
    "revision": "fdd295e5ebe148ad84076b537715e249"
  },
  {
    "url": "assets/js/45.60925af0.js",
    "revision": "8d317fc15a066d6c6418cce5e899db36"
  },
  {
    "url": "assets/js/46.9df5e9e5.js",
    "revision": "ce8f7f0cdd05b0e90168e6c6f6f7c144"
  },
  {
    "url": "assets/js/47.6ff73410.js",
    "revision": "28d2cd7846e498457f4cee455094dfbe"
  },
  {
    "url": "assets/js/48.d33b48bf.js",
    "revision": "cda87a4c706b80d68a65e6d88ef53b36"
  },
  {
    "url": "assets/js/49.82ba0144.js",
    "revision": "bb239a5fa170aaaef93d4d38dc456474"
  },
  {
    "url": "assets/js/5.767bfa77.js",
    "revision": "992b4f267c9a938b0201bc22c6601370"
  },
  {
    "url": "assets/js/50.4753bf5a.js",
    "revision": "4fc20b99c0e35fd5d404a4828fd2d928"
  },
  {
    "url": "assets/js/51.c393fe43.js",
    "revision": "205536e19f66b6b8c4f451bf08fe5a7c"
  },
  {
    "url": "assets/js/52.6feeaa0c.js",
    "revision": "5a4a9b270365fb664a155b5e953e3f11"
  },
  {
    "url": "assets/js/53.38c1f2a4.js",
    "revision": "e40d62edc2f0378592e569763c96f5d7"
  },
  {
    "url": "assets/js/54.b2884f16.js",
    "revision": "250d81a96a5f85dc4716667499327f4e"
  },
  {
    "url": "assets/js/55.00158c33.js",
    "revision": "d4189e09997eeee314d980169e09fdfa"
  },
  {
    "url": "assets/js/56.f7530b12.js",
    "revision": "dcce251d863b6614c8047979d264d5a5"
  },
  {
    "url": "assets/js/57.5a3ec558.js",
    "revision": "2ac48e37ab1c71264493010f1a538dc8"
  },
  {
    "url": "assets/js/58.01a91a28.js",
    "revision": "f17c3c43fdd3432608121b81727e5bc8"
  },
  {
    "url": "assets/js/59.c3138807.js",
    "revision": "316c6bdc8508a31c39d296605857bf68"
  },
  {
    "url": "assets/js/6.16d6db7f.js",
    "revision": "06d3263a594a5e4ad184dfddac34a6f4"
  },
  {
    "url": "assets/js/60.42f935c3.js",
    "revision": "828cbfcc22b3dad3372dfcc52e9eb9cb"
  },
  {
    "url": "assets/js/61.10416e5a.js",
    "revision": "0aca485d37cdec206a023db944139fa6"
  },
  {
    "url": "assets/js/62.b0a12105.js",
    "revision": "198a6d1fe57f5b87d636c6d3c22b9d29"
  },
  {
    "url": "assets/js/63.018a4bdc.js",
    "revision": "9a7772cecac7962e88947c9ec8591672"
  },
  {
    "url": "assets/js/64.c514b639.js",
    "revision": "07b8ae68541754b1b9a8b01261138484"
  },
  {
    "url": "assets/js/65.e6e9ce74.js",
    "revision": "21aa26336ac04ae2e4dcaae1737f8c79"
  },
  {
    "url": "assets/js/66.4d2e3a76.js",
    "revision": "007c7785a1e3a1752382d03e6a4e361f"
  },
  {
    "url": "assets/js/67.d3e1eabf.js",
    "revision": "7ab91ee9e0e7fb7aa0f94e7475a6fe6d"
  },
  {
    "url": "assets/js/68.d655f59d.js",
    "revision": "435a501b2003de6d5eecc9179f225a29"
  },
  {
    "url": "assets/js/69.edf36709.js",
    "revision": "899e915c067b946e7eed408d58043305"
  },
  {
    "url": "assets/js/7.98617c13.js",
    "revision": "7d9b36532091e038f59e54b98ebf5318"
  },
  {
    "url": "assets/js/70.65f1d53c.js",
    "revision": "d2768c86e098e2384cce043db62108bb"
  },
  {
    "url": "assets/js/71.aa89949f.js",
    "revision": "c27449c9b1cdfec52a8d5e64f864db92"
  },
  {
    "url": "assets/js/72.15970a38.js",
    "revision": "6f8622d31b3f9628b6aed95a5feecfe9"
  },
  {
    "url": "assets/js/73.2cd464f0.js",
    "revision": "b42d699ee90fc3f89a038e8081fed4d4"
  },
  {
    "url": "assets/js/74.7affeaf4.js",
    "revision": "f21770caf55b92e95f41011a7e1c5c18"
  },
  {
    "url": "assets/js/75.61e31688.js",
    "revision": "def25370c84f1dd2080f113c75ebe423"
  },
  {
    "url": "assets/js/76.b83a15cd.js",
    "revision": "e88f92b9afb837a707c4f9671db30efa"
  },
  {
    "url": "assets/js/77.bb6fc790.js",
    "revision": "1686b1833403ef258dcb20f90e96a32e"
  },
  {
    "url": "assets/js/78.d29d0814.js",
    "revision": "1719992dc272651f467c7c54ab00371e"
  },
  {
    "url": "assets/js/79.59e20bfb.js",
    "revision": "277fb2094586000958c5b3897f2602c8"
  },
  {
    "url": "assets/js/8.ed2025a8.js",
    "revision": "9fd372508793c2bfaa2962d065e2a544"
  },
  {
    "url": "assets/js/80.1b1464a7.js",
    "revision": "aecf329bcb641deb1a4aa17bc3ab9dc5"
  },
  {
    "url": "assets/js/81.3ec3cb7f.js",
    "revision": "d9891c16cea045bf7eade32963e579eb"
  },
  {
    "url": "assets/js/82.627b9d32.js",
    "revision": "e29cbb87f4df4528922771928b7c4173"
  },
  {
    "url": "assets/js/83.3c3339b6.js",
    "revision": "8f3e7d6b7bb2c034f7ae5b52498ac05f"
  },
  {
    "url": "assets/js/84.efb9f2ca.js",
    "revision": "f88095bb8e441d51ffec2503e48c1f2b"
  },
  {
    "url": "assets/js/85.cfd8b161.js",
    "revision": "00581f17c5ca47b031db5f86b4af7958"
  },
  {
    "url": "assets/js/86.f70e3ba9.js",
    "revision": "09e9bf8f69d41cd88bcd7bd7921a1ad5"
  },
  {
    "url": "assets/js/87.6657840b.js",
    "revision": "8f950642fcb9479a94d53e89810c1efd"
  },
  {
    "url": "assets/js/88.66eaeac3.js",
    "revision": "84a66bf2966bc8df3d4a6bd56c22bf4e"
  },
  {
    "url": "assets/js/89.c2583a3a.js",
    "revision": "c0d38019ca1a5e0dfa0531b1e069ea05"
  },
  {
    "url": "assets/js/9.a55de85c.js",
    "revision": "4f097f1b96df0a8190643f4dedf68683"
  },
  {
    "url": "assets/js/90.c98b2688.js",
    "revision": "780d66882e1a83db3f8f0dde41bfbe40"
  },
  {
    "url": "assets/js/91.1ff323e6.js",
    "revision": "e311285c4c6e1329b7748d9112e56eb0"
  },
  {
    "url": "assets/js/92.92052608.js",
    "revision": "380b11e3c16899fcddc16ccbb4740e69"
  },
  {
    "url": "assets/js/93.6f1a224d.js",
    "revision": "8ba933b574e40a56e95df19f0951f20d"
  },
  {
    "url": "assets/js/94.dd179f27.js",
    "revision": "b3eebc3f850b8c725e2ecb396ce9f465"
  },
  {
    "url": "assets/js/95.55aadcee.js",
    "revision": "e4950cf29a542a70cdd50a88b33f095f"
  },
  {
    "url": "assets/js/96.6a00c5fa.js",
    "revision": "3115b519b3a6a32f3e50bc4799463406"
  },
  {
    "url": "assets/js/97.73cc1f32.js",
    "revision": "fd703926eb3420ae8a8d3ea02624fdeb"
  },
  {
    "url": "assets/js/98.d266567f.js",
    "revision": "3987ebf845eea45d5e9f615624141b5c"
  },
  {
    "url": "assets/js/99.160a53d3.js",
    "revision": "07343fb854d3c44aec3426c38c62a4eb"
  },
  {
    "url": "assets/js/app.7e311cff.js",
    "revision": "f840f0bbf19593859408ab81807976fe"
  },
  {
    "url": "assets/js/vendors~docsearch.b15e65d3.js",
    "revision": "b74cf40fe83ff3b84902ef5b48bbc8f5"
  },
  {
    "url": "connex/api.html",
    "revision": "7c7ccba13e01d3fff88b5f85d696ba6a"
  },
  {
    "url": "connex/index.html",
    "revision": "f843764910a6eaf5fa01199153a7ab56"
  },
  {
    "url": "icons/144.png",
    "revision": "ef022f52c54f8ee6ccc8f005d52b99de"
  },
  {
    "url": "icons/168.png",
    "revision": "cd596353879cab531903b1f9c0f8d6dc"
  },
  {
    "url": "icons/192.png",
    "revision": "6aaa85947b9a315ac47970a54c3a66f4"
  },
  {
    "url": "icons/48.png",
    "revision": "2d20f253068748053fc7082400c88f4b"
  },
  {
    "url": "icons/72.png",
    "revision": "02b333d138cc4764e770eb1d7274e7ea"
  },
  {
    "url": "icons/96.png",
    "revision": "b3240f2ffb00f383cbc3783370a782cc"
  },
  {
    "url": "index.html",
    "revision": "a17c3f53bada528c907286a4ac9076fb"
  },
  {
    "url": "logo.png",
    "revision": "1f7569a7fb96e141f556669c77877f1f"
  },
  {
    "url": "others/development-resources.html",
    "revision": "235a195b935f94901208eb77e4c317e2"
  },
  {
    "url": "others/miscellaneous.html",
    "revision": "0589f31a99e4fc03bc1b977115d0a512"
  },
  {
    "url": "pt/connex/api.html",
    "revision": "d23c0723093007245bf646777de5d236"
  },
  {
    "url": "pt/connex/index.html",
    "revision": "38fde2a79ec8ad40b10fdd60d2d05b01"
  },
  {
    "url": "pt/index.html",
    "revision": "e2d3557334d4b6ff0e7b53421e060c23"
  },
  {
    "url": "pt/others/development-resources.html",
    "revision": "fdd6f9ca7889905df8f9c467c6de4f3a"
  },
  {
    "url": "pt/others/miscellaneous.html",
    "revision": "cb4dfdf559990661b36b67b14a710d86"
  },
  {
    "url": "pt/sync/download-and-install.html",
    "revision": "4913741f0471a9d1aa26330246e3a344"
  },
  {
    "url": "pt/sync/faq.html",
    "revision": "d02461f5b1f999ff2857ca12397a3458"
  },
  {
    "url": "pt/sync/user-guide/activities.html",
    "revision": "9a2f199bdbe46bc39a86d42f57e865bd"
  },
  {
    "url": "pt/sync/user-guide/browse-dapp-and-web.html",
    "revision": "90cfe963e527d548a3a955e1e3dd80b7"
  },
  {
    "url": "pt/sync/user-guide/contribute.html",
    "revision": "2816de221aac698ab327e4718fc1b423"
  },
  {
    "url": "pt/sync/user-guide/contributing.html",
    "revision": "2e771680d58e234c4d5a658aaed24a29"
  },
  {
    "url": "pt/sync/user-guide/import-ledger.html",
    "revision": "38337fbe88c526ed2dc55b0877018f89"
  },
  {
    "url": "pt/sync/user-guide/index.html",
    "revision": "53de8be417c80df0bc7313baf7613903"
  },
  {
    "url": "pt/sync/user-guide/interact-with-dapps.html",
    "revision": "492697d2b67e241680cafcbc5bec4c33"
  },
  {
    "url": "pt/sync/user-guide/report-issue.html",
    "revision": "109a423d0994c7e6c6ea7e11f522c588"
  },
  {
    "url": "pt/sync/user-guide/settings.html",
    "revision": "bf9ecf6bd5f894d049fd83e5464e8e64"
  },
  {
    "url": "pt/sync2/faq.html",
    "revision": "9b4c07e00c9551a16230709e1eb47b54"
  },
  {
    "url": "pt/sync2/get-started.html",
    "revision": "ce3330a132c6a877c4fd4b4ef34adde0"
  },
  {
    "url": "pt/sync2/user-guide/activities.html",
    "revision": "9465e2aaf15e25ce9ad6dbf9f74a130a"
  },
  {
    "url": "pt/sync2/user-guide/index.html",
    "revision": "3e93499a5689814406e65d1551fd5c3a"
  },
  {
    "url": "pt/sync2/user-guide/settings.html",
    "revision": "a5f171b02b365344059738807c81bdae"
  },
  {
    "url": "pt/sync2/user-guide/signing.html",
    "revision": "8a9412ff00b52ab088aa707bdb1eaddf"
  },
  {
    "url": "pt/sync2/user-guide/wallet.html",
    "revision": "d3482f336da6cb23741225a71e947084"
  },
  {
    "url": "pt/thor/get-started/api.html",
    "revision": "e2169d7ba57139fa369b629468a78a9a"
  },
  {
    "url": "pt/thor/get-started/custom-network.html",
    "revision": "19a109fc73e81f93d58980b1478ce50e"
  },
  {
    "url": "pt/thor/get-started/installation.html",
    "revision": "8be77caff6b6239cd00ba7dd18555db4"
  },
  {
    "url": "pt/thor/learn/block.html",
    "revision": "4e34a70fdbca14dfdbf5598e77f16b60"
  },
  {
    "url": "pt/thor/learn/builtin-contracts.html",
    "revision": "a53c933c1b0f64fa992b5a331853a966"
  },
  {
    "url": "pt/thor/learn/faq.html",
    "revision": "3623f7de046432e71036e16628119054"
  },
  {
    "url": "pt/thor/learn/fee-delegation.html",
    "revision": "628316d2e768f3b0ce3b100fe24c804c"
  },
  {
    "url": "pt/thor/learn/index.html",
    "revision": "e16029d0ab5c20d399d0e8f50cf88e4f"
  },
  {
    "url": "pt/thor/learn/proof-of-authority.html",
    "revision": "565d5281764f16e6a84fa4d15ba50c21"
  },
  {
    "url": "pt/thor/learn/transaction-calculation.html",
    "revision": "7611865d2d9c61ca139e804b049577a0"
  },
  {
    "url": "pt/thor/learn/transaction-model.html",
    "revision": "15238962a965c7505cd5141cffacdbad"
  },
  {
    "url": "pt/thor/learn/two-token-design.html",
    "revision": "6a3b0f950b7c6001eb7e6b0053a0a36d"
  },
  {
    "url": "pt/tutorials/Connex-upgrade-Connex2_en.html",
    "revision": "904c121610c1fcaa4fdbb7c4d97aed7d"
  },
  {
    "url": "pt/tutorials/Connex-upgrade-Connex2.html",
    "revision": "3b20b8df7b6bf79da3e0a1b5cf1b9f56"
  },
  {
    "url": "pt/tutorials/contribute.html",
    "revision": "ee97e5f33a768e20fb9b98455b3f49bd"
  },
  {
    "url": "pt/tutorials/designated-fee-delegation.html",
    "revision": "5e3848a756cec301e9d9f96c245d4306"
  },
  {
    "url": "pt/tutorials/forcible-transaction-dependency.html",
    "revision": "118a5217a7f2b38c317f1007ae49c620"
  },
  {
    "url": "pt/tutorials/how-to-develop-a-dapp-on-vechain-1.html",
    "revision": "9e37563b84731a4cf9ca0d391eb7e7d7"
  },
  {
    "url": "pt/tutorials/how-to-develop-a-dapp-on-vechain-2.html",
    "revision": "a6f7b9c6855100341af7b7e888d12499"
  },
  {
    "url": "pt/tutorials/how-to-develop-a-dapp-on-vechain-3.html",
    "revision": "868b29c346bf05323d8861ce0ac6d369"
  },
  {
    "url": "pt/tutorials/how-to-integrate-VIP-191-1.html",
    "revision": "251e1ddb5a7794e223dd4e083bfd591a"
  },
  {
    "url": "pt/tutorials/how-to-integrate-VIP-191-2.html",
    "revision": "af15d94c326bc688b6914acb639915cd"
  },
  {
    "url": "pt/tutorials/how-to-integrate-VIP-191-3.html",
    "revision": "35d48c1ddac7bd5e644a50b6495535b1"
  },
  {
    "url": "pt/tutorials/index.html",
    "revision": "cfec9cc77a8929bc727024c396f9d613"
  },
  {
    "url": "pt/tutorials/Useful-tips-for-building-a-dApp.html",
    "revision": "265f2e47d1afda8f495a60a85eea7d97"
  },
  {
    "url": "sync/download-and-install.html",
    "revision": "f8d00d2e123e7d692e236e9c499d4139"
  },
  {
    "url": "sync/faq.html",
    "revision": "d8d354bda0eeace2e5d8c34ce4dd23ce"
  },
  {
    "url": "sync/user-guide/activities.html",
    "revision": "402fca5fd772dc4d8ad2544b3279f58b"
  },
  {
    "url": "sync/user-guide/browse-dapp-and-web.html",
    "revision": "6bffef8967719d745e87a301703afc75"
  },
  {
    "url": "sync/user-guide/contribute.html",
    "revision": "ae2e24db56d87596510733a5e9f21138"
  },
  {
    "url": "sync/user-guide/contributing.html",
    "revision": "433d8a57b75a770dcfde92d61263fc22"
  },
  {
    "url": "sync/user-guide/import-ledger.html",
    "revision": "a3e59009c62afae6df402894191913e9"
  },
  {
    "url": "sync/user-guide/index.html",
    "revision": "4f7b5789e62b58b52e65352df54920bc"
  },
  {
    "url": "sync/user-guide/interact-with-dapps.html",
    "revision": "cb40152294866feec98ed3b1322eafce"
  },
  {
    "url": "sync/user-guide/report-issue.html",
    "revision": "fb498d622864140067d5ec37c2519707"
  },
  {
    "url": "sync/user-guide/settings.html",
    "revision": "020a1054009131f6e94997bdc691afa5"
  },
  {
    "url": "sync2/faq.html",
    "revision": "afcb89a1d36e291f0368140e7589d5cd"
  },
  {
    "url": "sync2/get-started.html",
    "revision": "82f8c0cf9ebd2bac55598bd7a4ee8908"
  },
  {
    "url": "sync2/user-guide/activities.html",
    "revision": "c23349bf042fb33e9e81348fd01c3709"
  },
  {
    "url": "sync2/user-guide/index.html",
    "revision": "f177148665a760ebf17449107f04c23b"
  },
  {
    "url": "sync2/user-guide/settings.html",
    "revision": "ac2e3e0c5e13791ad7d4b6b8c4447900"
  },
  {
    "url": "sync2/user-guide/signing.html",
    "revision": "bded0c09e85ceec1573a42673efd1d82"
  },
  {
    "url": "sync2/user-guide/wallet.html",
    "revision": "42b60871bc3375ccb67afc82ecd397da"
  },
  {
    "url": "thor/get-started/api.html",
    "revision": "64705ee9e3e12b4008e46984c3048071"
  },
  {
    "url": "thor/get-started/custom-network.html",
    "revision": "48d96f7f726676eb2c9c597ae2fa4fda"
  },
  {
    "url": "thor/get-started/installation.html",
    "revision": "05a6f948c727520c28223d92f6c67513"
  },
  {
    "url": "thor/learn/block.html",
    "revision": "2d721038ba4b4ed13443ef6630517207"
  },
  {
    "url": "thor/learn/builtin-contracts.html",
    "revision": "39542c3893c4b50d602826bf652e028f"
  },
  {
    "url": "thor/learn/faq.html",
    "revision": "6335115fcc8d078ce7f03a649c4bec3f"
  },
  {
    "url": "thor/learn/fee-delegation.html",
    "revision": "b557a89a047c9b93a600d0e92f1a62d2"
  },
  {
    "url": "thor/learn/index.html",
    "revision": "7d580f748954d8cd1e4e8e5f7ed639cf"
  },
  {
    "url": "thor/learn/proof-of-authority.html",
    "revision": "6480467beb942a1d8902aa874f166095"
  },
  {
    "url": "thor/learn/transaction-calculation.html",
    "revision": "bf4d00062b3717150e9ebf9b7d2b2664"
  },
  {
    "url": "thor/learn/transaction-model.html",
    "revision": "f2e8ac974fe675226635c79293481f10"
  },
  {
    "url": "thor/learn/two-token-design.html",
    "revision": "edf87b453411ad2724164a2ccd6e5ac0"
  },
  {
    "url": "tutorials/Connex-upgrade-Connex2_en.html",
    "revision": "91c0704449eea96bdbd49c8c59d942e2"
  },
  {
    "url": "tutorials/Connex-upgrade-Connex2.html",
    "revision": "d06d7c2600606c180e78e9d3a075aec9"
  },
  {
    "url": "tutorials/contribute.html",
    "revision": "c177339f9bad5039c6bed27e0b30680b"
  },
  {
    "url": "tutorials/designated-fee-delegation.html",
    "revision": "ad71744c8bc9cb43aad53670d77f2537"
  },
  {
    "url": "tutorials/forcible-transaction-dependency.html",
    "revision": "d4e7e923d8f7ae9ac66385a7bce3f371"
  },
  {
    "url": "tutorials/how-to-develop-a-dapp-on-vechain-1.html",
    "revision": "32434983c362d641e76a37fc500ff5cb"
  },
  {
    "url": "tutorials/how-to-develop-a-dapp-on-vechain-2.html",
    "revision": "52eaea9bbe6506e1c55552c2130a8ff7"
  },
  {
    "url": "tutorials/how-to-develop-a-dapp-on-vechain-3.html",
    "revision": "d5c530ec848122b7e29c1713c5a21af8"
  },
  {
    "url": "tutorials/how-to-integrate-VIP-191-1.html",
    "revision": "3596bb829ef5a38ff18fa35c86104449"
  },
  {
    "url": "tutorials/how-to-integrate-VIP-191-2.html",
    "revision": "087501548cdc79e150e48e56b05909d0"
  },
  {
    "url": "tutorials/how-to-integrate-VIP-191-3.html",
    "revision": "8aac23af1611ce5df956a55849a8dd26"
  },
  {
    "url": "tutorials/index.html",
    "revision": "32482b78088253ff36e1cec2b79c32fc"
  },
  {
    "url": "tutorials/Useful-tips-for-building-a-dApp.html",
    "revision": "da91219490721f15460c3e300ecf7b15"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
