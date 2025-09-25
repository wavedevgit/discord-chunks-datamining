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
  Chunk381585 = require("./381585.jsx"),
  Chunk1870 = require("./1870.js"),
  Chunk994587 = require("./994587.jsx"),
  Chunk884697 = require("./884697.js"),
  Chunk635552 = require("./635552.js"),
  Chunk290175 = require("./290175.js"),
  Chunk724994 = require("./724994.js"),
  Chunk786040 = require("./786040.jsx"),
  Chunk67409 = require("./67409.js"),
  Chunk445794 = require("./445794.js"),
  Chunk956472 = require("./956472.js"),
  Chunk832149 = require("./832149.jsx"),
  Chunk215023 = require("./215023.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk192676 = require("./192676.js");
let N = e => {
    let {
      product: t,
      cardRef: n,
      analyticsLocations: i,
      selectedVariantIndex: s,
      hasDiscountOffer: o,
      discountOfferAmount: u
    } = e, d = (0, b.XM)(t, false, false), g = o ? I.intl.formatToPlainString(I.t["5U5RBw"], {
      discountOfferAmount: u
    }) : I.intl.formatToPlainString(I.t["cNSL/v"], {
      price: d
    });
    return (0, r.jsx)(a.zxk, {
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
      text: g,
      fullWidth: true
    })
  },
  A = e => {
    let {
      isClaimPremiumProductDisabled: t
    } = e;
    return (0, r.jsx)("div", {
      children: (0, r.jsx)(u.Z, {
        fullWidth: true,
        disabled: t,
        onClick: e => e.stopPropagation(),
        textOptions: {
          textOverride: I.intl.string(I.t.sEAnVF)
        },
        subscriptionTier: k.Si.TIER_2
      })
    })
  },
  B = e => {
    let {
      handlePreviewButtonClick: t
    } = e;
    return (0, r.jsx)(a.zxk, {
      variant: "primary",
      onClick: e => {
        e.stopPropagation(), t(e)
      },
      text: I.intl.string(I.t.FdGl5O),
      fullWidth: true
    })
  },
  R = e => {
    let {
      handleUseNow: t,
      isApplying: n
    } = e;
    return (0, r.jsx)(a.zxk, {
      variant: "primary",
      onClick: e => {
        e.stopPropagation(), t()
      },
      loading: n,
      text: I.intl.string(I.t.MAS7uL),
      fullWidth: true
    })
  },
  Z = e => {
    let {
      product: t,
      isClaimPremiumProductDisabled: n,
      isClaiming: l,
      tab: i,
      analyticsLocations: s,
      analyticsContext: o
    } = e, c = async () => {
      (0, x.oc)(t, i, o, "claim premium product button"), await (0, h.fK)(t.skuId), (0, L.Z)({
        product: t,
        analyticsLocations: s,
        purchaseType: j.o8.PREMIUM_PURCHASE
      })
    };
    return (0, r.jsx)(a.zxk, {
      variant: "primary",
      onClick: e => {
        e.stopPropagation(), c()
      },
      disabled: n,
      loading: l,
      loadingStartedLabel: I.intl.string(I.t["TYw+9v"]),
      loadingFinishedLabel: I.intl.string(I.t.Pg1UPz),
      text: I.intl.string(I.t.zp6caG),
      fullWidth: true
    })
  },
  w = e => {
    let {
      product: t,
      tab: n,
      checkoutEligiblePrices: i,
      analyticsLocations: s,
      analyticsContext: o,
      selectedVariantIndex: c
    } = e;
    return (0, r.jsx)(a.zxk, {
      variant: "primary",
      text: I.intl.format(I.t.kAgx5O, {
        orbPrice: i[0].amount,
        orbIconHook: () => (0, r.jsx)(d.Z, {
          className: P.orbIconAligned
        })
      }),
      onClick: e => {
        e.stopPropagation(), (0, x.oc)(t, n, o, "claim with orbs button"), (0, g.qA)({
          skuId: (0, O.S)({
            product: t,
            selectedVariantIndex: c
          }),
          onCheckoutSuccess: e => {
            var n;
            let {
              entitlements: r
            } = e;
            (0, h.qg)({
              variantsReturnStyle: l.v.VARIANTS_GROUP
            }), (0, L.Z)({
              product: t,
              analyticsLocations: s,
              itemConsumed: null == (n = r[0]) ? true : n.consumed,
              purchaseType: j.o8.ORB
            })
          },
          analyticsLocations: s
        })
      },
      "aria-label": I.intl.formatToPlainString(I.t["fNG/09"], {
        orbPrice: i[0].amount
      }),
      fullWidth: true
    })
  },
  F = e => {
    let {
      handlePreviewButtonClick: t
    } = e;
    return (0, r.jsx)(a.zxk, {
      variant: "primary",
      onClick: e => {
        e.stopPropagation(), t(e)
      },
      text: I.intl.string(I.t.GpnHfH),
      fullWidth: true
    })
  },
  M = e => {
    let {
      product: t,
      cardRef: n,
      selectedVariantIndex: l
    } = e, a = (0, m.Nd)(), c = null == a ? true : a.tab, u = (0, i.e7)([p.default], () => p.default.getCurrentUser()), d = f.ZP.canUseCollectibles(u), {
      isPurchased: g,
      isPartiallyOwnedBundle: h
    } = (0, v.L)(t), O = (0, b.G1)(t), L = (0, b.rN)(t), {
      isDisabled: k
    } = (0, S.G)(t.skuId), I = (0, b.ne)({
      product: t,
      isPartiallyOwnedBundle: h,
      isPurchased: g
    }), P = (0, T.Iw)(t), M = null != P, {
      shouldCheckoutWithOrbs: H,
      hasSufficientOrbs: D,
      checkoutEligiblePrices: W
    } = (0, y.Ip)({
      product: t,
      isPremiumUser: d,
      tab: c,
      hasDiscountOffer: M
    }), U = (0, C.sp)(), {
      analyticsLocations: V
    } = (0, o.ZP)(s.Z.COLLECTIBLES_SHOP_CARD), z = (0, x.J7)(t, s.Z.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON), [G, q] = (0, i.Wu)([_.Z], () => [_.Z.isClaiming === t.skuId, null != _.Z.isClaiming && _.Z.isClaiming !== t.skuId]), {
      handleUseNow: K,
      isApplying: Y
    } = (0, E.W)({
      product: t
    });
    return !O || d || L ? !I || k ? (0, r.jsx)(B, {
      handlePreviewButtonClick: z
    }) : g ? (0, r.jsx)(R, {
      handleUseNow: K,
      isApplying: Y
    }) : O ? (0, r.jsx)(Z, {
      product: t,
      isClaimPremiumProductDisabled: q,
      isClaiming: G,
      tab: c,
      analyticsLocations: V,
      analyticsContext: U
    }) : H && D ? (0, r.jsx)(w, {
      product: t,
      tab: c,
      checkoutEligiblePrices: W,
      analyticsLocations: V,
      analyticsContext: U,
      selectedVariantIndex: l
    }) : H && !D ? (0, r.jsx)(B, {
      handlePreviewButtonClick: z
    }) : c === j.AW.ORBS ? (0, r.jsx)(F, {
      handlePreviewButtonClick: z
    }) : (0, r.jsx)(N, {
      product: t,
      cardRef: n,
      analyticsLocations: V,
      selectedVariantIndex: l,
      hasDiscountOffer: M,
      discountOfferAmount: P
    }) : (0, r.jsx)(A, {
      isClaimPremiumProductDisabled: q
    })
  }