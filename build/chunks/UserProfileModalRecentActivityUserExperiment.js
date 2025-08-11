/** Chunk was on web.js **/
/** chunk id: 9161, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  O: () => i,
  x: () => o
});
let r = (0, require("./818083.js").B)({
    kind: "user",
    id: "2024-12_user_profile_modal_recent_activity",
    label: "User Profile Modal Recent Activity",
    defaultConfig: {
      recentActivityTabEnabled: false
    },
    treatments: [{
      id: 1,
      label: "Recent Activity Tab Enabled",
      config: {
        recentActivityTabEnabled: true
      }
    }]
  }),
  i = e => {
    let {
      location: t,
      autoTrackExposure: n = true
    } = e;
    return r.useExperiment({
      location: t
    }, {
      autoTrackExposure: n
    })
  },
  o = e => {
    let {
      location: t,
      autoTrackExposure: n = true
    } = e;
    return r.getCurrentConfig({
      location: t
    }, {
      autoTrackExposure: n
    })
  }