/** Chunk was on 87624 **/
/** chunk id: 331042, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => O
}), require("./388685.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk238651 = require("./238651.js"),
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
    overrideGraphic: P
  } = t, S = (0, p.o)(n), b = (0, Z.W)(n, S), {
    analyticsLocations: g
  } = (0, c.ZP)([...R, i.Z.COLLECTIBLES_COLLECTED_MODAL]), {
    hasRequiredProductItems: N
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
  })(b), {
    promotionalRewardCollectedText: D,
    openProfileSettings: F
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
  })(g), {
    environment: M,
    modalRef: B,
    confettiCanvas: V,
    setConfettiCanvas: W,
    customConfettiDisplayOptions: G
  } = (0, A.$0)(b, w), X = (0, _.kd)(b);
  (0, A.f1)(b, g);
  let {
    handleUseNow: $,
    isApplying: q
  } = (0, E.W)({
    product: b,
    onSuccess: O,
    onError: O
  }), H = (0, A.Xw)({
    product: b,
    overrideTitle: j,
    isVariantsGroupEnabled: true,
    shouldShowPromotionalExperience: y,
    productName: X
  }), K = (0, A.ys)({
    product: b,
    overrideDescription: k,
    productName: X,
    shouldShowPromotionalExperience: y,
    promotionalRewardCollectedText: D
  }), U = (0, A.cf)({
    product: b,
    onClose: O,
    analyticsLocations: g,
    hasRequiredProductItems: N,
    handleUseNow: $,
    isApplying: q,
    openProfileSettings: F
  }), z = "6/4";
  switch (b.type) {
    case a.Z.NAMEPLATE:
    case a.Z.AVATAR_DECORATION:
      z = "16/9";
      break;
    case a.Z.BUNDLE:
    case a.Z.PROFILE_EFFECT:
    default:
      z = "6/4"
  }
  let {
    confettiColors: J
  } = (0, v.Z)(b.styles), Q = null != P ? P : {
    type: "dynamic",
    component: r.AX$.COLLECTIBLES_PREVIEW,
    aspectRatio: z,
    props: {
      product: b,
      forCollectedModal: true
    }
  };
  return (0, o.jsx)(c.Gt, {
    value: g,
    children: (0, o.jsxs)("div", {
      ref: B,
      children: [(0, o.jsx)(s.O_, {
        ref: W,
        className: I.confettiCanvas,
        environment: M
      }), (0, o.jsx)(l.ExpressiveModal, {
        graphic: Q,
        title: H,
        subtitle: null != K ? K : true,
        onClose: O,
        transitionState: e,
        actions: U
      }), null != G ? (0, o.jsx)(T.i, {
        options: G
      }) : (0, o.jsx)(x.Z, {
        confettiTarget: B.current,
        confettiCanvas: V,
        sprites: (0, h.vK)(b.categorySkuId),
        colors: null == J ? true : J.map(t => t.toHexString())
      })]
    })
  })
}