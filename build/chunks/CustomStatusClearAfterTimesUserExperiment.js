/** Chunk was on 76215 **/
/** chunk id: 644540, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  P: () => l
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

function l(e) {
  let {
    location: t,
    autoTrackExposure: n = true
  } = e, {
    enabled: l
  } = r.useExperiment({
    location: t
  }, {
    autoTrackExposure: n
  });
  return l
}