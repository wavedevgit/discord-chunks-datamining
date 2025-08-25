/** Chunk was on web.js **/
/** chunk id: 629452, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  b: () => a,
  j: () => o
});
var Chunk818083 = require("./818083.js"),
  Chunk987338 = require("./987338.js");
let o = (0, Chunk818083.B)({
  id: "2025-08_custom_theme_share_receive",
  kind: "user",
  label: "Custom Theme Share Receiver",
  defaultConfig: {
    enabled: false
  },
  commonTriggerPoint: Chunk987338.$P.CONNECTION_OPEN,
  treatments: [{
    id: 1,
    label: "Enables receiving functionality for custom client themes shared by others",
    config: {
      enabled: true
    }
  }]
});

function a(e) {
  return o.useExperiment({
    location: e
  }).enabled
}