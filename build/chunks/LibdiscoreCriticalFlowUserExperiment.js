/** Chunk was on web.js **/
/** chunk id: 490569, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  S: () => a,
  h: () => s
});
var Chunk668757 = require("./668757.js"),
  Chunk818083 = require("./818083.js"),
  Chunk987338 = require("./987338.js");
let a = (0, Chunk818083.B)({
  kind: "user",
  id: "2025-04_libdiscore_critical_flow",
  label: "Require libdiscore to use the app",
  defaultConfig: {
    enabled: false
  },
  commonTriggerPoint: Chunk987338.$P.CONNECTION_OPEN,
  treatments: [{
    id: 0,
    label: "Control",
    config: {
      enabled: false
    }
  }, {
    id: 1,
    label: "Require libdiscore to use the app",
    config: {
      enabled: true
    }
  }]
});

function s() {
  return a.useExperiment({
    location: "default"
  }).enabled && (0, Chunk668757.oC)() && !__OVERLAY__
}