/** Chunk was on 45620 **/
/** chunk id: 655283, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  MG: () => a,
  xh: () => l
});
let r = (0, require("./427164.js").le)({
    name: "2025-09-collectibles-hero-button-text",
    kind: "user",
    defaultConfig: {
      showShopTheCollectionText: true,
      showSeeMoreText: false
    },
    variations: {
      0: {
        showShopTheCollectionText: false,
        showSeeMoreText: false
      },
      1: {
        showShopTheCollectionText: false,
        showSeeMoreText: true
      },
      2: {
        showShopTheCollectionText: true,
        showSeeMoreText: false
      }
    }
  }),
  l = e => r.useConfig({
    location: e
  }).showSeeMoreText,
  a = e => {
    let t = r.useConfig({
        location: e
      }).showShopTheCollectionText,
      n = l(e);
    return t || n
  }