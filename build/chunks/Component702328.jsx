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
  Chunk759675 = require("./759675.js"),
  Chunk197874 = require("./197874.js"),
  Chunk107283 = require("./107283.js");
let z = () => {
  (0, m.z)(h.X);
  let e = i.useRef(null),
    t = i.useRef(null),
    n = i.useRef(null),
    a = i.useRef(null),
    z = i.useRef(null),
    q = i.useRef(null),
    Q = (0, s.e7)([f.Z], () => f.Z.useReducedMotion),
    X = (0, d.ZP)(),
    J = (0, c.wj)(X),
    [$, ee] = i.useState(false),
    [et, en] = i.useState(false),
    [er, ei] = i.useState(false),
    [ea, eo] = i.useState(false),
    [es, el] = i.useState(false),
    ec = (0, s.e7)([g.Z], () => g.Z.getPremiumTypeSubscription()),
    eu = null != ec ? (0, y.Af)(ec) : null,
    ed = null != eu ? y.ZP.getSkuIdForPlan(eu.planId) : null,
    ef = null !== ed && ed !== B.Si.TIER_2 ? B.Si.TIER_2 : null,
    ep = (0, O.Vi)(),
    e_ = null != ep && ep,
    {
      analyticsLocations: eh
    } = (0, _.ZP)(p.Z.PREMIUM_MARKETING),
    em = (0, S.Z)({
      location: "PremiumMarketing"
    }),
    eg = !$ && !er && (em || !et);
  i.useEffect(() => {
    el(true)
  }, []);
  let eE = [Z.h.HOME, Z.h.WHATS_NEW, Z.h.BEST_OF_NITRO, Z.h.PLANS, Z.h.COMPARE],
    {
      navBarSections: eb,
      activeSectionId: ey
    } = (0, G.O)(eE),
    {
      home: eO,
      whatsNew: ev,
      bestOfNitro: eS,
      plans: eI,
      compare: eT
    } = eb,
    eC = em ? Y : W,
    {
      variant: eA
    } = (0, v.ZP)("PremiumBrandRefreshMarketingHeroHeading"),
    eN = (0, T.N)(),
    eP = (0, I.N)(),
    ew = E.Z.getAlmostExpiringTrialOffers([B.Si.TIER_2]).length > 0 && null != eN && null != eN.expires_at && eN.trial_id !== B.a7,
    eR = E.Z.getAlmostExpiringDiscountOffers([B.Si.TIER_2]).length > 0 && null != eP && null != eP.expires_at,
    eD = ew ? eN.expires_at : eR ? eP.expires_at : null,
    ex = eA === v.tE.HERO_COUNTDOWN && (ew || eR) && null != eD,
    eL = (0, r.jsxs)("div", {
      className: o()(eC.container, eC.responsiveContainer, {
        [eC.containerBackground]: em || J,
        [Y.fadeInFromTop]: !Q && em
      }),
      "data-cy": "tier-0-marketing-page",
      children: [em && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(w.Z, {
          className: o()(Y.topOfPageGradient, {
            [Y.topOfPageGradientWithCountdown]: ex
          })
        }), (0, r.jsx)(F.Z, {
          navBarSections: eb,
          activeSectionId: ey
        })]
      }), !em && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)("div", {
          className: W.heroHeaderSideGradient
        }), (0, r.jsx)("img", {
          src: K,
          className: W.heroHeaderBackgroundStars,
          alt: ""
        })]
      }), (0, r.jsxs)("div", {
        className: eC.sectionsContainer,
        children: [(0, r.jsx)("div", {
          className: eC.heroHeadingContainer,
          ref: eO.ref,
          children: (0, r.jsx)(l.$, {
            innerRef: a,
            onChange: e => ee(e),
            threshold: 0,
            active: true,
            children: em ? (0, r.jsx)(L.Z, {
              ref: a,
              subscriptionTier: ef,
              isEligibleForBogoPromotion: ep,
              offerExpiresAt: ex ? eD : null
            }) : (0, r.jsx)(U.Z, {
              ref: a,
              subscriptionTier: ef,
              isDarkMode: J,
              isEligibleForBogoPromotion: ep,
              videoRef: t
            })
          })
        }), ep && (0, r.jsx)("div", {
          className: eC.promoBannerContainer,
          children: (0, r.jsx)(C.Z, {
            variant: C.C.APPLICATION_NITRO_HOME
          })
        }), (0, r.jsx)("div", {
          className: eC.whatsNewSectionContainer,
          ref: ev.ref,
          children: (0, r.jsx)(P.g, {
            shouldLoadVideo: es,
            isReducedMotion: Q,
            enablePremiumBrandRefreshDesign: em
          })
        }), (0, r.jsx)("div", {
          className: eC.bestOfNitroSectionContainer,
          ref: eS.ref,
          children: (0, r.jsx)(P.G_, {
            shouldLoadVideo: es,
            isReducedMotion: Q,
            enablePremiumBrandRefreshDesign: em
          })
        }), (0, r.jsx)("div", {
          className: eC.premiumTierCardsContainer,
          ref: eI.ref,
          children: (0, r.jsx)(l.$, {
            innerRef: n,
            onChange: e => ei(e),
            threshold: .1,
            active: true,
            children: em ? (0, r.jsx)(A.rz, {
              innerRef: n
            }) : (0, r.jsx)(N.Ub, {
              innerRef: n,
              hasActiveTier2PremiumPromotion: e_
            })
          })
        }), (0, r.jsx)("div", {
          className: eC.planComparisonTableContainer,
          ref: eT.ref,
          children: em ? (0, r.jsx)(M.Z, {}) : (0, r.jsx)(D.Z, {})
        })]
      }), !em && (0, r.jsx)(R.Z, {
        isVisible: eg && es,
        subscriptionTier: ef,
        isApplicationHome: true,
        isEligibleForBogoPromotion: ep
      }), (0, r.jsx)(l.$, {
        innerRef: z,
        onChange: e => {
          e && !ea && (b.default.track(V.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
            location_stack: eh
          }), eo(true))
        },
        children: (0, r.jsx)("div", {
          ref: z,
          className: eC.bottomOfPageVisibilitySensor
        })
      }), (0, r.jsx)(l.$, {
        innerRef: q,
        onChange: e => {
          en(e)
        },
        children: em ? (0, r.jsx)(x.Z, {
          ref: q
        }) : (0, r.jsx)(k.Z, {
          ref: q,
          isFooterVisible: et,
          isDarkMode: J,
          isReducedMotion: Q,
          subscriptionTier: ef
        })
      }), em && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(j.Z, {
          isVisible: eg && es,
          subscriptionTier: ef,
          isEligibleForBogoPromotion: ep
        }), (0, r.jsx)(w.Z, {
          className: Y.bottomOfPageGradient
        })]
      })]
    });
  return (0, r.jsx)(u.f6W, {
    theme: em ? H.BR.DARKER : X,
    children: t => (0, r.jsx)(u.yWw, {
      className: o()(eC.scroller, t),
      ref: e,
      children: eL
    })
  })
}