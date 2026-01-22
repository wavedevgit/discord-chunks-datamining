/** Chunk was on 21738 **/
/** chunk id: 700228, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  g: () => l
});
var Chunk143770 = require("./143770.js"),
  Chunk688151 = require("./688151.js");
let l = (0, Chunk143770.A)({
  kind: "user",
  id: "2025-03_test_badges_new_users",
  label: "Test Badges New Users Experiment",
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