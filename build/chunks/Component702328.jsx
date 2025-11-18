/** Chunk was on web.js **/
/** chunk id: 702328, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => z
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
  Chunk431 = require("./431.js"),
  Chunk626135 = require("./626135.js"),
  Chunk74538 = require("./74538.js"),
  Chunk367074 = require("./367074.js"),
  Chunk931118 = require("./931118.js"),
  Chunk283066 = require("./283066.js"),
  Chunk622909 = require("./622909.js"),
  Chunk639119 = require("./639119.js"),
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
let z = () => {
  (0, Chunk214852.z)(Chunk433811.X);
  let e = Chunk473749.useRef(null),
    t = Chunk473749.useRef(null),
    n = Chunk473749.useRef(null),
    a = Chunk473749.useRef(null),
    z = Chunk473749.useRef(null),
    q = Chunk473749.useRef(null),
    X = (0, Chunk442837.e7)([Chunk607070.Z], () => Chunk607070.Z.useReducedMotion),
    Q = (0, Chunk410030.ZP)(),
    J = (0, Chunk780384.wj)(Q),
    [$, ee] = Chunk473749.useState(false),
    [et, en] = Chunk473749.useState(false),
    [er, ei] = Chunk473749.useState(false),
    [ea, eo] = Chunk473749.useState(false),
    [es, el] = Chunk473749.useState(false),
    ec = (0, Chunk442837.e7)([Chunk78839.Z], () => Chunk78839.Z.getPremiumTypeSubscription()),
    eu = null != ec ? (0, Chunk74538.Af)(ec) : null,
    ed = null != eu ? Chunk74538.ZP.getSkuIdForPlan(eu.planId) : null,
    ef = null !== ed && ed !== Chunk474936.Si.TIER_2 ? Chunk474936.Si.TIER_2 : null,
    e_ = (0, Chunk367074.Vi)(),
    ep = null != e_ && e_,
    {
      analyticsLocations: eh
    } = (0, Chunk906732.ZP)(Chunk100527.Z.PREMIUM_MARKETING),
    em = (0, Chunk283066.Z)({
      location: "PremiumMarketing"
    }),
    eg = !$ && !er && (em || !et);
  Chunk473749.useEffect(() => {
    el(true)
  }, []);
  let eE = [Chunk664134.h.HOME, Chunk664134.h.WHATS_NEW, Chunk664134.h.BEST_OF_NITRO, Chunk664134.h.PLANS, Chunk664134.h.COMPARE],
    {
      navBarSections: eb,
      activeSectionId: ey
    } = (0, Chunk954003.O)(eE),
    {
      home: eO,
      whatsNew: ev,
      bestOfNitro: eI,
      plans: eT,
      compare: eS
    } = eb,
    eA = em ? Chunk379039 : Chunk810392,
    {
      variant: eC
    } = (0, Chunk931118.ZP)("PremiumBrandRefreshMarketingHeroHeading"),
    eN = (0, Chunk639119.N)(),
    eR = (0, Chunk622909.N)(),
    eP = Chunk431.Z.getAlmostExpiringTrialOffers([Chunk474936.Si.TIER_2]).length > 0 && null != eN && null != eN.expires_at && eN.trial_id !== Chunk474936.a7,
    eD = Chunk431.Z.getAlmostExpiringDiscountOffers([Chunk474936.Si.TIER_2]).length > 0 && null != eR && null != eR.expires_at,
    ew = eP ? eN.expires_at : eD ? eR.expires_at : null,
    eL = eC === Chunk931118.tE.HERO_COUNTDOWN && (eP || eD) && null != ew,
    ex = (0, Chunk54381.jsxs)("div", {
      className: o()(eA.container, eA.responsiveContainer, {
        [eA.containerBackground]: em || J,
        [Chunk379039.fadeInFromTop]: !X && em
      }),
      "data-cy": "tier-0-marketing-page",
      children: [em && (0, Chunk54381.jsxs)(Chunk54381.Fragment, {
        children: [(0, Chunk54381.jsx)(Chunk306066.Z, {
          className: o()(Chunk379039.topOfPageGradient, {
            [Chunk379039.topOfPageGradientWithCountdown]: eL
          })
        }), (0, Chunk54381.jsx)(Chunk457227.Z, {
          navBarSections: eb,
          activeSectionId: ey
        })]
      }), !em && (0, Chunk54381.jsxs)(Chunk54381.Fragment, {
        children: [(0, Chunk54381.jsx)("div", {
          className: Chunk810392.heroHeaderSideGradient
        }), (0, Chunk54381.jsx)("img", {
          src: Chunk107283,
          className: Chunk810392.heroHeaderBackgroundStars,
          alt: ""
        })]
      }), (0, Chunk54381.jsxs)("div", {
        className: eA.sectionsContainer,
        children: [(0, Chunk54381.jsx)("div", {
          className: eA.heroHeadingContainer,
          ref: eO.ref,
          children: (0, Chunk54381.jsx)(Chunk622535.$, {
            innerRef: Chunk120356,
            onChange: e => ee(e),
            threshold: 0,
            active: true,
            children: em ? (0, Chunk54381.jsx)(Chunk238649.Z, {
              ref: Chunk120356,
              subscriptionTier: ef,
              isEligibleForBogoPromotion: e_,
              offerExpiresAt: eL ? ew : null
            }) : (0, Chunk54381.jsx)(Chunk903250.Z, {
              ref: Chunk120356,
              subscriptionTier: ef,
              isDarkMode: J,
              isEligibleForBogoPromotion: e_,
              videoRef: exports
            })
          })
        }), e_ && (0, Chunk54381.jsx)("div", {
          className: eA.promoBannerContainer,
          children: (0, Chunk54381.jsx)(Chunk8647.Z, {
            variant: Chunk8647.C.APPLICATION_NITRO_HOME
          })
        }), (0, Chunk54381.jsx)("div", {
          className: eA.whatsNewSectionContainer,
          ref: ev.ref,
          children: (0, Chunk54381.jsx)(Chunk611116.g, {
            shouldLoadVideo: es,
            isReducedMotion: X,
            enablePremiumBrandRefreshDesign: em
          })
        }), (0, Chunk54381.jsx)("div", {
          className: eA.bestOfNitroSectionContainer,
          ref: eI.ref,
          children: (0, Chunk54381.jsx)(Chunk611116.G_, {
            shouldLoadVideo: es,
            isReducedMotion: X,
            enablePremiumBrandRefreshDesign: em
          })
        }), (0, Chunk54381.jsx)("div", {
          className: eA.premiumTierCardsContainer,
          ref: eT.ref,
          children: (0, Chunk54381.jsx)(Chunk622535.$, {
            innerRef: require,
            onChange: e => ei(e),
            threshold: .1,
            active: true,
            children: em ? (0, Chunk54381.jsx)(Chunk744129.rz, {
              innerRef: require
            }) : (0, Chunk54381.jsx)(Chunk823188.Ub, {
              innerRef: require,
              hasActiveTier2PremiumPromotion: ep
            })
          })
        }), (0, Chunk54381.jsx)("div", {
          className: eA.planComparisonTableContainer,
          ref: eS.ref,
          children: em ? (0, Chunk54381.jsx)(Chunk975978.Z, {}) : (0, Chunk54381.jsx)(Chunk8231.Z, {})
        })]
      }), !em && (0, Chunk54381.jsx)(Chunk349803.Z, {
        isVisible: eg && es,
        subscriptionTier: ef,
        isApplicationHome: true,
        isEligibleForBogoPromotion: e_
      }), (0, Chunk54381.jsx)(Chunk622535.$, {
        innerRef: z,
        onChange: e => {
          e && !ea && (b.default.track(V.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
            location_stack: eh
          }), eo(true))
        },
        children: (0, Chunk54381.jsx)("div", {
          ref: z,
          className: eA.bottomOfPageVisibilitySensor
        })
      }), (0, Chunk54381.jsx)(Chunk622535.$, {
        innerRef: q,
        onChange: e => {
          en(e)
        },
        children: em ? (0, Chunk54381.jsx)(Chunk864879.Z, {
          ref: q
        }) : (0, Chunk54381.jsx)(Chunk836332.Z, {
          ref: q,
          isFooterVisible: et,
          isDarkMode: J,
          isReducedMotion: X,
          subscriptionTier: ef
        })
      }), em && (0, Chunk54381.jsxs)(Chunk54381.Fragment, {
        children: [(0, Chunk54381.jsx)(Chunk47840.Z, {
          isVisible: eg && es,
          subscriptionTier: ef,
          isEligibleForBogoPromotion: e_
        }), (0, Chunk54381.jsx)(Chunk306066.Z, {
          className: Chunk379039.bottomOfPageGradient
        })]
      })]
    });
  return (0, Chunk54381.jsx)(Chunk481060.f6W, {
    theme: em ? Chunk231338.BR.DARKER : Q,
    children: t => (0, r.jsx)(u.yWw, {
      className: o()(eA.scroller, t),
      ref: e,
      children: ex
    })
  })
}