/** Chunk was on 1272 **/
/** chunk id: 340625, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => l
});
var Chunk818083 = require("./818083.js"),
  Chunk987338 = require("./987338.js");
let l = (0, Chunk818083.B)({
  kind: "user",
  id: "2025-10_recurring_3p_promotion",
  label: "Recurring 3P Promotion Experiment",
  defaultConfig: {
    enabled: false
  },
  commonTriggerPoint: Chunk987338.$P.CONNECTION_OPEN,
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