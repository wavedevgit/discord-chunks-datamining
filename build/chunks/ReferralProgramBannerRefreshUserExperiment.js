/** Chunk was on web.js **/
/** chunk id: 503249, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $P: () => a,
  ZP: () => o
});
var Chunk818083 = require("./818083.js"),
  Chunk987338 = require("./987338.js"),
  a = function(e) {
    return e.Control = "CONTROL", e.NitroLogo = "NITRO_LOGO", e.NitroPass = "NITRO_PASS", e
  }({});
let o = (0, Chunk818083.B)({
  kind: "user",
  id: "2025-09_referral_program_banner_refresh",
  label: "Referral Program Banner Refresh Experiment",
  defaultConfig: {
    cohort: "NITRO_LOGO"
  },
  commonTriggerPoint: Chunk987338.$P.CONNECTION_OPEN,
  treatments: [{
    id: 0,
    label: "Control. Note, this is not actually but has been included as XPs must have a control group defined.",
    config: {
      cohort: "CONTROL"
    }
  }, {
    id: 1,
    label: "Treatment Group 1. Users see the rebranded referral program banner with the Nitro Logo in the progress wheel",
    config: {
      cohort: "NITRO_LOGO"
    }
  }, {
    id: 2,
    label: "Treatment Group 2. Users see the rebranded referral program banner with the Nitro Pass in the progress wheel",
    config: {
      cohort: "NITRO_PASS"
    }
  }]
})