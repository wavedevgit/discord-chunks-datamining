/** Chunk was on 1272 **/
/** chunk id: 483942, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  o: () => l
});
var Chunk987170 = require("./987170.js"),
  Chunk987338 = require("./987338.js");
let l = (0, Chunk987170.Z)({
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
  commonTriggerPoint: Chunk987338.$P.CONNECTION_OPEN
})