/** Chunk was on web.js **/
/** chunk id: 804412, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => s,
  CJ: () => i
});
var Chunk250105 = require("./250105.js"),
  i = function(e) {
    return e.CONTROL = "control", e.NAGBAR_REFRESH = "nagbar-refresh", e.OFFER_BADGE = "offer-badge", e.OFFER_COUNTDOWN = "offer-countdown", e.HERO_COUNTDOWN = "hero-countdown", e
  }({});
let a = (0, Chunk250105.Ay)({
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
  s = e => a.useConfig({
    location: e
  })