/** Chunk was on 1272 **/
/** chunk id: 892046, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  _: () => i
});
let r = (0, require("./818083.js").B)({
    id: "2024-09_quests_trophy_case",
    kind: "user",
    label: "Trophy Case",
    defaultConfig: {
      enabled: false
    },
    treatments: [{
      id: 0,
      label: "Control",
      config: {
        enabled: false
      }
    }, {
      id: 1,
      label: "Enabled",
      config: {
        enabled: true
      }
    }]
  }),
  i = e => {
    let {
      location: t,
      autoTrackExposure: n = false
    } = e;
    return r.useExperiment({
      location: t
    }, {
      autoTrackExposure: n
    }).enabled
  }