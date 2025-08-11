/** Chunk was on web.js **/
/** chunk id: 209698, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  b: () => i
});
let r = (0, require("./818083.js").B)({
  kind: "user",
  id: "2025-04_stacked_activity_cards",
  label: "User Profile Stacked Activity Cards",
  defaultConfig: {
    enabled: false
  },
  treatments: [{
    id: 1,
    label: "Enable stacked activity cards on user profile",
    config: {
      enabled: true
    }
  }]
});

function i(e) {
  let {
    location: t,
    autoTrackExposure: n = true
  } = e, {
    enabled: i
  } = r.useExperiment({
    location: t
  }, {
    autoTrackExposure: n
  });
  return i
}