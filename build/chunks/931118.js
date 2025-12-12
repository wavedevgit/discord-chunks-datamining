/** Chunk was on web.js **/
/** chunk id: 931118, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ZP: () => a,
  tE: () => i
});
var Chunk722733 = require("./722733.js"),
  i = function(e) {
    return e.CONTROL = "control", e.NAGBAR_REFRESH = "nagbar-refresh", e.OFFER_BADGE = "offer-badge", e.OFFER_COUNTDOWN = "offer-countdown", e.HERO_COUNTDOWN = "hero-countdown", e
  }({});
let o = (0, Chunk722733.Z)({
    kind: "user",
    name: "2025-10-offer-reminders-ux-experiment",
    defaultConfig: {
      variant: "control",
      showNagbar: true,
      hasExperimentalTooltip: false,
      hasNitroTabBadgeOfferReminder: false
    },
    variations: {
      1: {
        variant: "nagbar-refresh",
        showNagbar: true,
        hasExperimentalTooltip: true,
        hasNitroTabBadgeOfferReminder: false
      },
      2: {
        variant: "offer-badge",
        showNagbar: false,
        hasExperimentalTooltip: true,
        hasNitroTabBadgeOfferReminder: true
      },
      3: {
        variant: "offer-countdown",
        showNagbar: false,
        hasExperimentalTooltip: true,
        hasNitroTabBadgeOfferReminder: true
      },
      4: {
        variant: "hero-countdown",
        showNagbar: false,
        hasExperimentalTooltip: true,
        hasNitroTabBadgeOfferReminder: true
      }
    }
  }),
  a = e => o.useConfig({
    location: e
  })