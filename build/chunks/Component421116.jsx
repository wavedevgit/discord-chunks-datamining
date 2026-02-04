/** Chunk was on 9207 **/
/** chunk id: 421116, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => Z
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
  Chunk994763 = require("./994763.js"),
  Chunk130946 = require("./130946.jsx"),
  Chunk84483 = require("./84483.js"),
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
let Z = () => {
  let e = (0, a.zy)();
  (0, f.P)(A.b);
  let t = i.useRef(null),
    n = i.useRef(null),
    l = i.useRef(null),
    Z = i.useRef(null),
    X = i.useRef(null),
    q = i.useRef(null),
    J = (0, o.bG)([p.A], () => p.A.useReducedMotion),
    Q = (0, _.Ay)(),
    $ = (0, d.Mw)(Q),
    [ee, et] = i.useState(false),
    [en, er] = i.useState(false),
    [ei, el] = i.useState(false),
    [es, ea] = i.useState(false),
    [eo, ec] = i.useState(false),
    ed = (0, o.bG)([b.A], () => b.A.getPremiumTypeSubscription()),
    eu = null != ed ? (0, E.EL)(ed) : null,
    e_ = null != eu ? E.Ay.getSkuIdForPlan(eu.planId) : null,
    ep = null !== e_ && e_ !== V.pe.TIER_2 ? V.pe.TIER_2 : null,
    em = (0, O.cg)(),
    eg = null != em && em,
    {
      analyticsLocations: eA
    } = (0, g.Ay)(m.A.PREMIUM_MARKETING),
    ef = (0, x.A)({
      location: "PremiumMarketing"
    }),
    eb = !ee && !ei && (ef || !en);
  i.useEffect(() => {
    ec(true)
  }, []);
  let {
    isInTreatment: eh
  } = (0, T.uX)("PremiumMarketingHome"), eE = i.useMemo(() => !!eh && "orbs" === new URLSearchParams(e.search).get("section"), [e.search, eh]);
  (0, C.z)(k.NI.ORB_REWARDS, eE);
  let eO = [H.k.HOME, H.k.WHATS_NEW, H.k.BEST_OF_NITRO, H.k.PLANS, H.k.COMPARE],
    {
      navBarSections: ex,
      activeSectionId: eC
    } = (0, B.o)(eO),
    {
      home: eS,
      whatsNew: eT,
      bestOfNitro: eI,
      plans: eN,
      compare: ey
    } = ex,
    ej = ef ? W : K,
    ev = (0, r.jsxs)("div", {
      className: s()(ej.container, ej.responsiveContainer, {
        [ej.containerBackground]: ef || $,
        [W.fadeInFromTop]: !J && ef
      }),
      "data-cy": "tier-0-marketing-page",
      children: [ef && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(j.A, {
          className: W.topOfPageGradient
        }), (0, r.jsx)(U.A, {
          navBarSections: ex,
          activeSectionId: eC
        })]
      }), !ef && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)("div", {
          className: K.heroHeaderSideGradient
        }), (0, r.jsx)("img", {
          src: z,
          className: K.heroHeaderBackgroundStars,
          alt: ""
        })]
      }), (0, r.jsxs)("div", {
        className: ej.sectionsContainer,
        children: [(0, r.jsx)("div", {
          className: ej.heroHeadingContainer,
          ref: eS.ref,
          children: (0, r.jsx)(c.L, {
            innerRef: Z,
            onChange: e => et(e),
            threshold: 0,
            active: true,
            children: ef ? (0, r.jsx)(D.A, {
              ref: Z,
              subscriptionTier: ep,
              isEligibleForBogoPromotion: em
            }) : (0, r.jsx)(G.A, {
              ref: Z,
              subscriptionTier: ep,
              isDarkMode: $,
              isEligibleForBogoPromotion: em,
              videoRef: n
            })
          })
        }), em && (0, r.jsx)("div", {
          className: ej.promoBannerContainer,
          children: (0, r.jsx)(S.A, {
            variant: S.c.APPLICATION_NITRO_HOME
          })
        }), (0, r.jsx)("div", {
          className: ej.whatsNewSectionContainer,
          ref: eT.ref,
          children: (0, r.jsx)(y.Ct, {
            shouldLoadVideo: eo,
            isReducedMotion: J,
            enablePremiumBrandRefreshDesign: ef
          })
        }), (0, r.jsx)("div", {
          className: ej.bestOfNitroSectionContainer,
          ref: eI.ref,
          children: (0, r.jsx)(y.oO, {
            shouldLoadVideo: eo,
            isReducedMotion: J,
            enablePremiumBrandRefreshDesign: ef
          })
        }), (0, r.jsx)("div", {
          className: ej.premiumTierCardsContainer,
          ref: eN.ref,
          children: (0, r.jsx)(c.L, {
            innerRef: l,
            onChange: e => el(e),
            threshold: .1,
            active: true,
            children: ef ? (0, r.jsx)(I.hy, {
              innerRef: l
            }) : (0, r.jsx)(N.jP, {
              innerRef: l,
              hasActiveTier2PremiumPromotion: eg
            })
          })
        }), (0, r.jsx)("div", {
          className: ej.planComparisonTableContainer,
          ref: ey.ref,
          children: ef ? (0, r.jsx)(w.A, {}) : (0, r.jsx)(P.A, {})
        })]
      }), !ef && (0, r.jsx)(v.A, {
        isVisible: eb && eo,
        subscriptionTier: ep,
        isApplicationHome: true,
        isEligibleForBogoPromotion: em
      }), (0, r.jsx)(c.L, {
        innerRef: X,
        onChange: e => {
          e && !es && (h.default.track(F.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
            location_stack: eA
          }), ea(true))
        },
        children: (0, r.jsx)("div", {
          ref: X,
          className: ej.bottomOfPageVisibilitySensor
        })
      }), (0, r.jsx)(c.L, {
        innerRef: q,
        onChange: e => {
          er(e)
        },
        children: ef ? (0, r.jsx)(R.A, {
          ref: q
        }) : (0, r.jsx)(M.A, {
          ref: q,
          isFooterVisible: en,
          isDarkMode: $,
          isReducedMotion: J,
          subscriptionTier: ep
        })
      }), ef && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(L.A, {
          isVisible: eb && eo,
          subscriptionTier: ep,
          isEligibleForBogoPromotion: em
        }), (0, r.jsx)(j.A, {
          className: W.bottomOfPageGradient
        })]
      })]
    });
  return (0, r.jsx)(u.NPJ, {
    theme: ef ? Y.NJ.DARKER : Q,
    children: e => (0, r.jsx)(u.GtU, {
      className: s()(ej.scroller, e),
      ref: t,
      children: ev
    })
  })
}