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
  Chunk474706 = require("./474706.jsx"),
  Chunk104494 = require("./104494.js"),
  Chunk639119 = require("./639119.js"),
  Chunk648613 = require("./648613.jsx"),
  Chunk38273 = require("./38273.js"),
  Chunk947390 = require("./947390.jsx"),
  Chunk382791 = require("./382791.jsx"),
  Chunk823188 = require("./823188.jsx"),
  Chunk52741 = require("./52741.jsx"),
  Chunk476442 = require("./476442.jsx"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk1721 = require("./1721.js"),
  Chunk895601 = require("./895601.js"),
  Chunk381126 = require("./381126.js"),
  Chunk234286 = require("./234286.js");

function M(e, t, n) {
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
      M(e, t, n[t])
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
    priceOptions: u,
    isApplicationHome: f = false
  } = e, _ = (0, s.e7)([m.Z], () => m.Z.getPremiumTypeSubscription()), p = (0, s.e7)([h.default], () => h.default.getCurrentUser()), E = (0, v.N)(), b = null == E || null == (t = E.subscription_trial) ? true : t.sku_id, y = (null == _ ? true : _.hasActiveTrial) ? null == p ? true : p.premiumType : null, O = (0, A.y_)(y, b), I = null != O, T = (0, c.ap)((0, d.ZP)());
  return (0, r.jsxs)("div", {
    className: a()(D.card, D.tier0, o, {
      [D.pillMargin]: !f && I
    }),
    children: [I && (0, r.jsx)(S.E, {
      text: O,
      className: D.pill
    }), (0, r.jsx)(g.Z, {
      className: D.wordmark,
      color: T ? "black" : "white"
    }), (0, r.jsx)(N.Z, {
      isGift: l,
      premiumTier: P.p9.TIER_0,
      offerType: P.C.PREMIUM_TRIAL,
      offerTierMatchesCard: b === P.Si.TIER_0,
      showYearlyPrice: i,
      priceOptions: u,
      enablePremiumBrandRefresh: true,
      headingVariant: "text-md/medium",
      headingColor: "text-primary",
      headerClassName: D.priceHeader
    }), (0, r.jsx)("hr", {
      className: D.divider
    }), (0, r.jsx)(C.ql, {
      enablePremiumBrandRefresh: true,
      isApplicationHome: f
    }), n]
  })
}

function Z(e) {
  var t;
  let {
    ctaButton: n,
    showYearlyPrice: i,
    featureSet: o = C.uZ.DEFAULT,
    className: l,
    isGift: f = false,
    isModal: _ = false,
    priceOptions: p,
    showPromotionalGiftBanner: g = false,
    showSeptemberMarketingMomentBanner: I = false,
    wumpusPosition: T = "inCard",
    isApplicationHome: M = false
  } = e, k = (0, s.e7)([m.Z], () => m.Z.getPremiumTypeSubscription()), U = (0, s.e7)([h.default], () => h.default.getCurrentUser()), G = (0, v.N)(), B = null == G || null == (t = G.subscription_trial) ? true : t.sku_id, Z = (null == k ? true : k.hasActiveTrial) ? null == U ? true : U.premiumType : null, F = (0, O.Ng)(), V = (0, b.t7)(), H = null != B || null != Z ? P.C.PREMIUM_TRIAL : null != F || V ? P.C.PREMIUM_DISCOUNT : null, Y = (0, c.ap)((0, d.ZP)()), W = (0, A.A1)(V, Z, F, G, B), K = () => (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("img", {
      src: L,
      alt: "",
      className: a()(D.bigCloud, D[T])
    }), (0, r.jsx)("img", {
      src: x,
      alt: "",
      className: a()(D.smallCloud, D[T])
    }), (0, r.jsx)("img", {
      src: j,
      alt: "",
      className: a()(D.wumpus, D[T])
    })]
  });
  return (0, r.jsxs)(u.$1m, {
    color: "nitro-pink",
    className: a()(D.card, l, {
      [D.withGiftBanner]: g
    }),
    children: [(0, r.jsx)(K, {}), (0, r.jsx)(S.E, {
      text: null != W ? W : w.intl.string(w.t["6bEcYm"]),
      className: D.pill
    }), (0, r.jsx)(E.Z, {
      className: D.wordmark,
      color: Y ? "black" : "white"
    }), (0, r.jsx)(N.Z, {
      isGift: f,
      premiumTier: P.p9.TIER_2,
      offerType: H,
      offerTierMatchesCard: B === P.Si.TIER_2 || (0, O.Wp)(F, P.Si.TIER_2),
      showYearlyPrice: i,
      priceOptions: p,
      enablePremiumBrandRefresh: true,
      headingVariant: "text-md/medium",
      headingColor: "text-primary",
      headerClassName: D.priceHeader
    }), (0, r.jsx)("hr", {
      className: D.divider
    }), (0, r.jsx)(C.nT, {
      featureSet: o,
      isModal: _,
      isGift: f,
      enablePremiumBrandRefresh: true,
      isApplicationHome: M,
      firstFeatureItemClassName: "inCard" === T ? D.firstFeatureItemContainer : true
    }), n, g && (0, r.jsx)(y.f, {}), !f && I && (0, r.jsx)(R.g, {})]
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
    children: _ ? h : (0, r.jsx)(I.Z, {
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
  } = (0, p.ZP)(_.Z.PREMIUM_MARKETING_TIER_CARD), l = (0, C.rS)(t), c = (0, s.e7)([f.Z], () => f.Z.useReducedMotion);
  return (0, r.jsx)(p.Gt, {
    value: i,
    children: (0, r.jsxs)("div", {
      className: a()(D.premiumCardsContainer, n),
      children: [(0, r.jsx)(o.X, {
        variant: "display-md",
        color: "header-primary",
        className: D.premiumCardsHeader,
        children: w.intl.string(w.t.vLz3Zm)
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