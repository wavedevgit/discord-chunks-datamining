/** Chunk was on 624 (572fcf0aa11379cf.js) **/
n.d(t, {
  ZP: () => i,
  eP: () => r
});
let r = (0, n(818083).B)({
    kind: "user",
    id: "2023-12_pause_subscriptions_experiment",
    label: "Pause Subscriptions Experiment",
    defaultConfig: {
      enabled: !1
    },
    treatments: [{
      id: 1,
      label: "Pause Subscription Enabled",
      config: {
        enabled: !0
      }
    }]
  }),
  i = e => {
    let {
      location: t,
      autoTrackExposure: n = !0,
      trackExposureOptions: i = {}
    } = e;
    return r.useExperiment({
      location: t
    }, {
      autoTrackExposure: n,
      trackExposureOptions: i
    })
  }