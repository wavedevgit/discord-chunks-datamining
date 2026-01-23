/** Chunk was on web.js **/
/** chunk id: 407775, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  AP: () => F,
  KV: () => B,
  hy: () => K,
  r6: () => H
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

function V(e, t) {
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
  } = e, E = (0, o.bG)([m.A], () => m.A.getPremiumTypeSubscription()), y = (0, o.bG)([h.default], () => h.default.getCurrentUser()), O = (0, b.V)(), v = null == O || null == (t = O.subscription_trial) ? true : t.sku_id, A = (null == E ? true : E.hasActiveTrial) ? null == y ? true : y.premiumType : null, I = (0, C.Lj)(A, v), T = null != I, P = (0, c.qB)((0, d.Ay)()), L = g ? D.intl.string(D.t.tUbSDK) : D.intl.string(D.t["t9uG/o"]), j = (0, r.jsxs)(r.Fragment, {
    children: [T && (0, r.jsx)(S.D, {
      text: I,
      className: x.pill
    }), (0, r.jsx)(s.D, {
      variant: "display-md",
      color: P ? "text-strong" : "always-white",
      className: x.cardTitle,
      children: L
    }), (0, r.jsx)(w.A, {
      isGift: f,
      premiumTier: R.PremiumTypes.TIER_0,
      offerType: R.Vk.PREMIUM_TRIAL,
      offerTierMatchesCard: v === R.pe.TIER_0,
      showYearlyPrice: i,
      priceOptions: p,
      enablePremiumBrandRefresh: true,
      headingVariant: "text-md/medium",
      headingColor: "text-strong",
      headerClassName: x.priceHeader
    }), (0, r.jsx)("hr", {
      className: x.divider
    }), (0, r.jsx)(N.nH, {
      enablePremiumBrandRefresh: true,
      isApplicationHome: _
    }), n]
  });
  return (0, r.jsx)(u.hLv, {
    color: "nitro-green",
    className: a()(x.card, x.tier0, l, {
      [x.pillMargin]: !_ && T
    }),
    children: j
  })
}

function B(e) {
  var t;
  let {
    ctaButton: n,
    showYearlyPrice: i,
    featureSet: l = N.Nz.DEFAULT,
    className: f,
    isGift: p = false,
    isModal: _ = false,
    priceOptions: O,
    showPromotionalGiftBanner: v = false,
    wumpusPosition: A = "inCard",
    isApplicationHome: T = false,
    showWumpus: P = true,
    showPill: k = true
  } = e, U = (0, o.bG)([m.A], () => m.A.getPremiumTypeSubscription()), G = (0, o.bG)([h.default], () => h.default.getCurrentUser()), V = (0, b.V)(), F = null == V || null == (t = V.subscription_trial) ? true : t.sku_id, B = (null == U ? true : U.hasActiveTrial) ? null == G ? true : G.premiumType : null, H = (0, y.O)(), Y = (0, g.k5)(), W = null != F || null != B ? R.Vk.PREMIUM_TRIAL : null != H || Y ? R.Vk.PREMIUM_DISCOUNT : null, K = (0, c.qB)((0, d.Ay)()), z = (0, C.rm)(Y, B, H, V, F), q = () => (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("img", {
      src: j,
      alt: "",
      className: a()(x.bigCloud, x[A])
    }), (0, r.jsx)("img", {
      src: L,
      alt: "",
      className: a()(x.smallCloud, x[A])
    }), (0, r.jsx)("img", {
      src: M,
      alt: "",
      className: a()(x.wumpus, x[A])
    })]
  });
  return (0, r.jsxs)(u.hLv, {
    color: "nitro-pink",
    className: a()(x.card, f, {
      [x.withGiftBanner]: v
    }),
    children: [P && (0, r.jsx)(q, {}), k && (0, r.jsx)(S.D, {
      text: null != z ? z : D.intl.string(D.t["6bEcYr"]),
      className: x.pill
    }), (0, r.jsx)(s.D, {
      variant: "display-md",
      color: K ? "text-strong" : "always-white",
      className: x.cardTitle,
      children: D.intl.string(D.t.lG6a5x)
    }), (0, r.jsx)(w.A, {
      isGift: p,
      premiumTier: R.PremiumTypes.TIER_2,
      offerType: W,
      offerTierMatchesCard: F === R.pe.TIER_2 || (0, I.U9)(H, R.pe.TIER_2),
      showYearlyPrice: i,
      priceOptions: O,
      enablePremiumBrandRefresh: true,
      headingVariant: "text-md/medium",
      headingColor: "text-strong",
      headerClassName: x.priceHeader
    }), (0, r.jsx)("hr", {
      className: x.divider
    }), (0, r.jsx)(N.ZP, {
      featureSet: l,
      isModal: _,
      isGift: p,
      enablePremiumBrandRefresh: true,
      isApplicationHome: T,
      firstFeatureItemClassName: "inCard" === A ? x.firstFeatureItemContainer : true
    }), n, v && (0, r.jsx)(E.b, {})]
  })
}

function H(e) {
  let {
    className: t,
    ctaButton: n,
    isApplicationHome: i,
    priceOptions: o
  } = e, l = (0, c.qB)((0, d.Ay)());
  return (0, r.jsxs)("div", {
    className: a()(x.card, x.borderGradient, t),
    children: [(0, r.jsxs)("div", {
      className: x.cardHeader,
      children: [(0, r.jsx)(s.D, {
        variant: "display-md",
        color: l ? "text-strong" : "always-white",
        className: x.cardTitle,
        children: D.intl.string(P.default.eSKiXk)
      }), (0, r.jsx)(S.D, {
        text: D.intl.string(D.t.oW0eUd),
        className: x.betaPill
      })]
    }), (0, r.jsx)(T.A, {
      priceOptions: o
    }), (0, r.jsx)(s.D, {
      variant: "heading-md/semibold",
      color: "text-muted",
      children: D.intl.string(P.default["R+dzZw"])
    }), (0, r.jsx)("hr", {
      className: x.divider
    }), (0, r.jsx)(N.Lg, {
      isApplicationHome: i
    }), n]
  })
}
let Y = e => {
    let {
      subscriptionTier: t,
      isReducedMotion: n,
      tierCardProps: i,
      className: s,
      narrowLayout: o
    } = e, c = t === R.pe.TIER_2, d = c ? B : F, {
      subscribeButtonProps: f,
      subscriptionTier: p
    } = (0, A.$)({
      subscriptionTier: t,
      variantOverride: c ? "expressive" : "secondary"
    }), {
      disabled: _
    } = f, h = (0, r.jsx)("div", {
      className: x.CTAButton,
      children: (0, r.jsx)(l.$nd, V(U({
        size: "md",
        fullWidth: true
      }, f), {
        disabled: _
      }))
    }), m = (0, r.jsx)("div", {
      className: a()({
        [x.premiumCardHover]: !n
      }),
      children: (0, r.jsx)(d, U({
        className: a()(x.applicationHomeCard, {
          [x.narrow]: o
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
  W = e => {
    let {
      isReducedMotion: t,
      className: n
    } = e, i = (0, r.jsx)("div", {
      className: x.CTAButton,
      children: (0, r.jsx)(l.$nd, {
        size: "md",
        fullWidth: true,
        icon: u.tvc,
        text: D.intl.string(D.t["2pG5Ga"]),
        variant: "secondary"
      })
    }), s = (0, r.jsx)("div", {
      className: a()({
        [x.premiumCardHover]: !t
      }),
      children: (0, r.jsx)(H, {
        className: a()(x.applicationHomeCard, x.narrow),
        ctaButton: i,
        isApplicationHome: true
      })
    });
    return (0, r.jsx)(v.A, {
      subscriptionTier: R.pe.TIER_2,
      initialPlanId: R.gD.PREMIUM_GROUP_MONTH,
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

function K(e) {
  let {
    innerRef: t,
    className: n
  } = e, {
    analyticsLocations: i
  } = (0, _.Ay)(p.A.PREMIUM_MARKETING_TIER_CARD), l = (0, N.pw)(t), c = (0, o.bG)([f.A], () => f.A.useReducedMotion), u = (0, O.PA)();
  return (0, r.jsx)(_.f5, {
    value: i,
    children: (0, r.jsxs)("div", {
      className: a()(x.premiumCardsContainer, n),
      children: [(0, r.jsx)(s.D, {
        variant: "display-md",
        color: "text-strong",
        className: x.premiumCardsHeader,
        children: D.intl.string(D.t.vLz3Zs)
      }), (0, r.jsxs)("div", {
        ref: l,
        className: x.premiumCards,
        children: [(0, r.jsx)(Y, {
          subscriptionTier: R.pe.TIER_0,
          isReducedMotion: c,
          className: x.tier0CardOrder,
          narrowLayout: u
        }), (0, r.jsx)(Y, {
          subscriptionTier: R.pe.TIER_2,
          isReducedMotion: c,
          className: x.tier2CardOrder,
          tierCardProps: {
            wumpusPosition: u ? "insideCorner" : "outerCorner",
            showPill: !u
          },
          narrowLayout: u
        }), u && (0, r.jsx)(W, {
          isReducedMotion: c,
          className: x.premiumGroupCardOrder
        })]
      })]
    })
  })
}