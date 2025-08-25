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
  o = require.n(Chunk120356),
  Chunk409794 = require("./409794.jsx"),
  Chunk442837 = require("./442837.js"),
  Chunk680018 = require("./680018.jsx"),
  Chunk304789 = require("./304789.jsx"),
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

function M(e) {
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
    className: a,
    isGift: l = false,
    priceOptions: c,
    isApplicationHome: d = false
  } = e, _ = (0, s.e7)([g.Z], () => g.Z.getPremiumTypeSubscription()), p = (0, s.e7)([m.default], () => m.default.getCurrentUser()), h = (0, I.N)(), b = null == h || null == (t = h.subscription_trial) ? true : t.sku_id, y = (null == _ ? true : _.hasActiveTrial) ? null == p ? true : p.premiumType : null, O = (0, C.y_)(y, b), v = null != O, T = (0, u.ap)((0, f.ZP)());
  return (0, r.jsxs)("div", {
    className: o()(D.card, D.tier0, a, {
      [D.pillMargin]: !d && v
    }),
    children: [v && (0, r.jsx)(A.E, {
      text: O,
      className: D.pill
    }), (0, r.jsx)(E.Z, {
      className: D.wordmark,
      color: T ? "black" : "white"
    }), (0, r.jsx)(R.Z, {
      isGift: l,
      premiumTier: P.p9.TIER_0,
      offerType: P.C.PREMIUM_TRIAL,
      offerTierMatchesCard: b === P.Si.TIER_0,
      showYearlyPrice: i,
      priceOptions: c,
      enablePremiumBrandRefresh: true,
      headingVariant: "text-md/medium",
      headingColor: "text-primary",
      headerClassName: D.priceHeader
    }), (0, r.jsx)("hr", {
      className: D.divider
    }), (0, r.jsx)(N.ql, {
      enablePremiumBrandRefresh: true,
      isApplicationHome: d
    }), n]
  })
}

function Z(e) {
  var t;
  let {
    ctaButton: n,
    showYearlyPrice: i,
    featureSet: a = N.uZ.DEFAULT,
    className: l,
    isGift: d = false,
    isModal: _ = false,
    priceOptions: p,
    showPromotionalGiftBanner: h = false,
    wumpusPosition: E = "inCard",
    isApplicationHome: T = false
  } = e, S = (0, s.e7)([g.Z], () => g.Z.getPremiumTypeSubscription()), k = (0, s.e7)([m.default], () => m.default.getCurrentUser()), M = (0, I.N)(), U = null == M || null == (t = M.subscription_trial) ? true : t.sku_id, G = (null == S ? true : S.hasActiveTrial) ? null == k ? true : k.premiumType : null, B = (0, v.Ng)(), Z = (0, y.t7)(), F = null != U || null != G ? P.C.PREMIUM_TRIAL : null != B || Z ? P.C.PREMIUM_DISCOUNT : null, V = (0, u.ap)((0, f.ZP)()), H = (0, C.A1)(Z, G, B, M, U), Y = () => (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("img", {
      src: L,
      alt: "",
      className: o()(D.bigCloud, D[E])
    }), (0, r.jsx)("img", {
      src: x,
      alt: "",
      className: o()(D.smallCloud, D[E])
    }), (0, r.jsx)("img", {
      src: j,
      alt: "",
      className: o()(D.wumpus, D[E])
    })]
  });
  return (0, r.jsxs)(c.$, {
    color: "nitro-pink",
    className: o()(D.card, l, {
      [D.withGiftBanner]: h
    }),
    children: [(0, r.jsx)(Y, {}), (0, r.jsx)(A.E, {
      text: null != H ? H : w.intl.string(w.t["6bEcYm"]),
      className: D.pill
    }), (0, r.jsx)(b.Z, {
      className: D.wordmark,
      color: V ? "black" : "white"
    }), (0, r.jsx)(R.Z, {
      isGift: d,
      premiumTier: P.p9.TIER_2,
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
      featureSet: a,
      isModal: _,
      isGift: d,
      enablePremiumBrandRefresh: true,
      isApplicationHome: T,
      firstFeatureItemClassName: "inCard" === E ? D.firstFeatureItemContainer : true
    }), n, h && (0, r.jsx)(O.f, {})]
  })
}
let F = e => {
  let {
    subscriptionTier: t,
    isReducedMotion: n,
    tierCardProps: i,
    className: a
  } = e, s = t === P.Si.TIER_2, c = s ? Z : B, {
    subscribeButtonProps: u,
    subscriptionTier: f
  } = (0, S.G)({
    subscriptionTier: t,
    variantOverride: s ? "expressive" : "secondary"
  }), {
    disabled: _
  } = u, p = (0, r.jsx)("div", {
    className: D.CTAButton,
    children: (0, r.jsx)(l.z, G(M({
      size: "md",
      fullWidth: true
    }, u), {
      disabled: _
    }))
  }), h = (0, r.jsx)("div", {
    className: o()({
      [D.premiumCardHover]: !n
    }),
    children: (0, r.jsx)(c, M({
      className: D.applicationHomeCard,
      ctaButton: p,
      showYearlyPrice: true,
      isApplicationHome: true
    }, i))
  });
  return (0, r.jsx)("div", {
    className: a,
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

function V(e) {
  let {
    innerRef: t,
    className: n
  } = e, {
    analyticsLocations: i
  } = (0, h.ZP)(p.Z.PREMIUM_MARKETING_TIER_CARD), l = (0, N.rS)(t), c = (0, s.e7)([_.Z], () => _.Z.useReducedMotion);
  return (0, r.jsx)(h.Gt, {
    value: i,
    children: (0, r.jsxs)("div", {
      className: o()(D.premiumCardsContainer, n),
      children: [(0, r.jsx)(a.X, {
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