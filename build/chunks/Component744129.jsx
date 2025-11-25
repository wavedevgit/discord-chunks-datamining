/** Chunk was on web.js **/
/** chunk id: 744129, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  IL: () => F,
  UQ: () => Z,
  rz: () => H
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
  Chunk756896 = require("./756896.jsx"),
  Chunk589072 = require("./589072.jsx"),
  Chunk140465 = require("./140465.js"),
  Chunk998030 = require("./998030.js"),
  Chunk474706 = require("./474706.jsx"),
  Chunk622909 = require("./622909.js"),
  Chunk639119 = require("./639119.js"),
  Chunk648613 = require("./648613.jsx"),
  Chunk38273 = require("./38273.js"),
  Chunk230916 = require("./230916.js"),
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

function U(e) {
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
    priceOptions: f,
    isApplicationHome: _ = false
  } = e, p = (0, s.e7)([m.Z], () => m.Z.getPremiumTypeSubscription()), E = (0, s.e7)([h.default], () => h.default.getCurrentUser()), b = (0, I.N)(), O = null == b || null == (t = b.subscription_trial) ? true : t.sku_id, v = (null == p ? true : p.hasActiveTrial) ? null == E ? true : E.premiumType : null, T = (0, N.y_)(v, O), S = null != T, A = (0, c.ap)((0, d.ZP)()), w = (0, y.yc)({
    location: "PremiumBrandRefreshTierCards"
  }), x = (0, r.jsxs)(r.Fragment, {
    children: [S && (0, r.jsx)(C.E, {
      text: T,
      className: L.pill
    }), (0, r.jsx)(g.Z, {
      className: L.wordmark,
      color: A ? "black" : "white"
    }), (0, r.jsx)(P.Z, {
      isGift: l,
      premiumTier: D.PremiumTypes.TIER_0,
      offerType: D.C.PREMIUM_TRIAL,
      offerTierMatchesCard: O === D.Si.TIER_0,
      showYearlyPrice: i,
      priceOptions: f,
      enablePremiumBrandRefresh: true,
      headingVariant: "text-md/medium",
      headingColor: "text-primary",
      headerClassName: L.priceHeader
    }), (0, r.jsx)("hr", {
      className: L.divider
    }), (0, r.jsx)(R.ql, {
      enablePremiumBrandRefresh: true,
      isApplicationHome: _
    }), n]
  });
  return w ? (0, r.jsx)(u.$1m, {
    color: "nitro-green",
    className: a()(L.card, L.tier0, o, {
      [L.pillMargin]: !_ && S
    }),
    children: x
  }) : (0, r.jsx)("div", {
    className: a()(L.card, L.tier0, o, {
      [L.pillMargin]: !_ && S
    }),
    children: x
  })
}

function F(e) {
  var t;
  let {
    ctaButton: n,
    showYearlyPrice: i,
    featureSet: o = R.uZ.DEFAULT,
    className: l,
    isGift: f = false,
    isModal: _ = false,
    priceOptions: p,
    showPromotionalGiftBanner: g = false,
    wumpusPosition: y = "inCard",
    isApplicationHome: T = false
  } = e, S = (0, s.e7)([m.Z], () => m.Z.getPremiumTypeSubscription()), j = (0, s.e7)([h.default], () => h.default.getCurrentUser()), U = (0, I.N)(), G = null == U || null == (t = U.subscription_trial) ? true : t.sku_id, B = (null == S ? true : S.hasActiveTrial) ? null == j ? true : j.premiumType : null, Z = (0, v.N)(), F = (0, b.t7)(), V = null != G || null != B ? D.C.PREMIUM_TRIAL : null != Z || F ? D.C.PREMIUM_DISCOUNT : null, H = (0, c.ap)((0, d.ZP)()), Y = (0, N.A1)(F, B, Z, U, G), W = () => (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("img", {
      src: M,
      alt: "",
      className: a()(L.bigCloud, L[y])
    }), (0, r.jsx)("img", {
      src: x,
      alt: "",
      className: a()(L.smallCloud, L[y])
    }), (0, r.jsx)("img", {
      src: k,
      alt: "",
      className: a()(L.wumpus, L[y])
    })]
  });
  return (0, r.jsxs)(u.$1m, {
    color: "nitro-pink",
    className: a()(L.card, l, {
      [L.withGiftBanner]: g
    }),
    children: [(0, r.jsx)(W, {}), (0, r.jsx)(C.E, {
      text: null != Y ? Y : w.intl.string(w.t["6bEcYr"]),
      className: L.pill
    }), (0, r.jsx)(E.Z, {
      className: L.wordmark,
      color: H ? "black" : "white"
    }), (0, r.jsx)(P.Z, {
      isGift: f,
      premiumTier: D.PremiumTypes.TIER_2,
      offerType: V,
      offerTierMatchesCard: G === D.Si.TIER_2 || (0, A.Wp)(Z, D.Si.TIER_2),
      showYearlyPrice: i,
      priceOptions: p,
      enablePremiumBrandRefresh: true,
      headingVariant: "text-md/medium",
      headingColor: "text-primary",
      headerClassName: L.priceHeader
    }), (0, r.jsx)("hr", {
      className: L.divider
    }), (0, r.jsx)(R.nT, {
      featureSet: o,
      isModal: _,
      isGift: f,
      enablePremiumBrandRefresh: true,
      isApplicationHome: T,
      firstFeatureItemClassName: "inCard" === y ? L.firstFeatureItemContainer : true
    }), n, g && (0, r.jsx)(O.f, {})]
  })
}
let V = e => {
  let {
    subscriptionTier: t,
    isReducedMotion: n,
    tierCardProps: i,
    className: o
  } = e, s = t === D.Si.TIER_2, c = s ? F : Z, {
    subscribeButtonProps: d,
    subscriptionTier: f
  } = (0, S.G)({
    subscriptionTier: t,
    variantOverride: s ? "expressive" : "secondary"
  }), {
    disabled: _
  } = d, p = (0, r.jsx)("div", {
    className: L.CTAButton,
    children: (0, r.jsx)(l.zxk, B(U({
      size: "md",
      fullWidth: true
    }, d), {
      disabled: _
    }))
  }), h = (0, r.jsx)("div", {
    className: a()({
      [L.premiumCardHover]: !n
    }),
    children: (0, r.jsx)(c, U({
      className: L.applicationHomeCard,
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

function H(e) {
  let {
    innerRef: t,
    className: n
  } = e, {
    analyticsLocations: i
  } = (0, p.ZP)(_.Z.PREMIUM_MARKETING_TIER_CARD), l = (0, R.rS)(t), c = (0, s.e7)([f.Z], () => f.Z.useReducedMotion);
  return (0, r.jsx)(p.Gt, {
    value: i,
    children: (0, r.jsxs)("div", {
      className: a()(L.premiumCardsContainer, n),
      children: [(0, r.jsx)(o.X, {
        variant: "display-md",
        color: "header-primary",
        className: L.premiumCardsHeader,
        children: w.intl.string(w.t.vLz3Zs)
      }), (0, r.jsxs)("div", {
        ref: l,
        className: L.premiumCards,
        children: [(0, r.jsx)(V, {
          subscriptionTier: D.Si.TIER_0,
          isReducedMotion: c,
          className: L.tier0CardOrder
        }), (0, r.jsx)(V, {
          subscriptionTier: D.Si.TIER_2,
          isReducedMotion: c,
          className: L.tier2CardOrder,
          tierCardProps: {
            wumpusPosition: "inCorner"
          }
        })]
      })]
    })
  })
}