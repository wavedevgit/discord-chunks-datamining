/** Chunk was on 60667 **/
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
      buttonClassName: h = "",
      subtitle: b = "",
      description: E = "",
      descriptionCta: x = "",
      isPremiumGetCta: O,
      onCtaClick: C,
      cardVariant: I
    } = e,
    T = (0, d.V)(),
    S = null == T ? true : T.subscription_trial,
    j = (0, c.O)(),
    v = (0, a.FY)({
      intervalType: null == S ? true : S.interval,
      intervalCount: null == S ? true : S.interval_count
    }),
    N = (0, o.G)({
      defaultResponse: g.intl.string(g.t["8x0jKT"]),
      onNonTier2Subscriber: g.intl.string(g.t.IJI7yk),
      onTier2TrialOffer: v,
      onTier0TrialOffer: v,
      onDiscountOffer: g.intl.formatToPlainString(g.t.bkQ4bH, {
        percent: null == j ? true : j.discount.amount
      })
    }),
    y = (0, _.Q)(I);
  return (0, r.jsxs)("div", {
    className: l()(A.L_, null == y || null == (t = y.description) ? true : t.className),
    children: [(0, r.jsx)(p.A, {
      title: i,
      cardVariantStyleInfo: y,
      titleClassName: f,
      subtitle: b,
      description: E
    }), O && (0, r.jsx)(u.A, {
      className: h,
      look: s.$n.Looks.BLANK,
      color: s.$n.Colors.CUSTOM,
      subscriptionTier: m.pe.TIER_2,
      textOptions: {
        textOverride: N
      },
      showGradient: true
    }), 0 !== x.length && (null == (n = null == y ? true : y.descriptionCta) ? true : n.hideOnHoverComponent) !== true && null != C && (0, r.jsx)(s.$n, {
      "data-migration-pending": true,
      className: h,
      onClick: C,
      children: x
    })]
  })
}