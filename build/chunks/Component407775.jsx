/** Chunk was on 2292 **/
/** chunk id: 407775, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  AP: () => D,
  KV: () => G,
  hy: () => Z,
  r6: () => k
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  l = require.n(Chunk503698),
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

function U(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = null != arguments[t] ? arguments[t] : {},
      n = Object.keys(r);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
      return Object.getOwnPropertyDescriptor(r, e).enumerable
    }))), n.forEach(function(t) {
      var n;
      n = r[t], t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = n
    })
  }
  return e
}

function D(e) {
  var t;
  let {
    ctaButton: r,
    showYearlyPrice: i,
    className: o,
    isGift: m = false,
    priceOptions: p,
    isApplicationHome: g = false,
    useShortTitle: f = false
  } = e, T = (0, s.bG)([C.A], () => C.A.getPremiumTypeSubscription()), h = (0, s.bG)([x.default], () => x.default.getCurrentUser()), j = (0, v.V)(), I = null == j || null == (t = j.subscription_trial) ? true : t.sku_id, y = (null == T ? true : T.hasActiveTrial) ? null == h ? true : h.premiumType : null, b = (0, _.Lj)(y, I), A = null != b, E = (0, c.qB)((0, d.Ay)()), L = f ? M.intl.string(M.t.tUbSDK) : M.intl.string(M.t["t9uG/o"]), S = (0, n.jsxs)(n.Fragment, {
    children: [A && (0, n.jsx)(P.D, {
      text: b,
      className: w.pill
    }), (0, n.jsx)(a.D, {
      variant: "display-md",
      color: E ? "text-strong" : "always-white",
      className: w.cardTitle,
      children: L
    }), (0, n.jsx)(O.A, {
      isGift: m,
      premiumTier: N.PremiumTypes.TIER_0,
      offerType: N.Vk.PREMIUM_TRIAL,
      offerTierMatchesCard: I === N.pe.TIER_0,
      showYearlyPrice: i,
      priceOptions: p,
      enablePremiumBrandRefresh: true,
      headingVariant: "text-md/medium",
      headingColor: "text-strong",
      headerClassName: w.priceHeader
    }), (0, n.jsx)("hr", {
      className: w.divider
    }), (0, n.jsx)(R.nH, {
      enablePremiumBrandRefresh: true,
      isApplicationHome: g
    }), r]
  });
  return (0, n.jsx)(u.hLv, {
    color: "nitro-green",
    className: l()(w.card, w.tier0, o, {
      [w.pillMargin]: !g && A
    }),
    children: S
  })
}

function G(e) {
  var t;
  let {
    ctaButton: r,
    showYearlyPrice: i,
    featureSet: o = R.Nz.DEFAULT,
    className: m,
    isGift: p = false,
    isModal: g = false,
    priceOptions: j,
    showPromotionalGiftBanner: I = false,
    wumpusPosition: y = "inCard",
    isApplicationHome: A = false,
    showWumpus: E = true,
    showPill: U = true
  } = e, D = (0, s.bG)([C.A], () => C.A.getPremiumTypeSubscription()), G = (0, s.bG)([x.default], () => x.default.getCurrentUser()), k = (0, v.V)(), V = null == k || null == (t = k.subscription_trial) ? true : t.sku_id, B = (null == D ? true : D.hasActiveTrial) ? null == G ? true : G.premiumType : null, Z = (0, h.O)(), F = (0, f.k5)(), J = null != V || null != B ? N.Vk.PREMIUM_TRIAL : null != Z || F ? N.Vk.PREMIUM_DISCOUNT : null, z = (0, c.qB)((0, d.Ay)()), K = (0, _.rm)(F, B, Z, k, V);
  return (0, n.jsxs)(u.hLv, {
    color: "nitro-pink",
    className: l()(w.card, m, {
      [w.withGiftBanner]: I
    }),
    children: [E && (0, n.jsx)(() => (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)("img", {
        src: S,
        alt: "",
        className: l()(w.bigCloud, w[y])
      }), (0, n.jsx)("img", {
        src: L,
        alt: "",
        className: l()(w.smallCloud, w[y])
      }), (0, n.jsx)("img", {
        src: H,
        alt: "",
        className: l()(w.wumpus, w[y])
      })]
    }), {}), U && (0, n.jsx)(P.D, {
      text: null != K ? K : M.intl.string(M.t["6bEcYr"]),
      className: w.pill
    }), (0, n.jsx)(a.D, {
      variant: "display-md",
      color: z ? "text-strong" : "always-white",
      className: w.cardTitle,
      children: M.intl.string(M.t.lG6a5x)
    }), (0, n.jsx)(O.A, {
      isGift: p,
      premiumTier: N.PremiumTypes.TIER_2,
      offerType: J,
      offerTierMatchesCard: V === N.pe.TIER_2 || (0, b.U9)(Z, N.pe.TIER_2),
      showYearlyPrice: i,
      priceOptions: j,
      enablePremiumBrandRefresh: true,
      headingVariant: "text-md/medium",
      headingColor: "text-strong",
      headerClassName: w.priceHeader
    }), (0, n.jsx)("hr", {
      className: w.divider
    }), (0, n.jsx)(R.ZP, {
      featureSet: o,
      isModal: g,
      isGift: p,
      enablePremiumBrandRefresh: true,
      isApplicationHome: A,
      firstFeatureItemClassName: "inCard" === y ? w.firstFeatureItemContainer : true
    }), r, I && (0, n.jsx)(T.b, {})]
  })
}

function k(e) {
  let {
    className: t,
    ctaButton: r,
    isApplicationHome: i,
    priceOptions: s
  } = e, o = (0, c.qB)((0, d.Ay)());
  return (0, n.jsxs)("div", {
    className: l()(w.card, w.borderGradient, t),
    children: [(0, n.jsxs)("div", {
      className: w.cardHeader,
      children: [(0, n.jsx)(a.D, {
        variant: "display-md",
        color: o ? "text-strong" : "always-white",
        className: w.cardTitle,
        children: M.intl.string(E.default.eSKiXk)
      }), (0, n.jsx)(P.D, {
        text: M.intl.string(M.t.oW0eUd),
        className: w.betaPill
      })]
    }), (0, n.jsx)(A.A, {
      priceOptions: s
    }), (0, n.jsx)(a.D, {
      variant: "heading-md/semibold",
      color: "text-muted",
      children: M.intl.string(E.default["R+dzZw"])
    }), (0, n.jsx)("hr", {
      className: w.divider
    }), (0, n.jsx)(R.Lg, {
      isApplicationHome: i
    }), r]
  })
}
let V = e => {
    var t, r;
    let {
      subscriptionTier: i,
      isReducedMotion: a,
      tierCardProps: s,
      className: c,
      narrowLayout: d
    } = e, m = i === N.pe.TIER_2, {
      subscribeButtonProps: p,
      subscriptionTier: g
    } = (0, y.$)({
      subscriptionTier: i,
      variantOverride: m ? "expressive" : "secondary"
    }), {
      disabled: x
    } = p, C = (0, n.jsx)("div", {
      className: w.CTAButton,
      children: (0, n.jsx)(o.$nd, (t = U({
        size: "md",
        fullWidth: true
      }, p), r = r = {
        disabled: x
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          r.push.apply(r, n)
        }
        return r
      })(Object(r)).forEach(function(e) {
        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
      }), t))
    }), f = (0, n.jsx)("div", {
      className: l()({
        [w.premiumCardHover]: !a
      }),
      children: (0, n.jsx)(m ? G : D, U({
        className: l()(w.applicationHomeCard, {
          [w.narrow]: d
        }),
        ctaButton: C,
        showYearlyPrice: true,
        isApplicationHome: true
      }, s))
    });
    return (0, n.jsx)("div", {
      className: c,
      children: x ? f : (0, n.jsx)(I.A, {
        subscriptionTier: g,
        children: e => {
          let {
            onClick: t
          } = e;
          return (0, n.jsx)(u.DUT, {
            onClick: t,
            style: {
              cursor: "pointer"
            },
            children: f
          })
        }
      })
    })
  },
  B = e => {
    let {
      isReducedMotion: t,
      className: r
    } = e, i = (0, n.jsx)("div", {
      className: w.CTAButton,
      children: (0, n.jsx)(o.$nd, {
        size: "md",
        fullWidth: true,
        icon: u.tvc,
        text: M.intl.string(M.t["2pG5Ga"]),
        variant: "secondary"
      })
    }), a = (0, n.jsx)("div", {
      className: l()({
        [w.premiumCardHover]: !t
      }),
      children: (0, n.jsx)(k, {
        className: l()(w.applicationHomeCard, w.narrow),
        ctaButton: i,
        isApplicationHome: true
      })
    });
    return (0, n.jsx)(I.A, {
      subscriptionTier: N.pe.TIER_2,
      initialPlanId: N.gD.PREMIUM_GROUP_MONTH,
      children: e => {
        let {
          onClick: t
        } = e;
        return (0, n.jsx)("div", {
          className: r,
          children: (0, n.jsx)(u.DUT, {
            onClick: t,
            style: {
              cursor: "pointer"
            },
            children: a
          })
        })
      }
    })
  };

function Z(e) {
  let {
    innerRef: t,
    className: r
  } = e, {
    analyticsLocations: i
  } = (0, g.Ay)(p.A.PREMIUM_MARKETING_TIER_CARD), o = (0, R.pw)(t), c = (0, s.bG)([m.A], () => m.A.useReducedMotion), u = (0, j.PA)();
  return (0, n.jsx)(g.f5, {
    value: i,
    children: (0, n.jsxs)("div", {
      className: l()(w.premiumCardsContainer, r),
      children: [(0, n.jsx)(a.D, {
        variant: "display-md",
        color: "text-strong",
        className: w.premiumCardsHeader,
        children: M.intl.string(M.t.vLz3Zs)
      }), (0, n.jsxs)("div", {
        ref: o,
        className: w.premiumCards,
        children: [(0, n.jsx)(V, {
          subscriptionTier: N.pe.TIER_0,
          isReducedMotion: c,
          className: w.tier0CardOrder,
          narrowLayout: u
        }), (0, n.jsx)(V, {
          subscriptionTier: N.pe.TIER_2,
          isReducedMotion: c,
          className: w.tier2CardOrder,
          tierCardProps: {
            wumpusPosition: u ? "insideCorner" : "outerCorner",
            showPill: !u
          },
          narrowLayout: u
        }), u && (0, n.jsx)(B, {
          isReducedMotion: c,
          className: w.premiumGroupCardOrder
        })]
      })]
    })
  })
}