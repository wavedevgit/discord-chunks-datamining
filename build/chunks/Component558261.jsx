/** Chunk was on 23736 **/
/** chunk id: 558261, original params: e,t,n (module,exports,require) **/
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
  Chunk113263 = require("./113263.js");
let R = e => {
    let {
      product: t,
      cardRef: n,
      isPremiumUser: i,
      analyticsLocations: s,
      selectedVariantIndex: o,
      hasDiscountOffer: d,
      discountOfferAmount: u,
      text: m
    } = e, p = (0, v.XM)(t, i, false), h = d ? I.intl.formatToPlainString(I.t["5U5RB5"], {
      discountOfferAmount: u
    }) : I.intl.formatToPlainString(I.t["cNSL/j"], {
      price: p
    });
    return (0, a.jsx)(l.Button, {
      variant: "primary",
      onClick: e => {
        e.stopPropagation(), (0, c.Z)({
          skuId: (0, S.S)({
            product: t,
            selectedVariantIndex: o
          }),
          returnRef: n,
          analyticsLocations: s,
          variantsReturnStyle: r.v.VARIANTS_GROUP
        })
      },
      text: null != m ? m : h,
      fullWidth: true
    })
  },
  A = e => {
    let {
      isClaimPremiumProductDisabled: t,
      text: n
    } = e;
    return (0, a.jsx)(d.Z, {
      fullWidth: true,
      disabled: t,
      onClick: e => e.stopPropagation(),
      textOptions: {
        textOverride: null != n ? n : I.intl.string(I.t.sEAnVH)
      },
      subscriptionTier: w.Si.TIER_2,
      showGradient: true
    })
  },
  D = e => {
    let {
      handlePreviewButtonClick: t,
      text: n
    } = e;
    return (0, a.jsx)(l.Button, {
      variant: "primary",
      onClick: e => {
        e.stopPropagation(), t(e)
      },
      text: null != n ? n : I.intl.string(I.t.FdGl5A),
      fullWidth: true
    })
  },
  Z = e => {
    let {
      handleUseNow: t,
      isApplying: n,
      text: r
    } = e;
    return (0, a.jsx)(l.Button, {
      variant: "primary",
      onClick: e => {
        e.stopPropagation(), t()
      },
      loading: n,
      text: null != r ? r : I.intl.string(I.t.MAS7uK),
      fullWidth: true
    })
  },
  L = e => {
    let {
      skuId: t,
      onClick: n,
      text: r
    } = e;
    return (0, a.jsx)(l.Button, {
      variant: "primary",
      onClick: e => {
        e.stopPropagation(), n(t)
      },
      text: null != r ? r : I.intl.string(I.t.FdGl5A),
      fullWidth: true
    })
  },
  M = e => {
    let {
      product: t,
      isClaimPremiumProductDisabled: n,
      isClaiming: r,
      analyticsLocations: i,
      text: s,
      onClickAnalytics: o
    } = e, c = async () => {
      null == o || o("claim premium product button"), await (0, x.fK)(t.skuId), (0, N.Z)({
        product: t,
        analyticsLocations: i,
        purchaseType: P.o8.PREMIUM_PURCHASE
      })
    };
    return (0, a.jsx)(l.Button, {
      variant: "primary",
      onClick: e => {
        e.stopPropagation(), c()
      },
      disabled: n,
      loading: r,
      loadingStartedLabel: I.intl.string(I.t["TYw+9s"]),
      loadingFinishedLabel: I.intl.string(I.t.Pg1UP5),
      text: null != s ? s : I.intl.string(I.t.zp6caO),
      fullWidth: true
    })
  },
  U = e => {
    let {
      product: t,
      analyticsLocations: n,
      onClickAnalytics: s
    } = e, o = (0, _.jB)(), c = (0, i.e7)([u.default], () => u.default.locale);
    return (0, a.jsx)(l.Button, {
      variant: "primary",
      text: I.intl.format(I.t["4NKuqc"], {
        orbPrice: P.As,
        orbIconHook: () => (0, a.jsx)(m.Z, {
          className: k.orbIconAligned
        })
      }),
      onClick: e => {
        e.stopPropagation(), null == s || s("rental claim with orbs button"), (0, p.qA)({
          skuId: (0, S.S)({
            product: t
          }),
          onCheckoutSuccess: e => {
            var a, i;
            let {
              entitlements: l
            } = e;
            (0, x.qg)({
              variantsReturnStyle: r.v.VARIANTS_GROUP
            });
            let s = (null == (a = l[0]) ? true : a.ends_at) != null ? new Date(l[0].ends_at).toLocaleDateString(c, {
              minute: "numeric",
              hour: "numeric",
              day: "numeric",
              month: "long",
              year: "numeric"
            }) : true;
            (0, N.Z)({
              product: t,
              analyticsLocations: n,
              itemConsumed: null == (i = l[0]) ? true : i.consumed,
              purchaseType: P.o8.ORB,
              rentalDuration: o,
              rentalExpiresAt: s
            })
          },
          rentalDuration: o
        })
      },
      "aria-label": I.intl.formatToPlainString(I.t.DlNs2T, {
        orbPrice: P.As
      }),
      fullWidth: true
    })
  },
  B = e => {
    let {
      product: t,
      checkoutEligiblePrices: n,
      analyticsLocations: i,
      selectedVariantIndex: s,
      text: o,
      onClickAnalytics: c
    } = e;
    return (0, a.jsx)(l.Button, {
      variant: "primary",
      text: null != o ? o : I.intl.format(I.t.kAgx5L, {
        orbPrice: n[0].amount,
        orbIconHook: () => (0, a.jsx)(m.Z, {
          className: k.orbIconAligned
        })
      }),
      onClick: e => {
        e.stopPropagation(), null == c || c("claim with orbs button"), (0, p.qA)({
          skuId: (0, S.S)({
            product: t,
            selectedVariantIndex: s
          }),
          onCheckoutSuccess: e => {
            var n;
            let {
              entitlements: a
            } = e;
            (0, x.qg)({
              variantsReturnStyle: r.v.VARIANTS_GROUP
            }), (0, N.Z)({
              product: t,
              analyticsLocations: i,
              itemConsumed: null == (n = a[0]) ? true : n.consumed,
              purchaseType: P.o8.ORB
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
  F = e => {
    let {
      handlePreviewButtonClick: t,
      text: n
    } = e;
    return (0, a.jsx)(l.Button, {
      variant: "primary",
      onClick: e => {
        e.stopPropagation(), t(e)
      },
      text: null != n ? n : I.intl.string(I.t.GpnHfH),
      fullWidth: true
    })
  },
  G = e => {
    let {
      product: t,
      cardRef: n,
      selectedVariantIndex: r,
      onClick: l,
      text: c,
      prioritizedCurrency: d,
      onClickAnalytics: u
    } = e, m = (0, i.e7)([h.default], () => h.default.getCurrentUser()), p = f.ZP.canUseCollectibles(m), x = (0, _.jB)(), {
      isPurchased: g,
      isPartiallyOwnedBundle: S
    } = (0, C.L)(t), E = (0, v.G1)(t), N = (0, v.rN)(t), {
      isDisabled: P
    } = (0, y.G)(t.skuId), w = (0, v.ne)({
      product: t,
      isPartiallyOwnedBundle: S,
      isPurchased: g
    }), I = (0, T.Iw)(t), k = null != I, {
      shouldCheckoutWithOrbs: G,
      hasSufficientOrbs: V,
      checkoutEligiblePrices: H
    } = (0, O.Ip)({
      product: t,
      isPremiumUser: p,
      prioritizedCurrency: d,
      hasDiscountOffer: k,
      isRental: null != x
    }), {
      analyticsLocations: W
    } = (0, o.ZP)(s.Z.COLLECTIBLES_SHOP_CARD), z = (0, _.J7)(t, s.Z.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON, u), [q, K] = (0, i.Wu)([b.Z], () => [b.Z.isClaiming === t.skuId, null != b.Z.isClaiming && b.Z.isClaiming !== t.skuId]), {
      handleUseNow: Q,
      isApplying: Y
    } = (0, j.W)({
      product: t
    });
    if (null != l) return (0, a.jsx)(L, {
      onClick: l,
      skuId: t.skuId,
      text: c
    });
    if (E && !p && !N) return (0, a.jsx)(A, {
      isClaimPremiumProductDisabled: K,
      text: c
    });
    if (!w || P) return (0, a.jsx)(D, {
      handlePreviewButtonClick: z,
      text: c
    });
    if (g) return (0, a.jsx)(Z, {
      handleUseNow: Q,
      isApplying: Y,
      text: c
    });
    if (E) return (0, a.jsx)(M, {
      product: t,
      isClaimPremiumProductDisabled: K,
      isClaiming: q,
      analyticsLocations: W,
      text: c,
      onClickAnalytics: u
    });
    if (G && V) return null != x ? (0, a.jsx)(U, {
      product: t,
      analyticsLocations: W,
      onClickAnalytics: u
    }) : (0, a.jsx)(B, {
      product: t,
      checkoutEligiblePrices: H,
      analyticsLocations: W,
      selectedVariantIndex: r,
      text: c,
      onClickAnalytics: u
    });
    if (G && !V)
      if (H.length > 1) return (0, a.jsx)(F, {
        handlePreviewButtonClick: z,
        text: c
      });
      else return (0, a.jsx)(D, {
        handlePreviewButtonClick: z,
        text: c
      });
    return (0, a.jsx)(R, {
      product: t,
      cardRef: n,
      isPremiumUser: p,
      analyticsLocations: W,
      selectedVariantIndex: r,
      hasDiscountOffer: k,
      discountOfferAmount: I,
      text: c
    })
  },
  V = e => {
    let {
      skuId: t,
      cardRef: n,
      onClick: r,
      text: i,
      prioritizedCurrency: l,
      onClickAnalytics: s
    } = e, o = (0, _.LJ)(t), c = (0, g.o)(o);
    if (null == o) return null;
    let d = (0, E.W)(o, c);
    return (0, a.jsx)(G, {
      product: d,
      cardRef: n,
      selectedVariantIndex: c,
      onClick: r,
      text: i,
      prioritizedCurrency: l,
      onClickAnalytics: s
    })
  }