/** Chunk was on 2827 **/
/** chunk id: 110919, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Ay: () => i
});
let r = (0, require("./600975.js").C)({
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