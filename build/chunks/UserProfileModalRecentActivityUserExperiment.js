/** Chunk was on web.js **/
/** chunk id: 840907, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  f: () => a,
  s: () => i
});
let r = (0, require("./600975.js").C)({
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
  a = e => {
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