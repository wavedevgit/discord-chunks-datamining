/** Chunk was on 60667 **/
/** chunk id: 398523, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => l
});
var Chunk600975 = require("./600975.js"),
  Chunk688151 = require("./688151.js");
let l = (0, Chunk600975.C)({
  kind: "user",
  id: "2025-10_recurring_3p_promotion",
  label: "Recurring 3P Promotion Experiment",
  defaultConfig: {
    enabled: false
  },
  commonTriggerPoint: Chunk688151.$G.CONNECTION_OPEN,
  treatments: [{
    id: 0,
    label: "Control group. Users do not get to see the recurring 3P promotion surfaces.",
    config: {
      enabled: false
    }
  }, {
    id: 1,
    label: "Treatment Group 1. Users see the recurring 3P promotion surfaces.",
    config: {
      enabled: true
    }
  }]
})