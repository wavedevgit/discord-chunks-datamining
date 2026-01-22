/** Chunk was on 21738 **/
/** chunk id: 23756, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  s: () => l
});
var Chunk143770 = require("./143770.js"),
  Chunk688151 = require("./688151.js");
let l = (0, Chunk143770.A)({
  id: "2025-07_apex_cluster_randomization_aa",
  kind: "user",
  label: "Apex Cluster Randomization AA",
  defaultConfig: {
    isEnabled: false
  },
  treatments: [{
    id: 1,
    label: "AA test enabled. Noop on UI effect.",
    config: {
      isEnabled: true
    }
  }],
  commonTriggerPoint: Chunk688151.$G.CONNECTION_OPEN
})