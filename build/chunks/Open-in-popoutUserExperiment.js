/** Chunk was on 71568 **/
/** chunk id: 207035, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  P: () => o
});
let i = (0, require("./818083.js").B)({
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

function o(e) {
  return i.useExperiment({
    location: e
  }, {
    autoTrackExposure: false
  }).enabled
}