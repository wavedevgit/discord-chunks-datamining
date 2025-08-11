/** Chunk was on 1272 **/
/** chunk id: 66154, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  y: () => l
});
var Chunk987170 = require("./987170.js"),
  Chunk987338 = require("./987338.js");
let l = (0, Chunk987170.Z)({
  kind: "user",
  id: "2025-03_test_badges_new_users",
  label: "Test Badges New Users Experiment",
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