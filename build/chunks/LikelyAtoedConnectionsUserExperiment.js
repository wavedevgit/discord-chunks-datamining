/** Chunk was on 5665 **/
/** chunk id: 276060, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  t: () => i
});
let r = (0, require("./818083.js").B)({
  kind: "user",
  id: "2024-09_likely_atoed_connections",
  label: "Likely ATO Warning",
  defaultConfig: {
    enabled: false
  },
  treatments: [{
    id: 1,
    label: "Enable Likely ATO Warning",
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