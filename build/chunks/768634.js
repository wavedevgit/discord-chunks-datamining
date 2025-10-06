/** Chunk was on 17938 **/
/** chunk id: 768634, original params: e,t,s (module,exports,require) **/
require.d(exports, {
  C: () => o
});
var Chunk427164 = require("./427164.js"),
  Chunk111361 = require("./111361.js"),
  Chunk474936 = require("./474936.js");
let i = (0, Chunk427164.le)({
  name: "2025-09-nitro-badge-churn-modal",
  kind: "user",
  defaultConfig: {
    enabled: false
  },
  variations: {
    1: {
      enabled: true
    }
  }
});

function o(e, t) {
  let {
    enabled: s
  } = i.useConfig({
    location: t
  });
  return !!(0, n.M5)(e, a.p9.TIER_2) && s
}