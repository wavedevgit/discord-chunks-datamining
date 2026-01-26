/** Chunk was on web.js **/
/** chunk id: 600487, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => J
}), require("./896048.js"), require("./680155.js"), require("./323874.js"), require("./14289.js"), require("./35956.js"), require("./747238.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk960488 = require("./960488.js"),
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
  Chunk57978 = require("./57978.jsx"),
  Chunk694195 = require("./694195.js"),
  Chunk716442 = require("./716442.js"),
  Chunk704877 = require("./704877.jsx"),
  Chunk788868 = require("./788868.js"),
  Chunk652215 = require("./652215.js"),
  Chunk818348 = require("./818348.js"),
  Chunk549447 = require("./549447.js"),
  Chunk66283 = require("./66283.js"),
  Chunk122402 = require("./122402.js");
let X = "section",
  Q = "orbs",
  J = () => {
    let e = (0, o.zy)();
    (0, g.P)(m.b);
    let t = i.useRef(null),
      n = i.useRef(null),
      a = i.useRef(null),
      J = i.useRef(null),
      $ = i.useRef(null),
      ee = i.useRef(null),
      et = (0, l.bG)([p.A], () => p.A.useReducedMotion),
      en = (0, f.Ay)(),
      er = (0, u.Mw)(en),
      [ei, ea] = i.useState(false),
      [es, eo] = i.useState(false),
      [el, ec] = i.useState(false),
      [eu, ed] = i.useState(false),
      [ef, ep] = i.useState(false),
      e_ = (0, l.bG)([E.A], () => E.A.getPremiumTypeSubscription()),
      eh = null != e_ ? (0, O.EL)(e_) : null,
      em = null != eh ? O.Ay.getSkuIdForPlan(eh.planId) : null,
      eg = null !== em && em !== Y.pe.TIER_2 ? Y.pe.TIER_2 : null,
      eE = (0, v.cg)(),
      ey = null != eE && eE,
      {
        analyticsLocations: eb
      } = (0, h.Ay)(_.A.PREMIUM_MARKETING),
      eO = (0, I.A)({
        location: "PremiumMarketing"
      }),
      ev = !ei && !el && (eO || !es);
    i.useEffect(() => {
      ep(true)
    }, []), i.useEffect(() => {
      if (!ef || new URLSearchParams(e.search).get(X) !== Q) return;
      let t = requestAnimationFrame(() => {
        let e = document.getElementById(V.NI.ORB_REWARDS);
        null != e && e.scrollIntoView({
          behavior: et ? "auto" : "smooth",
          block: "start"
        })
      });
      return () => cancelAnimationFrame(t)
    }, [e.search, ef, et]);
    let eA = [B.k.HOME, B.k.WHATS_NEW, B.k.BEST_OF_NITRO, B.k.PLANS, B.k.COMPARE],
      {
        navBarSections: eI,
        activeSectionId: eS
      } = (0, F.o)(eA),
      {
        home: eT,
        whatsNew: eC,
        bestOfNitro: eN,
        plans: ew,
        compare: eR
      } = eI,
      eP = eO ? z : q,
      {
        variant: eD
      } = (0, A.Ay)("PremiumBrandRefreshMarketingHeroHeading"),
      ex = (0, T.V)(),
      eL = (0, S.O)(),
      ej = y.A.getAlmostExpiringTrialOffers([Y.pe.TIER_2]).length > 0 && null != ex && null != ex.expires_at && ex.trial_id !== Y.Dw,
      eM = y.A.getAlmostExpiringDiscountOffers([Y.pe.TIER_2]).length > 0 && null != eL && null != eL.expires_at,
      ek = ej ? ex.expires_at : eM ? eL.expires_at : null,
      eU = eD === A.CJ.HERO_COUNTDOWN && (ej || eM) && null != ek,
      eG = (0, r.jsxs)("div", {
        className: s()(eP.container, eP.responsiveContainer, {
          [eP.containerBackground]: eO || er,
          [z.fadeInFromTop]: !et && eO
        }),
        "data-cy": "tier-0-marketing-page",
        children: [eO && (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(P.A, {
            className: s()(z.topOfPageGradient, {
              [z.topOfPageGradientWithCountdown]: eU
            })
          }), (0, r.jsx)(H.A, {
            navBarSections: eI,
            activeSectionId: eS
          })]
        }), !eO && (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)("div", {
            className: q.heroHeaderSideGradient
          }), (0, r.jsx)("img", {
            src: Z,
            className: q.heroHeaderBackgroundStars,
            alt: ""
          })]
        }), (0, r.jsxs)("div", {
          className: eP.sectionsContainer,
          children: [(0, r.jsx)("div", {
            className: eP.heroHeadingContainer,
            ref: eT.ref,
            children: (0, r.jsx)(c.L, {
              innerRef: J,
              onChange: e => ea(e),
              threshold: 0,
              active: true,
              children: eO ? (0, r.jsx)(j.A, {
                ref: J,
                subscriptionTier: eg,
                isEligibleForBogoPromotion: eE,
                offerExpiresAt: eU ? ek : null
              }) : (0, r.jsx)(G.A, {
                ref: J,
                subscriptionTier: eg,
                isDarkMode: er,
                isEligibleForBogoPromotion: eE,
                videoRef: n
              })
            })
          }), eE && (0, r.jsx)("div", {
            className: eP.promoBannerContainer,
            children: (0, r.jsx)(C.A, {
              variant: C.c.APPLICATION_NITRO_HOME
            })
          }), (0, r.jsx)("div", {
            className: eP.whatsNewSectionContainer,
            ref: eC.ref,
            children: (0, r.jsx)(R.Ct, {
              shouldLoadVideo: ef,
              isReducedMotion: et,
              enablePremiumBrandRefreshDesign: eO
            })
          }), (0, r.jsx)("div", {
            className: eP.bestOfNitroSectionContainer,
            ref: eN.ref,
            children: (0, r.jsx)(R.oO, {
              shouldLoadVideo: ef,
              isReducedMotion: et,
              enablePremiumBrandRefreshDesign: eO
            })
          }), (0, r.jsx)("div", {
            className: eP.premiumTierCardsContainer,
            ref: ew.ref,
            children: (0, r.jsx)(c.L, {
              innerRef: a,
              onChange: e => ec(e),
              threshold: .1,
              active: true,
              children: eO ? (0, r.jsx)(N.hy, {
                innerRef: a
              }) : (0, r.jsx)(w.jP, {
                innerRef: a,
                hasActiveTier2PremiumPromotion: ey
              })
            })
          }), (0, r.jsx)("div", {
            className: eP.planComparisonTableContainer,
            ref: eR.ref,
            children: eO ? (0, r.jsx)(k.A, {}) : (0, r.jsx)(x.A, {})
          })]
        }), !eO && (0, r.jsx)(D.A, {
          isVisible: ev && ef,
          subscriptionTier: eg,
          isApplicationHome: true,
          isEligibleForBogoPromotion: eE
        }), (0, r.jsx)(c.L, {
          innerRef: $,
          onChange: e => {
            e && !eu && (b.default.track(W.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
              location_stack: eb
            }), ed(true))
          },
          children: (0, r.jsx)("div", {
            ref: $,
            className: eP.bottomOfPageVisibilitySensor
          })
        }), (0, r.jsx)(c.L, {
          innerRef: ee,
          onChange: e => {
            eo(e)
          },
          children: eO ? (0, r.jsx)(L.A, {
            ref: ee
          }) : (0, r.jsx)(U.A, {
            ref: ee,
            isFooterVisible: es,
            isDarkMode: er,
            isReducedMotion: et,
            subscriptionTier: eg
          })
        }), eO && (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(M.A, {
            isVisible: ev && ef,
            subscriptionTier: eg,
            isEligibleForBogoPromotion: eE
          }), (0, r.jsx)(P.A, {
            className: z.bottomOfPageGradient
          })]
        })]
      });
    return (0, r.jsx)(d.NPJ, {
      theme: eO ? K.NJ.DARKER : en,
      children: e => (0, r.jsx)(d.GtU, {
        className: s()(eP.scroller, e),
        ref: t,
        children: eG
      })
    })
  }