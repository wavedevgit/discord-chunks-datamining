/** Chunk was on 87624 **/
/** chunk id: 331042, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => I
}), require("./388685.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk921254 = require("./921254.js"),
  Chunk979554 = require("./979554.js"),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk347896 = require("./347896.js"),
  Chunk300284 = require("./300284.js"),
  Chunk429368 = require("./429368.js"),
  Chunk884697 = require("./884697.js"),
  Chunk635552 = require("./635552.js"),
  Chunk328456 = require("./328456.js"),
  Chunk624377 = require("./624377.js"),
  Chunk330349 = require("./330349.js"),
  Chunk530618 = require("./530618.jsx"),
  Chunk372654 = require("./372654.js"),
  Chunk197831 = require("./197831.jsx"),
  Chunk58201 = require("./58201.js"),
  Chunk29121 = require("./29121.js"),
  Chunk391594 = require("./391594.js"),
  Chunk215023 = require("./215023.js"),
  Chunk222311 = require("./222311.js");
let I = t => {
  let {
    transitionState: e,
    product: n,
    onClose: I,
    analyticsLocations: O,
    overrideTitle: j,
    overrideDescription: k,
    shouldShowPromotionalExperience: y,
    purchaseType: w = R.o8.FIAT,
    overrideGraphic: P,
    rentalDuration: S,
    rentalExpiresAt: b
  } = t, g = (0, p.o)(n), N = (0, A.W)(n, g), {
    analyticsLocations: D
  } = (0, c.ZP)([...O, i.Z.COLLECTIBLES_COLLECTED_MODAL]), {
    hasRequiredProductItems: F
  } = (t => {
    let {
      firstProfileEffect: e,
      firstAvatarDecoration: n,
      firstNameplate: s
    } = (0, f.Rj)(t), a = (0, C.x6)(t);
    return {
      firstAvatarDecoration: n,
      firstProfileEffect: e,
      firstNameplate: s,
      isBundle: a,
      hasRequiredProductItems: a ? (0, x.N)(t) : null != n || null != e || null != s
    }
  })(N), {
    promotionalRewardCollectedText: M,
    openProfileSettings: B
  } = (t => {
    var e;
    let n = (0, u.Z)(),
      s = (0, d.Z)({
        analyticsLocations: t
      });
    return {
      giftingPromotionConfig: n,
      promotionalRewardCollectedText: null == n || null == (e = n.giftPurchaseConfirmation) ? true : e.rewardCollectedText(),
      openProfileSettings: s
    }
  })(D), {
    environment: V,
    modalRef: W,
    confettiCanvas: G,
    setConfettiCanvas: X,
    customConfettiDisplayOptions: $
  } = (0, _.$0)(N, w), q = (0, Z.kd)(N);
  (0, _.f1)(N, D);
  let {
    handleUseNow: H,
    isApplying: K
  } = (0, E.W)({
    product: N,
    onSuccess: I,
    onError: I
  }), U = (0, _.Xw)({
    product: N,
    overrideTitle: j,
    isVariantsGroupEnabled: true,
    shouldShowPromotionalExperience: y,
    productName: q,
    rentalDuration: S
  }), z = (0, _.ys)({
    product: N,
    overrideDescription: k,
    productName: q,
    shouldShowPromotionalExperience: y,
    promotionalRewardCollectedText: M,
    isRental: null != S,
    expiresAt: b
  }), J = (0, _.cf)({
    product: N,
    onClose: I,
    analyticsLocations: D,
    hasRequiredProductItems: F,
    handleUseNow: H,
    isApplying: K,
    openProfileSettings: B
  }), Q = "6/4";
  switch (N.type) {
    case o.Z.NAMEPLATE:
    case o.Z.AVATAR_DECORATION:
      Q = "16/9";
      break;
    case o.Z.BUNDLE:
    case o.Z.PROFILE_EFFECT:
    default:
      Q = "6/4"
  }
  let {
    confettiColors: Y
  } = (0, v.Z)(N.styles), tt = null != P ? P : {
    type: "dynamic",
    component: r.AX$.COLLECTIBLES_PREVIEW,
    aspectRatio: Q,
    props: {
      product: N,
      forCollectedModal: true
    }
  };
  return (0, s.jsx)(c.Gt, {
    value: D,
    children: (0, s.jsxs)("div", {
      ref: W,
      children: [(0, s.jsx)(a.O_, {
        ref: X,
        className: m.confettiCanvas,
        environment: V
      }), (0, s.jsx)(l.ExpressiveModal, {
        graphic: tt,
        title: U,
        subtitle: null != z ? z : true,
        onClose: I,
        transitionState: e,
        actions: J
      }), null != $ ? (0, s.jsx)(T.i, {
        options: $
      }) : (0, s.jsx)(L.Z, {
        confettiTarget: W.current,
        confettiCanvas: G,
        sprites: (0, h.vK)(N.categorySkuId),
        colors: null == Y ? true : Y.map(t => t.toHexString())
      })]
    })
  })
}