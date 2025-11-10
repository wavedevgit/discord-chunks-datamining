/** Chunk was on web.js **/
/** chunk id: 744129, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  IL: () => Z,
  UQ: () => B,
  rz: () => V
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
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
  Chunk756896 = require("./756896.jsx"),
  Chunk589072 = require("./589072.jsx"),
  Chunk140465 = require("./140465.js"),
  Chunk998030 = require("./998030.js"),
  Chunk474706 = require("./474706.jsx"),
  Chunk104494 = require("./104494.js"),
  Chunk639119 = require("./639119.js"),
  Chunk648613 = require("./648613.jsx"),
  Chunk38273 = require("./38273.js"),
  Chunk947390 = require("./947390.jsx"),
  Chunk382791 = require("./382791.jsx"),
  Chunk823188 = require("./823188.jsx"),
  Chunk52741 = require("./52741.jsx"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk1721 = require("./1721.js"),
  Chunk895601 = require("./895601.js"),
  Chunk381126 = require("./381126.js"),
  Chunk234286 = require("./234286.js");

function j(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function k(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      j(e, t, n[t])
    })
  }
  return e
}

function U(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function G(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : U(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function B(e) {
  var t;
  let {
    ctaButton: n,
    showYearlyPrice: i,
    className: o,
    isGift: l = false,
    priceOptions: f,
    isApplicationHome: _ = false
  } = e, p = (0, s.e7)([m.Z], () => m.Z.getPremiumTypeSubscription()), E = (0, s.e7)([h.default], () => h.default.getCurrentUser()), b = (0, I.N)(), O = null == b || null == (t = b.subscription_trial) ? true : t.sku_id, v = (null == p ? true : p.hasActiveTrial) ? null == E ? true : E.premiumType : null, S = (0, C.y_)(v, O), T = null != S, w = (0, c.ap)((0, d.ZP)()), x = (0, y.yc)({
    location: "PremiumBrandRefreshTierCards"
  }), L = (0, r.jsxs)(r.Fragment, {
    children: [T && (0, r.jsx)(A.E, {
      text: S,
      className: D.pill
    }), (0, r.jsx)(g.Z, {
      className: D.wordmark,
      color: w ? "black" : "white"
    }), (0, r.jsx)(R.Z, {
      isGift: l,
      premiumTier: P.PremiumTypes.TIER_0,
      offerType: P.C.PREMIUM_TRIAL,
      offerTierMatchesCard: O === P.Si.TIER_0,
      showYearlyPrice: i,
      priceOptions: f,
      enablePremiumBrandRefresh: true,
      headingVariant: "text-md/medium",
      headingColor: "text-primary",
      headerClassName: D.priceHeader
    }), (0, r.jsx)("hr", {
      className: D.divider
    }), (0, r.jsx)(N.ql, {
      enablePremiumBrandRefresh: true,
      isApplicationHome: _
    }), n]
  });
  return x ? (0, r.jsx)(u.$1m, {
    color: "nitro-green",
    className: a()(D.card, D.tier0, o, {
      [D.pillMargin]: !_ && T
    }),
    children: L
  }) : (0, r.jsx)("div", {
    className: a()(D.card, D.tier0, o, {
      [D.pillMargin]: !_ && T
    }),
    children: L
  })
}

function Z(e) {
  var t;
  let {
    ctaButton: n,
    showYearlyPrice: i,
    featureSet: o = N.uZ.DEFAULT,
    className: l,
    isGift: f = false,
    isModal: _ = false,
    priceOptions: p,
    showPromotionalGiftBanner: g = false,
    wumpusPosition: y = "inCard",
    isApplicationHome: S = false
  } = e, T = (0, s.e7)([m.Z], () => m.Z.getPremiumTypeSubscription()), j = (0, s.e7)([h.default], () => h.default.getCurrentUser()), k = (0, I.N)(), U = null == k || null == (t = k.subscription_trial) ? true : t.sku_id, G = (null == T ? true : T.hasActiveTrial) ? null == j ? true : j.premiumType : null, B = (0, v.Ng)(), Z = (0, b.t7)(), F = null != U || null != G ? P.C.PREMIUM_TRIAL : null != B || Z ? P.C.PREMIUM_DISCOUNT : null, V = (0, c.ap)((0, d.ZP)()), H = (0, C.A1)(Z, G, B, k, U), Y = () => (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("img", {
      src: L,
      alt: "",
      className: a()(D.bigCloud, D[y])
    }), (0, r.jsx)("img", {
      src: x,
      alt: "",
      className: a()(D.smallCloud, D[y])
    }), (0, r.jsx)("img", {
      src: M,
      alt: "",
      className: a()(D.wumpus, D[y])
    })]
  });
  return (0, r.jsxs)(u.$1m, {
    color: "nitro-pink",
    className: a()(D.card, l, {
      [D.withGiftBanner]: g
    }),
    children: [(0, r.jsx)(Y, {}), (0, r.jsx)(A.E, {
      text: null != H ? H : w.intl.string(w.t["6bEcYr"]),
      className: D.pill
    }), (0, r.jsx)(E.Z, {
      className: D.wordmark,
      color: V ? "black" : "white"
    }), (0, r.jsx)(R.Z, {
      isGift: f,
      premiumTier: P.PremiumTypes.TIER_2,
      offerType: F,
      offerTierMatchesCard: U === P.Si.TIER_2 || (0, v.Wp)(B, P.Si.TIER_2),
      showYearlyPrice: i,
      priceOptions: p,
      enablePremiumBrandRefresh: true,
      headingVariant: "text-md/medium",
      headingColor: "text-primary",
      headerClassName: D.priceHeader
    }), (0, r.jsx)("hr", {
      className: D.divider
    }), (0, r.jsx)(N.nT, {
      featureSet: o,
      isModal: _,
      isGift: f,
      enablePremiumBrandRefresh: true,
      isApplicationHome: S,
      firstFeatureItemClassName: "inCard" === y ? D.firstFeatureItemContainer : true
    }), n, g && (0, r.jsx)(O.f, {})]
  })
}
let F = e => {
  let {
    subscriptionTier: t,
    isReducedMotion: n,
    tierCardProps: i,
    className: o
  } = e, s = t === P.Si.TIER_2, c = s ? Z : B, {
    subscribeButtonProps: d,
    subscriptionTier: f
  } = (0, T.G)({
    subscriptionTier: t,
    variantOverride: s ? "expressive" : "secondary"
  }), {
    disabled: _
  } = d, p = (0, r.jsx)("div", {
    className: D.CTAButton,
    children: (0, r.jsx)(l.zxk, G(k({
      size: "md",
      fullWidth: true
    }, d), {
      disabled: _
    }))
  }), h = (0, r.jsx)("div", {
    className: a()({
      [D.premiumCardHover]: !n
    }),
    children: (0, r.jsx)(c, k({
      className: D.applicationHomeCard,
      ctaButton: p,
      showYearlyPrice: true,
      isApplicationHome: true
    }, i))
  });
  return (0, r.jsx)("div", {
    className: o,
    children: _ ? h : (0, r.jsx)(S.Z, {
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
          children: h
        })
      }
    })
  })
};

function V(e) {
  let {
    innerRef: t,
    className: n
  } = e, {
    analyticsLocations: i
  } = (0, p.ZP)(_.Z.PREMIUM_MARKETING_TIER_CARD), l = (0, N.rS)(t), c = (0, s.e7)([f.Z], () => f.Z.useReducedMotion);
  return (0, r.jsx)(p.Gt, {
    value: i,
    children: (0, r.jsxs)("div", {
      className: a()(D.premiumCardsContainer, n),
      children: [(0, r.jsx)(o.X, {
        variant: "display-md",
        color: "header-primary",
        className: D.premiumCardsHeader,
        children: w.intl.string(w.t.vLz3Zs)
      }), (0, r.jsxs)("div", {
        ref: l,
        className: D.premiumCards,
        children: [(0, r.jsx)(F, {
          subscriptionTier: P.Si.TIER_0,
          isReducedMotion: c,
          className: D.tier0CardOrder
        }), (0, r.jsx)(F, {
          subscriptionTier: P.Si.TIER_2,
          isReducedMotion: c,
          className: D.tier2CardOrder,
          tierCardProps: {
            wumpusPosition: "inCorner"
          }
        })]
      })]
    })
  })
}