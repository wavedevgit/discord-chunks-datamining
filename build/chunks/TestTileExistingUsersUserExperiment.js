/** Chunk was on 21738 **/
/** chunk id: 297603, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  L: () => l
});
var Chunk143770 = require("./143770.js"),
  Chunk688151 = require("./688151.js");
let l = (0, Chunk143770.A)({
  kind: "user",
  id: "2025-03_test_tile_existing_users",
  label: "Test Tile Existing Users Experiment",
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