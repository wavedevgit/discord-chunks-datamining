/** Chunk was on 88282 **/
/** chunk id: 558261, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => z
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
  Chunk192676 = require("./192676.js");
let R = e => {
    let {
      product: t,
      cardRef: n,
      isPremiumUser: r,
      analyticsLocations: s,
      selectedVariantIndex: o,
      hasDiscountOffer: d,
      discountOfferAmount: u,
      text: m
    } = e, p = (0, v.XM)(t, r, false), h = d ? w.intl.formatToPlainString(w.t["5U5RB5"], {
      discountOfferAmount: u
    }) : w.intl.formatToPlainString(w.t["cNSL/j"], {
      price: p
    });
    return (0, a.jsx)(i.Button, {
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
        textOverride: null != n ? n : w.intl.string(w.t.sEAnVH)
      },
      subscriptionTier: I.Si.TIER_2,
      showGradient: true
    })
  },
  Z = e => {
    let {
      handlePreviewButtonClick: t,
      text: n
    } = e;
    return (0, a.jsx)(i.Button, {
      variant: "primary",
      onClick: e => {
        e.stopPropagation(), t(e)
      },
      text: null != n ? n : w.intl.string(w.t.FdGl5A),
      fullWidth: true
    })
  },
  D = e => {
    let {
      handleUseNow: t,
      isApplying: n,
      text: l
    } = e;
    return (0, a.jsx)(i.Button, {
      variant: "primary",
      onClick: e => {
        e.stopPropagation(), t()
      },
      loading: n,
      text: null != l ? l : w.intl.string(w.t.MAS7uK),
      fullWidth: true
    })
  },
  L = e => {
    let {
      skuId: t,
      onClick: n,
      text: l
    } = e;
    return (0, a.jsx)(i.Button, {
      variant: "primary",
      onClick: e => {
        e.stopPropagation(), n(t)
      },
      text: null != l ? l : w.intl.string(w.t.FdGl5A),
      fullWidth: true
    })
  },
  M = e => {
    let {
      product: t,
      isClaimPremiumProductDisabled: n,
      isClaiming: l,
      analyticsLocations: r,
      text: s,
      onClickAnalytics: o
    } = e, c = async () => {
      null == o || o("claim premium product button"), await (0, f.fK)(t.skuId), (0, T.Z)({
        product: t,
        analyticsLocations: r,
        purchaseType: P.o8.PREMIUM_PURCHASE
      })
    };
    return (0, a.jsx)(i.Button, {
      variant: "primary",
      onClick: e => {
        e.stopPropagation(), c()
      },
      disabled: n,
      loading: l,
      loadingStartedLabel: w.intl.string(w.t["TYw+9s"]),
      loadingFinishedLabel: w.intl.string(w.t.Pg1UP5),
      text: null != s ? s : w.intl.string(w.t.zp6caO),
      fullWidth: true
    })
  },
  U = e => {
    let {
      product: t,
      analyticsLocations: n,
      onClickAnalytics: s
    } = e, o = (0, C.jB)(), c = (0, r.e7)([u.default], () => u.default.locale);
    return (0, a.jsx)(i.Button, {
      variant: "primary",
      text: w.intl.format(w.t["4NKuqc"], {
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
            var a, r;
            let {
              entitlements: i
            } = e;
            (0, f.qg)({
              variantsReturnStyle: l.v.VARIANTS_GROUP
            });
            let s = (null == (a = i[0]) ? true : a.ends_at) != null ? new Date(i[0].ends_at).toLocaleDateString(c, {
              minute: "numeric",
              hour: "numeric",
              day: "numeric",
              month: "long",
              year: "numeric"
            }) : true;
            (0, T.Z)({
              product: t,
              analyticsLocations: n,
              itemConsumed: null == (r = i[0]) ? true : r.consumed,
              purchaseType: P.o8.ORB,
              rentalDuration: o,
              rentalExpiresAt: s
            })
          },
          rentalDuration: o
        })
      },
      "aria-label": w.intl.formatToPlainString(w.t.DlNs2T, {
        orbPrice: P.As
      }),
      fullWidth: true
    })
  },
  F = e => {
    let {
      product: t,
      checkoutEligiblePrices: n,
      analyticsLocations: r,
      selectedVariantIndex: s,
      text: o,
      onClickAnalytics: c
    } = e;
    return (0, a.jsx)(i.Button, {
      variant: "primary",
      text: null != o ? o : w.intl.format(w.t.kAgx5L, {
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
            (0, f.qg)({
              variantsReturnStyle: l.v.VARIANTS_GROUP
            }), (0, T.Z)({
              product: t,
              analyticsLocations: r,
              itemConsumed: null == (n = a[0]) ? true : n.consumed,
              purchaseType: P.o8.ORB
            })
          },
          analyticsLocations: r
        })
      },
      "aria-label": w.intl.formatToPlainString(w.t["fNG/05"], {
        orbPrice: n[0].amount
      }),
      fullWidth: true
    })
  },
  B = e => {
    let {
      handlePreviewButtonClick: t,
      text: n
    } = e;
    return (0, a.jsx)(i.Button, {
      variant: "primary",
      onClick: e => {
        e.stopPropagation(), t(e)
      },
      text: null != n ? n : w.intl.string(w.t.GpnHfH),
      fullWidth: true
    })
  },
  G = e => {
    let {
      product: t,
      cardRef: n,
      selectedVariantIndex: l,
      onClick: i,
      text: c,
      prioritizedCurrency: d,
      onClickAnalytics: u
    } = e, m = (0, r.e7)([h.default], () => h.default.getCurrentUser()), p = x.ZP.canUseCollectibles(m), f = (0, C.jB)(), {
      isPurchased: b,
      isPartiallyOwnedBundle: S
    } = (0, y.L)(t), E = (0, v.G1)(t), T = (0, v.rN)(t), {
      isDisabled: P
    } = (0, _.G)(t.skuId), I = (0, v.ne)({
      product: t,
      isPartiallyOwnedBundle: S,
      isPurchased: b
    }), w = (0, O.Iw)(t), k = null != w, {
      shouldCheckoutWithOrbs: G,
      hasSufficientOrbs: z,
      checkoutEligiblePrices: V
    } = (0, N.Ip)({
      product: t,
      isPremiumUser: p,
      prioritizedCurrency: d,
      hasDiscountOffer: k,
      isRental: null != f
    }), {
      analyticsLocations: H
    } = (0, o.ZP)(s.Z.COLLECTIBLES_SHOP_CARD), W = (0, C.J7)(t, s.Z.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON, u), [K, q] = (0, r.Wu)([g.Z], () => [g.Z.isClaiming === t.skuId, null != g.Z.isClaiming && g.Z.isClaiming !== t.skuId]), {
      handleUseNow: Y,
      isApplying: J
    } = (0, j.W)({
      product: t
    });
    if (null != i) return (0, a.jsx)(L, {
      onClick: i,
      skuId: t.skuId,
      text: c
    });
    if (E && !p && !T) return (0, a.jsx)(A, {
      isClaimPremiumProductDisabled: q,
      text: c
    });
    if (!I || P) return (0, a.jsx)(Z, {
      handlePreviewButtonClick: W,
      text: c
    });
    if (b) return (0, a.jsx)(D, {
      handleUseNow: Y,
      isApplying: J,
      text: c
    });
    if (E) return (0, a.jsx)(M, {
      product: t,
      isClaimPremiumProductDisabled: q,
      isClaiming: K,
      analyticsLocations: H,
      text: c,
      onClickAnalytics: u
    });
    if (G && z) return null != f ? (0, a.jsx)(U, {
      product: t,
      analyticsLocations: H,
      onClickAnalytics: u
    }) : (0, a.jsx)(F, {
      product: t,
      checkoutEligiblePrices: V,
      analyticsLocations: H,
      selectedVariantIndex: l,
      text: c,
      onClickAnalytics: u
    });
    if (G && !z)
      if (V.length > 1) return (0, a.jsx)(B, {
        handlePreviewButtonClick: W,
        text: c
      });
      else return (0, a.jsx)(Z, {
        handlePreviewButtonClick: W,
        text: c
      });
    return (0, a.jsx)(R, {
      product: t,
      cardRef: n,
      isPremiumUser: p,
      analyticsLocations: H,
      selectedVariantIndex: l,
      hasDiscountOffer: k,
      discountOfferAmount: w,
      text: c
    })
  },
  z = e => {
    let {
      skuId: t,
      cardRef: n,
      onClick: l,
      text: r,
      prioritizedCurrency: i,
      onClickAnalytics: s
    } = e, o = (0, C.LJ)(t), c = (0, b.o)(o);
    if (null == o) return null;
    let d = (0, E.W)(o, c);
    return (0, a.jsx)(G, {
      product: d,
      cardRef: n,
      selectedVariantIndex: c,
      onClick: l,
      text: r,
      prioritizedCurrency: i,
      onClickAnalytics: s
    })
  }