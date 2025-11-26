/** Chunk was on 76215 **/
/** chunk id: 644540, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  P: () => i
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

function i(e) {
  let {
    location: t,
    autoTrackExposure: n = true
  } = e, {
    enabled: i
  } = r.useExperiment({
    location: t
  }, {
    autoTrackExposure: n
  });
  return i
}