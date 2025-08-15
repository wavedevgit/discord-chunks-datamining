/** Chunk was on 54433 **/
/** chunk id: 744129, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  IL: () => k,
  UQ: () => U,
  rz: () => H
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
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

function N(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = null != arguments[n] ? arguments[n] : {},
      i = Object.keys(t);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
      return Object.getOwnPropertyDescriptor(t, e).enumerable
    }))), i.forEach(function(n) {
      var i;
      i = t[n], n in e ? Object.defineProperty(e, n, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[n] = i
    })
  }
  return e
}

function U(e) {
  var n;
  let {
    ctaButton: t,
    showYearlyPrice: r,
    className: s,
    isGift: o = false,
    priceOptions: C,
    isApplicationHome: c = false
  } = e, p = (0, a.e7)([f.Z], () => f.Z.getPremiumTypeSubscription()), x = (0, a.e7)([j.default], () => j.default.getCurrentUser()), h = (0, E.N)(), _ = null == h || null == (n = h.subscription_trial) ? true : n.sku_id, L = (null == p ? true : p.hasActiveTrial) ? null == x ? true : x.premiumType : null, g = (0, O.y_)(L, _), y = null != g, S = (0, d.ap)((0, u.ZP)());
  return (0, i.jsxs)("div", {
    className: l()(T.card, T.tier0, s, {
      [T.pillMargin]: !c && y
    }),
    children: [y && (0, i.jsx)(P.E, {
      text: g,
      className: T.pill
    }), (0, i.jsx)(m.Z, {
      className: T.wordmark,
      color: S ? "black" : "white"
    }), (0, i.jsx)(Z.Z, {
      isGift: o,
      premiumTier: I.p9.TIER_0,
      offerType: I.C.PREMIUM_TRIAL,
      offerTierMatchesCard: _ === I.Si.TIER_0,
      showYearlyPrice: r,
      priceOptions: C,
      enablePremiumBrandRefresh: true,
      headingVariant: "text-md/medium",
      headingColor: "text-primary",
      headerClassName: T.priceHeader
    }), (0, i.jsx)("hr", {
      className: T.divider
    }), (0, i.jsx)(b.ql, {
      enablePremiumBrandRefresh: true,
      isApplicationHome: c
    }), t]
  })
}

function k(e) {
  var n;
  let {
    ctaButton: t,
    showYearlyPrice: r,
    featureSet: s = b.uZ.DEFAULT,
    className: o,
    isGift: c = false,
    isModal: p = false,
    priceOptions: x,
    showPromotionalGiftBanner: h = false,
    wumpusPosition: m = "inCard",
    isApplicationHome: S = false
  } = e, v = (0, a.e7)([f.Z], () => f.Z.getPremiumTypeSubscription()), N = (0, a.e7)([j.default], () => j.default.getCurrentUser()), U = (0, E.N)(), k = null == U || null == (n = U.subscription_trial) ? true : n.sku_id, B = (null == v ? true : v.hasActiveTrial) ? null == N ? true : N.premiumType : null, H = (0, y.Ng)(), F = (0, L.t7)(), G = null != k || null != B ? I.C.PREMIUM_TRIAL : null != H || F ? I.C.PREMIUM_DISCOUNT : null, D = (0, d.ap)((0, u.ZP)()), z = (0, O.A1)(F, B, H, U, k);
  return (0, i.jsxs)(C.$, {
    color: "nitro-pink",
    className: l()(T.card, o),
    children: [(0, i.jsx)(() => (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)("img", {
        src: A,
        alt: "",
        className: l()(T.bigCloud, T[m])
      }), (0, i.jsx)("img", {
        src: w,
        alt: "",
        className: l()(T.smallCloud, T[m])
      }), (0, i.jsx)("img", {
        src: R,
        alt: "",
        className: l()(T.wumpus, T[m])
      })]
    }), {}), (0, i.jsx)(P.E, {
      text: null != z ? z : M.intl.string(M.t["6bEcYm"]),
      className: T.pill
    }), (0, i.jsx)(_.Z, {
      className: T.wordmark,
      color: D ? "black" : "white"
    }), (0, i.jsx)(Z.Z, {
      isGift: c,
      premiumTier: I.p9.TIER_2,
      offerType: G,
      offerTierMatchesCard: k === I.Si.TIER_2 || (0, y.Wp)(H, I.Si.TIER_2),
      showYearlyPrice: r,
      priceOptions: x,
      enablePremiumBrandRefresh: true,
      headingVariant: "text-md/medium",
      headingColor: "text-primary",
      headerClassName: T.priceHeader
    }), (0, i.jsx)("hr", {
      className: T.divider
    }), (0, i.jsx)(b.nT, {
      featureSet: s,
      isModal: p,
      isGift: c,
      enablePremiumBrandRefresh: true,
      isApplicationHome: S
    }), t, h && (0, i.jsx)(g.f, {})]
  })
}
let B = e => {
  var n, t;
  let {
    subscriptionTier: r,
    isReducedMotion: s,
    tierCardProps: a,
    className: C
  } = e, d = r === I.Si.TIER_2, {
    subscribeButtonProps: u,
    subscriptionTier: p
  } = (0, v.G)({
    subscriptionTier: r,
    variantOverride: d ? "expressive" : "secondary"
  }), {
    disabled: x
  } = u, h = (0, i.jsx)("div", {
    className: T.CTAButton,
    children: (0, i.jsx)(o.z, (n = N({
      size: "md",
      fullWidth: true
    }, u), t = t = {
      disabled: x
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : (function(e, n) {
      var t = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        t.push.apply(t, i)
      }
      return t
    })(Object(t)).forEach(function(e) {
      Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(t, e))
    }), n))
  }), j = (0, i.jsx)("div", {
    className: l()({
      [T.premiumCardHover]: !s
    }),
    children: (0, i.jsx)(d ? k : U, N({
      className: T.applicationHomeCard,
      ctaButton: h,
      showYearlyPrice: true,
      isApplicationHome: true
    }, a))
  });
  return (0, i.jsx)("div", {
    className: C,
    children: x ? j : (0, i.jsx)(S.Z, {
      subscriptionTier: p,
      children: e => {
        let {
          onClick: n
        } = e;
        return (0, i.jsx)(c.P3F, {
          onClick: n,
          style: {
            cursor: "pointer"
          },
          children: j
        })
      }
    })
  })
};

function H(e) {
  let {
    innerRef: n,
    className: t
  } = e, {
    analyticsLocations: r
  } = (0, h.ZP)(x.Z.PREMIUM_MARKETING_TIER_CARD), o = (0, b.rS)(n), C = (0, a.e7)([p.Z], () => p.Z.useReducedMotion);
  return (0, i.jsx)(h.Gt, {
    value: r,
    children: (0, i.jsxs)("div", {
      className: l()(T.premiumCardsContainer, t),
      children: [(0, i.jsx)(s.X, {
        variant: "display-md",
        color: "header-primary",
        className: T.premiumCardsHeader,
        children: M.intl.string(M.t.vLz3Zm)
      }), (0, i.jsxs)("div", {
        ref: o,
        className: T.premiumCards,
        children: [(0, i.jsx)(B, {
          subscriptionTier: I.Si.TIER_0,
          isReducedMotion: C,
          className: T.tier0CardOrder
        }), (0, i.jsx)(B, {
          subscriptionTier: I.Si.TIER_2,
          isReducedMotion: C,
          className: T.tier2CardOrder,
          tierCardProps: {
            wumpusPosition: "inCorner"
          }
        })]
      })]
    })
  })
}