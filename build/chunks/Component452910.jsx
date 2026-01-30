/** Chunk was on 2827 **/
/** chunk id: 452910, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => f
}), require("./228524.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  l = require.n(Chunk503698),
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
let f = e => {
  var t;
  let {
    title: n,
    titleClassName: i,
    buttonClassName: f,
    subtitle: b,
    description: h,
    descriptionCta: E,
    isPremiumGetCta: O,
    onCtaClick: C,
    cardVariant: x
  } = e, S = (0, d.V)(), T = null == S ? true : S.subscription_trial, I = (0, c.O)(), y = (0, a.FY)({
    intervalType: null == T ? true : T.interval,
    intervalCount: null == T ? true : T.interval_count
  }), N = (0, o.G)({
    defaultResponse: g.intl.string(g.t["8x0jKT"]),
    onNonTier2Subscriber: g.intl.string(g.t.IJI7yk),
    onTier2TrialOffer: y,
    onTier0TrialOffer: y,
    onDiscountOffer: g.intl.formatToPlainString(g.t.bkQ4bH, {
      percent: null == I ? true : I.discount.amount
    })
  }), j = (0, _.Q)(x);
  return (0, r.jsxs)("div", {
    className: l()(A.L_, null == j || null == (t = j.overlayContainer) ? true : t.className),
    children: [(0, r.jsx)(p.A, {
      title: n,
      cardVariantStyleInfo: j,
      titleClassName: i,
      subtitle: b,
      description: h,
      isOverlay: true
    }), O && (0, r.jsx)(u.A, {
      className: f,
      look: s.$n.Looks.BLANK,
      color: s.$n.Colors.CUSTOM,
      subscriptionTier: m.pe.TIER_2,
      textOptions: {
        textOverride: N
      },
      showGradient: true
    }), null != E && null != C && (0, r.jsx)(s.$n, {
      "data-migration-pending": true,
      className: f,
      onClick: C,
      children: E
    })]
  })
}