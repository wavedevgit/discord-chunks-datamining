/** Chunk was on 66181 **/
/** chunk id: 744129, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  IL: () => B,
  UQ: () => L,
  rz: () => U
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
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

function k(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      var i;
      i = n[t], t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = i
    })
  }
  return e
}

function L(e) {
  var t;
  let {
    ctaButton: n,
    showYearlyPrice: r,
    className: a,
    isGift: o = false,
    priceOptions: c,
    isApplicationHome: u = false
  } = e, p = (0, l.e7)([b.Z], () => b.Z.getPremiumTypeSubscription()), g = (0, l.e7)([f.default], () => f.default.getCurrentUser()), h = (0, O.N)(), _ = null == h || null == (t = h.subscription_trial) ? true : t.sku_id, j = (null == p ? true : p.hasActiveTrial) ? null == g ? true : g.premiumType : null, E = (0, N.y_)(j, _), C = null != E, v = (0, d.ap)((0, m.ZP)());
  return (0, i.jsxs)("div", {
    className: s()(R.card, R.tier0, a, {
      [R.pillMargin]: !u && C
    }),
    children: [C && (0, i.jsx)(T.E, {
      text: E,
      className: R.pill
    }), (0, i.jsx)(x.Z, {
      className: R.wordmark,
      color: v ? "black" : "white"
    }), (0, i.jsx)(y.Z, {
      isGift: o,
      premiumTier: A.p9.TIER_0,
      offerType: A.C.PREMIUM_TRIAL,
      offerTierMatchesCard: _ === A.Si.TIER_0,
      showYearlyPrice: r,
      priceOptions: c,
      enablePremiumBrandRefresh: true,
      headingVariant: "text-md/medium",
      headingColor: "text-primary",
      headerClassName: R.priceHeader
    }), (0, i.jsx)("hr", {
      className: R.divider
    }), (0, i.jsx)(I.ql, {
      enablePremiumBrandRefresh: true,
      isApplicationHome: u
    }), n]
  })
}

function B(e) {
  var t;
  let {
    ctaButton: n,
    showYearlyPrice: r,
    featureSet: a = I.uZ.DEFAULT,
    className: o,
    isGift: u = false,
    isModal: p = false,
    priceOptions: g,
    showPromotionalGiftBanner: h = false,
    wumpusPosition: x = "inCard",
    isApplicationHome: v = false
  } = e, S = (0, l.e7)([b.Z], () => b.Z.getPremiumTypeSubscription()), k = (0, l.e7)([f.default], () => f.default.getCurrentUser()), L = (0, O.N)(), B = null == L || null == (t = L.subscription_trial) ? true : t.sku_id, M = (null == S ? true : S.hasActiveTrial) ? null == k ? true : k.premiumType : null, U = (0, C.Ng)(), V = (0, j.t7)(), G = null != B || null != M ? A.C.PREMIUM_TRIAL : null != U || V ? A.C.PREMIUM_DISCOUNT : null, F = (0, d.ap)((0, m.ZP)()), H = (0, N.A1)(V, M, U, L, B);
  return (0, i.jsxs)(c.$, {
    color: "nitro-pink",
    className: s()(R.card, o, {
      [R.withGiftBanner]: h
    }),
    children: [(0, i.jsx)(() => (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)("img", {
        src: Z,
        alt: "",
        className: s()(R.bigCloud, R[x])
      }), (0, i.jsx)("img", {
        src: D,
        alt: "",
        className: s()(R.smallCloud, R[x])
      }), (0, i.jsx)("img", {
        src: w,
        alt: "",
        className: s()(R.wumpus, R[x])
      })]
    }), {}), (0, i.jsx)(T.E, {
      text: null != H ? H : P.intl.string(P.t["6bEcYm"]),
      className: R.pill
    }), (0, i.jsx)(_.Z, {
      className: R.wordmark,
      color: F ? "black" : "white"
    }), (0, i.jsx)(y.Z, {
      isGift: u,
      premiumTier: A.p9.TIER_2,
      offerType: G,
      offerTierMatchesCard: B === A.Si.TIER_2 || (0, C.Wp)(U, A.Si.TIER_2),
      showYearlyPrice: r,
      priceOptions: g,
      enablePremiumBrandRefresh: true,
      headingVariant: "text-md/medium",
      headingColor: "text-primary",
      headerClassName: R.priceHeader
    }), (0, i.jsx)("hr", {
      className: R.divider
    }), (0, i.jsx)(I.nT, {
      featureSet: a,
      isModal: p,
      isGift: u,
      enablePremiumBrandRefresh: true,
      isApplicationHome: v
    }), n, h && (0, i.jsx)(E.f, {})]
  })
}
let M = e => {
  var t, n;
  let {
    subscriptionTier: r,
    isReducedMotion: a,
    tierCardProps: l,
    className: c
  } = e, d = r === A.Si.TIER_2, {
    subscribeButtonProps: m,
    subscriptionTier: p
  } = (0, S.G)({
    subscriptionTier: r,
    variantOverride: d ? "expressive" : "secondary"
  }), {
    disabled: g
  } = m, h = (0, i.jsx)("div", {
    className: R.CTAButton,
    children: (0, i.jsx)(o.z, (t = k({
      size: "md",
      fullWidth: true
    }, m), n = n = {
      disabled: g
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        n.push.apply(n, i)
      }
      return n
    })(Object(n)).forEach(function(e) {
      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
    }), t))
  }), f = (0, i.jsx)("div", {
    className: s()({
      [R.premiumCardHover]: !a
    }),
    children: (0, i.jsx)(d ? B : L, k({
      className: R.applicationHomeCard,
      ctaButton: h,
      showYearlyPrice: true,
      isApplicationHome: true
    }, l))
  });
  return (0, i.jsx)("div", {
    className: c,
    children: g ? f : (0, i.jsx)(v.Z, {
      subscriptionTier: p,
      children: e => {
        let {
          onClick: t
        } = e;
        return (0, i.jsx)(u.P3F, {
          onClick: t,
          style: {
            cursor: "pointer"
          },
          children: f
        })
      }
    })
  })
};

function U(e) {
  let {
    innerRef: t,
    className: n
  } = e, {
    analyticsLocations: r
  } = (0, h.ZP)(g.Z.PREMIUM_MARKETING_TIER_CARD), o = (0, I.rS)(t), c = (0, l.e7)([p.Z], () => p.Z.useReducedMotion);
  return (0, i.jsx)(h.Gt, {
    value: r,
    children: (0, i.jsxs)("div", {
      className: s()(R.premiumCardsContainer, n),
      children: [(0, i.jsx)(a.X, {
        variant: "display-md",
        color: "header-primary",
        className: R.premiumCardsHeader,
        children: P.intl.string(P.t.vLz3Zm)
      }), (0, i.jsxs)("div", {
        ref: o,
        className: R.premiumCards,
        children: [(0, i.jsx)(M, {
          subscriptionTier: A.Si.TIER_0,
          isReducedMotion: c,
          className: R.tier0CardOrder
        }), (0, i.jsx)(M, {
          subscriptionTier: A.Si.TIER_2,
          isReducedMotion: c,
          className: R.tier2CardOrder,
          tierCardProps: {
            wumpusPosition: "inCorner"
          }
        })]
      })]
    })
  })
}