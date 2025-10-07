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
      analyticsLocations: s,
      selectedVariantIndex: i,
      hasDiscountOffer: o,
      discountOfferAmount: u
    } = e, d = (0, b.XM)(t, false, false), g = o ? P.intl.formatToPlainString(P.t["5U5RBw"], {
      discountOfferAmount: u
    }) : P.intl.formatToPlainString(P.t["cNSL/v"], {
      price: d
    });
    return (0, r.jsx)(a.zxk, {
      variant: "primary",
      onClick: e => {
        e.stopPropagation(), (0, c.Z)({
          skuId: (0, O.S)({
            product: t,
            selectedVariantIndex: i
          }),
          returnRef: n,
          analyticsLocations: s,
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
          textOverride: P.intl.string(P.t.sEAnVF)
        },
        subscriptionTier: I.Si.TIER_2
      })
    })
  },
  R = e => {
    let {
      handlePreviewButtonClick: t
    } = e;
    return (0, r.jsx)(a.zxk, {
      variant: "primary",
      onClick: e => {
        e.stopPropagation(), t(e)
      },
      text: P.intl.string(P.t.FdGl5O),
      fullWidth: true
    })
  },
  Z = e => {
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
      text: P.intl.string(P.t.MAS7uL),
      fullWidth: true
    })
  },
  w = e => {
    let {
      product: t,
      isClaimPremiumProductDisabled: n,
      isClaiming: l,
      tab: s,
      analyticsLocations: i,
      analyticsContext: o
    } = e, c = async () => {
      (0, x.oc)(t, s, o, "claim premium product button"), await (0, C.fK)(t.skuId), (0, j.Z)({
        product: t,
        analyticsLocations: i,
        purchaseType: k.o8.PREMIUM_PURCHASE
      })
    };
    return (0, r.jsx)(a.zxk, {
      variant: "primary",
      onClick: e => {
        e.stopPropagation(), c()
      },
      disabled: n,
      loading: l,
      loadingStartedLabel: P.intl.string(P.t["TYw+9v"]),
      loadingFinishedLabel: P.intl.string(P.t.Pg1UPz),
      text: P.intl.string(P.t.zp6caG),
      fullWidth: true
    })
  },
  H = e => {
    let {
      product: t,
      tab: n,
      checkoutEligiblePrices: s,
      analyticsLocations: i,
      analyticsContext: o,
      selectedVariantIndex: c
    } = e;
    return (0, r.jsx)(a.zxk, {
      variant: "primary",
      text: P.intl.format(P.t.kAgx5O, {
        orbPrice: s[0].amount,
        orbIconHook: () => (0, r.jsx)(d.Z, {
          className: N.orbIconAligned
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
            (0, C.qg)({
              variantsReturnStyle: l.v.VARIANTS_GROUP
            }), (0, j.Z)({
              product: t,
              analyticsLocations: i,
              itemConsumed: null == (n = r[0]) ? true : n.consumed,
              purchaseType: k.o8.ORB
            })
          },
          analyticsLocations: i
        })
      },
      "aria-label": P.intl.formatToPlainString(P.t["fNG/09"], {
        orbPrice: s[0].amount
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
      text: P.intl.string(P.t.GpnHfH),
      fullWidth: true
    })
  },
  D = e => {
    let {
      product: t,
      cardRef: n,
      selectedVariantIndex: l
    } = e, a = (0, m.Nd)(), c = null == a ? true : a.tab, u = (0, s.e7)([p.default], () => p.default.getCurrentUser()), d = f.ZP.canUseCollectibles(u), {
      isPurchased: g,
      isPartiallyOwnedBundle: C
    } = (0, v.L)(t), O = (0, b.G1)(t), T = (0, b.rN)(t), {
      isDisabled: j
    } = (0, S.G)(t.skuId), I = (0, b.ne)({
      product: t,
      isPartiallyOwnedBundle: C,
      isPurchased: g
    }), P = (0, y.Iw)(t), N = null != P, {
      shouldCheckoutWithOrbs: D,
      hasSufficientOrbs: M,
      checkoutEligiblePrices: W
    } = (0, L.Ip)({
      product: t,
      isPremiumUser: d,
      tab: c,
      hasDiscountOffer: N
    }), U = (0, h.sp)(), {
      analyticsLocations: V
    } = (0, o.ZP)(i.Z.COLLECTIBLES_SHOP_CARD), z = (0, x.J7)(t, i.Z.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON), [G, K] = (0, s.Wu)([_.Z], () => [_.Z.isClaiming === t.skuId, null != _.Z.isClaiming && _.Z.isClaiming !== t.skuId]), {
      handleUseNow: q,
      isApplying: Y
    } = (0, E.W)({
      product: t
    });
    return !O || d || T ? !I || j ? (0, r.jsx)(R, {
      handlePreviewButtonClick: z
    }) : g ? (0, r.jsx)(Z, {
      handleUseNow: q,
      isApplying: Y
    }) : O ? (0, r.jsx)(w, {
      product: t,
      isClaimPremiumProductDisabled: K,
      isClaiming: G,
      tab: c,
      analyticsLocations: V,
      analyticsContext: U
    }) : D && M ? (0, r.jsx)(H, {
      product: t,
      tab: c,
      checkoutEligiblePrices: W,
      analyticsLocations: V,
      analyticsContext: U,
      selectedVariantIndex: l
    }) : D && !M ? (0, r.jsx)(R, {
      handlePreviewButtonClick: z
    }) : c === k.AW.ORBS ? (0, r.jsx)(F, {
      handlePreviewButtonClick: z
    }) : (0, r.jsx)(B, {
      product: t,
      cardRef: n,
      analyticsLocations: V,
      selectedVariantIndex: l,
      hasDiscountOffer: N,
      discountOfferAmount: P
    }) : (0, r.jsx)(A, {
      isClaimPremiumProductDisabled: K
    })
  },
  M = e => {
    let {
      skuId: t,
      cardRef: n,
      selectedVariantIndex: l
    } = e, s = (0, x.LJ)(t);
    if (null == s) return null;
    let a = (0, T.W)(s, l);
    return (0, r.jsx)(D, {
      product: a,
      cardRef: n,
      selectedVariantIndex: l
    })
  }