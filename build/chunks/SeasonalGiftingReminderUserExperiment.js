/** Chunk was on web.js **/
/** chunk id: 107756, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  IH: () => l,
  Ys: () => s,
  ZP: () => c
});
var Chunk427164 = require("./427164.js"),
  Chunk987170 = require("./987170.js"),
  Chunk987338 = require("./987338.js");
let o = (0, Chunk427164.le)({
    name: "2025-08-halloween-gifting-2025",
    kind: "user",
    defaultConfig: {
      enabled: false,
      animated: false
    },
    variations: {
      0: {
        enabled: false,
        animated: false
      },
      1: {
        enabled: true,
        animated: true
      },
      2: {
        enabled: true,
        animated: false
      }
    }
  }),
  s = (0, Chunk987170.Z)({
    id: "2024-11_seasonal_gifting_reminder",
    label: "Seasonal Gifting Reminder 2024",
    kind: "user",
    defaultConfig: {
      enabled: false
    },
    commonTriggerPoint: Chunk987338.$P.CONNECTION_OPEN,
    treatments: [{
      id: 1,
      label: "Enabled",
      config: {
        enabled: true
      }
    }]
  });

function l() {
  let {
    animated: e
  } = o.useConfig({
    location: "useIsGiftingPromotionAnimated"
  });
  return module
}
let c = o