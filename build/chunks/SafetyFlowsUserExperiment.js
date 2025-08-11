/** Chunk was on 1272 **/
/** chunk id: 886412, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  bu: () => i
});
let r = (0, require("./818083.js").B)({
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