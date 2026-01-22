/** Chunk was on 92643 **/
/** chunk id: 393870, original params: t,e,l (module,exports,require) **/
require.d(exports, {
  default: () => w
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
  Chunk442759 = require("./442759.js"),
  Chunk306710 = require("./306710.js"),
  Chunk660653 = require("./660653.js"),
  Chunk524246 = require("./524246.jsx"),
  Chunk14368 = require("./14368.js"),
  Chunk213530 = require("./213530.jsx"),
  Chunk767503 = require("./767503.js"),
  Chunk764999 = require("./764999.js"),
  Chunk961883 = require("./961883.js"),
  Chunk758836 = require("./758836.js"),
  Chunk290964 = require("./290964.js");
let w = t => {
  var e;
  let l, w, {
      transitionState: y,
      product: I,
      onClose: _,
      analyticsLocations: P,
      overrideTitle: b,
      overrideDescription: g,
      shouldShowPromotionalExperience: j,
      purchaseType: D = O.gs.FIAT,
      overrideGraphic: N,
      rentalDuration: S,
      rentalExpiresAt: F
    } = t,
    M = (0, f.Q)(I),
    V = (0, R.r)(I, M),
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
      } = (0, A.f5)(t), n = (0, p.aw)(t);
      return {
        firstAvatarDecoration: l,
        firstProfileEffect: e,
        firstNameplate: r,
        isBundle: n,
        hasRequiredProductItems: n ? (0, L.u)(t) : null != l || null != e || null != r
      }
    })(V),
    {
      promotionalRewardCollectedText: W,
      openProfileSettings: $
    } = (l = (0, c.A)(), w = (0, d.A)({
      analyticsLocations: B
    }), {
      giftingPromotionConfig: l,
      promotionalRewardCollectedText: null == l || null == (e = l.giftPurchaseConfirmation) ? true : e.rewardCollectedText(),
      openProfileSettings: w
    }),
    {
      environment: q,
      modalRef: z,
      confettiCanvas: H,
      setConfettiCanvas: K,
      customConfettiDisplayOptions: Q
    } = (0, T.mO)(V, D),
    U = (0, h.o7)(V);
  (0, T.$V)(V, B);
  let {
    handleUseNow: Y,
    isApplying: J
  } = (0, E.p)({
    product: V,
    onSuccess: _,
    onError: _
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
    onClose: _,
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
  } = (0, C.A)(V.styles), tr = null != N ? N : {
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
        className: k.L,
        environment: q
      }), (0, r.jsx)(s.ExpressiveModal, {
        graphic: tr,
        title: X,
        subtitle: null != Z ? Z : true,
        onClose: _,
        transitionState: y,
        actions: tt
      }), null != Q ? (0, r.jsx)(x.K, {
        options: Q
      }) : (0, r.jsx)(v.A, {
        confettiTarget: z.current,
        confettiCanvas: H,
        sprites: (0, m.rA)(V.categorySkuId),
        colors: null == tl ? true : tl.map(t => t.toHexString())
      })]
    })
  })
}