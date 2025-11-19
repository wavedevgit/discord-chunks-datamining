/** Chunk was on 50433 **/
/** chunk id: 111382, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  n: () => s
});
let r = (0, require("./818083.js").B)({
    id: "2024-07_quest_interactable_expired_crendentials",
    kind: "user",
    label: "Quest interactable expired crendentials errors",
    defaultConfig: {
      enabled: false
    },
    treatments: [{
      id: 0,
      label: "not interactable",
      config: {
        enabled: false
      }
    }, {
      id: 1,
      label: "interactable",
      config: {
        enabled: true
      }
    }]
  }),
  s = () => r.useExperiment({
    location: "never"
  }, {
    autoTrackExposure: false
  }).enabled