/** Chunk was on web.js **/
/** chunk id: 388081, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  C: () => a
});
var Chunk818083 = require("./818083.js"),
  Chunk987338 = require("./987338.js");
let a = (0, Chunk818083.B)({
  id: "2025-06_soundboard_default_reordering",
  kind: "user",
  label: "Soundboard Default Reordering",
  defaultConfig: {
    moveDefaultToBottom: false,
    alwaysStickyUpsell: false
  },
  commonTriggerPoint: Chunk987338.$P.CONNECTION_OPEN,
  treatments: [{
    id: 1,
    label: "Re-orders the default soundboard sounds to the bottom for non-Nitro users.",
    config: {
      moveDefaultToBottom: true,
      alwaysStickyUpsell: false
    }
  }, {
    id: 2,
    label: "Test the performance of an upsell that is always sticky, even when the locked section is not in view.",
    config: {
      moveDefaultToBottom: true,
      alwaysStickyUpsell: true
    }
  }]
})