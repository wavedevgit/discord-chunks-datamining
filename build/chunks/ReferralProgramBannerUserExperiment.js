/** Chunk was on web.js **/
/** chunk id: 504692, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  S$: () => a,
  ZP: () => o
});
var Chunk818083 = require("./818083.js"),
  Chunk987338 = require("./987338.js"),
  a = function(e) {
    return e.Control = "CONTROL", e.Expressive = "EXPRESSIVE", e.Primary = "PRIMARY", e
  }({});
let o = (0, Chunk818083.B)({
  kind: "user",
  id: "2025-08_referral_program_banner",
  label: "Referral Program Banner Experiment",
  defaultConfig: {
    cohort: "CONTROL"
  },
  commonTriggerPoint: Chunk987338.$P.CONNECTION_OPEN,
  treatments: [{
    id: 0,
    label: "Control group. Users see existing referral program banner.",
    config: {
      cohort: "CONTROL"
    }
  }, {
    id: 1,
    label: "Treatment Group 1. Users see the rebranded referral program banner with an expressive gifting button",
    config: {
      cohort: "EXPRESSIVE"
    }
  }, {
    id: 2,
    label: "Treatment Group 2. Users see the rebranded referral program banner with a primary gifting button",
    config: {
      cohort: "PRIMARY"
    }
  }]
})