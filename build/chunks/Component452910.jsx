/** Chunk was on web.js **/
/** chunk id: 452910, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => g
}), require("./228524.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk421380 = require("./421380.js"),
  Chunk927578 = require("./927578.js"),
  Chunk545334 = require("./545334.js"),
  Chunk422936 = require("./422936.js"),
  Chunk234419 = require("./234419.js"),
  Chunk396375 = require("./396375.jsx"),
  Chunk543233 = require("./543233.js"),
  Chunk76707 = require("./76707.jsx"),
  Chunk788868 = require("./788868.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk296388 = require("./296388.js");
let g = e => {
  var t;
  let {
    title: n,
    titleClassName: i = "",
    buttonClassName: g = "",
    subtitle: E = "",
    description: y = "",
    descriptionCta: b = "",
    isPremiumGetCta: O,
    onCtaClick: v,
    cardVariant: A
  } = e, I = (0, u.V)(), S = null == I ? true : I.subscription_trial, T = (0, c.O)(), C = (0, o.FY)({
    intervalType: null == S ? true : S.interval,
    intervalCount: null == S ? true : S.interval_count
  }), N = (0, l.G)({
    defaultResponse: h.intl.string(h.t["8x0jKT"]),
    onNonTier2Subscriber: h.intl.string(h.t.IJI7yk),
    onTier2TrialOffer: C,
    onTier0TrialOffer: C,
    onDiscountOffer: h.intl.formatToPlainString(h.t.bkQ4bH, {
      percent: null == T ? true : T.discount.amount
    })
  }), w = (0, f.Q)(A), R = e => (null == e ? true : e.hideOnHoverComponent) !== true;
  return (0, r.jsxs)("div", {
    className: a()(m.L_, null == w || null == (t = w.description) ? true : t.className),
    children: [(0, r.jsx)(p.A, {
      title: n,
      cardVariantStyleInfo: w,
      titleClassName: i,
      subtitle: E,
      description: y
    }), O && (0, r.jsx)(d.A, {
      className: g,
      look: s.$n.Looks.BLANK,
      color: s.$n.Colors.CUSTOM,
      subscriptionTier: _.pe.TIER_2,
      textOptions: {
        textOverride: N
      },
      showGradient: true
    }), 0 !== b.length && R(null == w ? true : w.descriptionCta) && null != v && (0, r.jsx)(s.$n, {
      "data-migration-pending": true,
      className: g,
      onClick: v,
      children: b
    })]
  })
}