/** Chunk was on 87624 **/
/** chunk id: 331042, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => O
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
  Chunk722982 = require("./722982.js");
let O = t => {
  let {
    transitionState: e,
    product: n,
    onClose: O,
    analyticsLocations: R,
    overrideTitle: j,
    overrideDescription: k,
    shouldShowPromotionalExperience: y,
    purchaseType: w = m.o8.FIAT,
    overrideGraphic: P,
    isRental: S = false,
    rentalDuration: b,
    rentalExpiresAt: g
  } = t, N = (0, p.o)(n), D = (0, Z.W)(n, N), {
    analyticsLocations: F
  } = (0, c.ZP)([...R, i.Z.COLLECTIBLES_COLLECTED_MODAL]), {
    hasRequiredProductItems: M
  } = (t => {
    let {
      firstProfileEffect: e,
      firstAvatarDecoration: n,
      firstNameplate: o
    } = (0, f.Rj)(t), s = (0, C.x6)(t);
    return {
      firstAvatarDecoration: n,
      firstProfileEffect: e,
      firstNameplate: o,
      isBundle: s,
      hasRequiredProductItems: s ? (0, L.N)(t) : null != n || null != e || null != o
    }
  })(D), {
    promotionalRewardCollectedText: B,
    openProfileSettings: V
  } = (t => {
    var e;
    let n = (0, u.Z)(),
      o = (0, d.Z)({
        analyticsLocations: t
      });
    return {
      giftingPromotionConfig: n,
      promotionalRewardCollectedText: null == n || null == (e = n.giftPurchaseConfirmation) ? true : e.rewardCollectedText(),
      openProfileSettings: o
    }
  })(F), {
    environment: W,
    modalRef: G,
    confettiCanvas: X,
    setConfettiCanvas: $,
    customConfettiDisplayOptions: q
  } = (0, A.$0)(D, w), H = (0, _.kd)(D);
  (0, A.f1)(D, F);
  let {
    handleUseNow: K,
    isApplying: U
  } = (0, E.W)({
    product: D,
    onSuccess: O,
    onError: O
  }), z = (0, A.Xw)({
    product: D,
    overrideTitle: j,
    isVariantsGroupEnabled: true,
    shouldShowPromotionalExperience: y,
    productName: H,
    isRental: S,
    rentalDuration: b
  }), J = (0, A.ys)({
    product: D,
    overrideDescription: k,
    productName: H,
    shouldShowPromotionalExperience: y,
    promotionalRewardCollectedText: B,
    isRental: S,
    rentalExpiresAt: g
  }), Q = (0, A.cf)({
    product: D,
    onClose: O,
    analyticsLocations: F,
    hasRequiredProductItems: M,
    handleUseNow: K,
    isApplying: U,
    openProfileSettings: V,
    isRental: S
  }), Y = "6/4";
  switch (D.type) {
    case a.Z.NAMEPLATE:
    case a.Z.AVATAR_DECORATION:
      Y = "16/9";
      break;
    case a.Z.BUNDLE:
    case a.Z.PROFILE_EFFECT:
    default:
      Y = "6/4"
  }
  let {
    confettiColors: tt
  } = (0, v.Z)(D.styles), te = null != P ? P : {
    type: "dynamic",
    component: r.AX$.COLLECTIBLES_PREVIEW,
    aspectRatio: Y,
    props: {
      product: D,
      forCollectedModal: true
    }
  };
  return (0, o.jsx)(c.Gt, {
    value: F,
    children: (0, o.jsxs)("div", {
      ref: G,
      children: [(0, o.jsx)(s.O_, {
        ref: $,
        className: I.confettiCanvas,
        environment: W
      }), (0, o.jsx)(l.ExpressiveModal, {
        graphic: te,
        title: z,
        subtitle: null != J ? J : true,
        onClose: O,
        transitionState: e,
        actions: Q
      }), null != q ? (0, o.jsx)(T.i, {
        options: q
      }) : (0, o.jsx)(x.Z, {
        confettiTarget: G.current,
        confettiCanvas: X,
        sprites: (0, h.vK)(D.categorySkuId),
        colors: null == tt ? true : tt.map(t => t.toHexString())
      })]
    })
  })
}