/** Chunk was on web.js **/
/** chunk id: 479661, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  e: () => o,
  n: () => a
});
var Chunk818083 = require("./818083.js"),
  Chunk987338 = require("./987338.js");
let a = (0, Chunk818083.B)({
  id: "2025-08_custom_theme_share_send",
  kind: "user",
  label: "Custom Theme Share Send",
  defaultConfig: {
    enabled: false
  },
  commonTriggerPoint: Chunk987338.$P.CONNECTION_OPEN,
  treatments: [{
    id: 1,
    label: "Enables sharing functionality for custom client themes",
    config: {
      enabled: true
    }
  }]
});

function o(e) {
  return a.useExperiment({
    location: e
  }).enabled
}