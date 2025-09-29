/** Chunk was on 87624 **/
/** chunk id: 331042, original params: e,t,l (module,exports,require) **/
require.d(exports, {
  default: () => N
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
let N = e => {
  let {
    transitionState: t,
    product: l,
    onClose: N,
    analyticsLocations: y,
    overrideTitle: b,
    overrideDescription: j,
    shouldShowPromotionalExperience: U,
    purchaseType: B = w.o8.FIAT
  } = e, M = (0, s.e7)([P.Z], () => P.Z.purchases), V = (0, h.o)(l, M), F = (0, Z.W)(l, V), {
    analyticsLocations: G
  } = (0, f.ZP)([...y, d.Z.COLLECTIBLES_COLLECTED_MODAL]), W = (e => {
    let t = (0, m.o)("CollectiblesCollectedModal"),
      l = (0, s.e7)([E.default], () => {
        var e, t;
        return null != (t = null == (e = E.default.getCurrentUser()) ? true : e.isStaff()) && t
      });
    return n.useMemo(() => {
      if (!t || e.type !== i.Z.AVATAR_DECORATION) return;
      let r = (0, k.R9)(e.skuId, l);
      if (null == r) return;
      let n = v.Z.getProduct(r);
      return null != n ? n : true
    }, [t, e.skuId, e.type, l])
  })(F), {
    hasRequiredProductItems: $
  } = (e => {
    let {
      firstProfileEffect: t,
      firstAvatarDecoration: l,
      firstNameplate: r
    } = (0, L.Rj)(e), n = (0, _.x6)(e);
    return {
      firstAvatarDecoration: l,
      firstProfileEffect: t,
      firstNameplate: r,
      isBundle: n,
      hasRequiredProductItems: n ? (0, x.N)(e) : null != l || null != t || null != r
    }
  })(F), {
    promotionalRewardCollectedText: H,
    openProfileSettings: X
  } = (e => {
    var t;
    let l = (0, p.Z)(),
      r = (0, C.Z)({
        analyticsLocations: e
      });
    return {
      giftingPromotionConfig: l,
      promotionalRewardCollectedText: null == l || null == (t = l.giftPurchaseConfirmation) ? true : t.rewardCollectedText(),
      openProfileSettings: r
    }
  })(G), {
    environment: q,
    modalRef: K,
    confettiCanvas: z,
    setConfettiCanvas: J,
    customConfettiDisplayOptions: Q
  } = (0, g.$0)(F, B);
  (0, g.f1)(F, G);
  let Y = (0, S.kd)(F),
    ee = (0, S.kd)(W),
    {
      handleUseNow: et,
      isApplying: el
    } = (0, A.W)({
      product: F,
      onSuccess: N,
      onError: N
    }),
    er = (0, g.Xw)({
      product: F,
      pairedProduct: W,
      overrideTitle: b,
      isVariantsGroupEnabled: true,
      shouldShowPromotionalExperience: U,
      productName: Y,
      pairedProductName: ee
    }),
    en = (0, g.ys)({
      product: F,
      pairedProduct: W,
      overrideDescription: j,
      productName: Y,
      pairedProductName: ee,
      shouldShowPromotionalExperience: U,
      promotionalRewardCollectedText: H
    }),
    eo = (0, g.cf)({
      product: F,
      pairedProduct: W,
      onClose: N,
      analyticsLocations: G,
      hasRequiredProductItems: $,
      handleUseNow: et,
      isApplying: el,
      variantsReturnStyle: a.v.VARIANTS_GROUP,
      openProfileSettings: X
    }),
    ei = "6/4";
  switch (F.type) {
    case i.Z.NAMEPLATE:
    case i.Z.AVATAR_DECORATION:
      ei = "16/9";
      break;
    case i.Z.BUNDLE:
    case i.Z.PROFILE_EFFECT:
    default:
      ei = "6/4"
  }
  let {
    confettiColors: ea
  } = (0, T.Z)(F.styles);
  return (0, r.jsx)(f.Gt, {
    value: G,
    children: (0, r.jsxs)("div", {
      ref: K,
      children: [(0, r.jsx)(o.O_, {
        ref: J,
        className: D.confettiCanvas,
        environment: q
      }), (0, r.jsx)(u.I, {
        graphic: {
          type: "dynamic",
          component: c.AX$.COLLECTIBLES_PREVIEW,
          aspectRatio: ei,
          props: {
            product: F,
            pairedProduct: W,
            forCollectedModal: true
          }
        },
        title: er,
        subtitle: null != en ? en : true,
        onClose: N,
        transitionState: t,
        actions: eo
      }), null != Q ? (0, r.jsx)(R.i, {
        options: Q
      }) : (0, r.jsx)(I.Z, {
        confettiTarget: K.current,
        confettiCanvas: z,
        sprites: (0, O.vK)(F.categorySkuId),
        colors: null == ea ? true : ea.map(e => e.toHexString())
      })]
    })
  })
}