/** Chunk was on 44011 **/
/** chunk id: 207035, original params: n,e,t (module,exports,require) **/
require.d(exports, {
  P: () => i
});
let l = (0, require("./818083.js").B)({
  kind: "user",
  id: "2023-08-30_open-in-popout",
  label: "Open Channel in Popout",
  defaultConfig: {
    enabled: false
  },
  treatments: [{
    id: 1,
    label: "Enabled",
    config: {
      enabled: true
    }
  }]
});

function i(n) {
  return l.useExperiment({
    location: n
  }, {
    autoTrackExposure: false
  }).enabled
}