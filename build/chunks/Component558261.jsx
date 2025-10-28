/** Chunk was on 45620 **/
/** chunk id: 558261, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => F
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
  Chunk429368 = require("./429368.js"),
  Chunk884697 = require("./884697.js"),
  Chunk635552 = require("./635552.js"),
  Chunk290175 = require("./290175.js"),
  Chunk724994 = require("./724994.js"),
  Chunk786040 = require("./786040.js"),
  Chunk67409 = require("./67409.js"),
  Chunk58201 = require("./58201.js"),
  Chunk445794 = require("./445794.js"),
  Chunk956472 = require("./956472.js"),
  Chunk832149 = require("./832149.jsx"),
  Chunk215023 = require("./215023.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk192676 = require("./192676.js");
let A = e => {
    let {
      product: t,
      cardRef: n,
      isPremiumUser: i,
      analyticsLocations: s,
      selectedVariantIndex: a,
      hasDiscountOffer: u,
      discountOfferAmount: d,
      text: g
    } = e, p = (0, m.XM)(t, i, false), f = u ? I.intl.formatToPlainString(I.t["5U5RB5"], {
      discountOfferAmount: d
    }) : I.intl.formatToPlainString(I.t["cNSL/j"], {
      price: p
    });
    return (0, r.jsx)(o.Button, {
      variant: "primary",
      onClick: e => {
        e.stopPropagation(), (0, c.Z)({
          skuId: (0, O.S)({
            product: t,
            selectedVariantIndex: a
          }),
          returnRef: n,
          analyticsLocations: s,
          variantsReturnStyle: l.v.VARIANTS_GROUP
        })
      },
      text: null != g ? g : f,
      fullWidth: true
    })
  },
  P = e => {
    let {
      isClaimPremiumProductDisabled: t,
      text: n
    } = e;
    return (0, r.jsx)(u.Z, {
      fullWidth: true,
      disabled: t,
      onClick: e => e.stopPropagation(),
      textOptions: {
        textOverride: null != n ? n : I.intl.string(I.t.sEAnVH)
      },
      subscriptionTier: L.Si.TIER_2,
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
      text: null != n ? n : I.intl.string(I.t.FdGl5A),
      fullWidth: true
    })
  },
  R = e => {
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
      text: null != l ? l : I.intl.string(I.t.MAS7uK),
      fullWidth: true
    })
  },
  Z = e => {
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
      text: null != l ? l : I.intl.string(I.t.FdGl5A),
      fullWidth: true
    })
  },
  w = e => {
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
        purchaseType: T.o8.PREMIUM_PURCHASE
      })
    };
    return (0, r.jsx)(o.Button, {
      variant: "primary",
      onClick: e => {
        e.stopPropagation(), c()
      },
      disabled: n,
      loading: l,
      loadingStartedLabel: I.intl.string(I.t["TYw+9s"]),
      loadingFinishedLabel: I.intl.string(I.t.Pg1UP5),
      text: null != s ? s : I.intl.string(I.t.zp6caO),
      fullWidth: true
    })
  },
  H = e => {
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
      text: null != a ? a : I.intl.format(I.t.kAgx5L, {
        orbPrice: n[0].amount,
        orbIconHook: () => (0, r.jsx)(d.Z, {
          className: B.orbIconAligned
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
              purchaseType: T.o8.ORB
            })
          },
          analyticsLocations: i
        })
      },
      "aria-label": I.intl.formatToPlainString(I.t["fNG/05"], {
        orbPrice: n[0].amount
      }),
      fullWidth: true
    })
  },
  M = e => {
    let {
      handlePreviewButtonClick: t,
      text: n
    } = e;
    return (0, r.jsx)(o.Button, {
      variant: "primary",
      onClick: e => {
        e.stopPropagation(), t(e)
      },
      text: null != n ? n : I.intl.string(I.t.GpnHfH),
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
    } = e, g = (0, i.e7)([p.default], () => p.default.getCurrentUser()), C = f.ZP.canUseCollectibles(g), {
      isPurchased: _,
      isPartiallyOwnedBundle: O
    } = (0, E.L)(t), S = (0, m.G1)(t), k = (0, m.rN)(t), {
      isDisabled: T
    } = (0, v.G)(t.skuId), L = (0, m.ne)({
      product: t,
      isPartiallyOwnedBundle: O,
      isPurchased: _
    }), I = (0, y.Iw)(t), B = null != I, {
      shouldCheckoutWithOrbs: D,
      hasSufficientOrbs: F,
      checkoutEligiblePrices: W
    } = (0, j.Ip)({
      product: t,
      isPremiumUser: C,
      prioritizedCurrency: u,
      hasDiscountOffer: B
    }), {
      analyticsLocations: V
    } = (0, a.ZP)(s.Z.COLLECTIBLES_SHOP_CARD), U = (0, x.J7)(t, s.Z.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON, d), [z, G] = (0, i.Wu)([h.Z], () => [h.Z.isClaiming === t.skuId, null != h.Z.isClaiming && h.Z.isClaiming !== t.skuId]), {
      handleUseNow: K,
      isApplying: Y
    } = (0, b.W)({
      product: t
    });
    return null != o ? (0, r.jsx)(Z, {
      onClick: o,
      skuId: t.skuId,
      text: c
    }) : !S || C || k ? !L || T ? (0, r.jsx)(N, {
      handlePreviewButtonClick: U,
      text: c
    }) : _ ? (0, r.jsx)(R, {
      handleUseNow: K,
      isApplying: Y,
      text: c
    }) : S ? (0, r.jsx)(w, {
      product: t,
      isClaimPremiumProductDisabled: G,
      isClaiming: z,
      analyticsLocations: V,
      text: c,
      onClickAnalytics: d
    }) : D && F ? (0, r.jsx)(H, {
      product: t,
      checkoutEligiblePrices: W,
      analyticsLocations: V,
      selectedVariantIndex: l,
      text: c,
      onClickAnalytics: d
    }) : D && !F ? (0, r.jsx)(N, {
      handlePreviewButtonClick: U,
      text: c
    }) : u === x.tA.ORBS ? (0, r.jsx)(M, {
      handlePreviewButtonClick: U,
      text: c
    }) : (0, r.jsx)(A, {
      product: t,
      cardRef: n,
      isPremiumUser: C,
      analyticsLocations: V,
      selectedVariantIndex: l,
      hasDiscountOffer: B,
      discountOfferAmount: I,
      text: c
    }) : (0, r.jsx)(P, {
      isClaimPremiumProductDisabled: G,
      text: c
    })
  },
  F = e => {
    let {
      skuId: t,
      cardRef: n,
      onClick: l,
      text: i,
      prioritizedCurrency: o,
      onClickAnalytics: s
    } = e, a = (0, x.LJ)(t), c = (0, _.o)(a);
    if (null == a) return null;
    let u = (0, S.W)(a, c);
    return (0, r.jsx)(D, {
      product: u,
      cardRef: n,
      selectedVariantIndex: c,
      onClick: l,
      text: i,
      prioritizedCurrency: o,
      onClickAnalytics: s
    })
  }