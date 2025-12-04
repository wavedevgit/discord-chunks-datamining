/** Chunk was on web.js **/
/** chunk id: 823188, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  IY: () => $,
  Ub: () => J,
  fm: () => V,
  nT: () => z,
  ql: () => H,
  rS: () => X,
  uZ: () => K,
  wp: () => Q
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk410030 = require("./410030.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk535322 = require("./535322.jsx"),
  Chunk706454 = require("./706454.js"),
  Chunk594174 = require("./594174.js"),
  Chunk78839 = require("./78839.js"),
  Chunk483444 = require("./483444.jsx"),
  Chunk599250 = require("./599250.jsx"),
  Chunk942659 = require("./942659.jsx"),
  Chunk357355 = require("./357355.js"),
  Chunk367074 = require("./367074.js"),
  Chunk140465 = require("./140465.js"),
  Chunk347896 = require("./347896.js"),
  Chunk33052 = require("./33052.jsx"),
  Chunk622909 = require("./622909.js"),
  Chunk639119 = require("./639119.js"),
  Chunk784238 = require("./784238.jsx"),
  Chunk230916 = require("./230916.js"),
  Chunk346497 = require("./346497.js"),
  Chunk382791 = require("./382791.jsx"),
  Chunk63802 = require("./63802.jsx"),
  Chunk52741 = require("./52741.jsx"),
  Chunk318990 = require("./318990.jsx"),
  Chunk575732 = require("./575732.js"),
  Chunk474936 = require("./474936.js"),
  Chunk217702 = require("./217702.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk1721 = require("./1721.js"),
  Chunk740150 = require("./740150.js"),
  Chunk107283 = require("./107283.js"),
  Chunk476945 = require("./476945.js"),
  Chunk945182 = require("./945182.js");

function F(e) {
  let {
    Icon: t,
    text: n,
    isNew: i = false,
    className: o,
    textVariant: s,
    isApplicationHome: c,
    enablePremiumBrandRefresh: u
  } = e;
  return (0, r.jsxs)("div", {
    className: a()(o, {
      [k.featureItem]: u,
      [k.featureItemApplicationHome]: u && c
    }),
    children: [(0, r.jsx)(t, {
      className: u ? U.smallIcon : U.icon,
      color: "currentColor"
    }), (0, r.jsx)(l.Text, {
      variant: null != s ? s : "text-md/normal",
      color: u || c ? "currentColor" : "always-white",
      children: n
    }), i ? (0, r.jsx)(f.Z, {
      className: U.newTagItem,
      forceUseColorForSparkles: true,
      shouldInheritBackgroundColor: true,
      shouldInheritTextColor: true
    }) : null]
  })
}

function V(e) {
  let {
    isApplicationHome: t
  } = e;
  return (0, r.jsx)(r.Fragment, {
    children: x.dO.map((e, n) => {
      let {
        Icon: i,
        getText: a
      } = e;
      return (0, r.jsx)(F, {
        Icon: i,
        text: a(),
        className: U.itemApplicationHome,
        textVariant: "text-sm/normal",
        enablePremiumBrandRefresh: true,
        isApplicationHome: t
      }, n)
    })
  })
}

function H(e) {
  let {
    isApplicationHome: t,
    enablePremiumBrandRefresh: n
  } = e, i = t && !n ? x.X : x.FV;
  return (0, r.jsx)(r.Fragment, {
    children: i.map((e, i) => {
      let {
        Icon: a,
        getText: o
      } = e;
      return (0, r.jsx)(F, {
        Icon: a,
        text: o(),
        className: t && !n ? U.itemApplicationHome : U.itemWithWumpus,
        textVariant: t && !n ? "text-sm/normal" : true,
        enablePremiumBrandRefresh: n,
        isApplicationHome: t
      }, i)
    })
  })
}

function Y(e) {
  var t;
  let {
    ctaButton: n,
    showYearlyPrice: i,
    className: s,
    isGift: l = false,
    priceOptions: c
  } = e, u = (0, o.e7)([m.Z], () => m.Z.getPremiumTypeSubscription()), d = (0, T.N)(), f = null == d || null == (t = d.subscription_trial) ? true : t.sku_id, p = !!(null == u ? true : u.hasActiveTrial), _ = null != f || p;
  return (0, r.jsxs)("div", {
    className: a()(U.tier0, U.card, U.tier0ApplicationHomeBackground, s, {
      [U.withTier0Rim]: !l && _,
      [U.withCardHover]: !l && _
    }),
    children: [(0, r.jsx)("img", {
      src: G,
      className: U.applicationHomeStarBackground,
      alt: ""
    }), (0, r.jsxs)("div", {
      children: [(0, r.jsxs)("div", {
        children: [(0, r.jsx)(E.Z, {
          className: a()(U.title, U.tier0ApplicationHomeTitle)
        }), (0, r.jsx)(w.Z, {
          isGift: l,
          premiumTier: L.PremiumTypes.TIER_0,
          offerType: L.C.PREMIUM_TRIAL,
          offerTierMatchesCard: f === L.Si.TIER_0,
          showYearlyPrice: i,
          priceOptions: c,
          textVariant: "heading-xl/normal",
          isApplicationHome: true,
          headingVariant: "heading-md/normal",
          headingColor: "always-white"
        })]
      }), (0, r.jsx)("div", {
        children: (0, r.jsx)(H, {
          isApplicationHome: true
        })
      })]
    }), n]
  })
}

function W(e) {
  var t;
  let {
    showWumpus: n,
    ctaButton: i,
    showYearlyPrice: s,
    className: c,
    isGift: u = false,
    priceOptions: d
  } = e, f = (0, o.e7)([m.Z], () => m.Z.getPremiumTypeSubscription()), p = (0, o.e7)([_.default], () => _.default.getCurrentUser()), h = (0, T.N)(), E = null == h || null == (t = h.subscription_trial) ? true : t.sku_id, b = !!(null == f ? true : f.hasActiveTrial), y = b ? null == p ? true : p.premiumType : null, O = null != E || b, v = (0, P.y_)(y, E);
  return (0, r.jsxs)("div", {
    className: a()(U.tier0, U.card, c, {
      [U.withTier0Rim]: !u && O,
      [U.withCardHover]: !u && O
    }),
    children: [!u && null != v && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(P.Cy, {
        text: v,
        className: U.topRimPill,
        colorOptions: P.VE.PREMIUM_TIER_0_WHITE_FILL
      }), (0, r.jsx)("div", {
        className: U.rimGlowTier0
      })]
    }), n ? (0, r.jsx)("div", {
      className: U.wumpusImageContainer,
      children: (0, r.jsx)(l.Eep, {
        src: Z,
        mediaLayoutType: j.hV.RESPONSIVE,
        width: 270,
        height: 242,
        zoomable: false,
        imageClassName: U.wumpusImage
      })
    }) : null, (0, r.jsxs)("div", {
      children: [(0, r.jsxs)("div", {
        children: [(0, r.jsx)(g.Z, {
          className: a()(U.title, U.tier0Title)
        }), (0, r.jsx)(w.Z, {
          isGift: u,
          premiumTier: L.PremiumTypes.TIER_0,
          offerType: L.C.PREMIUM_TRIAL,
          offerTierMatchesCard: E === L.Si.TIER_0,
          showYearlyPrice: s,
          priceOptions: d,
          headingVariant: "heading-md/normal",
          headingColor: "always-white"
        })]
      }), (0, r.jsx)("div", {
        children: (0, r.jsx)(H, {})
      })]
    }), u || E !== L.Si.TIER_0 ? null : (0, r.jsx)(R.t, {
      tier: L.PremiumTypes.TIER_0
    }), i]
  })
}
var K = function(e) {
  return e[e.DEFAULT = 0] = "DEFAULT", e[e.BOOSTING = 1] = "BOOSTING", e[e.FRACTIONAL_PREMIUM = 2] = "FRACTIONAL_PREMIUM", e[e.APPLICATION_HOME = 3] = "APPLICATION_HOME", e
}({});

function z(e) {
  let {
    featureSet: t = 0,
    isModal: n = false,
    isGift: i = false,
    enablePremiumBrandRefresh: s = false,
    isApplicationHome: c = false,
    firstFeatureItemClassName: u
  } = e, d = (0, o.e7)([p.default], () => p.default.locale), f = (0, o.e7)([b.Z], () => b.Z.affinities), _ = !s && n && !i && f.length > 0, m = 3 === t || 0 === t, h = 3 === t || 0 === t && s && c, g = (() => {
    switch (t) {
      case 3:
        return x.CD;
      case 1:
        return x.x7;
      case 2:
        return x.Pc;
      default:
        return x.Nv
    }
  })();
  return (0, r.jsxs)(r.Fragment, {
    children: [h && (0, r.jsx)(l.Text, {
      variant: "text-sm/bold",
      className: s ? k.tier2ApplicationHomeSubheader : U.tier2ApplicationHomeSubheader,
      children: M.intl.string(M.t.AozD3Q)
    }), g.map((e, n) => {
      let {
        Icon: i,
        getText: o
      } = e;
      return (0, r.jsx)(F, {
        Icon: i,
        text: o(d),
        className: a()(3 === t ? U.itemApplicationHome : U.itemWithWumpus, 0 === n ? u : true),
        textVariant: 3 === t ? "text-sm/normal" : true,
        isApplicationHome: c,
        enablePremiumBrandRefresh: s
      }, n)
    }), _ && m && (0, r.jsx)(D.Z, {})]
  })
}

function q(e) {
  var t, n, i, o;
  let {
    ctaButton: s,
    showYearlyPrice: c,
    featureSet: u = 0,
    className: d,
    isGift: f = false,
    isModal: p = false,
    priceOptions: _,
    showPromotionalGiftBanner: m = false
  } = e, g = (0, T.N)(), E = null == g || null == (t = g.subscription_trial) ? true : t.sku_id, b = (0, O.Nx)(), A = (0, I.N)(), P = null != g ? L.C.PREMIUM_TRIAL : null != A ? L.C.PREMIUM_DISCOUNT : null, R = (0, y.Vi)(), D = !f && b, x = null == (n = (0, v.Z)()) ? true : n.planSelection, j = null == x || null == (i = x.getBackgroundImageUrl) ? true : i.call(x), M = null == x || null == (o = x.getCardImageUrl) ? true : o.call(x), k = (0, N.W)();
  return (0, r.jsxs)("div", {
    className: a()(U.card, U.tier2, U.tier2ApplicationHomeBackground, d, {
      [U.withTier2Rim]: D,
      [U.withCardHover]: D,
      [U.withPromotionalGradientBanner]: m,
      [U.withPromotionalCardImage]: m && null != M
    }),
    children: [m && null != M && (0, r.jsx)("img", {
      className: U.promotionalCardImage,
      alt: "",
      src: M
    }), m && null != j && (0, r.jsx)("img", {
      className: U.promotionalBackgroundImage,
      alt: "",
      src: j
    }), (0, r.jsx)("div", {
      className: U.tier2SideGradient
    }), (0, r.jsx)("img", {
      src: G,
      className: U.applicationHomeStarBackground,
      alt: ""
    }), (0, r.jsxs)("div", {
      children: [(0, r.jsxs)("div", {
        children: [(0, r.jsx)(h.Z, {
          className: a()(U.title, U.tier2ApplicationHomeTitle)
        }), !f && E !== L.Si.TIER_2 && R && (0, r.jsx)("div", {
          children: (0, r.jsx)(l.Text, {
            variant: "text-xs/bold",
            className: U.freeTrialPillInline,
            children: k
          })
        }), (0, r.jsx)(w.Z, {
          isGift: f,
          premiumTier: L.PremiumTypes.TIER_2,
          offerType: P,
          offerTierMatchesCard: E === L.Si.TIER_2 || (0, C.Wp)(A, L.Si.TIER_2),
          showYearlyPrice: c,
          priceOptions: _,
          textVariant: "heading-xl/normal",
          isApplicationHome: true,
          headingVariant: "heading-md/normal",
          headingColor: "always-white"
        })]
      }), (0, r.jsx)("div", {
        children: (0, r.jsx)(z, {
          featureSet: u,
          isModal: p,
          isGift: f,
          isApplicationHome: true
        })
      })]
    }), s, m && (0, r.jsx)(S.K, {})]
  })
}

function Q(e) {
  var t, n, i, u;
  let {
    showWumpus: d,
    ctaButton: f,
    showYearlyPrice: p,
    featureSet: g = 0,
    className: E,
    isGift: b = false,
    isModal: A = false,
    priceOptions: D,
    showPromotionalGiftBanner: x = false
  } = e, M = (0, o.e7)([m.Z], () => m.Z.getPremiumTypeSubscription()), k = (0, o.e7)([_.default], () => _.default.getCurrentUser()), G = (0, T.N)(), Z = null == G || null == (t = G.subscription_trial) ? true : t.sku_id, F = (null == M ? true : M.hasActiveTrial) ? null == k ? true : k.premiumType : null, V = (0, O.Nx)(), H = (0, I.N)(), Y = (0, O.t7)(), W = null != Z || null != F ? L.C.PREMIUM_TRIAL : null != H || Y ? L.C.PREMIUM_DISCOUNT : null, K = (0, y.Vi)(), q = !b && V, Q = null == (n = (0, v.Z)()) ? true : n.planSelection, X = null == Q || null == (i = Q.getBackgroundImageUrl) ? true : i.call(Q), J = null == Q || null == (u = Q.getCardImageUrl) ? true : u.call(Q), $ = (0, N.W)(), ee = (0, s.ap)((0, c.ZP)()), et = ee ? P.VE.PREMIUM_TIER_2_OLD_GRADIENT_FILL_LIGHT_MODE : P.VE.PREMIUM_TIER_2_WHITE_FILL, en = (0, P.A1)(Y, F, H, G, Z), er = q && !ee ? U.rimGlowTier2 : true;
  return (0, r.jsxs)("div", {
    className: a()(U.card, U.tier2, E, {
      [U.withTier2Rim]: q,
      [U.withCardHover]: q,
      [U.withPromotionalGradientBanner]: x,
      [U.withPromotionalCardImage]: x && null != J
    }),
    children: [x && null !== J && (0, r.jsx)("img", {
      className: U.promotionalCardImage,
      alt: "",
      src: J
    }), x && null !== X && (0, r.jsx)("img", {
      className: U.promotionalBackgroundImage,
      alt: "",
      src: X
    }), !b && null != en && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(P.Cy, {
        text: en,
        className: U.topRimPill,
        colorOptions: et
      }), (0, r.jsx)("div", {
        className: er
      })]
    }), d ? (0, r.jsx)("div", {
      className: U.wumpusImageContainer,
      children: (0, r.jsx)(l.Eep, {
        src: B,
        mediaLayoutType: j.hV.RESPONSIVE,
        width: 270,
        height: 242,
        zoomable: false,
        imageClassName: U.wumpusImage
      })
    }) : null, (0, r.jsxs)("div", {
      children: [(0, r.jsxs)("div", {
        children: [(0, r.jsx)(h.Z, {
          className: a()(U.title, U.tier2Title)
        }), !b && Z !== L.Si.TIER_2 && K && (0, r.jsx)("div", {
          children: (0, r.jsx)(l.Text, {
            variant: "text-xs/bold",
            className: U.freeTrialPillInline,
            children: $
          })
        }), (0, r.jsx)(w.Z, {
          isGift: b,
          premiumTier: L.PremiumTypes.TIER_2,
          offerType: W,
          offerTierMatchesCard: Z === L.Si.TIER_2 || (0, C.Wp)(H, L.Si.TIER_2),
          showYearlyPrice: p,
          priceOptions: D,
          headingVariant: "heading-md/normal",
          headingColor: "always-white"
        })]
      }), (0, r.jsx)("div", {
        children: (0, r.jsx)(z, {
          featureSet: g,
          isModal: A,
          isGift: b
        })
      })]
    }), b || Z !== L.Si.TIER_2 && null == H ? null : (0, r.jsx)(R.t, {
      tier: L.PremiumTypes.TIER_2
    }), f, x && (0, r.jsx)(S.K, {})]
  })
}
let X = e => t => {
  null != e && ("function" == typeof e ? e(t) : e.hasOwnProperty("current") && (e.current = t))
};

function J(e) {
  let {
    innerRef: t,
    hasActiveTier2PremiumPromotion: n,
    className: i
  } = e, {
    analyticsLocations: o
  } = (0, d.ZP)(u.Z.PREMIUM_MARKETING_TIER_CARD), s = X(t), c = (0, r.jsx)(A.Z, {
    color: true,
    showIcon: false,
    subscriptionTier: L.Si.TIER_0,
    className: U.subButton,
    textOptions: {
      textClassName: U.v2SubButtonText
    },
    buttonShineClassName: U.buttonShine
  }), f = (0, r.jsx)(A.Z, {
    color: true,
    showIcon: false,
    subscriptionTier: L.Si.TIER_2,
    className: U.subButton,
    hasActivePromotion: n,
    textOptions: {
      textClassName: U.v2SubButtonText
    },
    buttonShineClassName: U.buttonShine
  });
  return (0, r.jsxs)(d.Gt, {
    value: o,
    children: [(0, r.jsx)(l.Heading, {
      ref: s,
      className: U.applicationHomeTierCardSectionHeader,
      variant: "display-md",
      color: "header-primary",
      children: M.intl.string(M.t.vLz3Zs)
    }), (0, r.jsxs)("div", {
      ref: s,
      className: a()(U.premiumCards, i),
      children: [(0, r.jsx)(Y, {
        ctaButton: c
      }), (0, r.jsx)(q, {
        ctaButton: f,
        featureSet: 3
      })]
    })]
  })
}

function $(e) {
  let {
    innerRef: t,
    className: n,
    tier0CTAButton: i,
    tier2CTAButton: o
  } = e, {
    analyticsLocations: s
  } = (0, d.ZP)(u.Z.PREMIUM_MARKETING_TIER_CARD), l = X(t);
  return (0, r.jsx)(d.Gt, {
    value: s,
    children: (0, r.jsxs)("div", {
      ref: l,
      className: a()(U.premiumCards, n),
      children: [(0, r.jsx)(W, {
        showWumpus: true,
        ctaButton: i
      }), (0, r.jsx)(Q, {
        showWumpus: true,
        ctaButton: o
      })]
    })
  })
}