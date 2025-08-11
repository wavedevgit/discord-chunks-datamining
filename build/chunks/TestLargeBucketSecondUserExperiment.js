/** Chunk was on 1272 **/
/** chunk id: 590894, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  q: () => l
});
var Chunk987170 = require("./987170.js"),
  Chunk987338 = require("./987338.js");
let l = (0, Chunk987170.Z)({
  kind: "user",
  id: "2025-02_test_large_bucket_second",
  label: "Test Large Bucket Second Experiment",
  defaultConfig: {
    enabled: false
  },
  commonTriggerPoint: Chunk987338.$P.CONNECTION_OPEN,
  treatments: [{
    id: 1,
    label: "Variation with first treatment enabled",
    config: {
      enabled: true
    }
  }, {
    id: 2,
    label: "Variation with second treatment enabled",
    config: {
      enabled: true
    }
  }]
})