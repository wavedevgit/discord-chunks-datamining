/** Chunk was on web.js **/
/** chunk id: 675997, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => o,
  l: () => i
});
let r = (0, require("./427164.js").le)({
    name: "2025-08-collectibles-shop-takeover",
    kind: "user",
    defaultConfig: {
      enableShopTakeOver: false
    },
    variations: {
      0: {
        enableShopTakeOver: false
      },
      1: {
        enableShopTakeOver: true
      }
    }
  }),
  i = e => r.getConfig({
    location: e
  }).enableShopTakeOver,
  o = r