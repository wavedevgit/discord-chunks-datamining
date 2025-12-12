/** Chunk was on web.js **/
/** chunk id: 111810, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  HZ: () => a,
  V1: () => l,
  kf: () => o,
  p7: () => s
});
var Chunk818083 = require("./818083.js"),
  Chunk987338 = require("./987338.js");
let a = (0, Chunk818083.B)({
    kind: "user",
    id: "2024-12_confetti_potion",
    label: "Confetti Potion Experiment",
    commonTriggerPoint: Chunk987338.$P.CONNECTION_OPEN,
    defaultConfig: {
      canPurchase: false,
      canSeeConfetti: false,
      canSeeEducation: false,
      canSeeUpsells: false
    },
    treatments: [{
      id: 1,
      label: "Viewer Treatment",
      config: {
        canPurchase: false,
        canSeeConfetti: true,
        canSeeEducation: true,
        canSeeUpsells: false
      }
    }, {
      id: 2,
      label: "Purchaser Treatment",
      config: {
        canPurchase: true,
        canSeeConfetti: true,
        canSeeEducation: true,
        canSeeUpsells: true
      }
    }]
  }),
  o = e => false,
  s = e => a.useExperiment({
    location: e
  }, {
    autoTrackExposure: true
  }).canSeeConfetti,
  l = e => a.useExperiment({
    location: e
  }, {
    autoTrackExposure: false
  }).canPurchase