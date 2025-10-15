/** Chunk was on 45620 **/
/** chunk id: 558261, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => M
}), require("./388685.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk311570 = require("./311570.js"),
  Chunk399606 = require("./399606.js"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk333867 = require("./333867.jsx"),
  Chunk767714 = require("./767714.jsx"),
  Chunk960919 = require("./960919.jsx"),
  Chunk275388 = require("./275388.jsx"),
  Chunk594174 = require("./594174.js"),
  Chunk74538 = require("./74538.js"),
  Chunk335131 = require("./335131.js"),
  Chunk1870 = require("./1870.js"),
  Chunk884697 = require("./884697.js"),
  Chunk635552 = require("./635552.js"),
  Chunk290175 = require("./290175.js"),
  Chunk724994 = require("./724994.js"),
  Chunk786040 = require("./786040.jsx"),
  Chunk67409 = require("./67409.js"),
  Chunk58201 = require("./58201.js"),
  Chunk445794 = require("./445794.js"),
  Chunk956472 = require("./956472.js"),
  Chunk832149 = require("./832149.jsx"),
  Chunk215023 = require("./215023.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk192676 = require("./192676.js");
let B = e => {
    let {
      product: t,
      cardRef: n,
      analyticsLocations: i,
      selectedVariantIndex: s,
      hasDiscountOffer: a,
      discountOfferAmount: u,
      text: d
    } = e, g = (0, _.XM)(t, false, false), f = a ? L.intl.formatToPlainString(L.t["5U5RBw"], {
      discountOfferAmount: u
    }) : L.intl.formatToPlainString(L.t["cNSL/v"], {
      price: g
    });
    return (0, r.jsx)(o.Button, {
      variant: "primary",
      onClick: e => {
        e.stopPropagation(), (0, c.Z)({
          skuId: (0, O.S)({
            product: t,
            selectedVariantIndex: s
          }),
          returnRef: n,
          analyticsLocations: i,
          variantsReturnStyle: l.v.VARIANTS_GROUP
        })
      },
      text: null != d ? d : f,
      fullWidth: true
    })
  },
  A = e => {
    let {
      isClaimPremiumProductDisabled: t,
      text: n
    } = e;
    return (0, r.jsx)(u.Z, {
      fullWidth: true,
      disabled: t,
      onClick: e => e.stopPropagation(),
      textOptions: {
        textOverride: null != n ? n : L.intl.string(L.t.sEAnVF)
      },
      subscriptionTier: T.Si.TIER_2,
      showGradient: true
    })
  },
  N = e => {
    let {
      handlePreviewButtonClick: t,
      text: n
    } = e;
    return (0, r.jsx)(o.Button, {
      variant: "primary",
      onClick: e => {
        e.stopPropagation(), t(e)
      },
      text: null != n ? n : L.intl.string(L.t.FdGl5O),
      fullWidth: true
    })
  },
  P = e => {
    let {
      handleUseNow: t,
      isApplying: n,
      text: l
    } = e;
    return (0, r.jsx)(o.Button, {
      variant: "primary",
      onClick: e => {
        e.stopPropagation(), t()
      },
      loading: n,
      text: null != l ? l : L.intl.string(L.t.MAS7uL),
      fullWidth: true
    })
  },
  R = e => {
    let {
      skuId: t,
      onClick: n,
      text: l
    } = e;
    return (0, r.jsx)(o.Button, {
      variant: "primary",
      onClick: e => {
        e.stopPropagation(), n(t)
      },
      text: null != l ? l : L.intl.string(L.t.FdGl5O),
      fullWidth: true
    })
  },
  Z = e => {
    let {
      product: t,
      isClaimPremiumProductDisabled: n,
      isClaiming: l,
      analyticsLocations: i,
      text: s,
      onClickAnalytics: a
    } = e, c = async () => {
      null == a || a("claim premium product button"), await (0, C.fK)(t.skuId), (0, k.Z)({
        product: t,
        analyticsLocations: i,
        purchaseType: j.o8.PREMIUM_PURCHASE
      })
    };
    return (0, r.jsx)(o.Button, {
      variant: "primary",
      onClick: e => {
        e.stopPropagation(), c()
      },
      disabled: n,
      loading: l,
      loadingStartedLabel: L.intl.string(L.t["TYw+9v"]),
      loadingFinishedLabel: L.intl.string(L.t.Pg1UPz),
      text: null != s ? s : L.intl.string(L.t.zp6caG),
      fullWidth: true
    })
  },
  w = e => {
    let {
      product: t,
      checkoutEligiblePrices: n,
      analyticsLocations: i,
      selectedVariantIndex: s,
      text: a,
      onClickAnalytics: c
    } = e;
    return (0, r.jsx)(o.Button, {
      variant: "primary",
      text: null != a ? a : L.intl.format(L.t.kAgx5O, {
        orbPrice: n[0].amount,
        orbIconHook: () => (0, r.jsx)(d.Z, {
          className: I.orbIconAligned
        })
      }),
      onClick: e => {
        e.stopPropagation(), null == c || c("claim with orbs button"), (0, g.qA)({
          skuId: (0, O.S)({
            product: t,
            selectedVariantIndex: s
          }),
          onCheckoutSuccess: e => {
            var n;
            let {
              entitlements: r
            } = e;
            (0, C.qg)({
              variantsReturnStyle: l.v.VARIANTS_GROUP
            }), (0, k.Z)({
              product: t,
              analyticsLocations: i,
              itemConsumed: null == (n = r[0]) ? true : n.consumed,
              purchaseType: j.o8.ORB
            })
          },
          analyticsLocations: i
        })
      },
      "aria-label": L.intl.formatToPlainString(L.t["fNG/09"], {
        orbPrice: n[0].amount
      }),
      fullWidth: true
    })
  },
  H = e => {
    let {
      handlePreviewButtonClick: t,
      text: n
    } = e;
    return (0, r.jsx)(o.Button, {
      variant: "primary",
      onClick: e => {
        e.stopPropagation(), t(e)
      },
      text: null != n ? n : L.intl.string(L.t.GpnHfH),
      fullWidth: true
    })
  },
  D = e => {
    let {
      product: t,
      cardRef: n,
      selectedVariantIndex: l,
      onClick: o,
      text: c,
      prioritizedCurrency: u,
      onClickAnalytics: d
    } = e, g = (0, i.e7)([f.default], () => f.default.getCurrentUser()), C = p.ZP.canUseCollectibles(g), {
      isPurchased: O,
      isPartiallyOwnedBundle: x
    } = (0, E.L)(t), k = (0, _.G1)(t), j = (0, _.rN)(t), {
      isDisabled: T
    } = (0, b.G)(t.skuId), L = (0, _.ne)({
      product: t,
      isPartiallyOwnedBundle: x,
      isPurchased: O
    }), I = (0, S.Iw)(t), D = null != I, {
      shouldCheckoutWithOrbs: M,
      hasSufficientOrbs: F,
      checkoutEligiblePrices: W
    } = (0, y.Ip)({
      product: t,
      isPremiumUser: C,
      prioritizedCurrency: u,
      hasDiscountOffer: D
    }), {
      analyticsLocations: U
    } = (0, a.ZP)(s.Z.COLLECTIBLES_SHOP_CARD), V = (0, v.J7)(t, s.Z.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON, d), [z, G] = (0, i.Wu)([h.Z], () => [h.Z.isClaiming === t.skuId, null != h.Z.isClaiming && h.Z.isClaiming !== t.skuId]), {
      handleUseNow: K,
      isApplying: Y
    } = (0, m.W)({
      product: t
    });
    return null != o ? (0, r.jsx)(R, {
      onClick: o,
      skuId: t.skuId,
      text: c
    }) : !k || C || j ? !L || T ? (0, r.jsx)(N, {
      handlePreviewButtonClick: V,
      text: c
    }) : O ? (0, r.jsx)(P, {
      handleUseNow: K,
      isApplying: Y,
      text: c
    }) : k ? (0, r.jsx)(Z, {
      product: t,
      isClaimPremiumProductDisabled: G,
      isClaiming: z,
      analyticsLocations: U,
      text: c,
      onClickAnalytics: d
    }) : M && F ? (0, r.jsx)(w, {
      product: t,
      checkoutEligiblePrices: W,
      analyticsLocations: U,
      selectedVariantIndex: l,
      text: c,
      onClickAnalytics: d
    }) : M && !F ? (0, r.jsx)(N, {
      handlePreviewButtonClick: V,
      text: c
    }) : u === v.tA.ORBS ? (0, r.jsx)(H, {
      handlePreviewButtonClick: V,
      text: c
    }) : (0, r.jsx)(B, {
      product: t,
      cardRef: n,
      analyticsLocations: U,
      selectedVariantIndex: l,
      hasDiscountOffer: D,
      discountOfferAmount: I,
      text: c
    }) : (0, r.jsx)(A, {
      isClaimPremiumProductDisabled: G,
      text: c
    })
  },
  M = e => {
    let {
      skuId: t,
      cardRef: n,
      selectedVariantIndex: l,
      onClick: i,
      text: o,
      prioritizedCurrency: s,
      onClickAnalytics: a
    } = e, c = (0, v.LJ)(t);
    if (null == c) return null;
    let u = (0, x.W)(c, l);
    return (0, r.jsx)(D, {
      product: u,
      cardRef: n,
      selectedVariantIndex: l,
      onClick: i,
      text: o,
      prioritizedCurrency: s,
      onClickAnalytics: a
    })
  }