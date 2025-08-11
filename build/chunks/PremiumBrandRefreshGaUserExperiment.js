/** Chunk was on web.js **/
/** chunk id: 47280, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => a,
  j: () => o
});
var Chunk818083 = require("./818083.js"),
  Chunk987338 = require("./987338.js");
let o = (0, Chunk818083.B)({
  kind: "user",
  id: "2025-09_premium_brand_refresh_ga",
  label: "Premium Brand Refresh GA",
  defaultConfig: {
    enabled: false
  },
  commonTriggerPoint: Chunk987338.$P.CONNECTION_OPEN,
  treatments: [{
    id: 0,
    label: "User sees control",
    config: {
      enabled: false
    }
  }, {
    id: 1,
    label: "User sees premium brand refresh",
    config: {
      enabled: true
    }
  }]
});

function a(e) {
  let {
    location: t
  } = e;
  return o.useExperiment({
    location: t
  }, {
    autoTrackExposure: true
  }).enabled
}