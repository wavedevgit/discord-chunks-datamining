/** Chunk was on 21738 **/
/** chunk id: 159329, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  P3: () => i
});
let r = (0, require("./600975.js").C)({
  id: "2025-05_safety_flows",
  label: "Safety Flows",
  kind: "user",
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
  let {
    location: t
  } = e;
  return r.getCurrentConfig({
    location: t
  }, {
    autoTrackExposure: false
  }).enabled
}