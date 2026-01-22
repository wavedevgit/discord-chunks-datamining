/** Chunk was on web.js **/
/** chunk id: 61925, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  fj: () => i
});
let r = (0, require("./600975.js").C)({
  kind: "user",
  id: "2025-07_age_verification_feedback",
  label: "Age Verification Feedback Experiment",
  defaultConfig: {
    enabled: false
  },
  treatments: [{
    id: 1,
    label: "Enable Age Verification Feedback Survey",
    config: {
      enabled: true
    }
  }]
});

function i(e) {
  let {
    enabled: t
  } = r.getCurrentConfig({
    location: e
  }, {
    autoTrackExposure: true
  });
  return t
}