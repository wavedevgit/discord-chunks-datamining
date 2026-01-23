/** Chunk was on 41091 **/
/** chunk id: 177975, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  R: () => r
});
let l = (0, require("./600975.js").C)({
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

function r(t) {
  let {
    location: e,
    autoTrackExposure: n = true
  } = t, {
    enabled: r
  } = l.useExperiment({
    location: e
  }, {
    autoTrackExposure: n
  });
  return r
}