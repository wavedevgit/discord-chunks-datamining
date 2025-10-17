/** Chunk was on web.js **/
/** chunk id: 931118, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ZP: () => o,
  tE: () => i
});
var Chunk722733 = require("./722733.js"),
  i = function(e) {
    return e.CONTROL = "control", e.NAGBAR_REFRESH = "nagbar-refresh", e.OFFER_BADGE = "offer-badge", e.OFFER_COUNTDOWN = "offer-countdown", e.HERO_COUNTDOWN = "hero-countdown", e
  }({});
let a = (0, Chunk722733.Z)({
    kind: "user",
    name: "2025-10-offer-reminders-ux-experiment",
    defaultConfig: {
      variant: "control",
      showNagbar: true,
      hasExperimentalTooltip: false
    },
    variations: {
      1: {
        variant: "nagbar-refresh",
        showNagbar: true,
        hasExperimentalTooltip: true
      },
      2: {
        variant: "offer-badge",
        showNagbar: false,
        hasExperimentalTooltip: true
      },
      3: {
        variant: "offer-countdown",
        showNagbar: false,
        hasExperimentalTooltip: true
      },
      4: {
        variant: "hero-countdown",
        showNagbar: false,
        hasExperimentalTooltip: true
      }
    }
  }),
  o = e => a.useConfig({
    location: e
  })