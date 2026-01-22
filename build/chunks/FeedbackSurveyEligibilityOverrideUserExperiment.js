/** Chunk was on web.js **/
/** chunk id: 368854, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  P: () => s
});
var Chunk600975 = require("./600975.js");
let i = {
    overrideEligibility: false
  },
  a = (0, Chunk600975.C)({
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

function s(e) {
  let {
    location: t,
    autoTrackExposure: n = true
  } = e;
  return a.getCurrentConfig({
    location: t
  }, {
    autoTrackExposure: n
  })
}