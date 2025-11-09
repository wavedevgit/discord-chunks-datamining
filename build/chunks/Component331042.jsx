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
    purchaseType: w = m.o8.FIAT
  } = t, P = (0, p.o)(n), S = (0, Z.W)(n, P), {
    analyticsLocations: b
  } = (0, c.ZP)([...R, i.Z.COLLECTIBLES_COLLECTED_MODAL]), {
    hasRequiredProductItems: g
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
  })(S), {
    promotionalRewardCollectedText: N,
    openProfileSettings: D
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
  })(b), {
    environment: F,
    modalRef: M,
    confettiCanvas: B,
    setConfettiCanvas: V,
    customConfettiDisplayOptions: W
  } = (0, A.$0)(S, w), G = (0, _.kd)(S);
  (0, A.f1)(S, b);
  let {
    handleUseNow: X,
    isApplying: $
  } = (0, E.W)({
    product: S,
    onSuccess: O,
    onError: O
  }), q = (0, A.Xw)({
    product: S,
    overrideTitle: j,
    isVariantsGroupEnabled: true,
    shouldShowPromotionalExperience: y,
    productName: G
  }), H = (0, A.ys)({
    product: S,
    overrideDescription: k,
    productName: G,
    shouldShowPromotionalExperience: y,
    promotionalRewardCollectedText: N
  }), K = (0, A.cf)({
    product: S,
    onClose: O,
    analyticsLocations: b,
    hasRequiredProductItems: g,
    handleUseNow: X,
    isApplying: $,
    openProfileSettings: D
  }), U = "6/4";
  switch (S.type) {
    case a.Z.NAMEPLATE:
    case a.Z.AVATAR_DECORATION:
      U = "16/9";
      break;
    case a.Z.BUNDLE:
    case a.Z.PROFILE_EFFECT:
    default:
      U = "6/4"
  }
  let {
    confettiColors: z
  } = (0, v.Z)(S.styles);
  return (0, o.jsx)(c.Gt, {
    value: b,
    children: (0, o.jsxs)("div", {
      ref: M,
      children: [(0, o.jsx)(s.O_, {
        ref: V,
        className: I.confettiCanvas,
        environment: F
      }), (0, o.jsx)(r.ExpressiveModal, {
        graphic: {
          type: "dynamic",
          component: l.AX$.COLLECTIBLES_PREVIEW,
          aspectRatio: U,
          props: {
            product: S,
            forCollectedModal: true
          }
        },
        title: q,
        subtitle: null != H ? H : true,
        onClose: O,
        transitionState: e,
        actions: K
      }), null != W ? (0, o.jsx)(T.i, {
        options: W
      }) : (0, o.jsx)(x.Z, {
        confettiTarget: M.current,
        confettiCanvas: B,
        sprites: (0, h.vK)(S.categorySkuId),
        colors: null == z ? true : z.map(t => t.toHexString())
      })]
    })
  })
}