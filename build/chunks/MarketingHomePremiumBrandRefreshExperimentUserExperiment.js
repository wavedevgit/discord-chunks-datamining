/** Chunk was on 75708 **/
/** chunk id: 220654, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  C: () => s,
  Z: () => a
});
var Chunk818083 = require("./818083.js"),
  Chunk987338 = require("./987338.js");
let s = (0, Chunk818083.B)({
  kind: "user",
  id: "2025-07_marketing_home_premium_brand_refresh_experiment",
  label: "Marketing Home Premium Brand Refresh Experiment",
  defaultConfig: {
    enabled: false
  },
  commonTriggerPoint: Chunk987338.$P.CONNECTION_OPEN,
  treatments: [{
    id: 0,
    label: "User sees control marketing home design",
    config: {
      enabled: false
    }
  }, {
    id: 1,
    label: "User sees premium brand refresh marketing home design",
    config: {
      enabled: true
    }
  }]
});

function a(e) {
  let {
    location: t
  } = e;
  return s.useExperiment({
    location: t
  }, {
    autoTrackExposure: true
  }).enabled
}