/** Chunk was on web.js **/
/** chunk id: 203311, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $u: () => s,
  Ig: () => a,
  p1: () => o
});
var Chunk818083 = require("./818083.js"),
  Chunk987338 = require("./987338.js");
let o = (0, Chunk818083.B)({
  kind: "user",
  id: "2025-04_culture_creation_holdout",
  label: "Culture Creation Holdout",
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
  } = o.useExperiment({
    location: e
  }, {
    autoTrackExposure: false
  });
  return t
}

function s(e) {
  let {
    inHoldout: t
  } = o.getCurrentConfig({
    location: e
  }, {
    autoTrackExposure: false
  });
  return t
}