/** Chunk was on web.js **/
/** chunk id: 600487, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => q
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk230109 = require("./230109.js"),
  Chunk582754 = require("./582754.js"),
  Chunk397927 = require("./397927.js"),
  Chunk736653 = require("./736653.js"),
  Chunk775602 = require("./775602.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk726649 = require("./726649.js"),
  Chunk611924 = require("./611924.js"),
  Chunk166403 = require("./166403.js"),
  Chunk816733 = require("./816733.js"),
  Chunk954571 = require("./954571.js"),
  Chunk927578 = require("./927578.js"),
  Chunk40185 = require("./40185.js"),
  Chunk804412 = require("./804412.js"),
  Chunk170887 = require("./170887.js"),
  Chunk422936 = require("./422936.js"),
  Chunk234419 = require("./234419.js"),
  Chunk130946 = require("./130946.jsx"),
  Chunk407775 = require("./407775.jsx"),
  Chunk501007 = require("./501007.jsx"),
  Chunk26010 = require("./26010.jsx"),
  Chunk54009 = require("./54009.jsx"),
  Chunk252711 = require("./252711.jsx"),
  Chunk584767 = require("./584767.jsx"),
  Chunk191430 = require("./191430.jsx"),
  Chunk475805 = require("./475805.jsx"),
  Chunk564230 = require("./564230.jsx"),
  Chunk974005 = require("./974005.jsx"),
  Chunk305714 = require("./305714.jsx"),
  Chunk658137 = require("./658137.jsx"),
  Chunk694195 = require("./694195.js"),
  Chunk716442 = require("./716442.js"),
  Chunk704877 = require("./704877.jsx"),
  Chunk788868 = require("./788868.js"),
  Chunk652215 = require("./652215.js"),
  Chunk818348 = require("./818348.js"),
  Chunk549447 = require("./549447.js"),
  Chunk66283 = require("./66283.js"),
  Chunk122402 = require("./122402.js");
let q = () => {
  (0, m.P)(h.b);
  let e = i.useRef(null),
    t = i.useRef(null),
    n = i.useRef(null),
    a = i.useRef(null),
    q = i.useRef(null),
    X = i.useRef(null),
    Z = (0, o.bG)([f.A], () => f.A.useReducedMotion),
    Q = (0, d.Ay)(),
    $ = (0, c.Mw)(Q),
    [J, ee] = i.useState(false),
    [et, en] = i.useState(false),
    [er, ei] = i.useState(false),
    [ea, es] = i.useState(false),
    [eo, el] = i.useState(false),
    ec = (0, o.bG)([g.A], () => g.A.getPremiumTypeSubscription()),
    eu = null != ec ? (0, b.EL)(ec) : null,
    ed = null != eu ? b.Ay.getSkuIdForPlan(eu.planId) : null,
    ef = null !== ed && ed !== B.pe.TIER_2 ? B.pe.TIER_2 : null,
    ep = (0, O.cg)(),
    e_ = null != ep && ep,
    {
      analyticsLocations: eh
    } = (0, _.Ay)(p.A.PREMIUM_MARKETING),
    em = (0, A.A)({
      location: "PremiumMarketing"
    }),
    eg = !J && !er && (em || !et);
  i.useEffect(() => {
    el(true)
  }, []);
  let eE = [V.k.HOME, V.k.WHATS_NEW, V.k.BEST_OF_NITRO, V.k.PLANS, V.k.COMPARE],
    {
      navBarSections: ey,
      activeSectionId: eb
    } = (0, G.o)(eE),
    {
      home: eO,
      whatsNew: ev,
      bestOfNitro: eA,
      plans: eI,
      compare: eS
    } = ey,
    eT = em ? W : K,
    {
      variant: eC
    } = (0, v.Ay)("PremiumBrandRefreshMarketingHeroHeading"),
    eN = (0, S.V)(),
    eR = (0, I.O)(),
    ew = E.A.getAlmostExpiringTrialOffers([B.pe.TIER_2]).length > 0 && null != eN && null != eN.expires_at && eN.trial_id !== B.Dw,
    eP = E.A.getAlmostExpiringDiscountOffers([B.pe.TIER_2]).length > 0 && null != eR && null != eR.expires_at,
    eD = ew ? eN.expires_at : eP ? eR.expires_at : null,
    ex = eC === v.CJ.HERO_COUNTDOWN && (ew || eP) && null != eD,
    eL = (0, r.jsxs)("div", {
      className: s()(eT.container, eT.responsiveContainer, {
        [eT.containerBackground]: em || $,
        [W.fadeInFromTop]: !Z && em
      }),
      "data-cy": "tier-0-marketing-page",
      children: [em && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(w.A, {
          className: s()(W.topOfPageGradient, {
            [W.topOfPageGradientWithCountdown]: ex
          })
        }), (0, r.jsx)(F.A, {
          navBarSections: ey,
          activeSectionId: eb
        })]
      }), !em && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)("div", {
          className: K.heroHeaderSideGradient
        }), (0, r.jsx)("img", {
          src: z,
          className: K.heroHeaderBackgroundStars,
          alt: ""
        })]
      }), (0, r.jsxs)("div", {
        className: eT.sectionsContainer,
        children: [(0, r.jsx)("div", {
          className: eT.heroHeadingContainer,
          ref: eO.ref,
          children: (0, r.jsx)(l.L, {
            innerRef: a,
            onChange: e => ee(e),
            threshold: 0,
            active: true,
            children: em ? (0, r.jsx)(L.A, {
              ref: a,
              subscriptionTier: ef,
              isEligibleForBogoPromotion: ep,
              offerExpiresAt: ex ? eD : null
            }) : (0, r.jsx)(U.A, {
              ref: a,
              subscriptionTier: ef,
              isDarkMode: $,
              isEligibleForBogoPromotion: ep,
              videoRef: t
            })
          })
        }), ep && (0, r.jsx)("div", {
          className: eT.promoBannerContainer,
          children: (0, r.jsx)(T.A, {
            variant: T.c.APPLICATION_NITRO_HOME
          })
        }), (0, r.jsx)("div", {
          className: eT.whatsNewSectionContainer,
          ref: ev.ref,
          children: (0, r.jsx)(R.Ct, {
            shouldLoadVideo: eo,
            isReducedMotion: Z,
            enablePremiumBrandRefreshDesign: em
          })
        }), (0, r.jsx)("div", {
          className: eT.bestOfNitroSectionContainer,
          ref: eA.ref,
          children: (0, r.jsx)(R.oO, {
            shouldLoadVideo: eo,
            isReducedMotion: Z,
            enablePremiumBrandRefreshDesign: em
          })
        }), (0, r.jsx)("div", {
          className: eT.premiumTierCardsContainer,
          ref: eI.ref,
          children: (0, r.jsx)(l.L, {
            innerRef: n,
            onChange: e => ei(e),
            threshold: .1,
            active: true,
            children: em ? (0, r.jsx)(C.hy, {
              innerRef: n
            }) : (0, r.jsx)(N.jP, {
              innerRef: n,
              hasActiveTier2PremiumPromotion: e_
            })
          })
        }), (0, r.jsx)("div", {
          className: eT.planComparisonTableContainer,
          ref: eS.ref,
          children: em ? (0, r.jsx)(M.A, {}) : (0, r.jsx)(D.A, {})
        })]
      }), !em && (0, r.jsx)(P.A, {
        isVisible: eg && eo,
        subscriptionTier: ef,
        isApplicationHome: true,
        isEligibleForBogoPromotion: ep
      }), (0, r.jsx)(l.L, {
        innerRef: q,
        onChange: e => {
          e && !ea && (y.default.track(H.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
            location_stack: eh
          }), es(true))
        },
        children: (0, r.jsx)("div", {
          ref: q,
          className: eT.bottomOfPageVisibilitySensor
        })
      }), (0, r.jsx)(l.L, {
        innerRef: X,
        onChange: e => {
          en(e)
        },
        children: em ? (0, r.jsx)(x.A, {
          ref: X
        }) : (0, r.jsx)(k.A, {
          ref: X,
          isFooterVisible: et,
          isDarkMode: $,
          isReducedMotion: Z,
          subscriptionTier: ef
        })
      }), em && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(j.A, {
          isVisible: eg && eo,
          subscriptionTier: ef,
          isEligibleForBogoPromotion: ep
        }), (0, r.jsx)(w.A, {
          className: W.bottomOfPageGradient
        })]
      })]
    });
  return (0, r.jsx)(u.NPJ, {
    theme: em ? Y.NJ.DARKER : Q,
    children: t => (0, r.jsx)(u.GtU, {
      className: s()(eT.scroller, t),
      ref: e,
      children: eL
    })
  })
}