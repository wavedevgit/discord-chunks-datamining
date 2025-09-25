/** Chunk was on 17938 **/
/** chunk id: 768634, original params: e,s,t (module,exports,require) **/
require.d(exports, {
  C: () => i
});
var Chunk427164 = require("./427164.js"),
  Chunk474936 = require("./474936.js");
let a = (0, Chunk427164.le)({
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

function i(e, s) {
  let {
    enabled: t
  } = a.useConfig({
    location: s
  });
  return e === n.p9.TIER_2 && t
}