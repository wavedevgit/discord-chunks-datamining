/** Chunk was on 45620 **/
/** chunk id: 558261, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => V
}), require("./388685.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk311570 = require("./311570.js"),
  Chunk399606 = require("./399606.js"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk333867 = require("./333867.jsx"),
  Chunk767714 = require("./767714.jsx"),
  Chunk706454 = require("./706454.js"),
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
  Chunk660606 = require("./660606.js");
let N = e => {
    let {
      product: t,
      cardRef: n,
      isPremiumUser: i,
      analyticsLocations: s,
      selectedVariantIndex: o,
      hasDiscountOffer: u,
      discountOfferAmount: d,
      text: f
    } = e, g = (0, b.XM)(t, i, false), p = u ? B.intl.formatToPlainString(B.t["5U5RB5"], {
      discountOfferAmount: d
    }) : B.intl.formatToPlainString(B.t["cNSL/j"], {
      price: g
    });
    return (0, r.jsx)(a.Button, {
      variant: "primary",
      onClick: e => {
        e.stopPropagation(), (0, c.Z)({
          skuId: (0, S.S)({
            product: t,
            selectedVariantIndex: o
          }),
          returnRef: n,
          analyticsLocations: s,
          variantsReturnStyle: l.v.VARIANTS_GROUP
        })
      },
      text: null != f ? f : p,
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
        textOverride: null != n ? n : B.intl.string(B.t.sEAnVH)
      },
      subscriptionTier: L.Si.TIER_2,
      showGradient: true
    })
  },
  R = e => {
    let {
      handlePreviewButtonClick: t,
      text: n
    } = e;
    return (0, r.jsx)(a.Button, {
      variant: "primary",
      onClick: e => {
        e.stopPropagation(), t(e)
      },
      text: null != n ? n : B.intl.string(B.t.FdGl5A),
      fullWidth: true
    })
  },
  Z = e => {
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
      text: null != l ? l : B.intl.string(B.t.MAS7uK),
      fullWidth: true
    })
  },
  w = e => {
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
      text: null != l ? l : B.intl.string(B.t.FdGl5A),
      fullWidth: true
    })
  },
  H = e => {
    let {
      product: t,
      isClaimPremiumProductDisabled: n,
      isClaiming: l,
      analyticsLocations: i,
      text: s,
      onClickAnalytics: o
    } = e, c = async () => {
      null == o || o("claim premium product button"), await (0, h.fK)(t.skuId), (0, I.Z)({
        product: t,
        analyticsLocations: i,
        purchaseType: T.o8.PREMIUM_PURCHASE
      })
    };
    return (0, r.jsx)(a.Button, {
      variant: "primary",
      onClick: e => {
        e.stopPropagation(), c()
      },
      disabled: n,
      loading: l,
      loadingStartedLabel: B.intl.string(B.t["TYw+9s"]),
      loadingFinishedLabel: B.intl.string(B.t.Pg1UP5),
      text: null != s ? s : B.intl.string(B.t.zp6caO),
      fullWidth: true
    })
  },
  D = e => {
    let {
      product: t,
      analyticsLocations: n,
      onClickAnalytics: s
    } = e, o = (0, O.jB)(), c = (0, i.e7)([d.default], () => d.default.locale);
    return (0, r.jsx)(a.Button, {
      variant: "primary",
      text: B.intl.format(B.t["4NKuqc"], {
        orbPrice: T.As,
        orbIconHook: () => (0, r.jsx)(f.Z, {
          className: P.orbIconAligned
        })
      }),
      onClick: e => {
        e.stopPropagation(), null == s || s("rental claim with orbs button"), (0, g.qA)({
          skuId: (0, S.S)({
            product: t
          }),
          onCheckoutSuccess: e => {
            var r, i;
            let {
              entitlements: a
            } = e;
            (0, h.qg)({
              variantsReturnStyle: l.v.VARIANTS_GROUP
            });
            let s = (null == (r = a[0]) ? true : r.ends_at) != null ? new Date(a[0].ends_at).toLocaleDateString(c, {
              minute: "numeric",
              hour: "numeric",
              day: "numeric",
              month: "long",
              year: "numeric"
            }) : true;
            (0, I.Z)({
              product: t,
              analyticsLocations: n,
              itemConsumed: null == (i = a[0]) ? true : i.consumed,
              purchaseType: T.o8.ORB,
              isRental: true,
              rentalDuration: o,
              rentalExpiresAt: s
            })
          },
          isRental: true
        })
      },
      "aria-label": B.intl.formatToPlainString(B.t.DlNs2T, {
        orbPrice: T.As
      }),
      fullWidth: true
    })
  },
  M = e => {
    let {
      product: t,
      checkoutEligiblePrices: n,
      analyticsLocations: i,
      selectedVariantIndex: s,
      text: o,
      onClickAnalytics: c
    } = e;
    return (0, r.jsx)(a.Button, {
      variant: "primary",
      text: null != o ? o : B.intl.format(B.t.kAgx5L, {
        orbPrice: n[0].amount,
        orbIconHook: () => (0, r.jsx)(f.Z, {
          className: P.orbIconAligned
        })
      }),
      onClick: e => {
        e.stopPropagation(), null == c || c("claim with orbs button"), (0, g.qA)({
          skuId: (0, S.S)({
            product: t,
            selectedVariantIndex: s
          }),
          onCheckoutSuccess: e => {
            var n;
            let {
              entitlements: r
            } = e;
            (0, h.qg)({
              variantsReturnStyle: l.v.VARIANTS_GROUP
            }), (0, I.Z)({
              product: t,
              analyticsLocations: i,
              itemConsumed: null == (n = r[0]) ? true : n.consumed,
              purchaseType: T.o8.ORB
            })
          },
          analyticsLocations: i
        })
      },
      "aria-label": B.intl.formatToPlainString(B.t["fNG/05"], {
        orbPrice: n[0].amount
      }),
      fullWidth: true
    })
  },
  F = e => {
    let {
      handlePreviewButtonClick: t,
      text: n
    } = e;
    return (0, r.jsx)(a.Button, {
      variant: "primary",
      onClick: e => {
        e.stopPropagation(), t(e)
      },
      text: null != n ? n : B.intl.string(B.t.GpnHfH),
      fullWidth: true
    })
  },
  W = e => {
    let {
      product: t,
      cardRef: n,
      selectedVariantIndex: l,
      onClick: a,
      text: c,
      prioritizedCurrency: u,
      onClickAnalytics: d
    } = e, f = (0, i.e7)([p.default], () => p.default.getCurrentUser()), g = m.ZP.canUseCollectibles(f), h = (0, O.$l)(), {
      isPurchased: _,
      isPartiallyOwnedBundle: S
    } = (0, E.L)(t), y = (0, b.G1)(t), I = (0, b.rN)(t), {
      isDisabled: T
    } = (0, x.G)(t.skuId), L = (0, b.ne)({
      product: t,
      isPartiallyOwnedBundle: S,
      isPurchased: _
    }), B = (0, j.Iw)(t), P = null != B, {
      shouldCheckoutWithOrbs: W,
      hasSufficientOrbs: V,
      checkoutEligiblePrices: U
    } = (0, k.Ip)({
      product: t,
      isPremiumUser: g,
      prioritizedCurrency: u,
      hasDiscountOffer: P,
      isRental: h
    }), {
      analyticsLocations: z
    } = (0, o.ZP)(s.Z.COLLECTIBLES_SHOP_CARD), G = (0, O.J7)(t, s.Z.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON, d), [K, Y] = (0, i.Wu)([C.Z], () => [C.Z.isClaiming === t.skuId, null != C.Z.isClaiming && C.Z.isClaiming !== t.skuId]), {
      handleUseNow: q,
      isApplying: J
    } = (0, v.W)({
      product: t
    });
    if (null != a) return (0, r.jsx)(w, {
      onClick: a,
      skuId: t.skuId,
      text: c
    });
    if (y && !g && !I) return (0, r.jsx)(A, {
      isClaimPremiumProductDisabled: Y,
      text: c
    });
    if (!L || T) return (0, r.jsx)(R, {
      handlePreviewButtonClick: G,
      text: c
    });
    if (_) return (0, r.jsx)(Z, {
      handleUseNow: q,
      isApplying: J,
      text: c
    });
    if (y) return (0, r.jsx)(H, {
      product: t,
      isClaimPremiumProductDisabled: Y,
      isClaiming: K,
      analyticsLocations: z,
      text: c,
      onClickAnalytics: d
    });
    if (W && V) return h ? (0, r.jsx)(D, {
      product: t,
      analyticsLocations: z,
      onClickAnalytics: d
    }) : (0, r.jsx)(M, {
      product: t,
      checkoutEligiblePrices: U,
      analyticsLocations: z,
      selectedVariantIndex: l,
      text: c,
      onClickAnalytics: d
    });
    if (W && !V)
      if (U.length > 1) return (0, r.jsx)(F, {
        handlePreviewButtonClick: G,
        text: c
      });
      else return (0, r.jsx)(R, {
        handlePreviewButtonClick: G,
        text: c
      });
    return (0, r.jsx)(N, {
      product: t,
      cardRef: n,
      isPremiumUser: g,
      analyticsLocations: z,
      selectedVariantIndex: l,
      hasDiscountOffer: P,
      discountOfferAmount: B,
      text: c
    })
  },
  V = e => {
    let {
      skuId: t,
      cardRef: n,
      onClick: l,
      text: i,
      prioritizedCurrency: a,
      onClickAnalytics: s
    } = e, o = (0, O.LJ)(t), c = (0, _.o)(o);
    if (null == o) return null;
    let u = (0, y.W)(o, c);
    return (0, r.jsx)(W, {
      product: u,
      cardRef: n,
      selectedVariantIndex: c,
      onClick: l,
      text: i,
      prioritizedCurrency: a,
      onClickAnalytics: s
    })
  }