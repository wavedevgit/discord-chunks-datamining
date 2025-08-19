/** Chunk was on 66181 **/
/** chunk id: 658370, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
}), require("./953529.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk755721 = require("./755721.js"),
  Chunk74538 = require("./74538.js"),
  Chunk773104 = require("./773104.js"),
  Chunk104494 = require("./104494.js"),
  Chunk639119 = require("./639119.js"),
  Chunk784238 = require("./784238.jsx"),
  Chunk404615 = require("./404615.js"),
  Chunk743612 = require("./743612.jsx"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk505754 = require("./505754.js");
let b = e => {
  var t;
  let n, {
      title: r,
      titleClassName: b = "",
      buttonClassName: x = "",
      subtitle: _ = "",
      description: j = "",
      descriptionCta: E = "",
      isPremiumGetCta: C,
      onCtaClick: O,
      cardVariant: v
    } = e,
    S = (0, d.N)(),
    T = null == S ? true : S.subscription_trial,
    N = (0, c.Ng)(),
    I = (0, l.Rt)({
      intervalType: null == T ? true : T.interval,
      intervalCount: null == T ? true : T.interval_count
    }),
    y = (0, o._)({
      defaultResponse: h.intl.string(h.t["8x0jKS"]),
      onNonTier2Subscriber: h.intl.string(h.t.IJI7ys),
      onTier2TrialOffer: I,
      onTier0TrialOffer: I,
      onDiscountOffer: h.intl.formatToPlainString(h.t.bkQ4bG, {
        percent: null == N ? true : N.discount.amount
      })
    }),
    A = (0, m._)(v);
  return (0, i.jsxs)("div", {
    className: s()(f.cardDescription, null == A || null == (t = A.description) ? true : t.className),
    children: [(0, i.jsx)(p.Z, {
      title: r,
      cardVariantStyleInfo: A,
      titleClassName: b,
      subtitle: _,
      description: j
    }), C && (0, i.jsx)(u.Z, {
      className: x,
      look: a.zx.Looks.BLANK,
      color: a.zx.Colors.CUSTOM,
      subscriptionTier: g.Si.TIER_2,
      textOptions: {
        textOverride: y
      },
      showGradient: true
    }), 0 !== E.length && (null == (n = null == A ? true : A.descriptionCta) ? true : n.hideOnHoverComponent) !== true && null != O && (0, i.jsx)(a.zx, {
      "data-migration-pending": true,
      className: x,
      onClick: O,
      children: E
    })]
  })
}