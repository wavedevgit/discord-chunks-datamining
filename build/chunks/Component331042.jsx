/** Chunk was on 87624 **/
/** chunk id: 331042, original params: e,t,l (module,exports,require) **/
require.d(exports, {
  default: () => k
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk505266 = require("./505266.js"),
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
  Chunk530618 = require("./530618.jsx"),
  Chunk372654 = require("./372654.js"),
  Chunk197831 = require("./197831.jsx"),
  Chunk58201 = require("./58201.js"),
  Chunk29121 = require("./29121.js"),
  Chunk391594 = require("./391594.js"),
  Chunk302800 = require("./302800.js"),
  Chunk215023 = require("./215023.js"),
  Chunk222311 = require("./222311.js");
let k = e => {
  let {
    transitionState: t,
    product: l,
    onClose: k,
    analyticsLocations: w,
    overrideTitle: D,
    overrideDescription: b,
    shouldShowPromotionalExperience: j,
    purchaseType: N = g.o8.FIAT
  } = e, U = (0, a.e7)([h.Z], () => h.Z.purchases), M = (0, A.o)(l, U), V = (0, R.W)(l, M), {
    analyticsLocations: B
  } = (0, p.ZP)([...w, c.Z.COLLECTIBLES_COLLECTED_MODAL]), G = (e => {
    let t = (0, _.o)("CollectiblesCollectedModal"),
      l = (0, a.e7)([E.default], () => {
        var e, t;
        return null != (t = null == (e = E.default.getCurrentUser()) ? true : e.isStaff()) && t
      });
    return n.useMemo(() => {
      if (!t || e.type !== i.Z.AVATAR_DECORATION) return;
      let r = (0, Z.R9)(e.skuId, l);
      if (null == r) return;
      let n = v.Z.getProduct(r);
      return null != n ? n : true
    }, [t, e.skuId, e.type, l])
  })(V), {
    hasRequiredProductItems: W
  } = (e => {
    let {
      firstProfileEffect: t,
      firstAvatarDecoration: l
    } = (0, L.Rj)(e), r = (0, P.x6)(e);
    return {
      firstAvatarDecoration: l,
      firstProfileEffect: t,
      isBundle: r,
      hasRequiredProductItems: r ? null != l && null != t : null != l || null != t || e.type === i.Z.NAMEPLATE
    }
  })(V), {
    promotionalRewardCollectedText: $,
    openProfileSettings: X
  } = (e => {
    var t;
    let l = (0, f.Z)(),
      r = (0, C.Z)({
        analyticsLocations: e
      });
    return {
      giftingPromotionConfig: l,
      promotionalRewardCollectedText: null == l || null == (t = l.giftPurchaseConfirmation) ? true : t.rewardCollectedText(),
      openProfileSettings: r
    }
  })(B), {
    environment: q,
    modalRef: F,
    confettiCanvas: H,
    setConfettiCanvas: K,
    customConfettiDisplayOptions: z
  } = (0, S.$0)(V, N);
  (0, S.f1)(V, B);
  let J = (0, x.kd)(V),
    Q = (0, x.kd)(G),
    {
      handleUseNow: Y,
      isApplying: ee
    } = (0, T.W)({
      product: V,
      onSuccess: k,
      onError: k
    }),
    et = (0, S.Xw)({
      product: V,
      pairedProduct: G,
      overrideTitle: D,
      isVariantsGroupEnabled: true,
      shouldShowPromotionalExperience: j,
      productName: J,
      pairedProductName: Q
    }),
    el = (0, S.ys)({
      product: V,
      pairedProduct: G,
      overrideDescription: b,
      productName: J,
      pairedProductName: Q,
      shouldShowPromotionalExperience: j,
      promotionalRewardCollectedText: $
    }),
    er = (0, S.cf)({
      product: V,
      pairedProduct: G,
      onClose: k,
      analyticsLocations: B,
      hasRequiredProductItems: W,
      handleUseNow: Y,
      isApplying: ee,
      variantsReturnStyle: s.v.VARIANTS_GROUP,
      openProfileSettings: X
    });
  return (0, r.jsx)(p.Gt, {
    value: B,
    children: (0, r.jsxs)("div", {
      ref: F,
      children: [(0, r.jsx)(o.O_, {
        ref: K,
        className: y.confettiCanvas,
        environment: q
      }), (0, r.jsx)(u.I, {
        graphic: {
          type: "dynamic",
          component: d.AX$.COLLECTIBLES_PREVIEW,
          aspectRatio: V.type === i.Z.NAMEPLATE || V.type === i.Z.AVATAR_DECORATION ? "16/9" : "6/4",
          props: {
            product: V,
            pairedProduct: G
          }
        },
        title: et,
        subtitle: null != el ? el : true,
        onClose: k,
        transitionState: t,
        actions: er
      }), null != z ? (0, r.jsx)(O.i, {
        options: z
      }) : (0, r.jsx)(m.Z, {
        confettiTarget: F.current,
        confettiCanvas: H,
        sprites: (0, I.vK)(V.categorySkuId)
      })]
    })
  })
}