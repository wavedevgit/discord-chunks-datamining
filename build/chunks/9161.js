/** Chunk was on web (https://canary.discord.comweb.6d4953f88f353958.js.js) **/
"use strict";
n.d(t, {
  O: () => i,
  x: () => o
});
let r = (0, n(818083).B)({
    kind: "user",
    id: "2024-12_user_profile_modal_recent_activity",
    label: "User Profile Modal Recent Activity",
    defaultConfig: {
      recentActivityTabEnabled: !1
    },
    treatments: [{
      id: 1,
      label: "Recent Activity Tab Enabled",
      config: {
        recentActivityTabEnabled: !0
      }
    }]
  }),
  i = e => {
    let {
      location: t,
      autoTrackExposure: n = !0
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
      autoTrackExposure: n = !0
    } = e;
    return r.getCurrentConfig({
      location: t
    }, {
      autoTrackExposure: n
    })
  }