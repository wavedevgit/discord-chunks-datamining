/** Chunk was on 92643 **/
/** chunk id: 393870, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => b
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
let b = t => {
  var e;
  let n, b, {
      transitionState: k,
      product: g,
      onClose: S,
      analyticsLocations: v,
      overrideTitle: P,
      overrideDescription: N,
      shouldShowPromotionalExperience: D,
      purchaseType: M = L.gs.FIAT,
      overrideGraphic: x,
      rentalDuration: B,
      rentalExpiresAt: U
    } = t,
    F = (0, c.Q)(g),
    j = (0, O.rb)(g, F),
    {
      analyticsLocations: w
    } = (0, d.Ay)([...v, u.A.COLLECTIBLES_COLLECTED_MODAL]),
    {
      hasRequiredProductItems: G
    } = (t => {
      let {
        firstProfileEffect: e,
        firstAvatarDecoration: n,
        firstNameplate: i
      } = (0, h.f5)(t), r = (0, f.aw)(t);
      return {
        firstAvatarDecoration: n,
        firstProfileEffect: e,
        firstNameplate: i,
        isBundle: r,
        hasRequiredProductItems: r ? (0, C.u)(t) : null != n || null != e || null != i
      }
    })(j),
    {
      promotionalRewardCollectedText: H,
      openProfileSettings: V
    } = (n = (0, o.A)(), b = (0, p.A)({
      analyticsLocations: w
    }), {
      giftingPromotionConfig: n,
      promotionalRewardCollectedText: null == n || null == (e = n.giftPurchaseConfirmation) ? true : e.rewardCollectedText(),
      openProfileSettings: b
    }),
    {
      environment: W,
      modalRef: z,
      confettiCanvas: Q,
      setConfettiCanvas: J,
      customConfettiDisplayOptions: Y
    } = (0, I.mO)(j, M),
    q = (0, E.o7)(j);
  (0, I.$V)(j, w);
  let {
    handleUseNow: K,
    isApplying: $
  } = (0, A.p)({
    product: j,
    onSuccess: S,
    onError: S
  }), X = (0, I.$k)({
    product: j,
    overrideTitle: P,
    isVariantsGroupEnabled: true,
    shouldShowPromotionalExperience: D,
    productName: q,
    rentalDuration: B
  }), Z = (0, I.v8)({
    product: j,
    overrideDescription: N,
    productName: q,
    shouldShowPromotionalExperience: D,
    promotionalRewardCollectedText: H,
    isRental: null != B,
    expiresAt: U
  }), tt = (0, I.aG)({
    product: j,
    onClose: S,
    analyticsLocations: w,
    hasRequiredProductItems: G,
    handleUseNow: K,
    isApplying: $,
    openProfileSettings: V
  }), te = "6/4";
  switch (j.type) {
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
  } = (0, R.A)(j.styles), ti = null != x ? x : {
    type: "dynamic",
    component: s.Oz7.COLLECTIBLES_PREVIEW,
    aspectRatio: te,
    props: {
      product: j,
      forCollectedModal: true
    }
  };
  return (0, i.jsx)(d.f5, {
    value: w,
    children: (0, i.jsxs)("div", {
      ref: z,
      children: [(0, i.jsx)(r.Fk, {
        ref: J,
        className: y.L,
        environment: W
      }), (0, i.jsx)(a.ExpressiveModal, {
        graphic: ti,
        title: X,
        subtitle: null != Z ? Z : true,
        onClose: S,
        transitionState: k,
        actions: tt
      }), null != Y ? (0, i.jsx)(_.K, {
        options: Y
      }) : (0, i.jsx)(m.A, {
        confettiTarget: z.current,
        confettiCanvas: Q,
        sprites: (0, T.rA)(j.categorySkuId),
        colors: null == tn ? true : tn.map(t => t.toHexString())
      })]
    })
  })
}