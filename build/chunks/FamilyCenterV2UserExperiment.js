/** Chunk was on 30202 **/
/** chunk id: 277537, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  PO: () => a,
  yI: () => s
});
var Chunk818083 = require("./818083.js"),
  Chunk987338 = require("./987338.js");
let s = (0, Chunk818083.B)({
  kind: "user",
  id: "2025-07_family_center_v2",
  label: "Family Center V2",
  defaultConfig: {
    enabled: false
  },
  commonTriggerPoint: Chunk987338.$P.CONNECTION_OPEN,
  treatments: [{
    id: 1,
    label: "Enabled",
    config: {
      enabled: true
    }
  }]
});

function a(e) {
  return s.useExperiment({
    location: e
  }, {
    autoTrackExposure: false
  }).enabled
}