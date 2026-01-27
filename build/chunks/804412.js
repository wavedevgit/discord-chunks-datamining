/** Chunk was on 93140 **/
/** chunk id: 804412, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Ay: () => a,
  CJ: () => l
});
var r, Chunk250105 = require("./250105.js"),
  l = ((r = {}).CONTROL = "control", r.NAGBAR_REFRESH = "nagbar-refresh", r.OFFER_BADGE = "offer-badge", r.OFFER_COUNTDOWN = "offer-countdown", r.HERO_COUNTDOWN = "hero-countdown", r);
let o = (0, Chunk250105.Ay)({
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