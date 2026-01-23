/** Chunk was on web.js **/
/** chunk id: 501007, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Lg: () => W,
  NB: () => et,
  Nz: () => X,
  ZP: () => Z,
  jP: () => ee,
  nH: () => K,
  pw: () => J
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk582754 = require("./582754.js"),
  Chunk397927 = require("./397927.js"),
  Chunk736653 = require("./736653.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk953143 = require("./953143.jsx"),
  Chunk773669 = require("./773669.js"),
  Chunk287809 = require("./287809.js"),
  Chunk166403 = require("./166403.js"),
  Chunk224016 = require("./224016.jsx"),
  Chunk217392 = require("./217392.jsx"),
  Chunk60490 = require("./60490.jsx"),
  Chunk560138 = require("./560138.js"),
  Chunk40185 = require("./40185.js"),
  Chunk526292 = require("./526292.js"),
  Chunk552736 = require("./552736.js"),
  Chunk1878 = require("./1878.jsx"),
  Chunk422936 = require("./422936.js"),
  Chunk234419 = require("./234419.js"),
  Chunk396375 = require("./396375.jsx"),
  Chunk511484 = require("./511484.js"),
  Chunk231265 = require("./231265.js"),
  Chunk795269 = require("./795269.jsx"),
  Chunk349563 = require("./349563.jsx"),
  Chunk90526 = require("./90526.jsx"),
  Chunk300542 = require("./300542.jsx"),
  Chunk4382 = require("./4382.js"),
  Chunk284951 = require("./284951.js"),
  Chunk788868 = require("./788868.js"),
  Chunk838541 = require("./838541.js"),
  Chunk519412 = require("./519412.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk855135 = require("./855135.js"),
  Chunk639179 = require("./639179.js"),
  Chunk122402 = require("./122402.js"),
  Chunk793481 = require("./793481.js"),
  Chunk497451 = require("./497451.js");

function Y(e) {
  let {
    Icon: t,
    text: n,
    isNew: i = false,
    className: s,
    textVariant: o,
    isApplicationHome: c,
    enablePremiumBrandRefresh: u
  } = e;
  return (0, r.jsxs)("div", {
    className: a()(s, {
      [G.featureItem]: u,
      [G.featureItemApplicationHome]: u && c
    }),
    children: [(0, r.jsx)(t, {
      className: u ? V.hi : V.Kk,
      color: "currentColor"
    }), (0, r.jsx)(l.Text, {
      variant: null != o ? o : "text-md/normal",
      color: u || c ? "currentColor" : "always-white",
      children: n
    }), i ? (0, r.jsx)(f.A, {
      className: V.OC,
      forceUseColorForSparkles: true,
      shouldInheritBackgroundColor: true,
      shouldInheritTextColor: true
    }) : null]
  })
}

function W(e) {
  let {
    isApplicationHome: t
  } = e;
  return (0, r.jsxs)(r.Fragment, {
    children: [t && (0, r.jsx)(l.Text, {
      variant: "text-sm/bold",
      className: G.tier2ApplicationHomeSubheader,
      children: U.intl.string(k.default.ItfIa5)
    }), x.PV.map((e, n) => {
      let {
        Icon: i,
        getText: a
      } = e;
      return (0, r.jsx)(Y, {
        Icon: i,
        text: a(),
        enablePremiumBrandRefresh: true,
        isApplicationHome: t
      }, n)
    })]
  })
}

function K(e) {
  let {
    isApplicationHome: t,
    enablePremiumBrandRefresh: n
  } = e, i = t && !n ? L.I4 : L.fB;
  return (0, r.jsx)(r.Fragment, {
    children: i.map((e, i) => {
      let {
        Icon: a,
        getText: s
      } = e;
      return (0, r.jsx)(Y, {
        Icon: a,
        text: s(),
        className: t && !n ? V.dT : V.HW,
        textVariant: t && !n ? "text-sm/normal" : true,
        enablePremiumBrandRefresh: n,
        isApplicationHome: t
      }, i)
    })
  })
}

function z(e) {
  var t;
  let {
    ctaButton: n,
    showYearlyPrice: i,
    className: o,
    isGift: l = false,
    priceOptions: c
  } = e, u = (0, s.bG)([h.A], () => h.A.getPremiumTypeSubscription()), d = (0, S.V)(), f = null == d || null == (t = d.subscription_trial) ? true : t.sku_id, p = !!(null == u ? true : u.hasActiveTrial), _ = null != f || p;
  return (0, r.jsxs)("div", {
    className: a()(V.Vd, V.Nr, V.g1, o, {
      [V.vt]: !l && _,
      [V.lr]: !l && _
    }),
    children: [(0, r.jsx)("img", {
      src: F,
      className: V.ci,
      alt: ""
    }), (0, r.jsxs)("div", {
      children: [(0, r.jsxs)("div", {
        children: [(0, r.jsx)(E.A, {
          className: a()(V.DD, V.o6)
        }), (0, r.jsx)(P.A, {
          isGift: l,
          premiumTier: j.PremiumTypes.TIER_0,
          offerType: j.Vk.PREMIUM_TRIAL,
          offerTierMatchesCard: f === j.pe.TIER_0,
          showYearlyPrice: i,
          priceOptions: c,
          textVariant: "heading-xl/normal",
          isApplicationHome: true,
          headingVariant: "heading-md/normal",
          headingColor: "always-white"
        })]
      }), (0, r.jsx)("div", {
        children: (0, r.jsx)(K, {
          isApplicationHome: true
        })
      })]
    }), n]
  })
}

function q(e) {
  var t;
  let {
    showWumpus: n,
    ctaButton: i,
    showYearlyPrice: o,
    className: c,
    isGift: u = false,
    priceOptions: d
  } = e, f = (0, s.bG)([h.A], () => h.A.getPremiumTypeSubscription()), p = (0, s.bG)([_.default], () => _.default.getCurrentUser()), m = (0, S.V)(), E = null == m || null == (t = m.subscription_trial) ? true : t.sku_id, y = !!(null == f ? true : f.hasActiveTrial), b = y ? null == p ? true : p.premiumType : null, O = null != E || y, v = (0, R.Lj)(b, E);
  return (0, r.jsxs)("div", {
    className: a()(V.Vd, V.Nr, c, {
      [V.vt]: !u && O,
      [V.lr]: !u && O
    }),
    children: [!u && null != v && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(R.ir, {
        text: v,
        className: V.LW,
        colorOptions: R.at.PREMIUM_TIER_0_WHITE_FILL
      }), (0, r.jsx)("div", {
        className: V.o4
      })]
    }), n ? (0, r.jsx)("div", {
      className: V.wp,
      children: (0, r.jsx)(l._V3, {
        src: B,
        mediaLayoutType: M.dG.RESPONSIVE,
        width: 270,
        height: 242,
        zoomable: false,
        imageClassName: V.Fm
      })
    }) : null, (0, r.jsxs)("div", {
      children: [(0, r.jsxs)("div", {
        children: [(0, r.jsx)(g.A, {
          className: a()(V.DD, V.ZD)
        }), (0, r.jsx)(P.A, {
          isGift: u,
          premiumTier: j.PremiumTypes.TIER_0,
          offerType: j.Vk.PREMIUM_TRIAL,
          offerTierMatchesCard: E === j.pe.TIER_0,
          showYearlyPrice: o,
          priceOptions: d,
          headingVariant: "heading-md/normal",
          headingColor: "always-white"
        })]
      }), (0, r.jsx)("div", {
        children: (0, r.jsx)(K, {})
      })]
    }), u || E !== j.pe.TIER_0 ? null : (0, r.jsx)(w.Wy, {
      tier: j.PremiumTypes.TIER_0
    }), i]
  })
}
var X = function(e) {
  return e[e.DEFAULT = 0] = "DEFAULT", e[e.BOOSTING = 1] = "BOOSTING", e[e.FRACTIONAL_PREMIUM = 2] = "FRACTIONAL_PREMIUM", e[e.APPLICATION_HOME = 3] = "APPLICATION_HOME", e[e.PREMIUM_GROUP_PRIMARY = 4] = "PREMIUM_GROUP_PRIMARY", e[e.PREMIUM_GROUP_MEMBER = 5] = "PREMIUM_GROUP_MEMBER", e
}({});

function Z(e) {
  let {
    featureSet: t = 0,
    isModal: n = false,
    isGift: i = false,
    enablePremiumBrandRefresh: o = false,
    isApplicationHome: c = false,
    firstFeatureItemClassName: u
  } = e, d = (0, s.bG)([p.default], () => p.default.locale), f = (0, s.bG)([y.A], () => y.A.affinities), _ = !o && n && !i && f.length > 0, h = 3 === t || 0 === t, m = 3 === t || 0 === t && o && c, g = (() => {
    switch (t) {
      case 3:
        return L.z9;
      case 1:
        return L.ku;
      case 2:
        return L.Qi;
      case 4:
        return x.ro;
      case 5:
        return x.xs;
      default:
        return L.Oc
    }
  })();
  return (0, r.jsxs)(r.Fragment, {
    children: [m && (0, r.jsx)(l.Text, {
      variant: "text-sm/bold",
      className: o ? G.tier2ApplicationHomeSubheader : V.RQ,
      children: U.intl.string(U.t.AozD3Q)
    }), g.map((e, n) => {
      let {
        Icon: i,
        getText: s
      } = e;
      return (0, r.jsx)(Y, {
        Icon: i,
        text: s(d),
        className: a()(3 === t ? V.dT : V.HW, 0 === n ? u : true),
        textVariant: 3 === t ? "text-sm/normal" : true,
        isApplicationHome: c,
        enablePremiumBrandRefresh: o
      }, n)
    }), _ && h && (0, r.jsx)(D.A, {})]
  })
}

function Q(e) {
  var t, n, i, s;
  let {
    ctaButton: o,
    showYearlyPrice: c,
    featureSet: u = 0,
    className: d,
    isGift: f = false,
    isModal: p = false,
    priceOptions: _,
    showPromotionalGiftBanner: h = false
  } = e, g = (0, S.V)(), E = null == g || null == (t = g.subscription_trial) ? true : t.sku_id, y = (0, O.ar)(), T = (0, I.O)(), R = null != g ? j.Vk.PREMIUM_TRIAL : null != T ? j.Vk.PREMIUM_DISCOUNT : null, w = (0, b.cg)(), D = !f && y, x = null == (n = (0, v.A)()) ? true : n.planSelection, L = null == x || null == (i = x.getBackgroundImageUrl) ? true : i.call(x), M = null == x || null == (s = x.getCardImageUrl) ? true : s.call(x), k = (0, N._)();
  return (0, r.jsxs)("div", {
    className: a()(V.Nr, V.hA, V.aD, d, {
      [V.J5]: D,
      [V.lr]: D,
      [V.jx]: h,
      [V.ud]: h && null != M
    }),
    children: [h && null != M && (0, r.jsx)("img", {
      className: V.Cr,
      alt: "",
      src: M
    }), h && null != L && (0, r.jsx)("img", {
      className: V.gx,
      alt: "",
      src: L
    }), (0, r.jsx)("div", {
      className: V.S9
    }), (0, r.jsx)("img", {
      src: F,
      className: V.ci,
      alt: ""
    }), (0, r.jsxs)("div", {
      children: [(0, r.jsxs)("div", {
        children: [(0, r.jsx)(m.A, {
          className: a()(V.DD, V.cB)
        }), !f && E !== j.pe.TIER_2 && w && (0, r.jsx)("div", {
          children: (0, r.jsx)(l.Text, {
            variant: "text-xs/bold",
            className: V.zu,
            children: k
          })
        }), (0, r.jsx)(P.A, {
          isGift: f,
          premiumTier: j.PremiumTypes.TIER_2,
          offerType: R,
          offerTierMatchesCard: E === j.pe.TIER_2 || (0, C.U9)(T, j.pe.TIER_2),
          showYearlyPrice: c,
          priceOptions: _,
          textVariant: "heading-xl/normal",
          isApplicationHome: true,
          headingVariant: "heading-md/normal",
          headingColor: "always-white"
        })]
      }), (0, r.jsx)("div", {
        children: (0, r.jsx)(Z, {
          featureSet: u,
          isModal: p,
          isGift: f,
          isApplicationHome: true
        })
      })]
    }), o, h && (0, r.jsx)(A.K, {})]
  })
}

function $(e) {
  var t, n, i, u;
  let {
    showWumpus: d,
    ctaButton: f,
    showYearlyPrice: p,
    featureSet: g = 0,
    className: E,
    isGift: y = false,
    isModal: T = false,
    priceOptions: D,
    showPromotionalGiftBanner: x = false
  } = e, L = (0, s.bG)([h.A], () => h.A.getPremiumTypeSubscription()), k = (0, s.bG)([_.default], () => _.default.getCurrentUser()), U = (0, S.V)(), G = null == U || null == (t = U.subscription_trial) ? true : t.sku_id, F = (null == L ? true : L.hasActiveTrial) ? null == k ? true : k.premiumType : null, B = (0, O.ar)(), Y = (0, I.O)(), W = (0, O.k5)(), K = null != G || null != F ? j.Vk.PREMIUM_TRIAL : null != Y || W ? j.Vk.PREMIUM_DISCOUNT : null, z = (0, b.cg)(), q = !y && B, X = null == (n = (0, v.A)()) ? true : n.planSelection, Q = null == X || null == (i = X.getBackgroundImageUrl) ? true : i.call(X), $ = null == X || null == (u = X.getCardImageUrl) ? true : u.call(X), J = (0, N._)(), ee = (0, o.qB)((0, c.Ay)()), et = ee ? R.at.PREMIUM_TIER_2_OLD_GRADIENT_FILL_LIGHT_MODE : R.at.PREMIUM_TIER_2_WHITE_FILL, en = (0, R.rm)(W, F, Y, U, G), er = q && !ee ? V.on : true;
  return (0, r.jsxs)("div", {
    className: a()(V.Nr, V.hA, E, {
      [V.J5]: q,
      [V.lr]: q,
      [V.jx]: x,
      [V.ud]: x && null != $
    }),
    children: [x && null !== $ && (0, r.jsx)("img", {
      className: V.Cr,
      alt: "",
      src: $
    }), x && null !== Q && (0, r.jsx)("img", {
      className: V.gx,
      alt: "",
      src: Q
    }), !y && null != en && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(R.ir, {
        text: en,
        className: V.LW,
        colorOptions: et
      }), (0, r.jsx)("div", {
        className: er
      })]
    }), d ? (0, r.jsx)("div", {
      className: V.wp,
      children: (0, r.jsx)(l._V3, {
        src: H,
        mediaLayoutType: M.dG.RESPONSIVE,
        width: 270,
        height: 242,
        zoomable: false,
        imageClassName: V.Fm
      })
    }) : null, (0, r.jsxs)("div", {
      children: [(0, r.jsxs)("div", {
        children: [(0, r.jsx)(m.A, {
          className: a()(V.DD, V.$l)
        }), !y && G !== j.pe.TIER_2 && z && (0, r.jsx)("div", {
          children: (0, r.jsx)(l.Text, {
            variant: "text-xs/bold",
            className: V.zu,
            children: J
          })
        }), (0, r.jsx)(P.A, {
          isGift: y,
          premiumTier: j.PremiumTypes.TIER_2,
          offerType: K,
          offerTierMatchesCard: G === j.pe.TIER_2 || (0, C.U9)(Y, j.pe.TIER_2),
          showYearlyPrice: p,
          priceOptions: D,
          headingVariant: "heading-md/normal",
          headingColor: "always-white"
        })]
      }), (0, r.jsx)("div", {
        children: (0, r.jsx)(Z, {
          featureSet: g,
          isModal: T,
          isGift: y
        })
      })]
    }), y || G !== j.pe.TIER_2 && null == Y ? null : (0, r.jsx)(w.Wy, {
      tier: j.PremiumTypes.TIER_2
    }), f, x && (0, r.jsx)(A.K, {})]
  })
}
let J = e => t => {
  null != e && ("function" == typeof e ? e(t) : e.hasOwnProperty("current") && (e.current = t))
};

function ee(e) {
  let {
    innerRef: t,
    hasActiveTier2PremiumPromotion: n,
    className: i
  } = e, {
    analyticsLocations: s
  } = (0, d.Ay)(u.A.PREMIUM_MARKETING_TIER_CARD), o = J(t), c = (0, r.jsx)(T.A, {
    color: true,
    showIcon: false,
    subscriptionTier: j.pe.TIER_0,
    className: V.Ph,
    textOptions: {
      textClassName: V.uz
    },
    buttonShineClassName: V.Qr
  }), f = (0, r.jsx)(T.A, {
    color: true,
    showIcon: false,
    subscriptionTier: j.pe.TIER_2,
    className: V.Ph,
    hasActivePromotion: n,
    textOptions: {
      textClassName: V.uz
    },
    buttonShineClassName: V.Qr
  });
  return (0, r.jsxs)(d.f5, {
    value: s,
    children: [(0, r.jsx)(l.Heading, {
      ref: o,
      className: V.CV,
      variant: "display-md",
      color: "text-strong",
      children: U.intl.string(U.t.vLz3Zs)
    }), (0, r.jsxs)("div", {
      ref: o,
      className: a()(V.Zo, i),
      children: [(0, r.jsx)(z, {
        ctaButton: c
      }), (0, r.jsx)(Q, {
        ctaButton: f,
        featureSet: 3
      })]
    })]
  })
}

function et(e) {
  let {
    innerRef: t,
    className: n,
    tier0CTAButton: i,
    tier2CTAButton: s
  } = e, {
    analyticsLocations: o
  } = (0, d.Ay)(u.A.PREMIUM_MARKETING_TIER_CARD), l = J(t);
  return (0, r.jsx)(d.f5, {
    value: o,
    children: (0, r.jsxs)("div", {
      ref: l,
      className: a()(V.Zo, n),
      children: [(0, r.jsx)(q, {
        showWumpus: true,
        ctaButton: i
      }), (0, r.jsx)($, {
        showWumpus: true,
        ctaButton: s
      })]
    })
  })
}