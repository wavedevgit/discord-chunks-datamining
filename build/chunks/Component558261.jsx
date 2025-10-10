/** Chunk was on 45620 **/
/** chunk id: 558261, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => W
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
let P = e => {
    let {
      product: t,
      cardRef: n,
      analyticsLocations: i,
      selectedVariantIndex: o,
      hasDiscountOffer: a,
      discountOfferAmount: u,
      text: d
    } = e, g = (0, b.XM)(t, false, false), f = a ? B.intl.formatToPlainString(B.t["5U5RBw"], {
      discountOfferAmount: u
    }) : B.intl.formatToPlainString(B.t["cNSL/v"], {
      price: g
    });
    return (0, r.jsx)(s.Button, {
      variant: "primary",
      onClick: e => {
        e.stopPropagation(), (0, c.Z)({
          skuId: (0, x.S)({
            product: t,
            selectedVariantIndex: o
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
        textOverride: null != n ? n : B.intl.string(B.t.sEAnVF)
      },
      subscriptionTier: I.Si.TIER_2,
      showGradient: true
    })
  },
  R = e => {
    let {
      handlePreviewButtonClick: t,
      text: n
    } = e;
    return (0, r.jsx)(s.Button, {
      variant: "primary",
      onClick: e => {
        e.stopPropagation(), t(e)
      },
      text: null != n ? n : B.intl.string(B.t.FdGl5O),
      fullWidth: true
    })
  },
  Z = e => {
    let {
      handleUseNow: t,
      isApplying: n,
      text: l
    } = e;
    return (0, r.jsx)(s.Button, {
      variant: "primary",
      onClick: e => {
        e.stopPropagation(), t()
      },
      loading: n,
      text: null != l ? l : B.intl.string(B.t.MAS7uL),
      fullWidth: true
    })
  },
  w = e => {
    let {
      skuId: t,
      onClick: n,
      text: l
    } = e;
    return (0, r.jsx)(s.Button, {
      variant: "primary",
      onClick: e => {
        e.stopPropagation(), n(t)
      },
      text: null != l ? l : B.intl.string(B.t.FdGl5O),
      fullWidth: true
    })
  },
  H = e => {
    let {
      product: t,
      isClaimPremiumProductDisabled: n,
      isClaiming: l,
      tab: i,
      analyticsLocations: o,
      analyticsContext: a,
      text: c
    } = e, u = async () => {
      (0, O.oc)(t, i, a, "claim premium product button"), await (0, C.fK)(t.skuId), (0, L.Z)({
        product: t,
        analyticsLocations: o,
        purchaseType: k.o8.PREMIUM_PURCHASE
      })
    };
    return (0, r.jsx)(s.Button, {
      variant: "primary",
      onClick: e => {
        e.stopPropagation(), u()
      },
      disabled: n,
      loading: l,
      loadingStartedLabel: B.intl.string(B.t["TYw+9v"]),
      loadingFinishedLabel: B.intl.string(B.t.Pg1UPz),
      text: null != c ? c : B.intl.string(B.t.zp6caG),
      fullWidth: true
    })
  },
  F = e => {
    let {
      product: t,
      tab: n,
      checkoutEligiblePrices: i,
      analyticsLocations: o,
      analyticsContext: a,
      selectedVariantIndex: c,
      text: u
    } = e;
    return (0, r.jsx)(s.Button, {
      variant: "primary",
      text: null != u ? u : B.intl.format(B.t.kAgx5O, {
        orbPrice: i[0].amount,
        orbIconHook: () => (0, r.jsx)(d.Z, {
          className: N.orbIconAligned
        })
      }),
      onClick: e => {
        e.stopPropagation(), (0, O.oc)(t, n, a, "claim with orbs button"), (0, g.qA)({
          skuId: (0, x.S)({
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
            }), (0, L.Z)({
              product: t,
              analyticsLocations: o,
              itemConsumed: null == (n = r[0]) ? true : n.consumed,
              purchaseType: k.o8.ORB
            })
          },
          analyticsLocations: o
        })
      },
      "aria-label": B.intl.formatToPlainString(B.t["fNG/09"], {
        orbPrice: i[0].amount
      }),
      fullWidth: true
    })
  },
  D = e => {
    let {
      handlePreviewButtonClick: t,
      text: n
    } = e;
    return (0, r.jsx)(s.Button, {
      variant: "primary",
      onClick: e => {
        e.stopPropagation(), t(e)
      },
      text: null != n ? n : B.intl.string(B.t.GpnHfH),
      fullWidth: true
    })
  },
  M = e => {
    let {
      product: t,
      cardRef: n,
      selectedVariantIndex: l,
      onClick: s,
      text: c,
      prioritizedCurrency: u
    } = e, d = (0, m.Nd)(), g = null == d ? true : d.tab, C = (0, i.e7)([f.default], () => f.default.getCurrentUser()), x = p.ZP.canUseCollectibles(C), {
      isPurchased: y,
      isPartiallyOwnedBundle: L
    } = (0, S.L)(t), k = (0, b.G1)(t), I = (0, b.rN)(t), {
      isDisabled: B
    } = (0, v.G)(t.skuId), N = (0, b.ne)({
      product: t,
      isPartiallyOwnedBundle: L,
      isPurchased: y
    }), M = (0, j.Iw)(t), W = null != M, {
      shouldCheckoutWithOrbs: U,
      hasSufficientOrbs: V,
      checkoutEligiblePrices: z
    } = (0, T.Ip)({
      product: t,
      isPremiumUser: x,
      prioritizedCurrency: u,
      hasDiscountOffer: W
    }), G = (0, h.sp)(), {
      analyticsLocations: K
    } = (0, a.ZP)(o.Z.COLLECTIBLES_SHOP_CARD), Y = (0, O.J7)(t, o.Z.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON), [q, Q] = (0, i.Wu)([_.Z], () => [_.Z.isClaiming === t.skuId, null != _.Z.isClaiming && _.Z.isClaiming !== t.skuId]), {
      handleUseNow: J,
      isApplying: X
    } = (0, E.W)({
      product: t
    });
    return null != s ? (0, r.jsx)(w, {
      onClick: s,
      skuId: t.skuId,
      text: c
    }) : !k || x || I ? !N || B ? (0, r.jsx)(R, {
      handlePreviewButtonClick: Y,
      text: c
    }) : y ? (0, r.jsx)(Z, {
      handleUseNow: J,
      isApplying: X,
      text: c
    }) : k ? (0, r.jsx)(H, {
      product: t,
      isClaimPremiumProductDisabled: Q,
      isClaiming: q,
      tab: g,
      analyticsLocations: K,
      analyticsContext: G,
      text: c
    }) : U && V ? (0, r.jsx)(F, {
      product: t,
      tab: g,
      checkoutEligiblePrices: z,
      analyticsLocations: K,
      analyticsContext: G,
      selectedVariantIndex: l,
      text: c
    }) : U && !V ? (0, r.jsx)(R, {
      handlePreviewButtonClick: Y,
      text: c
    }) : u === O.tA.ORBS ? (0, r.jsx)(D, {
      handlePreviewButtonClick: Y,
      text: c
    }) : (0, r.jsx)(P, {
      product: t,
      cardRef: n,
      analyticsLocations: K,
      selectedVariantIndex: l,
      hasDiscountOffer: W,
      discountOfferAmount: M,
      text: c
    }) : (0, r.jsx)(A, {
      isClaimPremiumProductDisabled: Q,
      text: c
    })
  },
  W = e => {
    let {
      skuId: t,
      cardRef: n,
      selectedVariantIndex: l,
      onClick: i,
      text: s,
      prioritizedCurrency: o
    } = e, a = (0, O.LJ)(t);
    if (null == a) return null;
    let c = (0, y.W)(a, l);
    return (0, r.jsx)(M, {
      product: c,
      cardRef: n,
      selectedVariantIndex: l,
      onClick: i,
      text: s,
      prioritizedCurrency: o
    })
  }