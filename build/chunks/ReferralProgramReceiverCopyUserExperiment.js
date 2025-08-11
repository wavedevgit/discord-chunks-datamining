/** Chunk was on web.js **/
/** chunk id: 857262, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => o
});
var Chunk818083 = require("./818083.js"),
  Chunk987338 = require("./987338.js");
let o = (0, Chunk818083.B)({
  kind: "user",
  id: "2025-06_referral_program_receiver_copy",
  label: "Referral Program Receiver Copy Experiment",
  defaultConfig: {
    treatmentGroup: 0
  },
  commonTriggerPoint: Chunk987338.$P.CONNECTION_OPEN,
  treatments: [{
    id: 0,
    label: "Control group. Users see existing DM embed copy.",
    config: {
      treatmentGroup: 0
    }
  }, {
    id: 1,
    label: "Treatment group. Users see variant 1 of the alternate DM embed copy.",
    config: {
      treatmentGroup: 1
    }
  }, {
    id: 2,
    label: "Treatment group. Users see variant 2 of the alternate DM embed copy.",
    config: {
      treatmentGroup: 2
    }
  }, {
    id: 3,
    label: "Treatment group. Users see variant 3 of the alternate DM embed copy.",
    config: {
      treatmentGroup: 3
    }
  }, {
    id: 4,
    label: "Treatment group. Users see variant 4 of the alternate DM embed copy.",
    config: {
      treatmentGroup: 4
    }
  }]
})