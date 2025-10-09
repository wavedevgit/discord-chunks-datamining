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
let B = e => {
    let {
      product: t,
      cardRef: n,
      analyticsLocations: s,
      selectedVariantIndex: a,
      hasDiscountOffer: o,
      discountOfferAmount: u,
      text: d
    } = e, g = (0, b.XM)(t, false, false), f = o ? P.intl.formatToPlainString(P.t["5U5RBw"], {
      discountOfferAmount: u
    }) : P.intl.formatToPlainString(P.t["cNSL/v"], {
      price: g
    });
    return (0, r.jsx)(i.zxk, {
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
        textOverride: null != n ? n : P.intl.string(P.t.sEAnVF)
      },
      subscriptionTier: I.Si.TIER_2
    })
  },
  R = e => {
    let {
      handlePreviewButtonClick: t,
      text: n
    } = e;
    return (0, r.jsx)(i.zxk, {
      variant: "primary",
      onClick: e => {
        e.stopPropagation(), t(e)
      },
      text: null != n ? n : P.intl.string(P.t.FdGl5O),
      fullWidth: true
    })
  },
  Z = e => {
    let {
      handleUseNow: t,
      isApplying: n,
      text: l
    } = e;
    return (0, r.jsx)(i.zxk, {
      variant: "primary",
      onClick: e => {
        e.stopPropagation(), t()
      },
      loading: n,
      text: null != l ? l : P.intl.string(P.t.MAS7uL),
      fullWidth: true
    })
  },
  w = e => {
    let {
      skuId: t,
      onClick: n,
      text: l
    } = e;
    return (0, r.jsx)(i.zxk, {
      variant: "primary",
      onClick: e => {
        e.stopPropagation(), n(t)
      },
      text: null != l ? l : P.intl.string(P.t.FdGl5O),
      fullWidth: true
    })
  },
  F = e => {
    let {
      product: t,
      isClaimPremiumProductDisabled: n,
      isClaiming: l,
      tab: s,
      analyticsLocations: a,
      analyticsContext: o,
      text: c
    } = e, u = async () => {
      (0, x.oc)(t, s, o, "claim premium product button"), await (0, C.fK)(t.skuId), (0, k.Z)({
        product: t,
        analyticsLocations: a,
        purchaseType: L.o8.PREMIUM_PURCHASE
      })
    };
    return (0, r.jsx)(i.zxk, {
      variant: "primary",
      onClick: e => {
        e.stopPropagation(), u()
      },
      disabled: n,
      loading: l,
      loadingStartedLabel: P.intl.string(P.t["TYw+9v"]),
      loadingFinishedLabel: P.intl.string(P.t.Pg1UPz),
      text: null != c ? c : P.intl.string(P.t.zp6caG),
      fullWidth: true
    })
  },
  H = e => {
    let {
      product: t,
      tab: n,
      checkoutEligiblePrices: s,
      analyticsLocations: a,
      analyticsContext: o,
      selectedVariantIndex: c,
      text: u
    } = e;
    return (0, r.jsx)(i.zxk, {
      variant: "primary",
      text: null != u ? u : P.intl.format(P.t.kAgx5O, {
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
            }), (0, k.Z)({
              product: t,
              analyticsLocations: a,
              itemConsumed: null == (n = r[0]) ? true : n.consumed,
              purchaseType: L.o8.ORB
            })
          },
          analyticsLocations: a
        })
      },
      "aria-label": P.intl.formatToPlainString(P.t["fNG/09"], {
        orbPrice: s[0].amount
      }),
      fullWidth: true
    })
  },
  D = e => {
    let {
      handlePreviewButtonClick: t,
      text: n
    } = e;
    return (0, r.jsx)(i.zxk, {
      variant: "primary",
      onClick: e => {
        e.stopPropagation(), t(e)
      },
      text: null != n ? n : P.intl.string(P.t.GpnHfH),
      fullWidth: true
    })
  },
  M = e => {
    let {
      product: t,
      cardRef: n,
      selectedVariantIndex: l,
      onClick: i,
      text: c
    } = e, u = (0, m.Nd)(), d = null == u ? true : u.tab, g = (0, s.e7)([f.default], () => f.default.getCurrentUser()), C = p.ZP.canUseCollectibles(g), {
      isPurchased: O,
      isPartiallyOwnedBundle: y
    } = (0, S.L)(t), k = (0, b.G1)(t), I = (0, b.rN)(t), {
      isDisabled: P
    } = (0, v.G)(t.skuId), N = (0, b.ne)({
      product: t,
      isPartiallyOwnedBundle: y,
      isPurchased: O
    }), M = (0, T.Iw)(t), W = null != M, {
      shouldCheckoutWithOrbs: U,
      hasSufficientOrbs: V,
      checkoutEligiblePrices: z
    } = (0, j.Ip)({
      product: t,
      isPremiumUser: C,
      tab: d,
      hasDiscountOffer: W
    }), G = (0, h.sp)(), {
      analyticsLocations: K
    } = (0, o.ZP)(a.Z.COLLECTIBLES_SHOP_CARD), q = (0, x.J7)(t, a.Z.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON), [Y, Q] = (0, s.Wu)([_.Z], () => [_.Z.isClaiming === t.skuId, null != _.Z.isClaiming && _.Z.isClaiming !== t.skuId]), {
      handleUseNow: X,
      isApplying: J
    } = (0, E.W)({
      product: t
    });
    return null != i ? (0, r.jsx)(w, {
      onClick: i,
      skuId: t.skuId,
      text: c
    }) : !k || C || I ? !N || P ? (0, r.jsx)(R, {
      handlePreviewButtonClick: q,
      text: c
    }) : O ? (0, r.jsx)(Z, {
      handleUseNow: X,
      isApplying: J,
      text: c
    }) : k ? (0, r.jsx)(F, {
      product: t,
      isClaimPremiumProductDisabled: Q,
      isClaiming: Y,
      tab: d,
      analyticsLocations: K,
      analyticsContext: G,
      text: c
    }) : U && V ? (0, r.jsx)(H, {
      product: t,
      tab: d,
      checkoutEligiblePrices: z,
      analyticsLocations: K,
      analyticsContext: G,
      selectedVariantIndex: l,
      text: c
    }) : U && !V ? (0, r.jsx)(R, {
      handlePreviewButtonClick: q,
      text: c
    }) : d === L.AW.ORBS ? (0, r.jsx)(D, {
      handlePreviewButtonClick: q,
      text: c
    }) : (0, r.jsx)(B, {
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
      onClick: s,
      text: i
    } = e, a = (0, x.LJ)(t);
    if (null == a) return null;
    let o = (0, y.W)(a, l);
    return (0, r.jsx)(M, {
      product: o,
      cardRef: n,
      selectedVariantIndex: l,
      onClick: s,
      text: i
    })
  }