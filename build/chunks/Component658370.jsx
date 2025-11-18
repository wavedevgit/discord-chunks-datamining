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
  Chunk759291 = require("./759291.js");
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
    cardVariant: I
  } = e, T = (0, u.N)(), S = null == T ? true : T.subscription_trial, A = (0, c.N)(), C = (0, s.Rt)({
    intervalType: null == S ? true : S.interval,
    intervalCount: null == S ? true : S.interval_count
  }), N = (0, l._)({
    defaultResponse: h.intl.string(h.t["8x0jKT"]),
    onNonTier2Subscriber: h.intl.string(h.t.IJI7yk),
    onTier2TrialOffer: C,
    onTier0TrialOffer: C,
    onDiscountOffer: h.intl.formatToPlainString(h.t.bkQ4bH, {
      percent: null == A ? true : A.discount.amount
    })
  }), R = (0, f._)(I), P = e => (null == e ? true : e.hideOnHoverComponent) !== true;
  return (0, r.jsxs)("div", {
    className: a()(m.cardDescription, null == R || null == (t = R.description) ? true : t.className),
    children: [(0, r.jsx)(_.Z, {
      title: n,
      cardVariantStyleInfo: R,
      titleClassName: i,
      subtitle: E,
      description: b
    }), O && (0, r.jsx)(d.Z, {
      className: g,
      look: o.zx.Looks.BLANK,
      color: o.zx.Colors.CUSTOM,
      subscriptionTier: p.Si.TIER_2,
      textOptions: {
        textOverride: N
      },
      showGradient: true
    }), 0 !== y.length && P(null == R ? true : R.descriptionCta) && null != v && (0, r.jsx)(o.zx, {
      "data-migration-pending": true,
      className: g,
      onClick: v,
      children: y
    })]
  })
}