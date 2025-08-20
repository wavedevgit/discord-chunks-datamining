/** Chunk was on web.js **/
/** chunk id: 870041, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ZP: () => o,
  xI: () => a
});
var Chunk818083 = require("./818083.js"),
  Chunk987338 = require("./987338.js"),
  a = function(e) {
    return e.Control = "CONTROL", e.Interactive = "INTERACTIVE", e.Static = "STATIC", e
  }({});
let o = (0, Chunk818083.B)({
  kind: "user",
  id: "2025-08_referral_program_popover",
  label: "Referral Program Popover Experiment",
  defaultConfig: {
    cohort: "CONTROL"
  },
  commonTriggerPoint: Chunk987338.$P.CONNECTION_OPEN,
  treatments: [{
    id: 0,
    label: "Control group. Users see existing copy.",
    config: {
      cohort: "CONTROL"
    }
  }, {
    id: 1,
    label: "Treatment Group 1. Users see an interactive popover.",
    config: {
      cohort: "INTERACTIVE"
    }
  }, {
    id: 2,
    label: "Treatment Group 2. Users see a static, flat popover.",
    config: {
      cohort: "STATIC"
    }
  }]
})