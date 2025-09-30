/** Chunk was on 87624 **/
/** chunk id: 331042, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => P
}), require("./388685.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk238651 = require("./238651.js"),
  Chunk979554 = require("./979554.js"),
  Chunk399606 = require("./399606.js"),
  Chunk667202 = require("./667202.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk347896 = require("./347896.js"),
  Chunk300284 = require("./300284.js"),
  Chunk1870 = require("./1870.js"),
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
let P = t => {
  let {
    transitionState: e,
    product: n,
    onClose: P,
    analyticsLocations: R,
    overrideTitle: j,
    overrideDescription: k,
    shouldShowPromotionalExperience: w,
    purchaseType: y = N.o8.FIAT
  } = t, b = (0, o.e7)([p.Z], () => p.Z.purchases), D = (0, C.o)(n, b), S = (0, T.W)(n, D), {
    analyticsLocations: g
  } = (0, u.ZP)([...R, c.Z.COLLECTIBLES_COLLECTED_MODAL]), {
    hasRequiredProductItems: B
  } = (t => {
    let {
      firstProfileEffect: e,
      firstAvatarDecoration: n,
      firstNameplate: r
    } = (0, L.Rj)(t), l = (0, E.x6)(t);
    return {
      firstAvatarDecoration: n,
      firstProfileEffect: e,
      firstNameplate: r,
      isBundle: l,
      hasRequiredProductItems: l ? (0, x.N)(t) : null != n || null != e || null != r
    }
  })(S), {
    promotionalRewardCollectedText: F,
    openProfileSettings: M
  } = (t => {
    var e;
    let n = (0, f.Z)(),
      r = (0, d.Z)({
        analyticsLocations: t
      });
    return {
      giftingPromotionConfig: n,
      promotionalRewardCollectedText: null == n || null == (e = n.giftPurchaseConfirmation) ? true : e.rewardCollectedText(),
      openProfileSettings: r
    }
  })(g), {
    environment: V,
    modalRef: W,
    confettiCanvas: G,
    setConfettiCanvas: X,
    customConfettiDisplayOptions: $
  } = (0, I.$0)(S, y), q = (0, _.kd)(S);
  (0, I.f1)(S, g);
  let {
    handleUseNow: H,
    isApplying: K
  } = (0, v.W)({
    product: S,
    onSuccess: P,
    onError: P
  }), U = (0, I.Xw)({
    product: S,
    overrideTitle: j,
    isVariantsGroupEnabled: true,
    shouldShowPromotionalExperience: w,
    productName: q
  }), z = (0, I.ys)({
    product: S,
    overrideDescription: k,
    productName: q,
    shouldShowPromotionalExperience: w,
    promotionalRewardCollectedText: F
  }), J = (0, I.cf)({
    product: S,
    onClose: P,
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
  } = (0, h.Z)(S.styles);
  return (0, r.jsx)(u.Gt, {
    value: g,
    children: (0, r.jsxs)("div", {
      ref: W,
      children: [(0, r.jsx)(l.O_, {
        ref: X,
        className: O.confettiCanvas,
        environment: V
      }), (0, r.jsx)(i.I, {
        graphic: {
          type: "dynamic",
          component: s.AX$.COLLECTIBLES_PREVIEW,
          aspectRatio: Q,
          props: {
            product: S,
            forCollectedModal: true
          }
        },
        title: U,
        subtitle: null != z ? z : true,
        onClose: P,
        transitionState: e,
        actions: J
      }), null != $ ? (0, r.jsx)(A.i, {
        options: $
      }) : (0, r.jsx)(Z.Z, {
        confettiTarget: W.current,
        confettiCanvas: G,
        sprites: (0, m.vK)(S.categorySkuId),
        colors: null == Y ? true : Y.map(t => t.toHexString())
      })]
    })
  })
}