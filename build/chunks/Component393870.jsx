/** Chunk was on 92643 **/
/** chunk id: 393870, original params: t,e,l (module,exports,require) **/
require.d(exports, {
  default: () => k
}), require("./896048.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk106778 = require("./106778.js"),
  Chunk575593 = require("./575593.js"),
  Chunk158954 = require("./158954.js"),
  Chunk397927 = require("./397927.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk552736 = require("./552736.js"),
  Chunk206835 = require("./206835.js"),
  Chunk298072 = require("./298072.js"),
  Chunk993408 = require("./993408.js"),
  Chunk450481 = require("./450481.js"),
  Chunk645178 = require("./645178.js"),
  Chunk442759 = require("./442759.js"),
  Chunk306710 = require("./306710.js"),
  Chunk623373 = require("./623373.js"),
  Chunk660653 = require("./660653.js"),
  Chunk524246 = require("./524246.jsx"),
  Chunk14368 = require("./14368.js"),
  Chunk213530 = require("./213530.jsx"),
  Chunk961883 = require("./961883.js"),
  Chunk758836 = require("./758836.js"),
  Chunk290964 = require("./290964.js");
let k = t => {
  var e;
  let l, k, {
      transitionState: w,
      product: y,
      onClose: I,
      analyticsLocations: P,
      overrideTitle: b,
      overrideDescription: g,
      shouldShowPromotionalExperience: j,
      purchaseType: D = O.gs.FIAT,
      overrideGraphic: N,
      rentalDuration: S,
      rentalExpiresAt: F
    } = t,
    M = (0, f.Q)(y),
    V = (0, L.rb)(y, M),
    {
      analyticsLocations: B
    } = (0, u.Ay)([...P, o.A.COLLECTIBLES_COLLECTED_MODAL]),
    {
      hasRequiredProductItems: G
    } = (t => {
      let {
        firstProfileEffect: e,
        firstAvatarDecoration: l,
        firstNameplate: r
      } = (0, C.f5)(t), n = (0, p.aw)(t);
      return {
        firstAvatarDecoration: l,
        firstProfileEffect: e,
        firstNameplate: r,
        isBundle: n,
        hasRequiredProductItems: n ? (0, m.u)(t) : null != l || null != e || null != r
      }
    })(V),
    {
      promotionalRewardCollectedText: W,
      openProfileSettings: $
    } = (l = (0, c.A)(), k = (0, d.A)({
      analyticsLocations: B
    }), {
      giftingPromotionConfig: l,
      promotionalRewardCollectedText: null == l || null == (e = l.giftPurchaseConfirmation) ? true : e.rewardCollectedText(),
      openProfileSettings: k
    }),
    {
      environment: q,
      modalRef: z,
      confettiCanvas: H,
      setConfettiCanvas: K,
      customConfettiDisplayOptions: Q
    } = (0, T.mO)(V, D),
    U = (0, A.o7)(V);
  (0, T.$V)(V, B);
  let {
    handleUseNow: Y,
    isApplying: J
  } = (0, E.p)({
    product: V,
    onSuccess: I,
    onError: I
  }), X = (0, T.$k)({
    product: V,
    overrideTitle: b,
    isVariantsGroupEnabled: true,
    shouldShowPromotionalExperience: j,
    productName: U,
    rentalDuration: S
  }), Z = (0, T.v8)({
    product: V,
    overrideDescription: g,
    productName: U,
    shouldShowPromotionalExperience: j,
    promotionalRewardCollectedText: W,
    isRental: null != S,
    expiresAt: F
  }), tt = (0, T.aG)({
    product: V,
    onClose: I,
    analyticsLocations: B,
    hasRequiredProductItems: G,
    handleUseNow: Y,
    isApplying: J,
    openProfileSettings: $
  }), te = "6/4";
  switch (V.type) {
    case a.R.NAMEPLATE:
    case a.R.AVATAR_DECORATION:
      te = "16/9";
      break;
    case a.R.BUNDLE:
    case a.R.PROFILE_EFFECT:
    default:
      te = "6/4"
  }
  let {
    confettiColors: tl
  } = (0, v.A)(V.styles), tr = null != N ? N : {
    type: "dynamic",
    component: i.Oz7.COLLECTIBLES_PREVIEW,
    aspectRatio: te,
    props: {
      product: V,
      forCollectedModal: true
    }
  };
  return (0, r.jsx)(u.f5, {
    value: B,
    children: (0, r.jsxs)("div", {
      ref: z,
      children: [(0, r.jsx)(n.Fk, {
        ref: K,
        className: _.L,
        environment: q
      }), (0, r.jsx)(s.ExpressiveModal, {
        graphic: tr,
        title: X,
        subtitle: null != Z ? Z : true,
        onClose: I,
        transitionState: w,
        actions: tt
      }), null != Q ? (0, r.jsx)(h.K, {
        options: Q
      }) : (0, r.jsx)(x.A, {
        confettiTarget: z.current,
        confettiCanvas: H,
        sprites: (0, R.rA)(V.categorySkuId),
        colors: null == tl ? true : tl.map(t => t.toHexString())
      })]
    })
  })
}