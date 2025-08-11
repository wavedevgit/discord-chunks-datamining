/** Chunk was on 75708 **/
/** chunk id: 792481, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  X: () => s
});
var Chunk818083 = require("./818083.js"),
  Chunk987338 = require("./987338.js");
let s = (0, Chunk818083.B)({
  id: "2025-04_tenure_level_up_moment",
  kind: "user",
  label: "Tenure Level Up Moment",
  defaultConfig: {
    enabled: false
  },
  commonTriggerPoint: Chunk987338.$P.CONNECTION_OPEN,
  treatments: [{
    id: 1,
    label: "Enables new animation and UI for the moment Nitro tenure levels up.",
    config: {
      enabled: true
    }
  }, {
    id: 2,
    label: "For testing: bypasses the one week time limit for showing the level up animation.",
    config: {
      enabled: true,
      bypassTimeLimit: true
    }
  }]
})