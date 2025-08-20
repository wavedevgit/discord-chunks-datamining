/** Chunk was on web.js **/
/** chunk id: 879463, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ZP: () => i
});
let r = (0, require("./818083.js").B)({
    kind: "user",
    id: "2023-12_pause_subscriptions_experiment",
    label: "Pause Subscriptions Experiment",
    defaultConfig: {
      enabled: false
    },
    treatments: [{
      id: 1,
      label: "Pause Subscription Enabled",
      config: {
        enabled: true
      }
    }]
  }),
  i = e => {
    let {
      location: t,
      autoTrackExposure: n = true,
      trackExposureOptions: i = {}
    } = e;
    return r.useExperiment({
      location: t
    }, {
      autoTrackExposure: n,
      trackExposureOptions: i
    })
  }