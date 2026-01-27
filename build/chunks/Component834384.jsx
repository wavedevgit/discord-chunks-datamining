/** Chunk was on web.js **/
/** chunk id: 834384, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => H
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
let L = e => {
    let {
      product: t,
      cardRef: n,
      isPremiumUser: a,
      analyticsLocations: s,
      selectedVariantIndex: l,
      hasDiscountOffer: u,
      discountOfferAmount: d,
      text: f
    } = e, p = (0, y.R8)(t, a, false), _ = () => {
      (0, c.A)({
        skuId: (0, S.Y)({
          product: t,
          selectedVariantIndex: l
        }),
        returnRef: n,
        analyticsLocations: s,
        variantsReturnStyle: i.g.VARIANTS_GROUP
      })
    }, h = u ? P.intl.formatToPlainString(P.t["5U5RB5"], {
      discountOfferAmount: d
    }) : P.intl.formatToPlainString(P.t["cNSL/j"], {
      price: p
    });
    return (0, r.jsx)(o.Button, {
      variant: "primary",
      onClick: e => {
        e.stopPropagation(), _()
      },
      text: null != f ? f : h,
      fullWidth: true
    })
  },
  x = e => {
    let {
      isClaimPremiumProductDisabled: t,
      text: n
    } = e;
    return (0, r.jsx)(u.A, {
      fullWidth: true,
      disabled: t,
      onClick: e => e.stopPropagation(),
      textOptions: {
        textOverride: null != n ? n : P.intl.string(P.t.sEAnVH)
      },
      subscriptionTier: R.pe.TIER_2,
      showGradient: true
    })
  },
  M = e => {
    let {
      handlePreviewButtonClick: t,
      text: n
    } = e;
    return (0, r.jsx)(o.Button, {
      variant: "primary",
      onClick: e => {
        e.stopPropagation(), t(e)
      },
      text: null != n ? n : P.intl.string(P.t.FdGl5A),
      fullWidth: true
    })
  },
  j = e => {
    let {
      handleUseNow: t,
      isApplying: n,
      text: i
    } = e;
    return (0, r.jsx)(o.Button, {
      variant: "primary",
      onClick: e => {
        e.stopPropagation(), t()
      },
      loading: n,
      text: null != i ? i : P.intl.string(P.t.MAS7uK),
      fullWidth: true
    })
  },
  k = e => {
    let {
      skuId: t,
      onClick: n,
      text: i
    } = e;
    return (0, r.jsx)(o.Button, {
      variant: "primary",
      onClick: e => {
        e.stopPropagation(), n(t)
      },
      text: null != i ? i : P.intl.string(P.t.FdGl5A),
      fullWidth: true
    })
  },
  U = e => {
    let {
      product: t,
      isClaimPremiumProductDisabled: n,
      isClaiming: i,
      analyticsLocations: a,
      text: s,
      onClickAnalytics: l
    } = e, c = async () => {
      null == l || l("claim premium product button"), await (0, m.iJ)(t.skuId), (0, N.A)({
        product: t,
        analyticsLocations: a,
        purchaseType: w.gs.PREMIUM_PURCHASE
      })
    };
    return (0, r.jsx)(o.Button, {
      variant: "primary",
      onClick: e => {
        e.stopPropagation(), c()
      },
      disabled: n,
      loading: i,
      loadingStartedLabel: P.intl.string(P.t["TYw+9s"]),
      loadingFinishedLabel: P.intl.string(P.t.Pg1UP5),
      text: null != s ? s : P.intl.string(P.t.zp6caO),
      fullWidth: true
    })
  },
  G = e => {
    let {
      product: t,
      analyticsLocations: n,
      onClickAnalytics: s
    } = e, l = (0, I.sC)(), c = (0, a.bG)([d.default], () => d.default.locale), u = () => {
      null == s || s("rental claim with orbs button"), (0, p.B4)({
        skuId: (0, S.Y)({
          product: t
        }),
        onCheckoutSuccess: e => {
          var r, a;
          let {
            entitlements: o
          } = e;
          (0, m.gB)({
            variantsReturnStyle: i.g.VARIANTS_GROUP
          });
          let s = (null == (r = o[0]) ? true : r.ends_at) != null ? new Date(o[0].ends_at).toLocaleDateString(c, {
            minute: "numeric",
            hour: "numeric",
            day: "numeric",
            month: "long",
            year: "numeric"
          }) : true;
          (0, N.A)({
            product: t,
            analyticsLocations: n,
            itemConsumed: null == (a = o[0]) ? true : a.consumed,
            purchaseType: w.gs.ORB,
            rentalDuration: l,
            rentalExpiresAt: s
          })
        },
        rentalDuration: l
      })
    };
    return (0, r.jsx)(o.Button, {
      variant: "primary",
      text: P.intl.format(P.t["4NKuqc"], {
        orbPrice: w.O0,
        orbIconHook: () => (0, r.jsx)(f.A, {
          className: D.f
        })
      }),
      onClick: e => {
        e.stopPropagation(), u()
      },
      "aria-label": P.intl.formatToPlainString(P.t.DlNs2T, {
        orbPrice: w.O0
      }),
      fullWidth: true
    })
  },
  F = e => {
    let {
      product: t,
      checkoutEligiblePrices: n,
      analyticsLocations: a,
      selectedVariantIndex: s,
      text: l,
      onClickAnalytics: c
    } = e, u = () => {
      null == c || c("claim with orbs button"), (0, p.B4)({
        skuId: (0, S.Y)({
          product: t,
          selectedVariantIndex: s
        }),
        onCheckoutSuccess: e => {
          var n;
          let {
            entitlements: r
          } = e;
          (0, m.gB)({
            variantsReturnStyle: i.g.VARIANTS_GROUP
          }), (0, N.A)({
            product: t,
            analyticsLocations: a,
            itemConsumed: null == (n = r[0]) ? true : n.consumed,
            purchaseType: w.gs.ORB
          })
        },
        analyticsLocations: a
      })
    };
    return (0, r.jsx)(o.Button, {
      variant: "primary",
      text: null != l ? l : P.intl.format(P.t.kAgx5L, {
        orbPrice: n[0].amount,
        orbIconHook: () => (0, r.jsx)(f.A, {
          className: D.f
        })
      }),
      onClick: e => {
        e.stopPropagation(), u()
      },
      "aria-label": P.intl.formatToPlainString(P.t["fNG/05"], {
        orbPrice: n[0].amount
      }),
      fullWidth: true
    })
  },
  V = e => {
    let {
      handlePreviewButtonClick: t,
      text: n
    } = e;
    return (0, r.jsx)(o.Button, {
      variant: "primary",
      onClick: e => {
        e.stopPropagation(), t(e)
      },
      text: null != n ? n : P.intl.string(P.t.GpnHfH),
      fullWidth: true
    })
  },
  B = e => {
    let {
      product: t,
      cardRef: n,
      selectedVariantIndex: i,
      onClick: o,
      text: c,
      prioritizedCurrency: u,
      onClickAnalytics: d
    } = e, f = (0, a.bG)([_.default], () => _.default.getCurrentUser()), p = h.Ay.canUseCollectibles(f), m = (0, I.sC)(), {
      isPurchased: E,
      isPartiallyOwnedBundle: A
    } = (0, v.h)(t), S = (0, y.G0)(t), N = (0, y.tt)(t), {
      isDisabled: w
    } = (0, O.I)(t.skuId), R = (0, y.Zu)({
      product: t,
      isPartiallyOwnedBundle: A,
      isPurchased: E
    }), P = (0, T.V_)(t), D = null != P, {
      shouldCheckoutWithOrbs: B,
      hasSufficientOrbs: H,
      checkoutEligiblePrices: Y
    } = (0, C.FI)({
      product: t,
      isPremiumUser: p,
      prioritizedCurrency: u,
      hasDiscountOffer: D,
      isRental: null != m
    }), {
      analyticsLocations: W
    } = (0, l.Ay)(s.A.COLLECTIBLES_SHOP_CARD), K = (0, I.ql)(t, s.A.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON, d), [z, q] = (0, a.yK)([g.A], () => [g.A.isClaiming === t.skuId, null != g.A.isClaiming && g.A.isClaiming !== t.skuId]), {
      handleUseNow: Z,
      isApplying: Q
    } = (0, b.p)({
      product: t
    });
    if (null != o) return (0, r.jsx)(k, {
      onClick: o,
      skuId: t.skuId,
      text: c
    });
    if (S && !p && !N) return (0, r.jsx)(x, {
      isClaimPremiumProductDisabled: q,
      text: c
    });
    if (!R || w) return (0, r.jsx)(M, {
      handlePreviewButtonClick: K,
      text: c
    });
    if (E) return (0, r.jsx)(j, {
      handleUseNow: Z,
      isApplying: Q,
      text: c
    });
    if (S) return (0, r.jsx)(U, {
      product: t,
      isClaimPremiumProductDisabled: q,
      isClaiming: z,
      analyticsLocations: W,
      text: c,
      onClickAnalytics: d
    });
    if (B && H) return null != m ? (0, r.jsx)(G, {
      product: t,
      analyticsLocations: W,
      onClickAnalytics: d
    }) : (0, r.jsx)(F, {
      product: t,
      checkoutEligiblePrices: Y,
      analyticsLocations: W,
      selectedVariantIndex: i,
      text: c,
      onClickAnalytics: d
    });
    if (B && !H)
      if (Y.length > 1) return (0, r.jsx)(V, {
        handlePreviewButtonClick: K,
        text: c
      });
      else return (0, r.jsx)(M, {
        handlePreviewButtonClick: K,
        text: c
      });
    return (0, r.jsx)(L, {
      product: t,
      cardRef: n,
      isPremiumUser: p,
      analyticsLocations: W,
      selectedVariantIndex: i,
      hasDiscountOffer: D,
      discountOfferAmount: P,
      text: c
    })
  },
  H = e => {
    let {
      skuId: t,
      cardRef: n,
      onClick: i,
      text: a,
      prioritizedCurrency: o,
      onClickAnalytics: s
    } = e, l = (0, I.Vm)(t), c = (0, E.Q)(l);
    if (null == l) return null;
    let u = (0, A.rb)(l, c);
    return (0, r.jsx)(B, {
      product: u,
      cardRef: n,
      selectedVariantIndex: c,
      onClick: i,
      text: a,
      prioritizedCurrency: o,
      onClickAnalytics: s
    })
  }