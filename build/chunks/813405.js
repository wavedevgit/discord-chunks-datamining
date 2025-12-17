/** Chunk was on 1272 **/
/** chunk id: 813405, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => a
});
var Chunk427164 = require("./427164.js"),
  Chunk699955 = require("./699955.js");
let l = (0, Chunk427164.le)({
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
  } = e, n = (0, i.cZ)({
    location: t
  }), r = l.useConfig({
    location: t
  }).enabled;
  return n && r
}