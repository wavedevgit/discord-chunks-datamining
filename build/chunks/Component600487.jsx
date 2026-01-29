/** Chunk was on 5606 **/
/** chunk id: 600487, original params: e,t,n (module,exports,require) **/
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
let K = () => {
  let e = (0, a.zy)();
  (0, b.P)(f.b);
  let t = i.useRef(null),
    n = i.useRef(null),
    l = i.useRef(null),
    K = i.useRef(null),
    z = i.useRef(null),
    Z = i.useRef(null),
    q = (0, o.bG)([_.A], () => _.A.useReducedMotion),
    X = (0, p.Ay)(),
    J = (0, d.Mw)(X),
    [Q, $] = i.useState(false),
    [ee, et] = i.useState(false),
    [en, er] = i.useState(false),
    [ei, el] = i.useState(false),
    [es, ea] = i.useState(false),
    eo = (0, o.bG)([h.A], () => h.A.getPremiumTypeSubscription()),
    ec = null != eo ? (0, E.EL)(eo) : null,
    ed = null != ec ? E.Ay.getSkuIdForPlan(ec.planId) : null,
    eu = null !== ed && ed !== H.pe.TIER_2 ? H.pe.TIER_2 : null,
    ep = (0, x.cg)(),
    e_ = null != ep && ep,
    {
      analyticsLocations: em
    } = (0, g.Ay)(m.A.PREMIUM_MARKETING),
    eg = (0, O.A)({
      location: "PremiumMarketing"
    }),
    ef = !Q && !en && (eg || !ee);
  i.useEffect(() => {
    ea(true)
  }, []), i.useEffect(() => {
    if (!es || "orbs" !== new URLSearchParams(e.search).get("section")) return;
    let t = requestAnimationFrame(() => {
      let e = document.getElementById(M.NI.ORB_REWARDS);
      null != e && e.scrollIntoView({
        behavior: q ? "auto" : "smooth",
        block: "start"
      })
    });
    return () => cancelAnimationFrame(t)
  }, [e.search, es, q]);
  let eb = [U.k.HOME, U.k.WHATS_NEW, U.k.BEST_OF_NITRO, U.k.PLANS, U.k.COMPARE],
    {
      navBarSections: eh,
      activeSectionId: eA
    } = (0, G.o)(eb),
    {
      home: eE,
      whatsNew: ex,
      bestOfNitro: eO,
      plans: eC,
      compare: ey
    } = eh,
    ej = eg ? F : Y,
    eT = (0, r.jsxs)("div", {
      className: s()(ej.container, ej.responsiveContainer, {
        [ej.containerBackground]: eg || J,
        [F.fadeInFromTop]: !q && eg
      }),
      "data-cy": "tier-0-marketing-page",
      children: [eg && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(v.A, {
          className: F.topOfPageGradient
        }), (0, r.jsx)(k.A, {
          navBarSections: eh,
          activeSectionId: eA
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
        className: ej.sectionsContainer,
        children: [(0, r.jsx)("div", {
          className: ej.heroHeadingContainer,
          ref: eE.ref,
          children: (0, r.jsx)(c.L, {
            innerRef: K,
            onChange: e => $(e),
            threshold: 0,
            active: true,
            children: eg ? (0, r.jsx)(P.A, {
              ref: K,
              subscriptionTier: eu,
              isEligibleForBogoPromotion: ep
            }) : (0, r.jsx)(L.A, {
              ref: K,
              subscriptionTier: eu,
              isDarkMode: J,
              isEligibleForBogoPromotion: ep,
              videoRef: n
            })
          })
        }), ep && (0, r.jsx)("div", {
          className: ej.promoBannerContainer,
          children: (0, r.jsx)(C.A, {
            variant: C.c.APPLICATION_NITRO_HOME
          })
        }), (0, r.jsx)("div", {
          className: ej.whatsNewSectionContainer,
          ref: ex.ref,
          children: (0, r.jsx)(T.Ct, {
            shouldLoadVideo: es,
            isReducedMotion: q,
            enablePremiumBrandRefreshDesign: eg
          })
        }), (0, r.jsx)("div", {
          className: ej.bestOfNitroSectionContainer,
          ref: eO.ref,
          children: (0, r.jsx)(T.oO, {
            shouldLoadVideo: es,
            isReducedMotion: q,
            enablePremiumBrandRefreshDesign: eg
          })
        }), (0, r.jsx)("div", {
          className: ej.premiumTierCardsContainer,
          ref: eC.ref,
          children: (0, r.jsx)(c.L, {
            innerRef: l,
            onChange: e => er(e),
            threshold: .1,
            active: true,
            children: eg ? (0, r.jsx)(y.hy, {
              innerRef: l
            }) : (0, r.jsx)(j.jP, {
              innerRef: l,
              hasActiveTier2PremiumPromotion: e_
            })
          })
        }), (0, r.jsx)("div", {
          className: ej.planComparisonTableContainer,
          ref: ey.ref,
          children: eg ? (0, r.jsx)(D.A, {}) : (0, r.jsx)(I.A, {})
        })]
      }), !eg && (0, r.jsx)(S.A, {
        isVisible: ef && es,
        subscriptionTier: eu,
        isApplicationHome: true,
        isEligibleForBogoPromotion: ep
      }), (0, r.jsx)(c.L, {
        innerRef: z,
        onChange: e => {
          e && !ei && (A.default.track(B.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
            location_stack: em
          }), el(true))
        },
        children: (0, r.jsx)("div", {
          ref: z,
          className: ej.bottomOfPageVisibilitySensor
        })
      }), (0, r.jsx)(c.L, {
        innerRef: Z,
        onChange: e => {
          et(e)
        },
        children: eg ? (0, r.jsx)(N.A, {
          ref: Z
        }) : (0, r.jsx)(w.A, {
          ref: Z,
          isFooterVisible: ee,
          isDarkMode: J,
          isReducedMotion: q,
          subscriptionTier: eu
        })
      }), eg && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(R.A, {
          isVisible: ef && es,
          subscriptionTier: eu,
          isEligibleForBogoPromotion: ep
        }), (0, r.jsx)(v.A, {
          className: F.bottomOfPageGradient
        })]
      })]
    });
  return (0, r.jsx)(u.NPJ, {
    theme: eg ? V.NJ.DARKER : X,
    children: e => (0, r.jsx)(u.GtU, {
      className: s()(ej.scroller, e),
      ref: t,
      children: eT
    })
  })
}