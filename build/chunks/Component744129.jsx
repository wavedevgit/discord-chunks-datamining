/** Chunk was on web.js **/
/** chunk id: 744129, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  IL: () => F,
  UQ: () => Z,
  rz: () => H
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk409794 = require("./409794.jsx"),
  Chunk442837 = require("./442837.js"),
  Chunk304789 = require("./304789.jsx"),
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
  Chunk518520 = require("./518520.js"),
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

function B(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : G(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function Z(e) {
  var t;
  let {
    ctaButton: n,
    showYearlyPrice: i,
    className: o,
    isGift: l = false,
    priceOptions: c,
    isApplicationHome: d = false
  } = e, _ = (0, s.e7)([g.Z], () => g.Z.getPremiumTypeSubscription()), p = (0, s.e7)([m.default], () => m.default.getCurrentUser()), h = (0, I.N)(), b = null == h || null == (t = h.subscription_trial) ? true : t.sku_id, y = (null == _ ? true : _.hasActiveTrial) ? null == p ? true : p.premiumType : null, O = (0, C.y_)(y, b), v = null != O, T = (0, u.ap)((0, f.ZP)());
  return (0, r.jsxs)("div", {
    className: a()(x.card, x.tier0, o, {
      [x.pillMargin]: !d && v
    }),
    children: [v && (0, r.jsx)(A.E, {
      text: O,
      className: x.pill
    }), (0, r.jsx)(E.Z, {
      className: x.wordmark,
      color: T ? "black" : "white"
    }), (0, r.jsx)(R.Z, {
      isGift: l,
      premiumTier: w.p9.TIER_0,
      offerType: w.C.PREMIUM_TRIAL,
      offerTierMatchesCard: b === w.Si.TIER_0,
      showYearlyPrice: i,
      priceOptions: c,
      enablePremiumBrandRefresh: true,
      headingVariant: "text-md/medium",
      headingColor: "text-primary",
      headerClassName: x.priceHeader
    }), (0, r.jsx)("hr", {
      className: x.divider
    }), (0, r.jsx)(N.ql, {
      enablePremiumBrandRefresh: true,
      isApplicationHome: d
    }), n]
  })
}

function F(e) {
  var t;
  let {
    ctaButton: n,
    showYearlyPrice: i,
    featureSet: o = N.uZ.DEFAULT,
    className: c,
    isGift: d = false,
    isModal: _ = false,
    priceOptions: p,
    showPromotionalGiftBanner: h = false,
    showSeptemberMarketingMomentBanner: E = false,
    wumpusPosition: T = "inCard",
    isApplicationHome: S = false
  } = e, k = (0, s.e7)([g.Z], () => g.Z.getPremiumTypeSubscription()), U = (0, s.e7)([m.default], () => m.default.getCurrentUser()), G = (0, I.N)(), B = null == G || null == (t = G.subscription_trial) ? true : t.sku_id, Z = (null == k ? true : k.hasActiveTrial) ? null == U ? true : U.premiumType : null, F = (0, v.Ng)(), V = (0, y.t7)(), H = null != B || null != Z ? w.C.PREMIUM_TRIAL : null != F || V ? w.C.PREMIUM_DISCOUNT : null, Y = (0, u.ap)((0, f.ZP)()), W = (0, C.A1)(V, Z, F, G, B), K = () => (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("img", {
      src: j,
      alt: "",
      className: a()(x.bigCloud, x[T])
    }), (0, r.jsx)("img", {
      src: L,
      alt: "",
      className: a()(x.smallCloud, x[T])
    }), (0, r.jsx)("img", {
      src: M,
      alt: "",
      className: a()(x.wumpus, x[T])
    })]
  });
  return (0, r.jsxs)(l.$, {
    color: "nitro-pink",
    className: a()(x.card, c, {
      [x.withGiftBanner]: h
    }),
    children: [(0, r.jsx)(K, {}), (0, r.jsx)(A.E, {
      text: null != W ? W : D.intl.string(D.t["6bEcYm"]),
      className: x.pill
    }), (0, r.jsx)(b.Z, {
      className: x.wordmark,
      color: Y ? "black" : "white"
    }), (0, r.jsx)(R.Z, {
      isGift: d,
      premiumTier: w.p9.TIER_2,
      offerType: H,
      offerTierMatchesCard: B === w.Si.TIER_2 || (0, v.Wp)(F, w.Si.TIER_2),
      showYearlyPrice: i,
      priceOptions: p,
      enablePremiumBrandRefresh: true,
      headingVariant: "text-md/medium",
      headingColor: "text-primary",
      headerClassName: x.priceHeader
    }), (0, r.jsx)("hr", {
      className: x.divider
    }), (0, r.jsx)(N.nT, {
      featureSet: o,
      isModal: _,
      isGift: d,
      enablePremiumBrandRefresh: true,
      isApplicationHome: S,
      firstFeatureItemClassName: "inCard" === T ? x.firstFeatureItemContainer : true
    }), n, h && (0, r.jsx)(O.f, {}), E && (0, r.jsx)(P.g, {})]
  })
}
let V = e => {
  let {
    subscriptionTier: t,
    isReducedMotion: n,
    tierCardProps: i,
    className: o
  } = e, s = t === w.Si.TIER_2, l = s ? F : Z, {
    subscribeButtonProps: u,
    subscriptionTier: f
  } = (0, S.G)({
    subscriptionTier: t,
    variantOverride: s ? "expressive" : "secondary"
  }), {
    disabled: _
  } = u, p = (0, r.jsx)("div", {
    className: x.CTAButton,
    children: (0, r.jsx)(c.zxk, B(U({
      size: "md",
      fullWidth: true
    }, u), {
      disabled: _
    }))
  }), h = (0, r.jsx)("div", {
    className: a()({
      [x.premiumCardHover]: !n
    }),
    children: (0, r.jsx)(l, U({
      className: x.applicationHomeCard,
      ctaButton: p,
      showYearlyPrice: true,
      isApplicationHome: true
    }, i))
  });
  return (0, r.jsx)("div", {
    className: o,
    children: _ ? h : (0, r.jsx)(T.Z, {
      subscriptionTier: f,
      children: e => {
        let {
          onClick: t
        } = e;
        return (0, r.jsx)(d.P3F, {
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

function H(e) {
  let {
    innerRef: t,
    className: n
  } = e, {
    analyticsLocations: i
  } = (0, h.ZP)(p.Z.PREMIUM_MARKETING_TIER_CARD), l = (0, N.rS)(t), c = (0, s.e7)([_.Z], () => _.Z.useReducedMotion);
  return (0, r.jsx)(h.Gt, {
    value: i,
    children: (0, r.jsxs)("div", {
      className: a()(x.premiumCardsContainer, n),
      children: [(0, r.jsx)(o.X, {
        variant: "display-md",
        color: "header-primary",
        className: x.premiumCardsHeader,
        children: D.intl.string(D.t.vLz3Zm)
      }), (0, r.jsxs)("div", {
        ref: l,
        className: x.premiumCards,
        children: [(0, r.jsx)(V, {
          subscriptionTier: w.Si.TIER_0,
          isReducedMotion: c,
          className: x.tier0CardOrder
        }), (0, r.jsx)(V, {
          subscriptionTier: w.Si.TIER_2,
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