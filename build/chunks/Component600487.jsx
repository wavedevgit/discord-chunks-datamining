/** Chunk was on 60667 **/
/** chunk id: 600487, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => q
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
  Chunk927258 = require("./927258.jsx"),
  Chunk788868 = require("./788868.js"),
  Chunk652215 = require("./652215.js"),
  Chunk818348 = require("./818348.js"),
  Chunk549447 = require("./549447.js"),
  Chunk66283 = require("./66283.js"),
  Chunk122402 = require("./122402.js");
let q = () => {
  let e = (0, a.zy)();
  (0, f.P)(A.b);
  let t = i.useRef(null),
    n = i.useRef(null),
    l = i.useRef(null),
    q = i.useRef(null),
    J = i.useRef(null),
    Q = i.useRef(null),
    $ = (0, o.bG)([p.A], () => p.A.useReducedMotion),
    ee = (0, _.Ay)(),
    et = (0, d.Mw)(ee),
    [en, er] = i.useState(false),
    [ei, el] = i.useState(false),
    [es, ea] = i.useState(false),
    [eo, ec] = i.useState(false),
    [ed, eu] = i.useState(false),
    e_ = (0, o.bG)([h.A], () => h.A.getPremiumTypeSubscription()),
    ep = null != e_ ? (0, x.EL)(e_) : null,
    em = null != ep ? x.Ay.getSkuIdForPlan(ep.planId) : null,
    eg = null !== em && em !== Y.pe.TIER_2 ? Y.pe.TIER_2 : null,
    eA = (0, O.cg)(),
    ef = null != eA && eA,
    {
      analyticsLocations: eh
    } = (0, g.Ay)(m.A.PREMIUM_MARKETING),
    eb = (0, T.A)({
      location: "PremiumMarketing"
    }),
    eE = !en && !es && (eb || !ei);
  i.useEffect(() => {
    eu(true)
  }, []), i.useEffect(() => {
    if (!ed || "orbs" !== new URLSearchParams(e.search).get("section")) return;
    let t = requestAnimationFrame(() => {
      let e = document.getElementById(V.NI.ORB_REWARDS);
      null != e && e.scrollIntoView({
        behavior: $ ? "auto" : "smooth",
        block: "start"
      })
    });
    return () => cancelAnimationFrame(t)
  }, [e.search, ed, $]);
  let ex = [B.k.HOME, B.k.WHATS_NEW, B.k.BEST_OF_NITRO, B.k.PLANS, B.k.COMPARE],
    {
      navBarSections: eO,
      activeSectionId: eC
    } = (0, H.o)(ex),
    {
      home: eT,
      whatsNew: eI,
      bestOfNitro: eS,
      plans: ej,
      compare: ev
    } = eO,
    eN = eb ? K : Z,
    {
      variant: ey
    } = (0, C.Ay)("PremiumBrandRefreshMarketingHeroHeading"),
    eP = (0, S.V)(),
    eR = (0, I.O)(),
    eD = b.A.getAlmostExpiringTrialOffers([Y.pe.TIER_2]).length > 0 && null != eP && null != eP.expires_at && eP.trial_id !== Y.Dw,
    ew = b.A.getAlmostExpiringDiscountOffers([Y.pe.TIER_2]).length > 0 && null != eR && null != eR.expires_at,
    eL = eD ? eP.expires_at : ew ? eR.expires_at : null,
    eM = ey === C.CJ.HERO_COUNTDOWN && (eD || ew) && null != eL,
    eU = (0, r.jsxs)("div", {
      className: s()(eN.container, eN.responsiveContainer, {
        [eN.containerBackground]: eb || et,
        [K.fadeInFromTop]: !$ && eb
      }),
      "data-cy": "tier-0-marketing-page",
      children: [eb && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(P.A, {
          className: s()(K.topOfPageGradient, {
            [K.topOfPageGradientWithCountdown]: eM
          })
        }), (0, r.jsx)(F.A, {
          navBarSections: eO,
          activeSectionId: eC
        })]
      }), !eb && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)("div", {
          className: Z.heroHeaderSideGradient
        }), (0, r.jsx)("img", {
          src: X,
          className: Z.heroHeaderBackgroundStars,
          alt: ""
        })]
      }), (0, r.jsxs)("div", {
        className: eN.sectionsContainer,
        children: [(0, r.jsx)("div", {
          className: eN.heroHeadingContainer,
          ref: eT.ref,
          children: (0, r.jsx)(c.L, {
            innerRef: q,
            onChange: e => er(e),
            threshold: 0,
            active: true,
            children: eb ? (0, r.jsx)(L.A, {
              ref: q,
              subscriptionTier: eg,
              isEligibleForBogoPromotion: eA,
              offerExpiresAt: eM ? eL : null
            }) : (0, r.jsx)(k.A, {
              ref: q,
              subscriptionTier: eg,
              isDarkMode: et,
              isEligibleForBogoPromotion: eA,
              videoRef: n
            })
          })
        }), eA && (0, r.jsx)("div", {
          className: eN.promoBannerContainer,
          children: (0, r.jsx)(j.A, {
            variant: j.c.APPLICATION_NITRO_HOME
          })
        }), (0, r.jsx)("div", {
          className: eN.whatsNewSectionContainer,
          ref: eI.ref,
          children: (0, r.jsx)(y.Ct, {
            shouldLoadVideo: ed,
            isReducedMotion: $,
            enablePremiumBrandRefreshDesign: eb
          })
        }), (0, r.jsx)("div", {
          className: eN.bestOfNitroSectionContainer,
          ref: eS.ref,
          children: (0, r.jsx)(y.oO, {
            shouldLoadVideo: ed,
            isReducedMotion: $,
            enablePremiumBrandRefreshDesign: eb
          })
        }), (0, r.jsx)("div", {
          className: eN.premiumTierCardsContainer,
          ref: ej.ref,
          children: (0, r.jsx)(c.L, {
            innerRef: l,
            onChange: e => ea(e),
            threshold: .1,
            active: true,
            children: eb ? (0, r.jsx)(v.hy, {
              innerRef: l
            }) : (0, r.jsx)(N.jP, {
              innerRef: l,
              hasActiveTier2PremiumPromotion: ef
            })
          })
        }), (0, r.jsx)("div", {
          className: eN.planComparisonTableContainer,
          ref: ev.ref,
          children: eb ? (0, r.jsx)(U.A, {}) : (0, r.jsx)(D.A, {})
        })]
      }), !eb && (0, r.jsx)(R.A, {
        isVisible: eE && ed,
        subscriptionTier: eg,
        isApplicationHome: true,
        isEligibleForBogoPromotion: eA
      }), (0, r.jsx)(c.L, {
        innerRef: J,
        onChange: e => {
          e && !eo && (E.default.track(W.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
            location_stack: eh
          }), ec(true))
        },
        children: (0, r.jsx)("div", {
          ref: J,
          className: eN.bottomOfPageVisibilitySensor
        })
      }), (0, r.jsx)(c.L, {
        innerRef: Q,
        onChange: e => {
          el(e)
        },
        children: eb ? (0, r.jsx)(w.A, {
          ref: Q
        }) : (0, r.jsx)(G.A, {
          ref: Q,
          isFooterVisible: ei,
          isDarkMode: et,
          isReducedMotion: $,
          subscriptionTier: eg
        })
      }), eb && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(M.A, {
          isVisible: eE && ed,
          subscriptionTier: eg,
          isEligibleForBogoPromotion: eA
        }), (0, r.jsx)(P.A, {
          className: K.bottomOfPageGradient
        })]
      })]
    });
  return (0, r.jsx)(u.NPJ, {
    theme: eb ? z.NJ.DARKER : ee,
    children: e => (0, r.jsx)(u.GtU, {
      className: s()(eN.scroller, e),
      ref: t,
      children: eU
    })
  })
}