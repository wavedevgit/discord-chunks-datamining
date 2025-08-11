/** Chunk was on web.js **/
/** chunk id: 646476, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  RO: () => l,
  TX: () => d,
  Ys: () => c,
  ZP: () => f,
  rK: () => u
});
var Chunk987170 = require("./987170.js"),
  Chunk535201 = require("./535201.js"),
  Chunk987338 = require("./987338.js");
let a = new Date("2025-01-06T07:59:59.000Z"),
  s = (0, Chunk987170.Z)({
    id: "2024-11_seasonal_gifting",
    label: "Seasonal Gifting 2024",
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
  l = (0, Chunk987170.Z)({
    id: "2023-11_seasonal_gifting_marketing_2023",
    label: "Seasonal Gifting Marketing 2023",
    kind: "user",
    defaultConfig: {
      enabled: false
    },
    treatments: [{
      id: 1,
      label: "Enabled",
      config: {
        enabled: true
      }
    }]
  }),
  c = (0, Chunk987170.Z)({
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

function u() {
  return (0, Chunk535201.p)(a)
}

function d() {
  let e = u(),
    {
      enabled: t
    } = s.useExperiment({
      location: "useIsInSeasonalGiftingXPAndSeasonalGiftingActive"
    }, {
      autoTrackExposure: false
    });
  return module && exports
}
let f = s