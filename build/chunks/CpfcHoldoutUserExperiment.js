/** Chunk was on 1272 **/
/** chunk id: 43169, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  jX: () => a,
  kF: () => l
});
var Chunk818083 = require("./818083.js"),
  Chunk987338 = require("./987338.js");
let l = (0, Chunk818083.B)({
  kind: "user",
  id: "2025-08_cpfc_holdout",
  label: "CPFC Holdout",
  commonTriggerPoint: Chunk987338.$P.CONNECTION_OPEN,
  defaultConfig: {
    inHoldout: false
  },
  treatments: [{
    id: 1,
    label: "In Holdout",
    config: {
      inHoldout: true
    }
  }]
});

function a(e) {
  let {
    inHoldout: t
  } = l.useExperiment({
    location: e
  }, {
    autoTrackExposure: false
  });
  return t
}