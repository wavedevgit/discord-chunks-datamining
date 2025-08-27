/** Chunk was on web.js **/
/** chunk id: 681926, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  T: () => s
});
var Chunk818083 = require("./818083.js"),
  Chunk984134 = require("./984134.js");
let a = {
    doGroupEligibilityCheck: false
  },
  o = (0, Chunk818083.B)({
    kind: "user",
    id: "2025-04_feedback_trigger_experiment",
    label: "Feedback trigger logic changes",
    defaultConfig: a,
    treatments: [{
      id: 1,
      label: "Do group eligibility check",
      config: {
        doGroupEligibilityCheck: true
      }
    }]
  });

function s(e) {
  let {
    location: t,
    autoTrackExposure: n = true
  } = e, {
    isInHoldout: r
  } = i.Y.getCurrentConfig({
    location: t
  }, {
    autoTrackExposure: n
  });
  return o.getCurrentConfig({
    location: t
  }, {
    disable: r,
    autoTrackExposure: n
  })
}