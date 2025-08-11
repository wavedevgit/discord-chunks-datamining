/** Chunk was on 75708 **/
/** chunk id: 53521, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
});
var Chunk818083 = require("./818083.js"),
  Chunk987338 = require("./987338.js");
let s = (0, Chunk818083.B)({
  kind: "user",
  id: "2025-06_referral_program_sender_copy",
  label: "Referral Program Sender Copy Experiment",
  defaultConfig: {
    enabled: false
  },
  commonTriggerPoint: Chunk987338.$P.CONNECTION_OPEN,
  treatments: [{
    id: 0,
    label: "Control group. Users see existing copy.",
    config: {
      enabled: false
    }
  }, {
    id: 1,
    label: "Treatment group. Users see updated copy.",
    config: {
      enabled: true
    }
  }]
})