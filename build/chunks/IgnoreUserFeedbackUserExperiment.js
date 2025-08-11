/** Chunk was on web.js **/
/** chunk id: 982863, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  C$: () => i
});
let r = (0, require("./818083.js").B)({
  kind: "user",
  id: "2025-04_ignore_user_feedback",
  label: "Ignore User Feedback Experiment",
  defaultConfig: {
    enabled: false,
    shouldGetShorterIgnoreDuration: false
  },
  treatments: [{
    id: 1,
    label: "Enable Ignore User Feedback Survey",
    config: {
      enabled: true,
      shouldGetShorterIgnoreDuration: false
    }
  }, {
    id: 2,
    label: "Enable Ignore User Feedback Survey w/ shorter duration for testing",
    config: {
      enabled: true,
      shouldGetShorterIgnoreDuration: true
    }
  }]
});

function i(e) {
  return r.getCurrentConfig({
    location: e
  }, {
    autoTrackExposure: true
  })
}