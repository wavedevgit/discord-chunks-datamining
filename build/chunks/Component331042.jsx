/** Chunk was on 87624 **/
/** chunk id: 331042, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => B
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
let B = t => {
  let {
    transitionState: e,
    product: n,
    onClose: B,
    analyticsLocations: Z,
    overrideTitle: x,
    overrideDescription: M,
    shouldShowPromotionalExperience: D,
    purchaseType: U = v.o8.FIAT
  } = t, F = (0, u.e7)([A.Z], () => A.Z.purchases), w = (0, O.o)(n, F), j = (0, P.W)(n, w), {
    analyticsLocations: V
  } = (0, p.ZP)([...Z, c.Z.COLLECTIBLES_COLLECTED_MODAL]), G = (t => {
    let e = (0, I.o)("CollectiblesCollectedModal"),
      n = (0, u.e7)([E.default], () => {
        var t, e;
        return null != (e = null == (t = E.default.getCurrentUser()) ? true : t.isStaff()) && e
      });
    return r.useMemo(() => {
      if (!e || t.type !== a.Z.AVATAR_DECORATION) return;
      let i = (0, S.R9)(t.skuId, n);
      if (null == i) return;
      let r = C.Z.getProduct(i);
      return null != r ? r : true
    }, [e, t.skuId, t.type, n])
  })(j), {
    hasRequiredProductItems: H
  } = (t => {
    let {
      firstProfileEffect: e,
      firstAvatarDecoration: n,
      firstNameplate: i
    } = (0, m.Rj)(t), r = (0, _.x6)(t);
    return {
      firstAvatarDecoration: n,
      firstProfileEffect: e,
      firstNameplate: i,
      isBundle: r,
      hasRequiredProductItems: r ? (0, g.N)(t) : null != n || null != e || null != i
    }
  })(j), {
    promotionalRewardCollectedText: W,
    openProfileSettings: X
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
  })(V), {
    environment: $,
    modalRef: Q,
    confettiCanvas: Y,
    setConfettiCanvas: q,
    customConfettiDisplayOptions: z
  } = (0, y.$0)(j, U);
  (0, y.f1)(j, V);
  let K = (0, b.kd)(j),
    J = (0, b.kd)(G),
    {
      handleUseNow: tt,
      isApplying: te
    } = (0, T.W)({
      product: j,
      onSuccess: B,
      onError: B
    }),
    tn = (0, y.Xw)({
      product: j,
      pairedProduct: G,
      overrideTitle: x,
      isVariantsGroupEnabled: true,
      shouldShowPromotionalExperience: D,
      productName: K,
      pairedProductName: J
    }),
    ti = (0, y.ys)({
      product: j,
      pairedProduct: G,
      overrideDescription: M,
      productName: K,
      pairedProductName: J,
      shouldShowPromotionalExperience: D,
      promotionalRewardCollectedText: W
    }),
    tr = (0, y.cf)({
      product: j,
      pairedProduct: G,
      onClose: B,
      analyticsLocations: V,
      hasRequiredProductItems: H,
      handleUseNow: tt,
      isApplying: te,
      variantsReturnStyle: s.v.VARIANTS_GROUP,
      openProfileSettings: X
    }),
    tl = "6/4";
  switch (j.type) {
    case a.Z.NAMEPLATE:
    case a.Z.AVATAR_DECORATION:
      tl = "16/9";
      break;
    case a.Z.BUNDLE:
    case a.Z.PROFILE_EFFECT:
    default:
      tl = "6/4"
  }
  return (0, i.jsx)(p.Gt, {
    value: V,
    children: (0, i.jsxs)("div", {
      ref: Q,
      children: [(0, i.jsx)(l.O_, {
        ref: q,
        className: N.confettiCanvas,
        environment: $
      }), (0, i.jsx)(d.I, {
        graphic: {
          type: "dynamic",
          component: o.AX$.COLLECTIBLES_PREVIEW,
          aspectRatio: tl,
          props: {
            product: j,
            pairedProduct: G,
            forCollectedModal: true
          }
        },
        title: tn,
        subtitle: null != ti ? ti : true,
        onClose: B,
        transitionState: e,
        actions: tr
      }), null != z ? (0, i.jsx)(L.i, {
        options: z
      }) : (0, i.jsx)(R.Z, {
        confettiTarget: Q.current,
        confettiCanvas: Y,
        sprites: (0, k.vK)(j.categorySkuId)
      })]
    })
  })
}