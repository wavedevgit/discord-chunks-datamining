/** Chunk was on 87624 **/
/** chunk id: 331042, original params: e,t,l (module,exports,require) **/
require.d(exports, {
  default: () => b
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
  Chunk286961 = require("./286961.js"),
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
  Chunk629755 = require("./629755.js");
let k = e => {
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
  },
  w = e => {
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
  },
  D = e => {
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
  },
  b = e => {
    let {
      transitionState: t,
      product: l,
      onClose: n,
      analyticsLocations: f,
      overrideTitle: C,
      overrideDescription: E,
      shouldShowPromotionalExperience: v,
      purchaseType: P = g.o8.FIAT
    } = e, _ = (0, a.e7)([h.Z], () => h.Z.purchases), L = (0, A.o)(l, _), Z = (0, R.W)(l, L), {
      analyticsLocations: b
    } = (0, p.ZP)([...f, c.Z.COLLECTIBLES_COLLECTED_MODAL]), j = k(Z), {
      hasRequiredProductItems: N
    } = w(Z), {
      promotionalRewardCollectedText: U,
      openProfileSettings: M
    } = D(b), {
      environment: V,
      modalRef: B,
      confettiCanvas: G,
      setConfettiCanvas: W,
      customConfettiDisplayOptions: $
    } = (0, S.$0)(Z, P);
    (0, S.f1)(Z, b);
    let X = (0, x.kd)(Z),
      q = (0, x.kd)(j),
      {
        handleUseNow: F,
        isApplying: H
      } = (0, T.W)({
        product: Z,
        onSuccess: n,
        onError: n
      }),
      K = (0, S.Xw)({
        product: Z,
        pairedProduct: j,
        overrideTitle: C,
        isVariantsGroupEnabled: true,
        shouldShowPromotionalExperience: v,
        productName: X,
        pairedProductName: q
      }),
      z = (0, S.ys)({
        product: Z,
        pairedProduct: j,
        overrideDescription: E,
        productName: X,
        pairedProductName: q,
        shouldShowPromotionalExperience: v,
        promotionalRewardCollectedText: U
      }),
      J = (0, S.cf)({
        product: Z,
        pairedProduct: j,
        onClose: n,
        analyticsLocations: b,
        hasRequiredProductItems: N,
        handleUseNow: F,
        isApplying: H,
        variantsReturnStyle: s.v.VARIANTS_GROUP,
        openProfileSettings: M
      });
    return (0, r.jsx)(p.Gt, {
      value: b,
      children: (0, r.jsxs)("div", {
        ref: B,
        children: [(0, r.jsx)(o.O_, {
          ref: W,
          className: y.confettiCanvas,
          environment: V
        }), (0, r.jsx)(u.I, {
          graphic: {
            type: "dynamic",
            component: d.AX$.COLLECTIBLES_PREVIEW,
            aspectRatio: Z.type === i.Z.NAMEPLATE || Z.type === i.Z.AVATAR_DECORATION ? "16/9" : "6/4",
            props: {
              product: Z,
              pairedProduct: j
            }
          },
          title: K,
          subtitle: null != z ? z : true,
          onClose: n,
          transitionState: t,
          actions: J
        }), null != $ ? (0, r.jsx)(O.i, {
          options: $
        }) : (0, r.jsx)(m.Z, {
          confettiTarget: B.current,
          confettiCanvas: G,
          sprites: (0, I.vK)(Z.categorySkuId)
        })]
      })
    })
  }