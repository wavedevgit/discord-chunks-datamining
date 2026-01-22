/** Chunk was on web.js **/
/** chunk id: 155087, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  i: () => i
});
let r = (0, require("./600975.js").C)({
  kind: "user",
  id: "2025-04_user_profile_performance_analytics",
  label: "User Profile Performance Analytics Experiment",
  defaultConfig: {
    performanceAnalyticsEnabled: false
  },
  treatments: [{
    id: 1,
    label: "Performance analytics enabled",
    config: {
      performanceAnalyticsEnabled: true
    }
  }]
});

function i(e) {
  let {
    location: t,
    autoTrackExposure: n = true
  } = e, {
    performanceAnalyticsEnabled: i
  } = r.getCurrentConfig({
    location: t
  }, {
    autoTrackExposure: n
  });
  return i
}