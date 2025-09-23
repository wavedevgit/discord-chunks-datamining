/** Chunk was on 87624 **/
/** chunk id: 331042, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => x
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk238651 = require("./238651.js"),
  Chunk979554 = require("./979554.js"),
  Chunk311570 = require("./311570.js"),
  Chunk399606 = require("./399606.js"),
  Chunk667202 = require("./667202.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk347896 = require("./347896.js"),
  Chunk300284 = require("./300284.js"),
  Chunk594174 = require("./594174.js"),
  Chunk597688 = require("./597688.js"),
  Chunk1870 = require("./1870.js"),
  Chunk429368 = require("./429368.js"),
  Chunk884697 = require("./884697.js"),
  Chunk587792 = require("./587792.js"),
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
  Chunk302800 = require("./302800.js"),
  Chunk215023 = require("./215023.js"),
  Chunk722982 = require("./722982.js");
let x = t => {
  let {
    transitionState: e,
    product: n,
    onClose: x,
    analyticsLocations: U,
    overrideTitle: Z,
    overrideDescription: M,
    shouldShowPromotionalExperience: D,
    purchaseType: F = N.o8.FIAT
  } = t, w = (0, o.e7)([A.Z], () => A.Z.purchases), j = (0, O.o)(n, w), V = (0, y.W)(n, j), {
    analyticsLocations: G
  } = (0, p.ZP)([...U, c.Z.COLLECTIBLES_COLLECTED_MODAL]), H = (t => {
    let e = (0, I.o)("CollectiblesCollectedModal"),
      n = (0, o.e7)([E.default], () => {
        var t, e;
        return null != (e = null == (t = E.default.getCurrentUser()) ? true : t.isStaff()) && e
      });
    return r.useMemo(() => {
      if (!e || t.type !== a.Z.AVATAR_DECORATION) return;
      let i = (0, v.R9)(t.skuId, n);
      if (null == i) return;
      let r = C.Z.getProduct(i);
      return null != r ? r : true
    }, [e, t.skuId, t.type, n])
  })(V), {
    hasRequiredProductItems: W
  } = (t => {
    let {
      firstProfileEffect: e,
      firstAvatarDecoration: n,
      firstNameplate: i
    } = (0, g.Rj)(t), r = (0, _.x6)(t);
    return {
      firstAvatarDecoration: n,
      firstProfileEffect: e,
      firstNameplate: i,
      isBundle: r,
      hasRequiredProductItems: r ? (0, R.N)(t) : null != n || null != e || null != i
    }
  })(V), {
    promotionalRewardCollectedText: X,
    openProfileSettings: $
  } = (t => {
    var e;
    let n = (0, f.Z)(),
      i = (0, h.Z)({
        analyticsLocations: t
      });
    return {
      giftingPromotionConfig: n,
      promotionalRewardCollectedText: null == n || null == (e = n.giftPurchaseConfirmation) ? true : e.rewardCollectedText(),
      openProfileSettings: i
    }
  })(G), {
    environment: Q,
    modalRef: Y,
    confettiCanvas: q,
    setConfettiCanvas: z,
    customConfettiDisplayOptions: K
  } = (0, b.$0)(V, F);
  (0, b.f1)(V, G);
  let J = (0, S.kd)(V),
    tt = (0, S.kd)(H),
    {
      handleUseNow: te,
      isApplying: tn
    } = (0, T.W)({
      product: V,
      onSuccess: x,
      onError: x
    }),
    ti = (0, b.Xw)({
      product: V,
      pairedProduct: H,
      overrideTitle: Z,
      isVariantsGroupEnabled: true,
      shouldShowPromotionalExperience: D,
      productName: J,
      pairedProductName: tt
    }),
    tr = (0, b.ys)({
      product: V,
      pairedProduct: H,
      overrideDescription: M,
      productName: J,
      pairedProductName: tt,
      shouldShowPromotionalExperience: D,
      promotionalRewardCollectedText: X
    }),
    tl = (0, b.cf)({
      product: V,
      pairedProduct: H,
      onClose: x,
      analyticsLocations: G,
      hasRequiredProductItems: W,
      handleUseNow: te,
      isApplying: tn,
      variantsReturnStyle: s.v.VARIANTS_GROUP,
      openProfileSettings: $
    }),
    ta = "6/4";
  switch (V.type) {
    case a.Z.NAMEPLATE:
    case a.Z.AVATAR_DECORATION:
      ta = "16/9";
      break;
    case a.Z.BUNDLE:
    case a.Z.PROFILE_EFFECT:
    default:
      ta = "6/4"
  }
  let {
    confettiColors: ts
  } = (0, m.Z)(V.styles);
  return (0, i.jsx)(p.Gt, {
    value: G,
    children: (0, i.jsxs)("div", {
      ref: Y,
      children: [(0, i.jsx)(l.O_, {
        ref: z,
        className: B.confettiCanvas,
        environment: Q
      }), (0, i.jsx)(u.I, {
        graphic: {
          type: "dynamic",
          component: d.AX$.COLLECTIBLES_PREVIEW,
          aspectRatio: ta,
          props: {
            product: V,
            pairedProduct: H,
            forCollectedModal: true
          }
        },
        title: ti,
        subtitle: null != tr ? tr : true,
        onClose: x,
        transitionState: e,
        actions: tl
      }), null != K ? (0, i.jsx)(P.i, {
        options: K
      }) : (0, i.jsx)(L.Z, {
        confettiTarget: Y.current,
        confettiCanvas: q,
        sprites: (0, k.vK)(V.categorySkuId),
        colors: null == ts ? true : ts.map(t => t.toHexString())
      })]
    })
  })
}