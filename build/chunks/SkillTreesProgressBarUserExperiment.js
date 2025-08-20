/** Chunk was on 91488 **/
/** chunk id: 742139, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  V: () => o,
  Z: () => a
});
var Chunk818083 = require("./818083.js"),
  Chunk987338 = require("./987338.js");
let l = (0, Chunk818083.B)({
  kind: "user",
  id: "2025-06_skill_trees_progress_bar",
  commonTriggerPoint: Chunk987338.$P.CONNECTION_OPEN,
  label: "Skill Trees New Progress Bar",
  defaultConfig: {
    enabled: false
  },
  treatments: [{
    id: 1,
    label: "enabled",
    config: {
      enabled: true
    }
  }]
});

function o(e) {
  return l.useExperiment({
    location: e
  }, {
    autoTrackExposure: false
  }).enabled
}
let a = l