/** Chunk was on 21738 **/
/** chunk id: 754380, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  _: () => l
});
var Chunk143770 = require("./143770.js"),
  Chunk688151 = require("./688151.js");
let l = (0, Chunk143770.A)({
  kind: "user",
  id: "2025-02_test_large_bucket_third",
  label: "Test Large Bucket Third Experiment",
  defaultConfig: {
    enabled: false
  },
  commonTriggerPoint: Chunk688151.$G.CONNECTION_OPEN,
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