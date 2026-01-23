/** Chunk was on 22477 **/
/** chunk id: 834384, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => W
}), require("./896048.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk635358 = require("./635358.js"),
  Chunk417597 = require("./417597.js"),
  Chunk397927 = require("./397927.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk44120 = require("./44120.jsx"),
  Chunk465794 = require("./465794.jsx"),
  Chunk773669 = require("./773669.js"),
  Chunk106799 = require("./106799.jsx"),
  Chunk652165 = require("./652165.jsx"),
  Chunk287809 = require("./287809.js"),
  Chunk927578 = require("./927578.js"),
  Chunk979286 = require("./979286.js"),
  Chunk4227 = require("./4227.js"),
  Chunk298072 = require("./298072.js"),
  Chunk993408 = require("./993408.js"),
  Chunk450481 = require("./450481.js"),
  Chunk740076 = require("./740076.js"),
  Chunk466459 = require("./466459.js"),
  Chunk623373 = require("./623373.js"),
  Chunk561769 = require("./561769.js"),
  Chunk766172 = require("./766172.js"),
  Chunk525723 = require("./525723.js"),
  Chunk57020 = require("./57020.js"),
  Chunk61750 = require("./61750.jsx"),
  Chunk758836 = require("./758836.js"),
  Chunk788868 = require("./788868.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk742282 = require("./742282.js");
let P = e => {
    let {
      product: t,
      cardRef: n,
      isPremiumUser: r,
      analyticsLocations: s,
      selectedVariantIndex: o,
      hasDiscountOffer: d,
      discountOfferAmount: u,
      text: m
    } = e, p = (0, v.R8)(t, r, false), h = d ? I.intl.formatToPlainString(I.t["5U5RB5"], {
      discountOfferAmount: u
    }) : I.intl.formatToPlainString(I.t["cNSL/j"], {
      price: p
    });
    return (0, a.jsx)(i.Button, {
      variant: "primary",
      onClick: e => {
        e.stopPropagation(), (0, c.A)({
          skuId: (0, S.Y)({
            product: t,
            selectedVariantIndex: o
          }),
          returnRef: n,
          analyticsLocations: s,
          variantsReturnStyle: l.g.VARIANTS_GROUP
        })
      },
      text: null != m ? m : h,
      fullWidth: true
    })
  },
  R = e => {
    let {
      isClaimPremiumProductDisabled: t,
      text: n
    } = e;
    return (0, a.jsx)(d.A, {
      fullWidth: true,
      disabled: t,
      onClick: e => e.stopPropagation(),
      textOptions: {
        textOverride: null != n ? n : I.intl.string(I.t.sEAnVH)
      },
      subscriptionTier: w.pe.TIER_2,
      showGradient: true
    })
  },
  D = e => {
    let {
      handlePreviewButtonClick: t,
      text: n
    } = e;
    return (0, a.jsx)(i.Button, {
      variant: "primary",
      onClick: e => {
        e.stopPropagation(), t(e)
      },
      text: null != n ? n : I.intl.string(I.t.FdGl5A),
      fullWidth: true
    })
  },
  M = e => {
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
      text: null != l ? l : I.intl.string(I.t.MAS7uK),
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
      text: null != l ? l : I.intl.string(I.t.FdGl5A),
      fullWidth: true
    })
  },
  U = e => {
    let {
      product: t,
      isClaimPremiumProductDisabled: n,
      isClaiming: l,
      analyticsLocations: r,
      text: s,
      onClickAnalytics: o
    } = e, c = async () => {
      null == o || o("claim premium product button"), await (0, g.iJ)(t.skuId), (0, T.A)({
        product: t,
        analyticsLocations: r,
        purchaseType: N.gs.PREMIUM_PURCHASE
      })
    };
    return (0, a.jsx)(i.Button, {
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
  B = e => {
    let {
      product: t,
      analyticsLocations: n,
      onClickAnalytics: s
    } = e, o = (0, C.sC)(), c = (0, r.bG)([u.default], () => u.default.locale);
    return (0, a.jsx)(i.Button, {
      variant: "primary",
      text: I.intl.format(I.t["4NKuqc"], {
        orbPrice: N.O0,
        orbIconHook: () => (0, a.jsx)(m.A, {
          className: k.f
        })
      }),
      onClick: e => {
        e.stopPropagation(), null == s || s("rental claim with orbs button"), (0, p.B4)({
          skuId: (0, S.Y)({
            product: t
          }),
          onCheckoutSuccess: e => {
            var a, r;
            let {
              entitlements: i
            } = e;
            (0, g.gB)({
              variantsReturnStyle: l.g.VARIANTS_GROUP
            });
            let s = (null == (a = i[0]) ? true : a.ends_at) != null ? new Date(i[0].ends_at).toLocaleDateString(c, {
              minute: "numeric",
              hour: "numeric",
              day: "numeric",
              month: "long",
              year: "numeric"
            }) : true;
            (0, T.A)({
              product: t,
              analyticsLocations: n,
              itemConsumed: null == (r = i[0]) ? true : r.consumed,
              purchaseType: N.gs.ORB,
              rentalDuration: o,
              rentalExpiresAt: s
            })
          },
          rentalDuration: o
        })
      },
      "aria-label": I.intl.formatToPlainString(I.t.DlNs2T, {
        orbPrice: N.O0
      }),
      fullWidth: true
    })
  },
  G = e => {
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
      text: null != o ? o : I.intl.format(I.t.kAgx5L, {
        orbPrice: n[0].amount,
        orbIconHook: () => (0, a.jsx)(m.A, {
          className: k.f
        })
      }),
      onClick: e => {
        e.stopPropagation(), null == c || c("claim with orbs button"), (0, p.B4)({
          skuId: (0, S.Y)({
            product: t,
            selectedVariantIndex: s
          }),
          onCheckoutSuccess: e => {
            var n;
            let {
              entitlements: a
            } = e;
            (0, g.gB)({
              variantsReturnStyle: l.g.VARIANTS_GROUP
            }), (0, T.A)({
              product: t,
              analyticsLocations: r,
              itemConsumed: null == (n = a[0]) ? true : n.consumed,
              purchaseType: N.gs.ORB
            })
          },
          analyticsLocations: r
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
    return (0, a.jsx)(i.Button, {
      variant: "primary",
      onClick: e => {
        e.stopPropagation(), t(e)
      },
      text: null != n ? n : I.intl.string(I.t.GpnHfH),
      fullWidth: true
    })
  },
  V = e => {
    let {
      product: t,
      cardRef: n,
      selectedVariantIndex: l,
      onClick: i,
      text: c,
      prioritizedCurrency: d,
      onClickAnalytics: u
    } = e, m = (0, r.bG)([h.default], () => h.default.getCurrentUser()), p = x.Ay.canUseCollectibles(m), g = (0, C.sC)(), {
      isPurchased: b,
      isPartiallyOwnedBundle: A
    } = (0, y.h)(t), S = (0, v.G0)(t), T = (0, v.tt)(t), {
      isDisabled: N
    } = (0, _.I)(t.skuId), w = (0, v.Zu)({
      product: t,
      isPartiallyOwnedBundle: A,
      isPurchased: b
    }), I = (0, O.V_)(t), k = null != I, {
      shouldCheckoutWithOrbs: V,
      hasSufficientOrbs: W,
      checkoutEligiblePrices: H
    } = (0, E.FI)({
      product: t,
      isPremiumUser: p,
      prioritizedCurrency: d,
      hasDiscountOffer: k,
      isRental: null != g
    }), {
      analyticsLocations: K
    } = (0, o.Ay)(s.A.COLLECTIBLES_SHOP_CARD), z = (0, C.ql)(t, s.A.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON, u), [q, Q] = (0, r.yK)([f.A], () => [f.A.isClaiming === t.skuId, null != f.A.isClaiming && f.A.isClaiming !== t.skuId]), {
      handleUseNow: Y,
      isApplying: J
    } = (0, j.p)({
      product: t
    });
    if (null != i) return (0, a.jsx)(L, {
      onClick: i,
      skuId: t.skuId,
      text: c
    });
    if (S && !p && !T) return (0, a.jsx)(R, {
      isClaimPremiumProductDisabled: Q,
      text: c
    });
    if (!w || N) return (0, a.jsx)(D, {
      handlePreviewButtonClick: z,
      text: c
    });
    if (b) return (0, a.jsx)(M, {
      handleUseNow: Y,
      isApplying: J,
      text: c
    });
    if (S) return (0, a.jsx)(U, {
      product: t,
      isClaimPremiumProductDisabled: Q,
      isClaiming: q,
      analyticsLocations: K,
      text: c,
      onClickAnalytics: u
    });
    if (V && W) return null != g ? (0, a.jsx)(B, {
      product: t,
      analyticsLocations: K,
      onClickAnalytics: u
    }) : (0, a.jsx)(G, {
      product: t,
      checkoutEligiblePrices: H,
      analyticsLocations: K,
      selectedVariantIndex: l,
      text: c,
      onClickAnalytics: u
    });
    if (V && !W)
      if (H.length > 1) return (0, a.jsx)(F, {
        handlePreviewButtonClick: z,
        text: c
      });
      else return (0, a.jsx)(D, {
        handlePreviewButtonClick: z,
        text: c
      });
    return (0, a.jsx)(P, {
      product: t,
      cardRef: n,
      isPremiumUser: p,
      analyticsLocations: K,
      selectedVariantIndex: l,
      hasDiscountOffer: k,
      discountOfferAmount: I,
      text: c
    })
  },
  W = e => {
    let {
      skuId: t,
      cardRef: n,
      onClick: l,
      text: r,
      prioritizedCurrency: i,
      onClickAnalytics: s
    } = e, o = (0, C.Vm)(t), c = (0, b.Q)(o);
    if (null == o) return null;
    let d = (0, A.rb)(o, c);
    return (0, a.jsx)(V, {
      product: d,
      cardRef: n,
      selectedVariantIndex: c,
      onClick: l,
      text: r,
      prioritizedCurrency: i,
      onClickAnalytics: s
    })
  }