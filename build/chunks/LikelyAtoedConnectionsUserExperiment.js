/** Chunk was on 50118 **/
/** chunk id: 276060, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  t: () => r
});
let i = (0, require("./818083.js").B)({
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

function r(e) {
  let {
    location: t,
    autoTrackExposure: n = true
  } = e, {
    enabled: r
  } = i.useExperiment({
    location: t
  }, {
    autoTrackExposure: n
  });
  return r
}