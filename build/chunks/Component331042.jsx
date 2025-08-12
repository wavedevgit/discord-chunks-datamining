/** Chunk was on 87624 **/
/** chunk id: 331042, original params: e,t,l (module,exports,require) **/
require.d(exports, {
  default: () => D
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk505266 = require("./505266.js"),
  Chunk979554 = require("./979554.js"),
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
  Chunk228624 = require("./228624.js"),
  Chunk635552 = require("./635552.js"),
  Chunk905357 = require("./905357.js"),
  Chunk328456 = require("./328456.js"),
  Chunk530618 = require("./530618.jsx"),
  Chunk372654 = require("./372654.js"),
  Chunk197831 = require("./197831.jsx"),
  Chunk58201 = require("./58201.js"),
  Chunk391594 = require("./391594.js"),
  Chunk302800 = require("./302800.js"),
  Chunk215023 = require("./215023.js"),
  Chunk629755 = require("./629755.js");
let R = e => {
    let t = (0, _.o)("CollectiblesCollectedModal"),
      l = (0, s.e7)([f.default], () => {
        var e, t;
        return null != (t = null == (e = f.default.getCurrentUser()) ? true : e.isStaff()) && t
      });
    return r.useMemo(() => {
      if (!t || e.type !== i.Z.AVATAR_DECORATION) return;
      let o = (0, S.R9)(e.skuId, l);
      if (null == o) return;
      let r = E.Z.getProduct(o);
      return null != r ? r : true
    }, [t, e.skuId, e.type, l])
  },
  w = e => {
    let {
      firstProfileEffect: t,
      firstAvatarDecoration: l
    } = (0, m.Rj)(e), o = (0, P.x6)(e);
    return {
      firstAvatarDecoration: l,
      firstProfileEffect: t,
      isBundle: o,
      hasRequiredProductItems: o ? null != l && null != t : null != l || null != t || e.type === i.Z.NAMEPLATE
    }
  },
  b = e => {
    var t;
    let l = (0, A.ed)("CollectiblesCollectedModal"),
      o = (0, p.Z)(),
      r = (0, A.hv)("CollectiblesShopGiftButton"),
      n = (0, C.Z)({
        analyticsLocations: e
      });
    return {
      isVariantsGroupEnabled: l,
      giftingPromotionConfig: o,
      promotionalRewardCollectedText: null == o || null == (t = o.giftPurchaseConfirmation) ? true : t.rewardCollectedText(),
      variantsReturnStyle: r,
      openProfileSettings: n
    }
  },
  D = e => {
    let {
      transitionState: t,
      product: l,
      onClose: r,
      analyticsLocations: p,
      overrideTitle: C,
      overrideDescription: f,
      shouldShowPromotionalExperience: E,
      purchaseType: P = k.o8.FIAT
    } = e, _ = (0, s.e7)([h.Z], () => h.Z.purchases), A = (0, v.o)(l, _), m = (0, Z.W)(l, A), {
      analyticsLocations: S
    } = (0, d.ZP)([...p, c.Z.COLLECTIBLES_COLLECTED_MODAL]), D = R(m), {
      hasRequiredProductItems: j
    } = w(m), {
      isVariantsGroupEnabled: M,
      promotionalRewardCollectedText: N,
      variantsReturnStyle: B,
      openProfileSettings: U
    } = b(S), {
      environment: V,
      modalRef: W,
      confettiCanvas: $,
      setConfettiCanvas: G,
      customConfettiDisplayOptions: X
    } = (0, g.$0)(m, P);
    (0, g.f1)(m, S);
    let q = (0, T.k)(m),
      F = (0, T.k)(D),
      {
        handleUseNow: H,
        isApplying: K
      } = (0, L.W)({
        product: m,
        onSuccess: r,
        onError: r
      }),
      z = (0, g.Xw)({
        product: m,
        pairedProduct: D,
        overrideTitle: C,
        isVariantsGroupEnabled: M,
        shouldShowPromotionalExperience: E,
        productName: q,
        pairedProductName: F
      }),
      J = (0, g.ys)({
        product: m,
        pairedProduct: D,
        overrideDescription: f,
        productName: q,
        pairedProductName: F,
        shouldShowPromotionalExperience: E,
        promotionalRewardCollectedText: N
      }),
      Q = (0, g.cf)({
        product: m,
        pairedProduct: D,
        onClose: r,
        analyticsLocations: S,
        hasRequiredProductItems: j,
        handleUseNow: H,
        isApplying: K,
        variantsReturnStyle: B,
        openProfileSettings: U
      });
    return (0, o.jsx)(d.Gt, {
      value: S,
      children: (0, o.jsxs)("div", {
        ref: W,
        children: [(0, o.jsx)(n.O_, {
          ref: G,
          className: y.confettiCanvas,
          environment: V
        }), (0, o.jsx)(a.I, {
          graphic: {
            type: "dynamic",
            component: u.AX$.COLLECTIBLES_PREVIEW,
            aspectRatio: m.type === i.Z.NAMEPLATE || m.type === i.Z.AVATAR_DECORATION ? "16/9" : "6/4",
            props: {
              product: m,
              pairedProduct: D
            }
          },
          title: z,
          subtitle: null != J ? J : true,
          onClose: r,
          transitionState: t,
          actions: Q
        }), null != X ? (0, o.jsx)(O.i, {
          options: X
        }) : (0, o.jsx)(x.Z, {
          confettiTarget: W.current,
          confettiCanvas: $,
          sprites: (0, I.vK)(m.categorySkuId)
        })]
      })
    })
  }