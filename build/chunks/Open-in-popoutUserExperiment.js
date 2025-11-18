/** Chunk was on 97710 **/
/** chunk id: 207035, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  P: () => i
});
let r = (0, require("./818083.js").B)({
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

function i(e) {
  return r.useExperiment({
    location: e
  }, {
    autoTrackExposure: false
  }).enabled
}