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
  Chunk505281 = require("./505281.js");
let I = t => {
  let {
    transitionState: e,
    product: n,
    onClose: I,
    analyticsLocations: N,
    overrideTitle: O,
    overrideDescription: P,
    shouldShowPromotionalExperience: b,
    purchaseType: j = R.o8.FIAT,
    overrideGraphic: k,
    rentalDuration: w,
    rentalExpiresAt: y
  } = t, D = (0, d.o)(n), S = (0, m.W)(n, D), {
    analyticsLocations: g
  } = (0, c.ZP)([...N, s.Z.COLLECTIBLES_COLLECTED_MODAL]), {
    hasRequiredProductItems: B
  } = (t => {
    let {
      firstProfileEffect: e,
      firstAvatarDecoration: n,
      firstNameplate: l
    } = (0, C.Rj)(t), r = (0, p.x6)(t);
    return {
      firstAvatarDecoration: n,
      firstProfileEffect: e,
      firstNameplate: l,
      isBundle: r,
      hasRequiredProductItems: r ? (0, x.N)(t) : null != n || null != e || null != l
    }
  })(S), {
    promotionalRewardCollectedText: F,
    openProfileSettings: M
  } = (t => {
    var e;
    let n = (0, u.Z)(),
      l = (0, f.Z)({
        analyticsLocations: t
      });
    return {
      giftingPromotionConfig: n,
      promotionalRewardCollectedText: null == n || null == (e = n.giftPurchaseConfirmation) ? true : e.rewardCollectedText(),
      openProfileSettings: l
    }
  })(g), {
    environment: V,
    modalRef: W,
    confettiCanvas: G,
    setConfettiCanvas: X,
    customConfettiDisplayOptions: $
  } = (0, Z.$0)(S, j), q = (0, T.kd)(S);
  (0, Z.f1)(S, g);
  let {
    handleUseNow: H,
    isApplying: K
  } = (0, E.W)({
    product: S,
    onSuccess: I,
    onError: I
  }), U = (0, Z.Xw)({
    product: S,
    overrideTitle: O,
    isVariantsGroupEnabled: true,
    shouldShowPromotionalExperience: b,
    productName: q,
    rentalDuration: w
  }), z = (0, Z.ys)({
    product: S,
    overrideDescription: P,
    productName: q,
    shouldShowPromotionalExperience: b,
    promotionalRewardCollectedText: F,
    isRental: null != w,
    expiresAt: y
  }), J = (0, Z.cf)({
    product: S,
    onClose: I,
    analyticsLocations: g,
    hasRequiredProductItems: B,
    handleUseNow: H,
    isApplying: K,
    openProfileSettings: M
  }), Q = "6/4";
  switch (S.type) {
    case a.Z.NAMEPLATE:
    case a.Z.AVATAR_DECORATION:
      Q = "16/9";
      break;
    case a.Z.BUNDLE:
    case a.Z.PROFILE_EFFECT:
    default:
      Q = "6/4"
  }
  let {
    confettiColors: Y
  } = (0, v.Z)(S.styles), tt = null != k ? k : {
    type: "dynamic",
    component: o.AX$.COLLECTIBLES_PREVIEW,
    aspectRatio: Q,
    props: {
      product: S,
      forCollectedModal: true
    }
  };
  return (0, l.jsx)(c.Gt, {
    value: g,
    children: (0, l.jsxs)("div", {
      ref: W,
      children: [(0, l.jsx)(r.O_, {
        ref: X,
        className: _.confettiCanvas,
        environment: V
      }), (0, l.jsx)(i.ExpressiveModal, {
        graphic: tt,
        title: U,
        subtitle: null != z ? z : true,
        onClose: I,
        transitionState: e,
        actions: J
      }), null != $ ? (0, l.jsx)(h.i, {
        options: $
      }) : (0, l.jsx)(L.Z, {
        confettiTarget: W.current,
        confettiCanvas: G,
        sprites: (0, A.vK)(S.categorySkuId),
        colors: null == Y ? true : Y.map(t => t.toHexString())
      })]
    })
  })
}