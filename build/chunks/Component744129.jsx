/** Chunk was on web.js **/
/** chunk id: 744129, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Fc: () => H,
  IL: () => V,
  UQ: () => B,
  rz: () => K
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk409794 = require("./409794.jsx"),
  Chunk442837 = require("./442837.js"),
  Chunk159691 = require("./159691.js"),
  Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk410030 = require("./410030.js"),
  Chunk607070 = require("./607070.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk594174 = require("./594174.js"),
  Chunk78839 = require("./78839.js"),
  Chunk140465 = require("./140465.js"),
  Chunk998030 = require("./998030.js"),
  Chunk474706 = require("./474706.jsx"),
  Chunk622909 = require("./622909.js"),
  Chunk639119 = require("./639119.js"),
  Chunk260720 = require("./260720.js"),
  Chunk648613 = require("./648613.jsx"),
  Chunk38273 = require("./38273.js"),
  Chunk230916 = require("./230916.js"),
  Chunk947390 = require("./947390.jsx"),
  Chunk466309 = require("./466309.jsx"),
  Chunk382791 = require("./382791.jsx"),
  Chunk823188 = require("./823188.jsx"),
  Chunk52741 = require("./52741.jsx"),
  Chunk474936 = require("./474936.js"),
  Chunk353149 = require("./353149.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk974131 = require("./974131.js"),
  Chunk895601 = require("./895601.js"),
  Chunk381126 = require("./381126.js"),
  Chunk234286 = require("./234286.js");

function U(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function G(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      U(e, t, n[t])
    })
  }
  return e
}

function Z(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function F(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Z(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function B(e) {
  var t;
  let {
    ctaButton: n,
    showYearlyPrice: i,
    className: l,
    isGift: f = false,
    priceOptions: p,
    isApplicationHome: _ = false,
    useShortTitle: g = false
  } = e, b = (0, s.e7)([h.Z], () => h.Z.getPremiumTypeSubscription()), y = (0, s.e7)([m.default], () => m.default.getCurrentUser()), v = (0, O.N)(), S = null == v || null == (t = v.subscription_trial) ? true : t.sku_id, I = (null == b ? true : b.hasActiveTrial) ? null == y ? true : y.premiumType : null, T = (0, N.y_)(I, S), A = null != T, D = (0, c.ap)((0, d.ZP)()), j = (0, E.yc)({
    location: "PremiumBrandRefreshTierCards"
  }), M = g ? x.intl.string(x.t.tUbSDK) : x.intl.string(x.t["t9uG/o"]), k = (0, r.jsxs)(r.Fragment, {
    children: [A && (0, r.jsx)(C.E, {
      text: T,
      className: L.pill
    }), (0, r.jsx)(o.X, {
      variant: "display-md",
      color: D ? "text-strong" : "always-white",
      className: L.cardTitle,
      children: M
    }), (0, r.jsx)(R.Z, {
      isGift: f,
      premiumTier: w.PremiumTypes.TIER_0,
      offerType: w.C.PREMIUM_TRIAL,
      offerTierMatchesCard: S === w.Si.TIER_0,
      showYearlyPrice: i,
      priceOptions: p,
      enablePremiumBrandRefresh: true,
      headingVariant: "text-md/medium",
      headingColor: "text-strong",
      headerClassName: L.priceHeader
    }), (0, r.jsx)("hr", {
      className: L.divider
    }), (0, r.jsx)(P.ql, {
      enablePremiumBrandRefresh: true,
      isApplicationHome: _
    }), n]
  });
  return j ? (0, r.jsx)(u.$1m, {
    color: "nitro-green",
    className: a()(L.card, L.tier0, l, {
      [L.pillMargin]: !_ && A
    }),
    children: k
  }) : (0, r.jsx)("div", {
    className: a()(L.card, L.tier0, l, {
      [L.pillMargin]: !_ && A
    }),
    children: k
  })
}

function V(e) {
  var t;
  let {
    ctaButton: n,
    showYearlyPrice: i,
    featureSet: l = P.uZ.DEFAULT,
    className: f,
    isGift: p = false,
    isModal: _ = false,
    priceOptions: E,
    showPromotionalGiftBanner: v = false,
    wumpusPosition: S = "inCard",
    isApplicationHome: I = false,
    showWumpus: A = true,
    showPill: D = true
  } = e, U = (0, s.e7)([h.Z], () => h.Z.getPremiumTypeSubscription()), G = (0, s.e7)([m.default], () => m.default.getCurrentUser()), Z = (0, O.N)(), F = null == Z || null == (t = Z.subscription_trial) ? true : t.sku_id, B = (null == U ? true : U.hasActiveTrial) ? null == G ? true : G.premiumType : null, V = (0, y.N)(), H = (0, g.t7)(), Y = null != F || null != B ? w.C.PREMIUM_TRIAL : null != V || H ? w.C.PREMIUM_DISCOUNT : null, W = (0, c.ap)((0, d.ZP)()), K = (0, N.A1)(H, B, V, Z, F), z = () => (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("img", {
      src: M,
      alt: "",
      className: a()(L.bigCloud, L[S])
    }), (0, r.jsx)("img", {
      src: j,
      alt: "",
      className: a()(L.smallCloud, L[S])
    }), (0, r.jsx)("img", {
      src: k,
      alt: "",
      className: a()(L.wumpus, L[S])
    })]
  });
  return (0, r.jsxs)(u.$1m, {
    color: "nitro-pink",
    className: a()(L.card, f, {
      [L.withGiftBanner]: v
    }),
    children: [A && (0, r.jsx)(z, {}), D && (0, r.jsx)(C.E, {
      text: null != K ? K : x.intl.string(x.t["6bEcYr"]),
      className: L.pill
    }), (0, r.jsx)(o.X, {
      variant: "display-md",
      color: W ? "text-strong" : "always-white",
      className: L.cardTitle,
      children: x.intl.string(x.t.lG6a5x)
    }), (0, r.jsx)(R.Z, {
      isGift: p,
      premiumTier: w.PremiumTypes.TIER_2,
      offerType: Y,
      offerTierMatchesCard: F === w.Si.TIER_2 || (0, T.Wp)(V, w.Si.TIER_2),
      showYearlyPrice: i,
      priceOptions: E,
      enablePremiumBrandRefresh: true,
      headingVariant: "text-md/medium",
      headingColor: "text-strong",
      headerClassName: L.priceHeader
    }), (0, r.jsx)("hr", {
      className: L.divider
    }), (0, r.jsx)(P.nT, {
      featureSet: l,
      isModal: _,
      isGift: p,
      enablePremiumBrandRefresh: true,
      isApplicationHome: I,
      firstFeatureItemClassName: "inCard" === S ? L.firstFeatureItemContainer : true
    }), n, v && (0, r.jsx)(b.f, {})]
  })
}

function H(e) {
  let {
    className: t,
    ctaButton: n,
    isApplicationHome: i,
    priceOptions: s
  } = e, l = (0, c.ap)((0, d.ZP)());
  return (0, r.jsxs)("div", {
    className: a()(L.card, L.borderGradient, t),
    children: [(0, r.jsxs)("div", {
      className: L.cardHeader,
      children: [(0, r.jsx)(o.X, {
        variant: "display-md",
        color: l ? "text-strong" : "always-white",
        className: L.cardTitle,
        children: x.intl.string(D.default.eSKiXk)
      }), (0, r.jsx)(C.E, {
        text: x.intl.string(x.t.oW0eUd),
        className: L.betaPill
      })]
    }), (0, r.jsx)(A.Z, {
      priceOptions: s
    }), (0, r.jsx)(o.X, {
      variant: "heading-md/semibold",
      color: "text-muted",
      children: x.intl.string(D.default["R+dzZw"])
    }), (0, r.jsx)("hr", {
      className: L.divider
    }), (0, r.jsx)(P.fm, {
      isApplicationHome: i
    }), n]
  })
}
let Y = e => {
    let {
      subscriptionTier: t,
      isReducedMotion: n,
      tierCardProps: i,
      className: o,
      narrowLayout: s
    } = e, c = t === w.Si.TIER_2, d = c ? V : B, {
      subscribeButtonProps: f,
      subscriptionTier: p
    } = (0, I.G)({
      subscriptionTier: t,
      variantOverride: c ? "expressive" : "secondary"
    }), {
      disabled: _
    } = f, m = (0, r.jsx)("div", {
      className: L.CTAButton,
      children: (0, r.jsx)(l.zxk, F(G({
        size: "md",
        fullWidth: true
      }, f), {
        disabled: _
      }))
    }), h = (0, r.jsx)("div", {
      className: a()({
        [L.premiumCardHover]: !n
      }),
      children: (0, r.jsx)(d, G({
        className: a()(L.applicationHomeCard, {
          [L.narrow]: s
        }),
        ctaButton: m,
        showYearlyPrice: true,
        isApplicationHome: true
      }, i))
    });
    return (0, r.jsx)("div", {
      className: o,
      children: _ ? h : (0, r.jsx)(S.Z, {
        subscriptionTier: p,
        children: e => {
          let {
            onClick: t
          } = e;
          return (0, r.jsx)(u.P3F, {
            onClick: t,
            style: {
              cursor: "pointer"
            },
            children: h
          })
        }
      })
    })
  },
  W = e => {
    let {
      isReducedMotion: t,
      className: n
    } = e, i = (0, r.jsx)("div", {
      className: L.CTAButton,
      children: (0, r.jsx)(l.zxk, {
        size: "md",
        fullWidth: true,
        icon: u.SrA,
        text: x.intl.string(x.t["2pG5Ga"]),
        variant: "secondary"
      })
    }), o = (0, r.jsx)("div", {
      className: a()({
        [L.premiumCardHover]: !t
      }),
      children: (0, r.jsx)(H, {
        className: a()(L.applicationHomeCard, L.narrow),
        ctaButton: i,
        isApplicationHome: true
      })
    });
    return (0, r.jsx)(S.Z, {
      subscriptionTier: w.Si.TIER_2,
      initialPlanId: w.Xh.PREMIUM_GROUP_MONTH,
      children: e => {
        let {
          onClick: t
        } = e;
        return (0, r.jsx)("div", {
          className: n,
          children: (0, r.jsx)(u.P3F, {
            onClick: t,
            style: {
              cursor: "pointer"
            },
            children: o
          })
        })
      }
    })
  };

function K(e) {
  let {
    innerRef: t,
    className: n
  } = e, {
    analyticsLocations: i
  } = (0, _.ZP)(p.Z.PREMIUM_MARKETING_TIER_CARD), l = (0, P.rS)(t), c = (0, s.e7)([f.Z], () => f.Z.useReducedMotion), u = (0, v.x9)();
  return (0, r.jsx)(_.Gt, {
    value: i,
    children: (0, r.jsxs)("div", {
      className: a()(L.premiumCardsContainer, n),
      children: [(0, r.jsx)(o.X, {
        variant: "display-md",
        color: "text-strong",
        className: L.premiumCardsHeader,
        children: x.intl.string(x.t.vLz3Zs)
      }), (0, r.jsxs)("div", {
        ref: l,
        className: L.premiumCards,
        children: [(0, r.jsx)(Y, {
          subscriptionTier: w.Si.TIER_0,
          isReducedMotion: c,
          className: L.tier0CardOrder,
          narrowLayout: u
        }), (0, r.jsx)(Y, {
          subscriptionTier: w.Si.TIER_2,
          isReducedMotion: c,
          className: L.tier2CardOrder,
          tierCardProps: {
            wumpusPosition: u ? "insideCorner" : "outerCorner",
            showPill: !u
          },
          narrowLayout: u
        }), u && (0, r.jsx)(W, {
          isReducedMotion: c,
          className: L.premiumGroupCardOrder
        })]
      })]
    })
  })
}