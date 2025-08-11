/** Chunk was on web.js **/
/** chunk id: 102824, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  j: () => a
});
var Chunk818083 = require("./818083.js");
let i = {
    overrideEligibility: false
  },
  o = (0, Chunk818083.B)({
    kind: "user",
    id: "2025-05_feedback_survey_eligibility_override",
    label: "Feedback survey eligibility override",
    defaultConfig: i,
    treatments: [{
      id: 1,
      label: "Override feedback eligibility: always show surveys",
      config: {
        overrideEligibility: true
      }
    }]
  });

function a(e) {
  let {
    location: t,
    autoTrackExposure: n = true
  } = e;
  return o.getCurrentConfig({
    location: t
  }, {
    autoTrackExposure: n
  })
}