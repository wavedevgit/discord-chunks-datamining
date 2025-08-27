/** Chunk was on 31649 **/
/** chunk id: 644540, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  P: () => a
});
let r = (0, require("./818083.js").B)({
  kind: "user",
  id: "2025-04_custom_status_clear_after_times",
  label: "Custom Status Clear After Times Experiment",
  defaultConfig: {
    enabled: false
  },
  treatments: [{
    id: 1,
    label: "Enable custom status clear after times",
    config: {
      enabled: true
    }
  }]
});

function a(t) {
  let {
    location: e,
    autoTrackExposure: n = true
  } = t, {
    enabled: a
  } = r.useExperiment({
    location: e
  }, {
    autoTrackExposure: n
  });
  return a
}