/** Chunk was on web.js **/
/** chunk id: 924540, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $H: () => b,
  GN: () => y,
  _y: () => O
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk774078 = require("./774078.js"),
  Chunk55935 = require("./55935.js"),
  Chunk74538 = require("./74538.js"),
  Chunk931118 = require("./931118.js"),
  Chunk639119 = require("./639119.js"),
  Chunk533246 = require("./533246.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk639762 = require("./639762.js");
let g = 6e4;

function E(e) {
  let {
    isTabSelected: t,
    expiresAt: n,
    trialDuration: a,
    className: d,
    tooltipTextOverride: f,
    tooltipPosition: _
  } = e, p = i.useMemo(() => Date.parse(n), [n]), E = (0, c.Z)(p, g);
  return Object.values(E).every(e => 0 === e) ? null : (0, r.jsx)(s.u, {
    text: null != f ? f : (0, u.QX)(E, {
      days: h.t.qVGNkU,
      hours: h.t.wyg9a9,
      minutes: h.t.IzmIlV
    }),
    position: null != _ ? _ : "top",
    children: (0, r.jsxs)("div", {
      className: o()(m.premiumTrialBadge, m.premiumTrialAcknowledgedBadge, d, {
        [m.premiumTrialBadgeSelected]: t
      }),
      children: [(0, r.jsx)(l.T39, {
        size: "custom",
        width: 20,
        height: 20,
        color: "currentColor",
        className: m.premiumTrialBadgeIcon
      }), (0, r.jsxs)(l.Text, {
        variant: "eyebrow",
        children: [" ", a, " "]
      })]
    })
  })
}

function b(e) {
  var t;
  let {
    isTabSelected: n,
    trialOffer: i
  } = e, a = null == (t = (0, _.N)()) ? true : t.subscription_trial, o = (0, d.a5)({
    intervalType: null == a ? true : a.interval,
    intervalCount: null == a ? true : a.interval_count
  }), s = (0, p.YF)(i), {
    hasExperimentalTooltip: l
  } = (0, f.ZP)("PremiumOfferTabBadge");
  return (0, r.jsx)(O, {
    isTabSelected: n,
    badgeCopy: o,
    offerExpiresAt: i.expires_at,
    tooltipTextOverride: l ? s : null,
    tooltipPosition: l ? "right" : "top"
  })
}

function y(e) {
  let {
    isTabSelected: t,
    userDiscount: n,
    includesAmountOff: i
  } = e, a = h.intl.formatToPlainString(h.t.iiLbvu, {
    percent: n.discount.amount
  }), o = (0, p.h$)(n), {
    hasExperimentalTooltip: s
  } = (0, f.ZP)("PremiumOfferTabBadge");
  return (0, r.jsx)(O, {
    isTabSelected: t,
    badgeCopy: i ? a : h.intl.string(h.t["/DTtr6"]),
    offerExpiresAt: n.expires_at,
    tooltipTextOverride: s ? o : null,
    tooltipPosition: s ? "right" : "top"
  })
}

function O(e) {
  let {
    isTabSelected: t,
    badgeCopy: n,
    offerExpiresAt: i,
    tooltipTextOverride: a,
    tooltipPosition: s
  } = e;
  return null != i ? (0, r.jsx)(E, {
    expiresAt: i,
    isTabSelected: t,
    trialDuration: n,
    tooltipTextOverride: a,
    tooltipPosition: s
  }) : (0, r.jsx)("div", {
    className: o()(m.premiumTrialBadge, m.premiumOfferUnackedBadge),
    children: (0, r.jsx)(l.Text, {
      variant: "eyebrow",
      className: m.premiumOfferBadgeCopy,
      children: n
    })
  })
}