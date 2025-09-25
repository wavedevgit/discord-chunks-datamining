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
  Chunk381585 = require("./381585.jsx"),
  Chunk1870 = require("./1870.js"),
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
let P = e => {
    let {
      product: t,
      cardRef: n,
      analyticsLocations: a,
      selectedVariantIndex: s,
      hasDiscountOffer: o,
      discountOfferAmount: u
    } = e, d = (0, m.XM)(t, false, false), g = o ? k.intl.formatToPlainString(k.t["5U5RBw"], {
      discountOfferAmount: u
    }) : k.intl.formatToPlainString(k.t["cNSL/v"], {
      price: d
    });
    return (0, r.jsx)(i.zxk, {
      variant: "primary",
      onClick: e => {
        e.stopPropagation(), (0, c.Z)({
          skuId: (0, v.S)({
            product: t,
            selectedVariantIndex: s
          }),
          returnRef: n,
          analyticsLocations: a,
          variantsReturnStyle: l.v.VARIANTS_GROUP
        })
      },
      text: g,
      fullWidth: true
    })
  },
  B = e => {
    let {
      isClaimPremiumProductDisabled: t
    } = e;
    return (0, r.jsx)("div", {
      children: (0, r.jsx)(u.Z, {
        fullWidth: true,
        disabled: t,
        onClick: e => e.stopPropagation(),
        textOptions: {
          textOverride: k.intl.string(k.t.sEAnVF)
        },
        subscriptionTier: j.Si.TIER_2
      })
    })
  },
  A = e => {
    let {
      handlePreviewButtonClick: t
    } = e;
    return (0, r.jsx)(i.zxk, {
      variant: "primary",
      onClick: e => {
        e.stopPropagation(), t(e)
      },
      text: k.intl.string(k.t.FdGl5O),
      fullWidth: true
    })
  },
  N = e => {
    let {
      handleUseNow: t,
      isApplying: n
    } = e;
    return (0, r.jsx)(i.zxk, {
      variant: "primary",
      onClick: e => {
        e.stopPropagation(), t()
      },
      loading: n,
      text: k.intl.string(k.t.MAS7uL),
      fullWidth: true
    })
  },
  R = e => {
    let {
      product: t,
      isClaimPremiumProductDisabled: n,
      isClaiming: l,
      tab: a,
      analyticsLocations: s,
      analyticsContext: o
    } = e, c = async () => {
      (0, x.oc)(t, a, o, "claim premium product button"), await (0, h.fK)(t.skuId), (0, y.Z)({
        product: t,
        analyticsLocations: s,
        purchaseType: L.o8.PREMIUM_PURCHASE
      })
    };
    return (0, r.jsx)(i.zxk, {
      variant: "primary",
      onClick: e => {
        e.stopPropagation(), c()
      },
      disabled: n,
      loading: l,
      loadingStartedLabel: k.intl.string(k.t["TYw+9v"]),
      loadingFinishedLabel: k.intl.string(k.t.Pg1UPz),
      text: k.intl.string(k.t.zp6caG),
      fullWidth: true
    })
  },
  Z = e => {
    let {
      product: t,
      tab: n,
      checkoutEligiblePrices: a,
      analyticsLocations: s,
      analyticsContext: o,
      selectedVariantIndex: c
    } = e;
    return (0, r.jsx)(i.zxk, {
      variant: "primary",
      text: k.intl.format(k.t.kAgx5O, {
        orbPrice: a[0].amount,
        orbIconHook: () => (0, r.jsx)(d.Z, {
          className: I.orbIconAligned
        })
      }),
      onClick: e => {
        e.stopPropagation(), (0, x.oc)(t, n, o, "claim with orbs button"), (0, g.qA)({
          skuId: (0, v.S)({
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
            }), (0, y.Z)({
              product: t,
              analyticsLocations: s,
              itemConsumed: null == (n = r[0]) ? true : n.consumed,
              purchaseType: L.o8.ORB
            })
          },
          analyticsLocations: s
        })
      },
      "aria-label": k.intl.formatToPlainString(k.t["fNG/09"], {
        orbPrice: a[0].amount
      }),
      fullWidth: true
    })
  },
  w = e => {
    let {
      handlePreviewButtonClick: t
    } = e;
    return (0, r.jsx)(i.zxk, {
      variant: "primary",
      onClick: e => {
        e.stopPropagation(), t(e)
      },
      text: k.intl.string(k.t.GpnHfH),
      fullWidth: true
    })
  },
  F = e => {
    let {
      product: t,
      cardRef: n,
      config: l,
      selectedVariantIndex: i
    } = e, c = (0, a.e7)([p.default], () => p.default.getCurrentUser()), u = f.ZP.canUseCollectibles(c), {
      isPurchased: d,
      isPartiallyOwnedBundle: g
    } = (0, S.L)(t), h = (0, m.G1)(t), v = (0, m.rN)(t), {
      isDisabled: y
    } = (0, E.G)(t.skuId), j = (0, m.ne)({
      product: t,
      isPartiallyOwnedBundle: g,
      isPurchased: d
    }), k = (0, O.Iw)(t), I = null != k, {
      shouldCheckoutWithOrbs: F,
      hasSufficientOrbs: M,
      checkoutEligiblePrices: H
    } = (0, T.Ip)({
      product: t,
      isPremiumUser: u,
      tab: l.tab,
      hasDiscountOffer: I
    }), D = (0, C.sp)(), {
      analyticsLocations: W
    } = (0, o.ZP)(s.Z.COLLECTIBLES_SHOP_CARD), U = (0, x.J7)(t, l, s.Z.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON), [V, z] = (0, a.Wu)([_.Z], () => [_.Z.isClaiming === t.skuId, null != _.Z.isClaiming && _.Z.isClaiming !== t.skuId]), {
      handleUseNow: G,
      isApplying: q
    } = (0, b.W)({
      product: t
    });
    return !h || u || v ? !j || y ? (0, r.jsx)(A, {
      handlePreviewButtonClick: U
    }) : d ? (0, r.jsx)(N, {
      handleUseNow: G,
      isApplying: q
    }) : h ? (0, r.jsx)(R, {
      product: t,
      isClaimPremiumProductDisabled: z,
      isClaiming: V,
      tab: l.tab,
      analyticsLocations: W,
      analyticsContext: D
    }) : F && M ? (0, r.jsx)(Z, {
      product: t,
      tab: l.tab,
      checkoutEligiblePrices: H,
      analyticsLocations: W,
      analyticsContext: D,
      selectedVariantIndex: i
    }) : F && !M ? (0, r.jsx)(A, {
      handlePreviewButtonClick: U
    }) : l.tab === L.AW.ORBS ? (0, r.jsx)(w, {
      handlePreviewButtonClick: U
    }) : (0, r.jsx)(P, {
      product: t,
      cardRef: n,
      analyticsLocations: W,
      selectedVariantIndex: i,
      hasDiscountOffer: I,
      discountOfferAmount: k
    }) : (0, r.jsx)(B, {
      isClaimPremiumProductDisabled: z
    })
  }