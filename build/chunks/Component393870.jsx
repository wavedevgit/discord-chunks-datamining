/** Chunk was on 92643 **/
/** chunk id: 393870, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => L
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
let L = t => {
  var e;
  let n, L, {
      transitionState: I,
      product: T,
      onClose: _,
      analyticsLocations: j,
      overrideTitle: S,
      overrideDescription: k,
      shouldShowPromotionalExperience: D,
      purchaseType: w = C.gs.FIAT,
      overrideGraphic: N,
      rentalDuration: M,
      rentalExpiresAt: x
    } = t,
    B = (0, d.Q)(T),
    U = (0, E.rb)(T, B),
    {
      analyticsLocations: F
    } = (0, u.Ay)([...j, o.A.COLLECTIBLES_COLLECTED_MODAL]),
    {
      hasRequiredProductItems: G
    } = (t => {
      let {
        firstProfileEffect: e,
        firstAvatarDecoration: n,
        firstNameplate: r
      } = (0, y.f5)(t), i = (0, f.aw)(t);
      return {
        firstAvatarDecoration: n,
        firstProfileEffect: e,
        firstNameplate: r,
        isBundle: i,
        hasRequiredProductItems: i ? (0, A.u)(t) : null != n || null != e || null != r
      }
    })(U),
    {
      promotionalRewardCollectedText: H,
      openProfileSettings: V
    } = (n = (0, c.A)(), L = (0, p.A)({
      analyticsLocations: F
    }), {
      giftingPromotionConfig: n,
      promotionalRewardCollectedText: null == n || null == (e = n.giftPurchaseConfirmation) ? true : e.rewardCollectedText(),
      openProfileSettings: L
    }),
    {
      environment: W,
      modalRef: z,
      confettiCanvas: Q,
      setConfettiCanvas: J,
      customConfettiDisplayOptions: Y
    } = (0, P.mO)(U, w),
    q = (0, b.o7)(U);
  (0, P.$V)(U, F);
  let {
    handleUseNow: K,
    isApplying: $
  } = (0, O.p)({
    product: U,
    onSuccess: _,
    onError: _
  }), X = (0, P.$k)({
    product: U,
    overrideTitle: S,
    isVariantsGroupEnabled: true,
    shouldShowPromotionalExperience: D,
    productName: q,
    rentalDuration: M
  }), Z = (0, P.v8)({
    product: U,
    overrideDescription: k,
    productName: q,
    shouldShowPromotionalExperience: D,
    promotionalRewardCollectedText: H,
    isRental: null != M,
    expiresAt: x
  }), tt = (0, P.aG)({
    product: U,
    onClose: _,
    analyticsLocations: F,
    hasRequiredProductItems: G,
    handleUseNow: K,
    isApplying: $,
    openProfileSettings: V
  }), te = "6/4";
  switch (U.type) {
    case l.R.NAMEPLATE:
    case l.R.AVATAR_DECORATION:
      te = "16/9";
      break;
    case l.R.BUNDLE:
    case l.R.PROFILE_EFFECT:
    default:
      te = "6/4"
  }
  let {
    confettiColors: tn
  } = (0, h.A)(U.styles), tr = null != N ? N : {
    type: "dynamic",
    component: s.Oz7.COLLECTIBLES_PREVIEW,
    aspectRatio: te,
    props: {
      product: U,
      forCollectedModal: true
    }
  };
  return (0, r.jsx)(u.f5, {
    value: F,
    children: (0, r.jsxs)("div", {
      ref: z,
      children: [(0, r.jsx)(i.Fk, {
        ref: J,
        className: v.L,
        environment: W
      }), (0, r.jsx)(a.ExpressiveModal, {
        graphic: tr,
        title: X,
        subtitle: null != Z ? Z : true,
        onClose: _,
        transitionState: I,
        actions: tt
      }), null != Y ? (0, r.jsx)(R.K, {
        options: Y
      }) : (0, r.jsx)(m.A, {
        confettiTarget: z.current,
        confettiCanvas: Q,
        sprites: (0, g.rA)(U.categorySkuId),
        colors: null == tn ? true : tn.map(t => t.toHexString())
      })]
    })
  })
}