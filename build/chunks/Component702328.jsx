/** Chunk was on web.js **/
/** chunk id: 702328, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => H
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
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
  Chunk283066 = require("./283066.js"),
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
  Chunk379039 = require("./379039.js"),
  Chunk810392 = require("./810392.js"),
  Chunk107283 = require("./107283.js");
let H = () => {
  (0, Chunk214852.z)(Chunk433811.X);
  let e = Chunk647438.useRef(null),
    t = Chunk647438.useRef(null),
    n = Chunk647438.useRef(null),
    a = Chunk647438.useRef(null),
    H = Chunk647438.useRef(null),
    Y = Chunk647438.useRef(null),
    W = (0, Chunk442837.e7)([Chunk607070.Z], () => Chunk607070.Z.useReducedMotion),
    K = (0, Chunk410030.ZP)(),
    z = (0, Chunk780384.wj)(K),
    [q, X] = Chunk647438.useState(false),
    [Q, J] = Chunk647438.useState(false),
    [$, ee] = Chunk647438.useState(false),
    [et, en] = Chunk647438.useState(false),
    [er, ei] = Chunk647438.useState(false),
    ea = (0, Chunk442837.e7)([Chunk78839.Z], () => Chunk78839.Z.getPremiumTypeSubscription()),
    eo = null != ea ? (0, Chunk74538.Af)(ea) : null,
    es = null != eo ? Chunk74538.ZP.getSkuIdForPlan(eo.planId) : null,
    el = null !== es && es !== Chunk474936.Si.TIER_2 ? Chunk474936.Si.TIER_2 : null,
    ec = (0, Chunk367074.Vi)(),
    eu = null != ec && ec,
    {
      analyticsLocations: ed
    } = (0, Chunk906732.ZP)(Chunk100527.Z.PREMIUM_MARKETING),
    ef = (0, Chunk283066.Z)({
      location: "PremiumMarketing"
    }),
    e_ = !q && !$ && (ef || !Q);
  Chunk647438.useEffect(() => {
    ei(true)
  }, []);
  let ep = [Chunk664134.h.HOME, Chunk664134.h.WHATS_NEW, Chunk664134.h.BEST_OF_NITRO, Chunk664134.h.PLANS, Chunk664134.h.COMPARE],
    {
      navBarSections: eh,
      activeSectionId: em
    } = (0, Chunk954003.O)(ep),
    {
      home: eg,
      whatsNew: eE,
      bestOfNitro: eb,
      plans: ey,
      compare: eO
    } = eh,
    ev = ef ? Chunk379039 : Chunk810392,
    eI = (0, Chunk951288.jsxs)("div", {
      className: o()(ev.container, ev.responsiveContainer, {
        [ev.containerBackground]: ef || z,
        [Chunk379039.fadeInFromTop]: !W && ef
      }),
      "data-cy": "tier-0-marketing-page",
      children: [ef && (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
        children: [(0, Chunk951288.jsx)(Chunk306066.Z, {
          className: Chunk379039.topOfPageGradient
        }), (0, Chunk951288.jsx)(Chunk457227.Z, {
          navBarSections: eh,
          activeSectionId: em
        })]
      }), !ef && (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
        children: [(0, Chunk951288.jsx)("div", {
          className: Chunk810392.heroHeaderSideGradient
        }), (0, Chunk951288.jsx)("img", {
          src: Chunk107283,
          className: Chunk810392.heroHeaderBackgroundStars,
          alt: ""
        })]
      }), (0, Chunk951288.jsxs)("div", {
        className: ev.sectionsContainer,
        children: [(0, Chunk951288.jsx)("div", {
          className: ev.heroHeadingContainer,
          ref: eg.ref,
          children: (0, Chunk951288.jsx)(Chunk622535.$, {
            innerRef: Chunk120356,
            onChange: e => X(e),
            threshold: 0,
            active: true,
            children: ef ? (0, Chunk951288.jsx)(Chunk238649.Z, {
              ref: Chunk120356,
              subscriptionTier: el,
              isEligibleForBogoPromotion: ec
            }) : (0, Chunk951288.jsx)(Chunk903250.Z, {
              ref: Chunk120356,
              subscriptionTier: el,
              isDarkMode: z,
              isEligibleForBogoPromotion: ec,
              videoRef: exports
            })
          })
        }), ec && (0, Chunk951288.jsx)("div", {
          className: ev.promoBannerContainer,
          children: (0, Chunk951288.jsx)(Chunk8647.Z, {
            variant: Chunk8647.C.APPLICATION_NITRO_HOME
          })
        }), (0, Chunk951288.jsx)("div", {
          className: ev.whatsNewSectionContainer,
          ref: eE.ref,
          children: (0, Chunk951288.jsx)(Chunk611116.g, {
            shouldLoadVideo: er,
            isReducedMotion: W,
            enablePremiumBrandRefreshDesign: ef
          })
        }), (0, Chunk951288.jsx)("div", {
          className: ev.bestOfNitroSectionContainer,
          ref: eb.ref,
          children: (0, Chunk951288.jsx)(Chunk611116.G_, {
            shouldLoadVideo: er,
            isReducedMotion: W,
            enablePremiumBrandRefreshDesign: ef
          })
        }), (0, Chunk951288.jsx)("div", {
          className: ev.premiumTierCardsContainer,
          ref: ey.ref,
          children: (0, Chunk951288.jsx)(Chunk622535.$, {
            innerRef: require,
            onChange: e => ee(e),
            threshold: .1,
            active: true,
            children: ef ? (0, Chunk951288.jsx)(Chunk744129.rz, {
              innerRef: require
            }) : (0, Chunk951288.jsx)(Chunk823188.Ub, {
              innerRef: require,
              hasActiveTier2PremiumPromotion: eu
            })
          })
        }), (0, Chunk951288.jsx)("div", {
          className: ev.planComparisonTableContainer,
          ref: eO.ref,
          children: ef ? (0, Chunk951288.jsx)(Chunk975978.Z, {}) : (0, Chunk951288.jsx)(Chunk8231.Z, {})
        })]
      }), !ef && (0, Chunk951288.jsx)(Chunk349803.Z, {
        isVisible: e_ && er,
        subscriptionTier: el,
        isApplicationHome: true,
        isEligibleForBogoPromotion: ec
      }), (0, Chunk951288.jsx)(Chunk622535.$, {
        innerRef: H,
        onChange: e => {
          e && !et && (E.default.track(G.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
            location_stack: ed
          }), en(true))
        },
        children: (0, Chunk951288.jsx)("div", {
          ref: H,
          className: ev.bottomOfPageVisibilitySensor
        })
      }), (0, Chunk951288.jsx)(Chunk622535.$, {
        innerRef: Y,
        onChange: e => {
          J(e)
        },
        children: ef ? (0, Chunk951288.jsx)(Chunk864879.Z, {
          ref: Y
        }) : (0, Chunk951288.jsx)(Chunk836332.Z, {
          ref: Y,
          isFooterVisible: Q,
          isDarkMode: z,
          isReducedMotion: W,
          subscriptionTier: el
        })
      }), ef && (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
        children: [(0, Chunk951288.jsx)(Chunk47840.Z, {
          isVisible: e_ && er,
          subscriptionTier: el,
          isEligibleForBogoPromotion: ec
        }), (0, Chunk951288.jsx)(Chunk306066.Z, {
          className: Chunk379039.bottomOfPageGradient
        })]
      })]
    });
  return (0, Chunk951288.jsx)(Chunk481060.f6W, {
    theme: ef ? Chunk231338.BR.DARKER : K,
    children: t => (0, r.jsx)(u.yWw, {
      className: o()(ev.scroller, t),
      ref: e,
      children: eI
    })
  })
}