/** Chunk was on 1272 **/
/** chunk id: 434878, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => l
});
var Chunk818083 = require("./818083.js"),
  Chunk987338 = require("./987338.js");
let l = (0, Chunk818083.B)({
  kind: "user",
  id: "2025-05_reverse_trial_promotion",
  label: "Reverse Trials",
  defaultConfig: {
    enabled: false
  },
  commonTriggerPoint: Chunk987338.$P.CONNECTION_OPEN,
  treatments: [{
    id: 1,
    label: "Users receives reverse trial + 1 week follow-up offer",
    config: {
      enabled: true
    }
  }]
})