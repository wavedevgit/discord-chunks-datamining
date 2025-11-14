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
let P = e => {
    let {
      product: t,
      cardRef: n,
      isPremiumUser: i,
      analyticsLocations: o,
      selectedVariantIndex: s,
      hasDiscountOffer: u,
      discountOfferAmount: d,
      text: p
    } = e, g = (0, _.XM)(t, i, false), f = u ? L.intl.formatToPlainString(L.t["5U5RB5"], {
      discountOfferAmount: d
    }) : L.intl.formatToPlainString(L.t["cNSL/j"], {
      price: g
    });
    return (0, r.jsx)(a.Button, {
      variant: "primary",
      onClick: e => {
        e.stopPropagation(), (0, c.Z)({
          skuId: (0, O.S)({
            product: t,
            selectedVariantIndex: s
          }),
          returnRef: n,
          analyticsLocations: o,
          variantsReturnStyle: l.v.VARIANTS_GROUP
        })
      },
      text: null != p ? p : f,
      fullWidth: true
    })
  },
  N = e => {
    let {
      isClaimPremiumProductDisabled: t,
      text: n
    } = e;
    return (0, r.jsx)(u.Z, {
      fullWidth: true,
      disabled: t,
      onClick: e => e.stopPropagation(),
      textOptions: {
        textOverride: null != n ? n : L.intl.string(L.t.sEAnVH)
      },
      subscriptionTier: T.Si.TIER_2,
      showGradient: true
    })
  },
  A = e => {
    let {
      handlePreviewButtonClick: t,
      text: n
    } = e;
    return (0, r.jsx)(a.Button, {
      variant: "primary",
      onClick: e => {
        e.stopPropagation(), t(e)
      },
      text: null != n ? n : L.intl.string(L.t.FdGl5A),
      fullWidth: true
    })
  },
  R = e => {
    let {
      handleUseNow: t,
      isApplying: n,
      text: l
    } = e;
    return (0, r.jsx)(a.Button, {
      variant: "primary",
      onClick: e => {
        e.stopPropagation(), t()
      },
      loading: n,
      text: null != l ? l : L.intl.string(L.t.MAS7uK),
      fullWidth: true
    })
  },
  Z = e => {
    let {
      skuId: t,
      onClick: n,
      text: l
    } = e;
    return (0, r.jsx)(a.Button, {
      variant: "primary",
      onClick: e => {
        e.stopPropagation(), n(t)
      },
      text: null != l ? l : L.intl.string(L.t.FdGl5A),
      fullWidth: true
    })
  },
  w = e => {
    let {
      product: t,
      isClaimPremiumProductDisabled: n,
      isClaiming: l,
      analyticsLocations: i,
      text: o,
      onClickAnalytics: s
    } = e, c = async () => {
      null == s || s("claim premium product button"), await (0, h.fK)(t.skuId), (0, k.Z)({
        product: t,
        analyticsLocations: i,
        purchaseType: I.o8.PREMIUM_PURCHASE
      })
    };
    return (0, r.jsx)(a.Button, {
      variant: "primary",
      onClick: e => {
        e.stopPropagation(), c()
      },
      disabled: n,
      loading: l,
      loadingStartedLabel: L.intl.string(L.t["TYw+9s"]),
      loadingFinishedLabel: L.intl.string(L.t.Pg1UP5),
      text: null != o ? o : L.intl.string(L.t.zp6caO),
      fullWidth: true
    })
  },
  H = e => {
    let {
      product: t,
      checkoutEligiblePrices: n,
      analyticsLocations: i,
      selectedVariantIndex: o,
      text: s,
      onClickAnalytics: c
    } = e;
    return (0, r.jsx)(a.Button, {
      variant: "primary",
      text: null != s ? s : L.intl.format(L.t.kAgx5L, {
        orbPrice: n[0].amount,
        orbIconHook: () => (0, r.jsx)(d.Z, {
          className: B.orbIconAligned
        })
      }),
      onClick: e => {
        e.stopPropagation(), null == c || c("claim with orbs button"), (0, p.qA)({
          skuId: (0, O.S)({
            product: t,
            selectedVariantIndex: o
          }),
          onCheckoutSuccess: e => {
            var n;
            let {
              entitlements: r
            } = e;
            (0, h.qg)({
              variantsReturnStyle: l.v.VARIANTS_GROUP
            }), (0, k.Z)({
              product: t,
              analyticsLocations: i,
              itemConsumed: null == (n = r[0]) ? true : n.consumed,
              purchaseType: I.o8.ORB
            })
          },
          analyticsLocations: i
        })
      },
      "aria-label": L.intl.formatToPlainString(L.t["fNG/05"], {
        orbPrice: n[0].amount
      }),
      fullWidth: true
    })
  },
  D = e => {
    let {
      handlePreviewButtonClick: t,
      text: n
    } = e;
    return (0, r.jsx)(a.Button, {
      variant: "primary",
      onClick: e => {
        e.stopPropagation(), t(e)
      },
      text: null != n ? n : L.intl.string(L.t.GpnHfH),
      fullWidth: true
    })
  },
  M = e => {
    let {
      product: t,
      cardRef: n,
      selectedVariantIndex: l,
      onClick: a,
      text: c,
      prioritizedCurrency: u,
      onClickAnalytics: d
    } = e, p = (0, i.e7)([g.default], () => g.default.getCurrentUser()), h = f.ZP.canUseCollectibles(p), {
      isPurchased: m,
      isPartiallyOwnedBundle: O
    } = (0, x.L)(t), S = (0, _.G1)(t), k = (0, _.rN)(t), {
      isDisabled: I
    } = (0, v.G)(t.skuId), T = (0, _.ne)({
      product: t,
      isPartiallyOwnedBundle: O,
      isPurchased: m
    }), L = (0, y.Iw)(t), B = null != L, {
      shouldCheckoutWithOrbs: M,
      hasSufficientOrbs: F,
      checkoutEligiblePrices: W
    } = (0, j.Ip)({
      product: t,
      isPremiumUser: h,
      prioritizedCurrency: u,
      hasDiscountOffer: B
    }), {
      analyticsLocations: V
    } = (0, s.ZP)(o.Z.COLLECTIBLES_SHOP_CARD), U = (0, E.J7)(t, o.Z.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON, d), [z, G] = (0, i.Wu)([C.Z], () => [C.Z.isClaiming === t.skuId, null != C.Z.isClaiming && C.Z.isClaiming !== t.skuId]), {
      handleUseNow: K,
      isApplying: Y
    } = (0, b.W)({
      product: t
    });
    if (null != a) return (0, r.jsx)(Z, {
      onClick: a,
      skuId: t.skuId,
      text: c
    });
    if (S && !h && !k) return (0, r.jsx)(N, {
      isClaimPremiumProductDisabled: G,
      text: c
    });
    if (!T || I) return (0, r.jsx)(A, {
      handlePreviewButtonClick: U,
      text: c
    });
    if (m) return (0, r.jsx)(R, {
      handleUseNow: K,
      isApplying: Y,
      text: c
    });
    if (S) return (0, r.jsx)(w, {
      product: t,
      isClaimPremiumProductDisabled: G,
      isClaiming: z,
      analyticsLocations: V,
      text: c,
      onClickAnalytics: d
    });
    if (M && F) return (0, r.jsx)(H, {
      product: t,
      checkoutEligiblePrices: W,
      analyticsLocations: V,
      selectedVariantIndex: l,
      text: c,
      onClickAnalytics: d
    });
    if (M && !F)
      if (W.length > 1) return (0, r.jsx)(D, {
        handlePreviewButtonClick: U,
        text: c
      });
      else return (0, r.jsx)(A, {
        handlePreviewButtonClick: U,
        text: c
      });
    return (0, r.jsx)(P, {
      product: t,
      cardRef: n,
      isPremiumUser: h,
      analyticsLocations: V,
      selectedVariantIndex: l,
      hasDiscountOffer: B,
      discountOfferAmount: L,
      text: c
    })
  },
  F = e => {
    let {
      skuId: t,
      cardRef: n,
      onClick: l,
      text: i,
      prioritizedCurrency: a,
      onClickAnalytics: o
    } = e, s = (0, E.LJ)(t), c = (0, m.o)(s);
    if (null == s) return null;
    let u = (0, S.W)(s, c);
    return (0, r.jsx)(M, {
      product: u,
      cardRef: n,
      selectedVariantIndex: c,
      onClick: l,
      text: i,
      prioritizedCurrency: a,
      onClickAnalytics: o
    })
  }