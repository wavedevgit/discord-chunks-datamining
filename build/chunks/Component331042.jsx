/** Chunk was on 87624 **/
/** chunk id: 331042, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => _
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
let _ = t => {
  let {
    transitionState: e,
    product: n,
    onClose: _,
    analyticsLocations: L,
    overrideTitle: k,
    overrideDescription: N,
    shouldShowPromotionalExperience: S,
    purchaseType: B = v.o8.FIAT
  } = t, Z = (0, a.e7)([p.Z], () => p.Z.purchases), M = (0, h.o)(n, Z), x = (0, I.W)(n, M), {
    analyticsLocations: F
  } = (0, d.ZP)([...L, o.Z.COLLECTIBLES_COLLECTED_MODAL]), {
    hasRequiredProductItems: D
  } = (t => {
    let {
      firstProfileEffect: e,
      firstAvatarDecoration: n,
      firstNameplate: i
    } = (0, y.Rj)(t), r = (0, E.x6)(t);
    return {
      firstAvatarDecoration: n,
      firstProfileEffect: e,
      firstNameplate: i,
      isBundle: r,
      hasRequiredProductItems: r ? (0, O.N)(t) : null != n || null != e || null != i
    }
  })(x), {
    promotionalRewardCollectedText: w,
    openProfileSettings: U
  } = (t => {
    var e;
    let n = (0, c.Z)(),
      i = (0, f.Z)({
        analyticsLocations: t
      });
    return {
      giftingPromotionConfig: n,
      promotionalRewardCollectedText: null == n || null == (e = n.giftPurchaseConfirmation) ? true : e.rewardCollectedText(),
      openProfileSettings: i
    }
  })(F), {
    environment: j,
    modalRef: V,
    confettiCanvas: G,
    setConfettiCanvas: W,
    customConfettiDisplayOptions: H
  } = (0, R.$0)(x, B), X = (0, b.kd)(x);
  (0, R.f1)(x, F);
  let {
    handleUseNow: z,
    isApplying: Y
  } = (0, A.W)({
    product: x,
    onSuccess: _,
    onError: _
  }), Q = (0, R.Xw)({
    product: x,
    overrideTitle: k,
    isVariantsGroupEnabled: true,
    shouldShowPromotionalExperience: S,
    productName: X
  }), $ = (0, R.ys)({
    product: x,
    overrideDescription: N,
    productName: X,
    shouldShowPromotionalExperience: S,
    promotionalRewardCollectedText: w
  }), q = (0, R.cf)({
    product: x,
    onClose: _,
    analyticsLocations: F,
    hasRequiredProductItems: D,
    handleUseNow: z,
    isApplying: Y,
    openProfileSettings: U
  }), K = "6/4";
  switch (x.type) {
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
  } = (0, T.Z)(x.styles);
  return (0, i.jsx)(d.Gt, {
    value: F,
    children: (0, i.jsxs)("div", {
      ref: V,
      children: [(0, i.jsx)(r.O_, {
        ref: W,
        className: P.confettiCanvas,
        environment: j
      }), (0, i.jsx)(s.ExpressiveModal, {
        graphic: {
          type: "dynamic",
          component: u.AX$.COLLECTIBLES_PREVIEW,
          aspectRatio: K,
          props: {
            product: x,
            forCollectedModal: true
          }
        },
        title: Q,
        subtitle: null != $ ? $ : true,
        onClose: _,
        transitionState: e,
        actions: q
      }), null != H ? (0, i.jsx)(g.i, {
        options: H
      }) : (0, i.jsx)(m.Z, {
        confettiTarget: V.current,
        confettiCanvas: G,
        sprites: (0, C.vK)(x.categorySkuId),
        colors: null == J ? true : J.map(t => t.toHexString())
      })]
    })
  })
}