/** Chunk was on web.js **/
"use strict";
n.d(t, {
  Z: () => i
});
let r = (0, n(818083).B)({
    id: "2024-08_quests_separate_decision_endpoint",
    kind: "user",
    label: "Quests separate decision endpoint",
    defaultConfig: {
      enabled: !1
    },
    treatments: [{
      id: 0,
      label: "Control",
      config: {
        enabled: !1
      }
    }, {
      id: 1,
      label: "Enabled",
      config: {
        enabled: !0
      }
    }]
  }),
  i = e => {
    let {
      location: t
    } = e;
    return r.getCurrentConfig({
      location: t
    }, {
      autoTrackExposure: !1
    }).enabled
  }