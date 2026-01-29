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
  let n, {
      title: i,
      titleClassName: f = "",
      buttonClassName: b = "",
      subtitle: h = "",
      description: E = "",
      descriptionCta: O = "",
      isPremiumGetCta: C,
      onCtaClick: x,
      cardVariant: S
    } = e,
    T = (0, d.V)(),
    I = null == T ? true : T.subscription_trial,
    y = (0, c.O)(),
    N = (0, a.FY)({
      intervalType: null == I ? true : I.interval,
      intervalCount: null == I ? true : I.interval_count
    }),
    j = (0, o.G)({
      defaultResponse: g.intl.string(g.t["8x0jKT"]),
      onNonTier2Subscriber: g.intl.string(g.t.IJI7yk),
      onTier2TrialOffer: N,
      onTier0TrialOffer: N,
      onDiscountOffer: g.intl.formatToPlainString(g.t.bkQ4bH, {
        percent: null == y ? true : y.discount.amount
      })
    }),
    v = (0, _.Q)(S);
  return (0, r.jsxs)("div", {
    className: l()(A.L_, null == v || null == (t = v.description) ? true : t.className),
    children: [(0, r.jsx)(p.A, {
      title: i,
      cardVariantStyleInfo: v,
      titleClassName: f,
      subtitle: h,
      description: E
    }), C && (0, r.jsx)(u.A, {
      className: b,
      look: s.$n.Looks.BLANK,
      color: s.$n.Colors.CUSTOM,
      subscriptionTier: m.pe.TIER_2,
      textOptions: {
        textOverride: j
      },
      showGradient: true
    }), 0 !== O.length && (null == (n = null == v ? true : v.descriptionCta) ? true : n.hideOnHoverComponent) !== true && null != x && (0, r.jsx)(s.$n, {
      "data-migration-pending": true,
      className: b,
      onClick: x,
      children: O
    })]
  })
}