/** Chunk was on 93886 **/
/** chunk id: 660000, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  S: () => o
});
var Chunk427164 = require("./427164.js"),
  Chunk111361 = require("./111361.js"),
  Chunk474936 = require("./474936.js");
let l = (0, Chunk427164.le)({
  name: "2025-10-nitro-badge-churn-reminder",
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
    enabled: n
  } = l.useConfig({
    location: t
  });
  return null != e && !!(0, i.M5)(e, a.PremiumTypes.TIER_2) && n
}