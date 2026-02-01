/** Chunk was on 9207 **/
/** chunk id: 421116, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => K
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
  Chunk954571 = require("./954571.js"),
  Chunk927578 = require("./927578.js"),
  Chunk40185 = require("./40185.js"),
  Chunk170887 = require("./170887.js"),
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
  Chunk927258 = require("./927258.jsx"),
  Chunk57978 = require("./57978.jsx"),
  Chunk694195 = require("./694195.js"),
  Chunk716442 = require("./716442.js"),
  Chunk788868 = require("./788868.js"),
  Chunk652215 = require("./652215.js"),
  Chunk818348 = require("./818348.js"),
  Chunk549447 = require("./549447.js"),
  Chunk157650 = require("./157650.js"),
  Chunk122402 = require("./122402.js");
let K = () => {
  let e = (0, a.zy)();
  (0, f.P)(A.b);
  let t = i.useRef(null),
    n = i.useRef(null),
    l = i.useRef(null),
    K = i.useRef(null),
    z = i.useRef(null),
    Z = i.useRef(null),
    X = (0, o.bG)([p.A], () => p.A.useReducedMotion),
    q = (0, _.Ay)(),
    J = (0, d.Mw)(q),
    [Q, $] = i.useState(false),
    [ee, et] = i.useState(false),
    [en, er] = i.useState(false),
    [ei, el] = i.useState(false),
    [es, ea] = i.useState(false),
    eo = (0, o.bG)([b.A], () => b.A.getPremiumTypeSubscription()),
    ec = null != eo ? (0, E.EL)(eo) : null,
    ed = null != ec ? E.Ay.getSkuIdForPlan(ec.planId) : null,
    eu = null !== ed && ed !== B.pe.TIER_2 ? B.pe.TIER_2 : null,
    e_ = (0, O.cg)(),
    ep = null != e_ && e_,
    {
      analyticsLocations: em
    } = (0, g.Ay)(m.A.PREMIUM_MARKETING),
    eg = (0, x.A)({
      location: "PremiumMarketing"
    }),
    eA = !Q && !en && (eg || !ee);
  i.useEffect(() => {
    ea(true)
  }, []), i.useEffect(() => {
    if (!es || "orbs" !== new URLSearchParams(e.search).get("section")) return;
    let t = requestAnimationFrame(() => {
      let e = document.getElementById(G.NI.ORB_REWARDS);
      null != e && e.scrollIntoView({
        behavior: X ? "auto" : "smooth",
        block: "start"
      })
    });
    return () => cancelAnimationFrame(t)
  }, [e.search, es, X]);
  let ef = [k.k.HOME, k.k.WHATS_NEW, k.k.BEST_OF_NITRO, k.k.PLANS, k.k.COMPARE],
    {
      navBarSections: eb,
      activeSectionId: eh
    } = (0, U.o)(ef),
    {
      home: eE,
      whatsNew: eO,
      bestOfNitro: ex,
      plans: eC,
      compare: eS
    } = eb,
    eT = eg ? F : Y,
    eI = (0, r.jsxs)("div", {
      className: s()(eT.container, eT.responsiveContainer, {
        [eT.containerBackground]: eg || J,
        [F.fadeInFromTop]: !X && eg
      }),
      "data-cy": "tier-0-marketing-page",
      children: [eg && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(N.A, {
          className: F.topOfPageGradient
        }), (0, r.jsx)(M.A, {
          navBarSections: eb,
          activeSectionId: eh
        })]
      }), !eg && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)("div", {
          className: Y.heroHeaderSideGradient
        }), (0, r.jsx)("img", {
          src: W,
          className: Y.heroHeaderBackgroundStars,
          alt: ""
        })]
      }), (0, r.jsxs)("div", {
        className: eT.sectionsContainer,
        children: [(0, r.jsx)("div", {
          className: eT.heroHeadingContainer,
          ref: eE.ref,
          children: (0, r.jsx)(c.L, {
            innerRef: K,
            onChange: e => $(e),
            threshold: 0,
            active: true,
            children: eg ? (0, r.jsx)(P.A, {
              ref: K,
              subscriptionTier: eu,
              isEligibleForBogoPromotion: e_
            }) : (0, r.jsx)(w.A, {
              ref: K,
              subscriptionTier: eu,
              isDarkMode: J,
              isEligibleForBogoPromotion: e_,
              videoRef: n
            })
          })
        }), e_ && (0, r.jsx)("div", {
          className: eT.promoBannerContainer,
          children: (0, r.jsx)(C.A, {
            variant: C.c.APPLICATION_NITRO_HOME
          })
        }), (0, r.jsx)("div", {
          className: eT.whatsNewSectionContainer,
          ref: eO.ref,
          children: (0, r.jsx)(I.Ct, {
            shouldLoadVideo: es,
            isReducedMotion: X,
            enablePremiumBrandRefreshDesign: eg
          })
        }), (0, r.jsx)("div", {
          className: eT.bestOfNitroSectionContainer,
          ref: ex.ref,
          children: (0, r.jsx)(I.oO, {
            shouldLoadVideo: es,
            isReducedMotion: X,
            enablePremiumBrandRefreshDesign: eg
          })
        }), (0, r.jsx)("div", {
          className: eT.premiumTierCardsContainer,
          ref: eC.ref,
          children: (0, r.jsx)(c.L, {
            innerRef: l,
            onChange: e => er(e),
            threshold: .1,
            active: true,
            children: eg ? (0, r.jsx)(S.hy, {
              innerRef: l
            }) : (0, r.jsx)(T.jP, {
              innerRef: l,
              hasActiveTier2PremiumPromotion: ep
            })
          })
        }), (0, r.jsx)("div", {
          className: eT.planComparisonTableContainer,
          ref: eS.ref,
          children: eg ? (0, r.jsx)(D.A, {}) : (0, r.jsx)(j.A, {})
        })]
      }), !eg && (0, r.jsx)(y.A, {
        isVisible: eA && es,
        subscriptionTier: eu,
        isApplicationHome: true,
        isEligibleForBogoPromotion: e_
      }), (0, r.jsx)(c.L, {
        innerRef: z,
        onChange: e => {
          e && !ei && (h.default.track(H.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
            location_stack: em
          }), el(true))
        },
        children: (0, r.jsx)("div", {
          ref: z,
          className: eT.bottomOfPageVisibilitySensor
        })
      }), (0, r.jsx)(c.L, {
        innerRef: Z,
        onChange: e => {
          et(e)
        },
        children: eg ? (0, r.jsx)(v.A, {
          ref: Z
        }) : (0, r.jsx)(L.A, {
          ref: Z,
          isFooterVisible: ee,
          isDarkMode: J,
          isReducedMotion: X,
          subscriptionTier: eu
        })
      }), eg && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(R.A, {
          isVisible: eA && es,
          subscriptionTier: eu,
          isEligibleForBogoPromotion: e_
        }), (0, r.jsx)(N.A, {
          className: F.bottomOfPageGradient
        })]
      })]
    });
  return (0, r.jsx)(u.NPJ, {
    theme: eg ? V.NJ.DARKER : q,
    children: e => (0, r.jsx)(u.GtU, {
      className: s()(eT.scroller, e),
      ref: t,
      children: eI
    })
  })
}