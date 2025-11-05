/** Chunk was on web.js **/
/** chunk id: 2109, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  YW: () => o,
  Ys: () => s,
  ZP: () => l
});
var Chunk818083 = require("./818083.js"),
  Chunk427164 = require("./427164.js"),
  Chunk987338 = require("./987338.js");
let o = (0, Chunk427164.le)({
    name: "2025-10-seasonal-gifting-2025",
    kind: "user",
    defaultConfig: {
      enabled: false
    },
    variations: {
      0: {
        enabled: false
      },
      1: {
        enabled: true
      }
    }
  }),
  s = (0, Chunk818083.B)({
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
  }),
  l = o