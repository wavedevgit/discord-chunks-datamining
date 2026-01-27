/** Chunk was on web.js **/
/** chunk id: 437852, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => l,
  Fq: () => o,
  qe: () => s
});
var Chunk600975 = require("./600975.js"),
  Chunk945810 = require("./945810.js"),
  Chunk688151 = require("./688151.js");
let o = (0, Chunk945810.mj)({
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
  s = (0, Chunk600975.C)({
    id: "2025-11_seasonal_gifting_2025_reminder",
    label: "Seasonal Gifting 2025 Reminder",
    kind: "user",
    defaultConfig: {
      enabled: false
    },
    commonTriggerPoint: Chunk688151.$G.CONNECTION_OPEN,
    treatments: [{
      id: 1,
      label: "Enabled",
      config: {
        enabled: true
      }
    }]
  }),
  l = o