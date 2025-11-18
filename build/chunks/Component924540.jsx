/** Chunk was on web.js **/
/** chunk id: 924540, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $H: () => O,
  GN: () => v,
  _y: () => I
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk704215 = require("./704215.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk774078 = require("./774078.js"),
  Chunk266454 = require("./266454.js"),
  Chunk55935 = require("./55935.js"),
  Chunk74538 = require("./74538.js"),
  Chunk931118 = require("./931118.js"),
  Chunk639119 = require("./639119.js"),
  Chunk533246 = require("./533246.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk639762 = require("./639762.js");
let b = 6e4;

function y(e) {
  let {
    isTabSelected: t,
    expiresAt: n,
    badgeCopy: a,
    className: _,
    tooltipTextOverride: p,
    tooltipPosition: h,
    shouldShowOfferReminder: m
  } = e, y = i.useMemo(() => Date.parse(n), [n]), O = (0, u.Z)(y, b), v = (0, d.zu)(s.z.NITRO_TAB_BADGE_OFFER_REMINDER), I = m && !v;
  return Object.values(O).every(e => 0 === e) ? null : (0, r.jsx)(l.u, {
    text: null != p ? p : (0, f.QX)(O, {
      days: g.t.qVGNkU,
      hours: g.t.wyg9a9,
      minutes: g.t.IzmIlV
    }),
    position: null != h ? h : "top",
    children: (0, r.jsxs)("div", {
      className: o()(E.premiumTrialBadge, I ? E.premiumOfferUnackedBadge : E.premiumOfferWithTimerAcknowledgedBadge, _, {
        [E.premiumTrialBadgeSelected]: t
      }),
      children: [(0, r.jsx)(c.T39, {
        size: "custom",
        width: 20,
        height: 20,
        color: I ? "white" : "currentColor",
        className: E.premiumTrialBadgeIcon
      }), (0, r.jsx)(c.Text, {
        variant: "eyebrow",
        color: I ? "always-white" : "text-primary",
        children: a
      })]
    })
  })
}

function O(e) {
  var t;
  let {
    isTabSelected: n,
    trialOffer: i,
    shouldShowOfferReminder: a
  } = e, o = null == (t = (0, h.N)()) ? true : t.subscription_trial, s = (0, _.a5)({
    intervalType: null == o ? true : o.interval,
    intervalCount: null == o ? true : o.interval_count
  }), l = (0, m.YF)(i), {
    hasExperimentalTooltip: c
  } = (0, p.ZP)("PremiumOfferTabBadge");
  return (0, r.jsx)(I, {
    isTabSelected: n,
    badgeCopy: s,
    offerExpiresAt: i.expires_at,
    tooltipTextOverride: c ? l : null,
    tooltipPosition: c ? "right" : "top",
    shouldShowOfferReminder: a
  })
}

function v(e) {
  let {
    isTabSelected: t,
    userDiscount: n,
    includesAmountOff: i,
    shouldShowOfferReminder: a
  } = e, o = g.intl.formatToPlainString(g.t.iiLbvu, {
    percent: n.discount.amount
  }), s = (0, m.h$)(n), {
    hasExperimentalTooltip: l
  } = (0, p.ZP)("PremiumOfferTabBadge");
  return (0, r.jsx)(I, {
    isTabSelected: t,
    badgeCopy: i ? o : g.intl.string(g.t["/DTtr6"]),
    offerExpiresAt: n.expires_at,
    tooltipTextOverride: l ? s : null,
    tooltipPosition: l ? "right" : "top",
    shouldShowOfferReminder: a
  })
}

function I(e) {
  let {
    isTabSelected: t,
    badgeCopy: n,
    offerExpiresAt: i,
    tooltipTextOverride: a,
    tooltipPosition: s,
    shouldShowOfferReminder: l = false
  } = e;
  return null != i ? (0, r.jsx)(y, {
    expiresAt: i,
    isTabSelected: t,
    badgeCopy: n,
    tooltipTextOverride: a,
    tooltipPosition: s,
    shouldShowOfferReminder: l
  }) : (0, r.jsx)("div", {
    className: o()(E.premiumTrialBadge, E.premiumOfferUnackedBadge),
    children: (0, r.jsx)(c.Text, {
      variant: "eyebrow",
      className: E.premiumOfferBadgeCopy,
      children: n
    })
  })
}