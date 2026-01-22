/** Chunk was on web.js **/
/** chunk id: 407775, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  AP: () => B,
  KV: () => H,
  hy: () => z,
  r6: () => Y
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk534514 = require("./534514.jsx"),
  Chunk311907 = require("./311907.js"),
  Chunk732955 = require("./732955.js"),
  Chunk582754 = require("./582754.js"),
  Chunk397927 = require("./397927.js"),
  Chunk736653 = require("./736653.js"),
  Chunk775602 = require("./775602.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk287809 = require("./287809.js"),
  Chunk166403 = require("./166403.js"),
  Chunk526292 = require("./526292.js"),
  Chunk950806 = require("./950806.js"),
  Chunk932003 = require("./932003.jsx"),
  Chunk422936 = require("./422936.js"),
  Chunk234419 = require("./234419.js"),
  Chunk612669 = require("./612669.js"),
  Chunk783420 = require("./783420.jsx"),
  Chunk204413 = require("./204413.js"),
  Chunk511484 = require("./511484.js"),
  Chunk356309 = require("./356309.jsx"),
  Chunk257284 = require("./257284.jsx"),
  Chunk795269 = require("./795269.jsx"),
  Chunk501007 = require("./501007.jsx"),
  Chunk90526 = require("./90526.jsx"),
  Chunk788868 = require("./788868.js"),
  Chunk519412 = require("./519412.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk855135 = require("./855135.js"),
  Chunk232266 = require("./232266.js"),
  Chunk243002 = require("./243002.js"),
  Chunk241988 = require("./241988.js");

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

function V(e, t) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : V(Object(t)).forEach(function(n) {
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
  } = e, b = (0, o.bG)([m.A], () => m.A.getPremiumTypeSubscription()), y = (0, o.bG)([h.default], () => h.default.getCurrentUser()), A = (0, O.V)(), v = null == A || null == (t = A.subscription_trial) ? true : t.sku_id, S = (null == b ? true : b.hasActiveTrial) ? null == y ? true : y.premiumType : null, I = (0, N.Lj)(S, v), C = null != I, D = (0, c.qB)((0, d.Ay)()), j = (0, E.xD)({
    location: "PremiumBrandRefreshTierCards"
  }), M = g ? x.intl.string(x.t.tUbSDK) : x.intl.string(x.t["t9uG/o"]), k = (0, r.jsxs)(r.Fragment, {
    children: [C && (0, r.jsx)(T.D, {
      text: I,
      className: L.pill
    }), (0, r.jsx)(s.D, {
      variant: "display-md",
      color: D ? "text-strong" : "always-white",
      className: L.cardTitle,
      children: M
    }), (0, r.jsx)(w.A, {
      isGift: f,
      premiumTier: P.PremiumTypes.TIER_0,
      offerType: P.Vk.PREMIUM_TRIAL,
      offerTierMatchesCard: v === P.pe.TIER_0,
      showYearlyPrice: i,
      priceOptions: p,
      enablePremiumBrandRefresh: true,
      headingVariant: "text-md/medium",
      headingColor: "text-strong",
      headerClassName: L.priceHeader
    }), (0, r.jsx)("hr", {
      className: L.divider
    }), (0, r.jsx)(R.nH, {
      enablePremiumBrandRefresh: true,
      isApplicationHome: _
    }), n]
  });
  return j ? (0, r.jsx)(u.hLv, {
    color: "nitro-green",
    className: a()(L.card, L.tier0, l, {
      [L.pillMargin]: !_ && C
    }),
    children: k
  }) : (0, r.jsx)("div", {
    className: a()(L.card, L.tier0, l, {
      [L.pillMargin]: !_ && C
    }),
    children: k
  })
}

function H(e) {
  var t;
  let {
    ctaButton: n,
    showYearlyPrice: i,
    featureSet: l = R.Nz.DEFAULT,
    className: f,
    isGift: p = false,
    isModal: _ = false,
    priceOptions: E,
    showPromotionalGiftBanner: A = false,
    wumpusPosition: v = "inCard",
    isApplicationHome: S = false,
    showWumpus: C = true,
    showPill: D = true
  } = e, U = (0, o.bG)([m.A], () => m.A.getPremiumTypeSubscription()), G = (0, o.bG)([h.default], () => h.default.getCurrentUser()), V = (0, O.V)(), F = null == V || null == (t = V.subscription_trial) ? true : t.sku_id, B = (null == U ? true : U.hasActiveTrial) ? null == G ? true : G.premiumType : null, H = (0, y.O)(), Y = (0, g.k5)(), W = null != F || null != B ? P.Vk.PREMIUM_TRIAL : null != H || Y ? P.Vk.PREMIUM_DISCOUNT : null, K = (0, c.qB)((0, d.Ay)()), z = (0, N.rm)(Y, B, H, V, F), q = () => (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("img", {
      src: M,
      alt: "",
      className: a()(L.bigCloud, L[v])
    }), (0, r.jsx)("img", {
      src: j,
      alt: "",
      className: a()(L.smallCloud, L[v])
    }), (0, r.jsx)("img", {
      src: k,
      alt: "",
      className: a()(L.wumpus, L[v])
    })]
  });
  return (0, r.jsxs)(u.hLv, {
    color: "nitro-pink",
    className: a()(L.card, f, {
      [L.withGiftBanner]: A
    }),
    children: [C && (0, r.jsx)(q, {}), D && (0, r.jsx)(T.D, {
      text: null != z ? z : x.intl.string(x.t["6bEcYr"]),
      className: L.pill
    }), (0, r.jsx)(s.D, {
      variant: "display-md",
      color: K ? "text-strong" : "always-white",
      className: L.cardTitle,
      children: x.intl.string(x.t.lG6a5x)
    }), (0, r.jsx)(w.A, {
      isGift: p,
      premiumTier: P.PremiumTypes.TIER_2,
      offerType: W,
      offerTierMatchesCard: F === P.pe.TIER_2 || (0, I.U9)(H, P.pe.TIER_2),
      showYearlyPrice: i,
      priceOptions: E,
      enablePremiumBrandRefresh: true,
      headingVariant: "text-md/medium",
      headingColor: "text-strong",
      headerClassName: L.priceHeader
    }), (0, r.jsx)("hr", {
      className: L.divider
    }), (0, r.jsx)(R.ZP, {
      featureSet: l,
      isModal: _,
      isGift: p,
      enablePremiumBrandRefresh: true,
      isApplicationHome: S,
      firstFeatureItemClassName: "inCard" === v ? L.firstFeatureItemContainer : true
    }), n, A && (0, r.jsx)(b.b, {})]
  })
}

function Y(e) {
  let {
    className: t,
    ctaButton: n,
    isApplicationHome: i,
    priceOptions: o
  } = e, l = (0, c.qB)((0, d.Ay)());
  return (0, r.jsxs)("div", {
    className: a()(L.card, L.borderGradient, t),
    children: [(0, r.jsxs)("div", {
      className: L.cardHeader,
      children: [(0, r.jsx)(s.D, {
        variant: "display-md",
        color: l ? "text-strong" : "always-white",
        className: L.cardTitle,
        children: x.intl.string(D.default.eSKiXk)
      }), (0, r.jsx)(T.D, {
        text: x.intl.string(x.t.oW0eUd),
        className: L.betaPill
      })]
    }), (0, r.jsx)(C.A, {
      priceOptions: o
    }), (0, r.jsx)(s.D, {
      variant: "heading-md/semibold",
      color: "text-muted",
      children: x.intl.string(D.default["R+dzZw"])
    }), (0, r.jsx)("hr", {
      className: L.divider
    }), (0, r.jsx)(R.Lg, {
      isApplicationHome: i
    }), n]
  })
}
let W = e => {
    let {
      subscriptionTier: t,
      isReducedMotion: n,
      tierCardProps: i,
      className: s,
      narrowLayout: o
    } = e, c = t === P.pe.TIER_2, d = c ? H : B, {
      subscribeButtonProps: f,
      subscriptionTier: p
    } = (0, S.$)({
      subscriptionTier: t,
      variantOverride: c ? "expressive" : "secondary"
    }), {
      disabled: _
    } = f, h = (0, r.jsx)("div", {
      className: L.CTAButton,
      children: (0, r.jsx)(l.$nd, F(G({
        size: "md",
        fullWidth: true
      }, f), {
        disabled: _
      }))
    }), m = (0, r.jsx)("div", {
      className: a()({
        [L.premiumCardHover]: !n
      }),
      children: (0, r.jsx)(d, G({
        className: a()(L.applicationHomeCard, {
          [L.narrow]: o
        }),
        ctaButton: h,
        showYearlyPrice: true,
        isApplicationHome: true
      }, i))
    });
    return (0, r.jsx)("div", {
      className: s,
      children: _ ? m : (0, r.jsx)(v.A, {
        subscriptionTier: p,
        children: e => {
          let {
            onClick: t
          } = e;
          return (0, r.jsx)(u.DUT, {
            onClick: t,
            style: {
              cursor: "pointer"
            },
            children: m
          })
        }
      })
    })
  },
  K = e => {
    let {
      isReducedMotion: t,
      className: n
    } = e, i = (0, r.jsx)("div", {
      className: L.CTAButton,
      children: (0, r.jsx)(l.$nd, {
        size: "md",
        fullWidth: true,
        icon: u.tvc,
        text: x.intl.string(x.t["2pG5Ga"]),
        variant: "secondary"
      })
    }), s = (0, r.jsx)("div", {
      className: a()({
        [L.premiumCardHover]: !t
      }),
      children: (0, r.jsx)(Y, {
        className: a()(L.applicationHomeCard, L.narrow),
        ctaButton: i,
        isApplicationHome: true
      })
    });
    return (0, r.jsx)(v.A, {
      subscriptionTier: P.pe.TIER_2,
      initialPlanId: P.gD.PREMIUM_GROUP_MONTH,
      children: e => {
        let {
          onClick: t
        } = e;
        return (0, r.jsx)("div", {
          className: n,
          children: (0, r.jsx)(u.DUT, {
            onClick: t,
            style: {
              cursor: "pointer"
            },
            children: s
          })
        })
      }
    })
  };

function z(e) {
  let {
    innerRef: t,
    className: n
  } = e, {
    analyticsLocations: i
  } = (0, _.Ay)(p.A.PREMIUM_MARKETING_TIER_CARD), l = (0, R.pw)(t), c = (0, o.bG)([f.A], () => f.A.useReducedMotion), u = (0, A.PA)();
  return (0, r.jsx)(_.f5, {
    value: i,
    children: (0, r.jsxs)("div", {
      className: a()(L.premiumCardsContainer, n),
      children: [(0, r.jsx)(s.D, {
        variant: "display-md",
        color: "text-strong",
        className: L.premiumCardsHeader,
        children: x.intl.string(x.t.vLz3Zs)
      }), (0, r.jsxs)("div", {
        ref: l,
        className: L.premiumCards,
        children: [(0, r.jsx)(W, {
          subscriptionTier: P.pe.TIER_0,
          isReducedMotion: c,
          className: L.tier0CardOrder,
          narrowLayout: u
        }), (0, r.jsx)(W, {
          subscriptionTier: P.pe.TIER_2,
          isReducedMotion: c,
          className: L.tier2CardOrder,
          tierCardProps: {
            wumpusPosition: u ? "insideCorner" : "outerCorner",
            showPill: !u
          },
          narrowLayout: u
        }), u && (0, r.jsx)(K, {
          isReducedMotion: c,
          className: L.premiumGroupCardOrder
        })]
      })]
    })
  })
}