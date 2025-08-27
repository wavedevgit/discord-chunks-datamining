/** Chunk was on web.js **/
/** chunk id: 885145, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => a
});
var Chunk818083 = require("./818083.js"),
  Chunk987338 = require("./987338.js");
let a = (0, Chunk818083.B)({
  kind: "user",
  id: "2025-08_referral_program_relaxed_banner_eligibility",
  label: "Referral Program Relaxed Banner Eligibility Experiment",
  defaultConfig: {
    enabled: false
  },
  commonTriggerPoint: Chunk987338.$P.CONNECTION_OPEN,
  treatments: [{
    id: 0,
    label: "Control group. Users need eligible friends to see the referral program banner.",
    config: {
      enabled: false
    }
  }, {
    id: 1,
    label: "Treatment Group 1. Users do not need eligible friends to see the referral program banner.",
    config: {
      enabled: true
    }
  }]
})