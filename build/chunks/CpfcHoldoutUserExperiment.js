/** Chunk was on web.js **/
/** chunk id: 43169, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  F4: () => s,
  jX: () => o,
  kF: () => a
});
var Chunk818083 = require("./818083.js"),
  Chunk987338 = require("./987338.js");
let a = (0, Chunk818083.B)({
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

function o(e) {
  let {
    inHoldout: t
  } = a.useExperiment({
    location: e
  }, {
    autoTrackExposure: false
  });
  return t
}

function s(e) {
  let {
    inHoldout: t
  } = a.getCurrentConfig({
    location: e
  }, {
    autoTrackExposure: false
  });
  return t
}