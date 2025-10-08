/** Chunk was on 87624 **/
/** chunk id: 331042, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => k
}), require("./388685.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk238651 = require("./238651.js"),
  Chunk979554 = require("./979554.js"),
  Chunk793030 = require("./793030.js"),
  Chunk399606 = require("./399606.js"),
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
let k = t => {
  let {
    transitionState: e,
    product: n,
    onClose: k,
    analyticsLocations: v,
    overrideTitle: S,
    overrideDescription: P,
    shouldShowPromotionalExperience: N,
    purchaseType: Z = b.o8.FIAT
  } = t, M = (0, s.e7)([h.Z], () => h.Z.purchases), x = (0, E.o)(n, M), B = (0, y.W)(n, x), {
    analyticsLocations: U
  } = (0, d.ZP)([...v, o.Z.COLLECTIBLES_COLLECTED_MODAL]), {
    hasRequiredProductItems: D
  } = (t => {
    let {
      firstProfileEffect: e,
      firstAvatarDecoration: n,
      firstNameplate: i
    } = (0, O.Rj)(t), r = (0, f.x6)(t);
    return {
      firstAvatarDecoration: n,
      firstProfileEffect: e,
      firstNameplate: i,
      isBundle: r,
      hasRequiredProductItems: r ? (0, T.N)(t) : null != n || null != e || null != i
    }
  })(B), {
    promotionalRewardCollectedText: F,
    openProfileSettings: w
  } = (t => {
    var e;
    let n = (0, c.Z)(),
      i = (0, p.Z)({
        analyticsLocations: t
      });
    return {
      giftingPromotionConfig: n,
      promotionalRewardCollectedText: null == n || null == (e = n.giftPurchaseConfirmation) ? true : e.rewardCollectedText(),
      openProfileSettings: i
    }
  })(U), {
    environment: j,
    modalRef: V,
    confettiCanvas: G,
    setConfettiCanvas: W,
    customConfettiDisplayOptions: H
  } = (0, m.$0)(B, Z), X = (0, L.kd)(B);
  (0, m.f1)(B, U);
  let {
    handleUseNow: z,
    isApplying: Y
  } = (0, A.W)({
    product: B,
    onSuccess: k,
    onError: k
  }), Q = (0, m.Xw)({
    product: B,
    overrideTitle: S,
    isVariantsGroupEnabled: true,
    shouldShowPromotionalExperience: N,
    productName: X
  }), $ = (0, m.ys)({
    product: B,
    overrideDescription: P,
    productName: X,
    shouldShowPromotionalExperience: N,
    promotionalRewardCollectedText: F
  }), q = (0, m.cf)({
    product: B,
    onClose: k,
    analyticsLocations: U,
    hasRequiredProductItems: D,
    handleUseNow: z,
    isApplying: Y,
    openProfileSettings: w
  }), K = "6/4";
  switch (B.type) {
    case l.Z.NAMEPLATE:
    case l.Z.AVATAR_DECORATION:
      K = "16/9";
      break;
    case l.Z.BUNDLE:
    case l.Z.PROFILE_EFFECT:
    default:
      K = "6/4"
  }
  let {
    confettiColors: J
  } = (0, C.Z)(B.styles);
  return (0, i.jsx)(d.Gt, {
    value: U,
    children: (0, i.jsxs)("div", {
      ref: V,
      children: [(0, i.jsx)(r.O_, {
        ref: W,
        className: g.confettiCanvas,
        environment: j
      }), (0, i.jsx)(a.ExpressiveModal, {
        graphic: {
          type: "dynamic",
          component: u.AX$.COLLECTIBLES_PREVIEW,
          aspectRatio: K,
          props: {
            product: B,
            forCollectedModal: true
          }
        },
        title: Q,
        subtitle: null != $ ? $ : true,
        onClose: k,
        transitionState: e,
        actions: q
      }), null != H ? (0, i.jsx)(_.i, {
        options: H
      }) : (0, i.jsx)(I.Z, {
        confettiTarget: V.current,
        confettiCanvas: G,
        sprites: (0, R.vK)(B.categorySkuId),
        colors: null == J ? true : J.map(t => t.toHexString())
      })]
    })
  })
}