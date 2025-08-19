/** Chunk was on 66181 **/
/** chunk id: 879463, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  ZP: () => r
});
let i = (0, require("./818083.js").B)({
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
  r = e => {
    let {
      location: t,
      autoTrackExposure: n = true,
      trackExposureOptions: r = {}
    } = e;
    return i.useExperiment({
      location: t
    }, {
      autoTrackExposure: n,
      trackExposureOptions: r
    })
  }