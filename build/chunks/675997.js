/** Chunk was on 30202 **/
/** chunk id: 675997, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s,
  l: () => r
});
let i = (0, require("./427164.js").le)({
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
  r = e => i.getConfig({
    location: e
  }).enableShopTakeOver,
  s = i