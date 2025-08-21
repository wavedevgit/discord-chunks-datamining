/** Chunk was on web.js **/
/** chunk id: 438379, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  J: () => i,
  m: () => r
});
let r = (0, require("./818083.js").B)({
  kind: "user",
  id: "2025-07_user_profile_holdout_h2",
  label: "User Profile Holdout H2 Experiment",
  defaultConfig: {
    isInHoldout: false
  },
  treatments: [{
    id: 1,
    label: "Is in holdout",
    config: {
      isInHoldout: true
    }
  }]
});

function i(e) {
  let {
    location: t,
    autoTrackExposure: n = true
  } = e, {
    isInHoldout: i
  } = r.useExperiment({
    location: t
  }, {
    autoTrackExposure: n
  });
  return i
}