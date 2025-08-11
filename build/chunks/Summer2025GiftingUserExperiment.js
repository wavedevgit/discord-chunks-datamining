/** Chunk was on web.js **/
/** chunk id: 390342, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  O: () => a,
  U: () => o
});
var Chunk818083 = require("./818083.js"),
  Chunk987338 = require("./987338.js");
let o = (0, Chunk818083.B)({
  id: "2025-05_summer_2025_gifting",
  label: "Summer 2025 Gifting",
  kind: "user",
  defaultConfig: {
    enableGiftingFlow: false
  },
  commonTriggerPoint: Chunk987338.$P.CONNECTION_OPEN,
  treatments: [{
    id: 1,
    label: "Show Summer 2025 Gifting Flow",
    config: {
      enableGiftingFlow: true
    }
  }]
});

function a() {
  let {
    enableGiftingFlow: e
  } = o.useExperiment({
    location: "useIsSummer2025GiftingActive"
  }, {
    autoTrackExposure: false
  });
  return module
}