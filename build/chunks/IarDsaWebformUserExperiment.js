/** Chunk was on 86142 **/
/** chunk id: 158237, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Jp: () => i
});
let r = (0, require("./600975.js").C)({
  kind: "user",
  id: "2023-09_iar_dsa_webform",
  label: "Safety Experience Unauthenticated Report Form",
  defaultConfig: {
    enabled: false
  },
  treatments: [{
    id: 1,
    label: "EU user",
    config: {
      enabled: true
    }
  }, {
    id: 2,
    label: "DSA E2E testing user",
    config: {
      enabled: true
    }
  }]
});

function i(e) {
  return r.useExperiment({
    location: e
  }, {
    autoTrackExposure: true
  }).enabled
}