/** Chunk was on web.js **/
/** chunk id: 744129, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  IL: () => B,
  UQ: () => G,
  rz: () => F
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
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk518520 = require("./518520.js"),
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

function j(e) {
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

function k(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function U(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : k(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function G(e) {
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
    className: a()(w.card, w.tier0, o, {
      [w.pillMargin]: !f && I
    }),
    children: [I && (0, r.jsx)(S.E, {
      text: O,
      className: w.pill
    }), (0, r.jsx)(g.Z, {
      className: w.wordmark,
      color: T ? "black" : "white"
    }), (0, r.jsx)(N.Z, {
      isGift: l,
      premiumTier: R.PremiumTypes.TIER_0,
      offerType: R.C.PREMIUM_TRIAL,
      offerTierMatchesCard: b === R.Si.TIER_0,
      showYearlyPrice: i,
      priceOptions: u,
      enablePremiumBrandRefresh: true,
      headingVariant: "text-md/medium",
      headingColor: "text-primary",
      headerClassName: w.priceHeader
    }), (0, r.jsx)("hr", {
      className: w.divider
    }), (0, r.jsx)(C.ql, {
      enablePremiumBrandRefresh: true,
      isApplicationHome: f
    }), n]
  })
}

function B(e) {
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
    wumpusPosition: I = "inCard",
    isApplicationHome: T = false
  } = e, M = (0, s.e7)([m.Z], () => m.Z.getPremiumTypeSubscription()), j = (0, s.e7)([h.default], () => h.default.getCurrentUser()), k = (0, v.N)(), U = null == k || null == (t = k.subscription_trial) ? true : t.sku_id, G = (null == M ? true : M.hasActiveTrial) ? null == j ? true : j.premiumType : null, B = (0, O.Ng)(), Z = (0, b.t7)(), F = null != U || null != G ? R.C.PREMIUM_TRIAL : null != B || Z ? R.C.PREMIUM_DISCOUNT : null, V = (0, c.ap)((0, d.ZP)()), H = (0, A.A1)(Z, G, B, k, U), Y = () => (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("img", {
      src: L,
      alt: "",
      className: a()(w.bigCloud, w[I])
    }), (0, r.jsx)("img", {
      src: D,
      alt: "",
      className: a()(w.smallCloud, w[I])
    }), (0, r.jsx)("img", {
      src: x,
      alt: "",
      className: a()(w.wumpus, w[I])
    })]
  });
  return (0, r.jsxs)(u.$1m, {
    color: "nitro-pink",
    className: a()(w.card, l, {
      [w.withGiftBanner]: g
    }),
    children: [(0, r.jsx)(Y, {}), (0, r.jsx)(S.E, {
      text: null != H ? H : P.intl.string(P.t["6bEcYm"]),
      className: w.pill
    }), (0, r.jsx)(E.Z, {
      className: w.wordmark,
      color: V ? "black" : "white"
    }), (0, r.jsx)(N.Z, {
      isGift: f,
      premiumTier: R.PremiumTypes.TIER_2,
      offerType: F,
      offerTierMatchesCard: U === R.Si.TIER_2 || (0, O.Wp)(B, R.Si.TIER_2),
      showYearlyPrice: i,
      priceOptions: p,
      enablePremiumBrandRefresh: true,
      headingVariant: "text-md/medium",
      headingColor: "text-primary",
      headerClassName: w.priceHeader
    }), (0, r.jsx)("hr", {
      className: w.divider
    }), (0, r.jsx)(C.nT, {
      featureSet: o,
      isModal: _,
      isGift: f,
      enablePremiumBrandRefresh: true,
      isApplicationHome: T,
      firstFeatureItemClassName: "inCard" === I ? w.firstFeatureItemContainer : true
    }), n, g && (0, r.jsx)(y.f, {})]
  })
}
let Z = e => {
  let {
    subscriptionTier: t,
    isReducedMotion: n,
    tierCardProps: i,
    className: o
  } = e, s = t === R.Si.TIER_2, c = s ? B : G, {
    subscribeButtonProps: d,
    subscriptionTier: f
  } = (0, T.G)({
    subscriptionTier: t,
    variantOverride: s ? "expressive" : "secondary"
  }), {
    disabled: _
  } = d, p = (0, r.jsx)("div", {
    className: w.CTAButton,
    children: (0, r.jsx)(l.zxk, U(j({
      size: "md",
      fullWidth: true
    }, d), {
      disabled: _
    }))
  }), h = (0, r.jsx)("div", {
    className: a()({
      [w.premiumCardHover]: !n
    }),
    children: (0, r.jsx)(c, j({
      className: w.applicationHomeCard,
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

function F(e) {
  let {
    innerRef: t,
    className: n
  } = e, {
    analyticsLocations: i
  } = (0, p.ZP)(_.Z.PREMIUM_MARKETING_TIER_CARD), l = (0, C.rS)(t), c = (0, s.e7)([f.Z], () => f.Z.useReducedMotion);
  return (0, r.jsx)(p.Gt, {
    value: i,
    children: (0, r.jsxs)("div", {
      className: a()(w.premiumCardsContainer, n),
      children: [(0, r.jsx)(o.X, {
        variant: "display-md",
        color: "header-primary",
        className: w.premiumCardsHeader,
        children: P.intl.string(P.t.vLz3Zm)
      }), (0, r.jsxs)("div", {
        ref: l,
        className: w.premiumCards,
        children: [(0, r.jsx)(Z, {
          subscriptionTier: R.Si.TIER_0,
          isReducedMotion: c,
          className: w.tier0CardOrder
        }), (0, r.jsx)(Z, {
          subscriptionTier: R.Si.TIER_2,
          isReducedMotion: c,
          className: w.tier2CardOrder,
          tierCardProps: {
            wumpusPosition: "inCorner"
          }
        })]
      })]
    })
  })
}