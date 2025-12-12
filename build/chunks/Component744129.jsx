/** Chunk was on web.js **/
/** chunk id: 744129, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Fc: () => V,
  IL: () => B,
  UQ: () => F,
  rz: () => Y
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
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
  Chunk648613 = require("./648613.jsx"),
  Chunk38273 = require("./38273.js"),
  Chunk230916 = require("./230916.js"),
  Chunk947390 = require("./947390.jsx"),
  Chunk466309 = require("./466309.jsx"),
  Chunk382791 = require("./382791.jsx"),
  Chunk823188 = require("./823188.jsx"),
  Chunk52741 = require("./52741.jsx"),
  Chunk474936 = require("./474936.js"),
  Chunk941651 = require("./941651.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk1721 = require("./1721.js"),
  Chunk895601 = require("./895601.js"),
  Chunk381126 = require("./381126.js"),
  Chunk234286 = require("./234286.js");

function k(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function U(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      k(e, t, n[t])
    })
  }
  return e
}

function G(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function Z(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : G(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function F(e) {
  var t;
  let {
    ctaButton: n,
    showYearlyPrice: i,
    className: l,
    isGift: f = false,
    priceOptions: p,
    isApplicationHome: _ = false,
    useShortTitle: g = false
  } = e, b = (0, s.e7)([h.Z], () => h.Z.getPremiumTypeSubscription()), y = (0, s.e7)([m.default], () => m.default.getCurrentUser()), v = (0, O.N)(), S = null == v || null == (t = v.subscription_trial) ? true : t.sku_id, I = (null == b ? true : b.hasActiveTrial) ? null == y ? true : y.premiumType : null, C = (0, A.y_)(I, S), w = null != C, L = (0, c.ap)((0, d.ZP)()), j = (0, E.yc)({
    location: "PremiumBrandRefreshTierCards"
  }), M = g ? D.intl.string(D.t.tUbSDK) : D.intl.string(D.t["t9uG/o"]), k = (0, r.jsxs)(r.Fragment, {
    children: [w && (0, r.jsx)(T.E, {
      text: C,
      className: x.pill
    }), (0, r.jsx)(a.X, {
      variant: "display-md",
      color: L ? "text-strong" : "always-white",
      className: x.cardTitle,
      children: M
    }), (0, r.jsx)(P.Z, {
      isGift: f,
      premiumTier: R.PremiumTypes.TIER_0,
      offerType: R.C.PREMIUM_TRIAL,
      offerTierMatchesCard: S === R.Si.TIER_0,
      showYearlyPrice: i,
      priceOptions: p,
      enablePremiumBrandRefresh: true,
      headingVariant: "text-md/medium",
      headingColor: "text-strong",
      headerClassName: x.priceHeader
    }), (0, r.jsx)("hr", {
      className: x.divider
    }), (0, r.jsx)(N.ql, {
      enablePremiumBrandRefresh: true,
      isApplicationHome: _
    }), n]
  });
  return j ? (0, r.jsx)(u.$1m, {
    color: "nitro-green",
    className: o()(x.card, x.tier0, l, {
      [x.pillMargin]: !_ && w
    }),
    children: k
  }) : (0, r.jsx)("div", {
    className: o()(x.card, x.tier0, l, {
      [x.pillMargin]: !_ && w
    }),
    children: k
  })
}

function B(e) {
  var t;
  let {
    ctaButton: n,
    showYearlyPrice: i,
    featureSet: l = N.uZ.DEFAULT,
    className: f,
    isGift: p = false,
    isModal: _ = false,
    priceOptions: E,
    showPromotionalGiftBanner: v = false,
    wumpusPosition: S = "inCard",
    isApplicationHome: C = false,
    showWumpus: w = true,
    showPill: k = true
  } = e, U = (0, s.e7)([h.Z], () => h.Z.getPremiumTypeSubscription()), G = (0, s.e7)([m.default], () => m.default.getCurrentUser()), Z = (0, O.N)(), F = null == Z || null == (t = Z.subscription_trial) ? true : t.sku_id, B = (null == U ? true : U.hasActiveTrial) ? null == G ? true : G.premiumType : null, V = (0, y.N)(), H = (0, g.t7)(), Y = null != F || null != B ? R.C.PREMIUM_TRIAL : null != V || H ? R.C.PREMIUM_DISCOUNT : null, W = (0, c.ap)((0, d.ZP)()), K = (0, A.A1)(H, B, V, Z, F), z = () => (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("img", {
      src: j,
      alt: "",
      className: o()(x.bigCloud, x[S])
    }), (0, r.jsx)("img", {
      src: L,
      alt: "",
      className: o()(x.smallCloud, x[S])
    }), (0, r.jsx)("img", {
      src: M,
      alt: "",
      className: o()(x.wumpus, x[S])
    })]
  });
  return (0, r.jsxs)(u.$1m, {
    color: "nitro-pink",
    className: o()(x.card, f, {
      [x.withGiftBanner]: v
    }),
    children: [w && (0, r.jsx)(z, {}), k && (0, r.jsx)(T.E, {
      text: null != K ? K : D.intl.string(D.t["6bEcYr"]),
      className: x.pill
    }), (0, r.jsx)(a.X, {
      variant: "display-md",
      color: W ? "text-strong" : "always-white",
      className: x.cardTitle,
      children: D.intl.string(D.t.lG6a5x)
    }), (0, r.jsx)(P.Z, {
      isGift: p,
      premiumTier: R.PremiumTypes.TIER_2,
      offerType: Y,
      offerTierMatchesCard: F === R.Si.TIER_2 || (0, I.Wp)(V, R.Si.TIER_2),
      showYearlyPrice: i,
      priceOptions: E,
      enablePremiumBrandRefresh: true,
      headingVariant: "text-md/medium",
      headingColor: "text-strong",
      headerClassName: x.priceHeader
    }), (0, r.jsx)("hr", {
      className: x.divider
    }), (0, r.jsx)(N.nT, {
      featureSet: l,
      isModal: _,
      isGift: p,
      enablePremiumBrandRefresh: true,
      isApplicationHome: C,
      firstFeatureItemClassName: "inCard" === S ? x.firstFeatureItemContainer : true
    }), n, v && (0, r.jsx)(b.f, {})]
  })
}

function V(e) {
  let {
    className: t,
    ctaButton: n,
    isApplicationHome: i,
    priceOptions: s
  } = e, l = (0, c.ap)((0, d.ZP)());
  return (0, r.jsxs)("div", {
    className: o()(x.card, x.borderGradient, t),
    children: [(0, r.jsxs)("div", {
      className: x.cardHeader,
      children: [(0, r.jsx)(a.X, {
        variant: "display-md",
        color: l ? "text-strong" : "always-white",
        className: x.cardTitle,
        children: D.intl.string(w.default.eSKiXk)
      }), (0, r.jsx)(T.E, {
        text: D.intl.string(D.t.oW0eUd),
        className: x.betaPill
      })]
    }), (0, r.jsx)(C.Z, {
      priceOptions: s
    }), (0, r.jsx)(a.X, {
      variant: "heading-md/semibold",
      color: "text-muted",
      children: D.intl.string(w.default["R+dzZw"])
    }), (0, r.jsx)("hr", {
      className: x.divider
    }), (0, r.jsx)(N.fm, {
      isApplicationHome: i
    }), n]
  })
}
let H = e => {
  let {
    subscriptionTier: t,
    isReducedMotion: n,
    tierCardProps: i,
    className: a
  } = e, s = t === R.Si.TIER_2, c = s ? B : F, {
    subscribeButtonProps: d,
    subscriptionTier: f
  } = (0, S.G)({
    subscriptionTier: t,
    variantOverride: s ? "expressive" : "secondary"
  }), {
    disabled: p
  } = d, _ = (0, r.jsx)("div", {
    className: x.CTAButton,
    children: (0, r.jsx)(l.zxk, Z(U({
      size: "md",
      fullWidth: true
    }, d), {
      disabled: p
    }))
  }), m = (0, r.jsx)("div", {
    className: o()({
      [x.premiumCardHover]: !n
    }),
    children: (0, r.jsx)(c, U({
      className: x.applicationHomeCard,
      ctaButton: _,
      showYearlyPrice: true,
      isApplicationHome: true
    }, i))
  });
  return (0, r.jsx)("div", {
    className: a,
    children: p ? m : (0, r.jsx)(v.Z, {
      subscriptionTier: f,
      children: e => {
        let {
          onClick: t
        } = e;
        return (0, r.jsx)(u.P3F, {
          onClick: t,
          style: {
            cursor: "pointer"
          },
          children: m
        })
      }
    })
  })
};

function Y(e) {
  let {
    innerRef: t,
    className: n
  } = e, {
    analyticsLocations: i
  } = (0, _.ZP)(p.Z.PREMIUM_MARKETING_TIER_CARD), l = (0, N.rS)(t), c = (0, s.e7)([f.Z], () => f.Z.useReducedMotion);
  return (0, r.jsx)(_.Gt, {
    value: i,
    children: (0, r.jsxs)("div", {
      className: o()(x.premiumCardsContainer, n),
      children: [(0, r.jsx)(a.X, {
        variant: "display-md",
        color: "text-strong",
        className: x.premiumCardsHeader,
        children: D.intl.string(D.t.vLz3Zs)
      }), (0, r.jsxs)("div", {
        ref: l,
        className: x.premiumCards,
        children: [(0, r.jsx)(H, {
          subscriptionTier: R.Si.TIER_0,
          isReducedMotion: c,
          className: x.tier0CardOrder
        }), (0, r.jsx)(H, {
          subscriptionTier: R.Si.TIER_2,
          isReducedMotion: c,
          className: x.tier2CardOrder,
          tierCardProps: {
            wumpusPosition: "inCorner"
          }
        })]
      })]
    })
  })
}