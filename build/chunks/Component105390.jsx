/** Chunk was on 3911 **/
/** chunk id: 105390, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Ag: () => S,
  MA: () => A,
  fY: () => m
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  l = require.n(Chunk503698),
  Chunk554146 = require("./554146.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk496431 = require("./496431.js"),
  Chunk826673 = require("./826673.js"),
  Chunk405269 = require("./405269.js"),
  Chunk927578 = require("./927578.js"),
  Chunk804412 = require("./804412.js"),
  Chunk234419 = require("./234419.js"),
  Chunk915516 = require("./915516.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk271300 = require("./271300.js");

function b(e) {
  let {
    isTabSelected: t,
    expiresAt: n,
    badgeCopy: r,
    className: g,
    tooltipTextOverride: p,
    tooltipPosition: f,
    shouldShowOfferReminder: C
  } = e, b = s.useMemo(() => Date.parse(n), [n]), S = (0, u.A)(b, 6e4), m = (0, c.k8)(o.M.NITRO_TAB_BADGE_OFFER_REMINDER), A = C && !m;
  return Object.values(S).every(e => 0 === e) ? null : (0, i.jsx)(a.m, {
    text: null != p ? p : (0, h.uN)(S, {
      days: v.t.qVGNkU,
      hours: v.t.wyg9a9,
      minutes: v.t.IzmIlV
    }),
    position: null != f ? f : "top",
    children: (0, i.jsxs)("div", {
      className: l()(y.Fg, A ? y.AT : y.C8, g, {
        [y.WO]: t
      }),
      children: [(0, i.jsx)(d.O4, {
        size: "custom",
        width: 20,
        height: 20,
        color: A ? "white" : "currentColor",
        className: y._q
      }), (0, i.jsx)(d.Text, {
        variant: "eyebrow",
        color: A ? "always-white" : "text-strong",
        children: r
      })]
    })
  })
}

function S(e) {
  var t;
  let {
    isTabSelected: n,
    trialOffer: s,
    shouldShowOfferReminder: r
  } = e, l = null == (t = (0, f.V)()) ? true : t.subscription_trial, o = (0, g.tS)({
    intervalType: null == l ? true : l.interval,
    intervalCount: null == l ? true : l.interval_count
  }), a = (0, C.Fu)(s), {
    hasExperimentalTooltip: d
  } = (0, p.Ay)("PremiumOfferTabBadge");
  return (0, i.jsx)(A, {
    isTabSelected: n,
    badgeCopy: o,
    offerExpiresAt: s.expires_at,
    tooltipTextOverride: d ? a : null,
    tooltipPosition: d ? "right" : "top",
    shouldShowOfferReminder: r
  })
}

function m(e) {
  let {
    isTabSelected: t,
    userDiscount: n,
    includesAmountOff: s,
    shouldShowOfferReminder: r
  } = e, l = v.intl.formatToPlainString(v.t.iiLbvu, {
    percent: n.discount.amount
  }), o = (0, C.__)(n), {
    hasExperimentalTooltip: a
  } = (0, p.Ay)("PremiumOfferTabBadge");
  return (0, i.jsx)(A, {
    isTabSelected: t,
    badgeCopy: s ? l : v.intl.string(v.t["/DTtr6"]),
    offerExpiresAt: n.expires_at,
    tooltipTextOverride: a ? o : null,
    tooltipPosition: a ? "right" : "top",
    shouldShowOfferReminder: r
  })
}

function A(e) {
  let {
    isTabSelected: t,
    badgeCopy: n,
    offerExpiresAt: s,
    tooltipTextOverride: r,
    tooltipPosition: o,
    shouldShowOfferReminder: a = false
  } = e;
  return null != s ? (0, i.jsx)(b, {
    expiresAt: s,
    isTabSelected: t,
    badgeCopy: n,
    tooltipTextOverride: r,
    tooltipPosition: o,
    shouldShowOfferReminder: a
  }) : (0, i.jsx)("div", {
    className: l()(y.Fg, y.AT),
    children: (0, i.jsx)(d.Text, {
      variant: "eyebrow",
      className: y.md,
      children: n
    })
  })
}