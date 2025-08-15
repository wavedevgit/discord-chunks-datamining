/** Chunk was on 86357 **/
/** chunk id: 293162, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => l
});
var Chunk818083 = require("./818083.js"),
  Chunk987338 = require("./987338.js");
let l = (0, Chunk818083.B)({
  kind: "user",
  id: "2025-05_activity_popout__popin",
  label: "Activity Pop-Out & Pop-In Experiment",
  defaultConfig: {
    enabled: false
  },
  commonTriggerPoint: Chunk987338.$P.CONNECTION_OPEN,
  treatments: [{
    id: 1,
    label: "Enable popping out an activity to another window and popping it back into the main Discord app window",
    config: {
      enabled: true
    }
  }]
})