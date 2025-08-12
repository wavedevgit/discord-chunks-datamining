/** Chunk was on 20501 **/
/** chunk id: 702328, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => H
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk622535 = require("./622535.js"),
  Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk410030 = require("./410030.js"),
  Chunk607070 = require("./607070.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk433811 = require("./433811.js"),
  Chunk214852 = require("./214852.js"),
  Chunk78839 = require("./78839.js"),
  Chunk626135 = require("./626135.js"),
  Chunk74538 = require("./74538.js"),
  Chunk367074 = require("./367074.js"),
  Chunk220654 = require("./220654.js"),
  Chunk8647 = require("./8647.jsx"),
  Chunk744129 = require("./744129.jsx"),
  Chunk823188 = require("./823188.jsx"),
  Chunk611116 = require("./611116.jsx"),
  Chunk306066 = require("./306066.jsx"),
  Chunk349803 = require("./349803.jsx"),
  Chunk8231 = require("./8231.jsx"),
  Chunk864879 = require("./864879.jsx"),
  Chunk238649 = require("./238649.jsx"),
  Chunk47840 = require("./47840.jsx"),
  Chunk975978 = require("./975978.jsx"),
  Chunk836332 = require("./836332.jsx"),
  Chunk903250 = require("./903250.jsx"),
  Chunk954003 = require("./954003.js"),
  Chunk664134 = require("./664134.js"),
  Chunk457227 = require("./457227.jsx"),
  Chunk474936 = require("./474936.js"),
  Chunk981631 = require("./981631.js"),
  Chunk231338 = require("./231338.js"),
  Chunk529020 = require("./529020.js"),
  Chunk408217 = require("./408217.js"),
  Chunk107283 = require("./107283.js");
let H = () => {
  (0, Chunk214852.z)(Chunk433811.X);
  let e = Chunk73800.useRef(null),
    t = Chunk73800.useRef(null),
    n = Chunk73800.useRef(null),
    s = Chunk73800.useRef(null),
    H = Chunk73800.useRef(null),
    z = Chunk73800.useRef(null),
    W = (0, Chunk442837.e7)([Chunk607070.Z], () => Chunk607070.Z.useReducedMotion),
    Y = (0, Chunk410030.ZP)(),
    K = (0, Chunk780384.wj)(Y),
    [q, X] = Chunk73800.useState(false),
    [J, Q] = Chunk73800.useState(false),
    [$, ee] = Chunk73800.useState(false),
    [et, en] = Chunk73800.useState(false),
    [ei, er] = Chunk73800.useState(false),
    es = (0, Chunk442837.e7)([Chunk78839.Z], () => Chunk78839.Z.getPremiumTypeSubscription()),
    ea = null != es ? (0, Chunk74538.Af)(es) : null,
    el = null != ea ? Chunk74538.ZP.getSkuIdForPlan(ea.planId) : null,
    eo = null !== el && el !== Chunk474936.Si.TIER_2 ? Chunk474936.Si.TIER_2 : null,
    ec = (0, Chunk367074.Vi)(),
    ed = null != ec && ec,
    {
      analyticsLocations: eu
    } = (0, Chunk906732.ZP)(Chunk100527.Z.PREMIUM_MARKETING),
    em = (0, Chunk220654.Z)({
      location: "PremiumMarketing"
    }),
    ep = !q && !$ && (em || !J);
  Chunk73800.useEffect(() => {
    er(true)
  }, []);
  let eg = [Chunk664134.h.HOME, Chunk664134.h.WHATS_NEW, Chunk664134.h.BEST_OF_NITRO, Chunk664134.h.PLANS, Chunk664134.h.COMPARE],
    {
      navBarSections: eh,
      activeSectionId: ef
    } = (0, Chunk954003.O)(eg),
    {
      home: eb,
      whatsNew: ex,
      bestOfNitro: e_,
      plans: ej,
      compare: eE
    } = eh,
    eC = em ? Chunk529020 : Chunk408217,
    eO = (0, Chunk255367.jsxs)("div", {
      className: a()(eC.container, eC.responsiveContainer, {
        [eC.containerBackground]: em || K,
        [Chunk529020.fadeInFromTop]: !W && em
      }),
      "data-cy": "tier-0-marketing-page",
      children: [em && (0, Chunk255367.jsxs)(Chunk255367.Fragment, {
        children: [(0, Chunk255367.jsx)(Chunk306066.Z, {
          className: Chunk529020.topOfPageGradient
        }), (0, Chunk255367.jsx)(Chunk457227.Z, {
          navBarSections: eh,
          activeSectionId: ef
        })]
      }), !em && (0, Chunk255367.jsxs)(Chunk255367.Fragment, {
        children: [(0, Chunk255367.jsx)("div", {
          className: Chunk408217.heroHeaderSideGradient
        }), (0, Chunk255367.jsx)("img", {
          src: Chunk107283,
          className: Chunk408217.heroHeaderBackgroundStars,
          alt: ""
        })]
      }), (0, Chunk255367.jsxs)("div", {
        className: eC.sectionsContainer,
        children: [(0, Chunk255367.jsx)("div", {
          className: eC.heroHeadingContainer,
          ref: eb.ref,
          children: (0, Chunk255367.jsx)(Chunk622535.$, {
            innerRef: Chunk120356,
            onChange: e => X(e),
            threshold: 0,
            active: true,
            children: em ? (0, Chunk255367.jsx)(Chunk238649.Z, {
              ref: Chunk120356,
              subscriptionTier: eo,
              isEligibleForBogoPromotion: ec
            }) : (0, Chunk255367.jsx)(Chunk903250.Z, {
              ref: Chunk120356,
              subscriptionTier: eo,
              isDarkMode: K,
              isEligibleForBogoPromotion: ec,
              videoRef: exports
            })
          })
        }), ec && (0, Chunk255367.jsx)("div", {
          className: eC.promoBannerContainer,
          children: (0, Chunk255367.jsx)(Chunk8647.Z, {
            variant: Chunk8647.C.APPLICATION_NITRO_HOME
          })
        }), (0, Chunk255367.jsx)("div", {
          className: eC.whatsNewSectionContainer,
          ref: ex.ref,
          children: (0, Chunk255367.jsx)(Chunk611116.g, {
            shouldLoadVideo: ei,
            isReducedMotion: W,
            enablePremiumBrandRefreshDesign: em
          })
        }), (0, Chunk255367.jsx)("div", {
          className: eC.bestOfNitroSectionContainer,
          ref: e_.ref,
          children: (0, Chunk255367.jsx)(Chunk611116.G_, {
            shouldLoadVideo: ei,
            isReducedMotion: W,
            enablePremiumBrandRefreshDesign: em
          })
        }), (0, Chunk255367.jsx)("div", {
          className: eC.premiumTierCardsContainer,
          ref: ej.ref,
          children: (0, Chunk255367.jsx)(Chunk622535.$, {
            innerRef: require,
            onChange: e => ee(e),
            threshold: .1,
            active: true,
            children: em ? (0, Chunk255367.jsx)(Chunk744129.rz, {
              innerRef: require
            }) : (0, Chunk255367.jsx)(Chunk823188.Ub, {
              innerRef: require,
              hasActiveTier2PremiumPromotion: ed
            })
          })
        }), (0, Chunk255367.jsx)("div", {
          className: eC.planComparisonTableContainer,
          ref: eE.ref,
          children: em ? (0, Chunk255367.jsx)(Chunk975978.Z, {}) : (0, Chunk255367.jsx)(Chunk8231.Z, {})
        })]
      }), !em && (0, Chunk255367.jsx)(Chunk349803.Z, {
        isVisible: ep && ei,
        subscriptionTier: eo,
        isApplicationHome: true,
        isEligibleForBogoPromotion: ec
      }), (0, Chunk255367.jsx)(Chunk622535.$, {
        innerRef: H,
        onChange: e => {
          e && !et && (x.default.track(B.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
            location_stack: eu
          }), en(true))
        },
        children: (0, Chunk255367.jsx)("div", {
          ref: H,
          className: eC.bottomOfPageVisibilitySensor
        })
      }), (0, Chunk255367.jsx)(Chunk622535.$, {
        innerRef: z,
        onChange: e => {
          Q(e)
        },
        children: em ? (0, Chunk255367.jsx)(Chunk864879.Z, {
          ref: z
        }) : (0, Chunk255367.jsx)(Chunk836332.Z, {
          ref: z,
          isFooterVisible: J,
          isDarkMode: K,
          isReducedMotion: W,
          subscriptionTier: eo
        })
      }), em && (0, Chunk255367.jsxs)(Chunk255367.Fragment, {
        children: [(0, Chunk255367.jsx)(Chunk47840.Z, {
          isVisible: ep && ei,
          subscriptionTier: eo,
          isEligibleForBogoPromotion: ec
        }), (0, Chunk255367.jsx)(Chunk306066.Z, {
          className: Chunk529020.bottomOfPageGradient
        })]
      })]
    });
  return (0, Chunk255367.jsx)(Chunk481060.f6W, {
    theme: em ? Chunk231338.BR.DARKER : Y,
    children: t => (0, i.jsx)(d.yWw, {
      className: a()(eC.scroller, t),
      ref: e,
      children: eO
    })
  })
}