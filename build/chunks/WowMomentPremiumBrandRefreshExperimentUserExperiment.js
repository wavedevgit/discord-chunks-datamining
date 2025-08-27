/** Chunk was on web.js **/
/** chunk id: 227862, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  YK: () => a,
  gJ: () => o
});
var Chunk818083 = require("./818083.js"),
  Chunk987338 = require("./987338.js");
let a = (0, Chunk818083.B)({
  kind: "user",
  id: "2025-07_wow_moment_premium_brand_refresh_experiment",
  label: "Wow Moment Premium Brand Refresh Experiment",
  defaultConfig: {
    enabled: false
  },
  commonTriggerPoint: Chunk987338.$P.CONNECTION_OPEN,
  treatments: [{
    id: 1,
    label: "User sees premium brand refresh wow moment design",
    config: {
      enabled: true
    }
  }]
});

function o(e) {
  return a.getCurrentConfig({
    location: e
  }).enabled
}