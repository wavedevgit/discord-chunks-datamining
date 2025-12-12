/** Chunk was on web.js **/
/** chunk id: 658370, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => g
}), require("./953529.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk755721 = require("./755721.js"),
  Chunk74538 = require("./74538.js"),
  Chunk773104 = require("./773104.js"),
  Chunk622909 = require("./622909.js"),
  Chunk639119 = require("./639119.js"),
  Chunk784238 = require("./784238.jsx"),
  Chunk176782 = require("./176782.js"),
  Chunk743612 = require("./743612.jsx"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk290643 = require("./290643.js");
let g = e => {
  var t;
  let {
    title: n,
    titleClassName: i = "",
    buttonClassName: g = "",
    subtitle: E = "",
    description: b = "",
    descriptionCta: y = "",
    isPremiumGetCta: O,
    onCtaClick: v,
    cardVariant: S
  } = e, I = (0, u.N)(), T = null == I ? true : I.subscription_trial, C = (0, c.N)(), A = (0, s.Rt)({
    intervalType: null == T ? true : T.interval,
    intervalCount: null == T ? true : T.interval_count
  }), N = (0, l._)({
    defaultResponse: m.intl.string(m.t["8x0jKT"]),
    onNonTier2Subscriber: m.intl.string(m.t.IJI7yk),
    onTier2TrialOffer: A,
    onTier0TrialOffer: A,
    onDiscountOffer: m.intl.formatToPlainString(m.t.bkQ4bH, {
      percent: null == C ? true : C.discount.amount
    })
  }), P = (0, f._)(S), R = e => (null == e ? true : e.hideOnHoverComponent) !== true;
  return (0, r.jsxs)("div", {
    className: a()(h.cardDescription, null == P || null == (t = P.description) ? true : t.className),
    children: [(0, r.jsx)(p.Z, {
      title: n,
      cardVariantStyleInfo: P,
      titleClassName: i,
      subtitle: E,
      description: b
    }), O && (0, r.jsx)(d.Z, {
      className: g,
      look: o.zx.Looks.BLANK,
      color: o.zx.Colors.CUSTOM,
      subscriptionTier: _.Si.TIER_2,
      textOptions: {
        textOverride: N
      },
      showGradient: true
    }), 0 !== y.length && R(null == P ? true : P.descriptionCta) && null != v && (0, r.jsx)(o.zx, {
      "data-migration-pending": true,
      className: g,
      onClick: v,
      children: y
    })]
  })
}