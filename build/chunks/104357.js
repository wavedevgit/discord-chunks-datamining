/** Chunk was on 21738 **/
/** chunk id: 104357, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  T: () => a
});
var Chunk945810 = require("./945810.js"),
  Chunk916023 = require("./916023.js");
let l = (0, Chunk945810.mj)({
  name: "2025-12-social-layer-storefront-rtc-entrypoint-user-experiment",
  kind: "user",
  defaultConfig: {
    enabled: false
  },
  variations: {
    0: {
      enabled: false
    },
    1: {
      enabled: true
    }
  }
});

function a(e) {
  let {
    location: t
  } = e, n = (0, i.kt)({
    location: t
  }), r = l.useConfig({
    location: t
  }).enabled;
  return n && r
}