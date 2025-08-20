/** Chunk was on web.js **/
/** chunk id: 71363, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => N
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk622535 = require("./622535.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk975298 = require("./975298.js"),
  Chunk626135 = require("./626135.js"),
  Chunk695349 = require("./695349.js"),
  Chunk47280 = require("./47280.js"),
  Chunk103433 = require("./103433.jsx"),
  Chunk909136 = require("./909136.jsx"),
  Chunk306066 = require("./306066.jsx"),
  Chunk166021 = require("./166021.jsx"),
  Chunk22189 = require("./22189.jsx"),
  Chunk391110 = require("./391110.js"),
  Chunk75077 = require("./75077.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk677599 = require("./677599.js"),
  Chunk865215 = require("./865215.js");
let N = e => {
  let t, n, {
      isAllPerksVisible: a,
      setIsAllPerksVisible: N,
      previousComponent: R
    } = e,
    P = (0, m.ZP)({
      location: "SeeAllNitroPerks"
    }),
    w = i.useRef(null),
    D = i.useRef(null),
    x = Object.entries((0, O.Z)()).reduce((e, t) => {
      let [n, r] = t;
      returnfalse !== r.canReveal && "upcomingDropUntimed" !== r.name && (e[n] = r), e
    }, {}),
    {
      analyticsLocations: L
    } = (0, f.ZP)(d.Z.PREMIUM_SUBSCRIBER_NITRO_HOME),
    [j, M] = i.useState(false),
    k = (0, s.e7)([u.Z], () => u.Z.useReducedMotion),
    U = (0, I.mN)(),
    {
      fractionalState: G
    } = (0, _.Z)(),
    B = (0, h.W)();
  U ? (t = S.intl.string(S.t["+vt7w8"]), n = S.intl.string(S.t.LgHbnJ)) : (t = S.intl.string(S.t.LgHbnJ), n = S.intl.string(S.t["+vt7w8"]));
  let Z = () => {
    N(false), p.default.track(T.rMx.NITRO_HOME_NAVIGATION, {
      current_component: v.MQ.SEE_ALL,
      next_component: R,
      interaction_component: "Back Button"
    })
  };
  return (0, r.jsx)(c.yWw, {
    className: o()(A.allPerksScroller, {
      [A.open]: a,
      [A.openCloseReduceMotion]: k
    }),
    ref: w,
    children: (0, r.jsx)("div", {
      className: o()(A.container, A.responsiveContainer),
      children: (0, r.jsxs)(f.Gt, {
        value: L,
        children: [P ? (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(b.Z, {
            className: A.premiumBrandRefreshGradientBackground
          }), (0, r.jsx)(E.Z, {
            onBackClick: Z
          })]
        }) : (0, r.jsx)(g.Z, {
          className: A.heroHeading,
          onBackClick: Z
        }), (0, r.jsxs)("div", {
          className: o()(A.column, {
            [A.premiumBrandRefresh]: P
          }),
          children: [(0, r.jsx)(c.X6q, {
            variant: "heading-xxl/extrabold",
            color: "header-primary",
            className: A.heading,
            children: t
          }), (0, r.jsx)(y.Z, {
            className: A.cardCarousel,
            cards: (0, I.ZM)({
              perksCards: x,
              variant: v.gM.CARD_CAROUSEL_FIRST_ROW,
              isPremiumSubscriber: U,
              hideCardsOnNarrowScreen: true,
              fractionalState: G,
              isInReverseTrial: B
            }),
            cardType: v.gM.CARD_CAROUSEL_FIRST_ROW
          }), (0, r.jsx)(c.X6q, {
            variant: "heading-xxl/extrabold",
            color: "header-primary",
            className: A.heading,
            children: n
          }), (0, r.jsx)(y.Z, {
            className: A.cardCarousel,
            cards: (0, I.ZM)({
              perksCards: x,
              variant: v.gM.CARD_CAROUSEL_SECOND_ROW,
              isPremiumSubscriber: U,
              hideCardsOnNarrowScreen: true,
              fractionalState: G,
              isInReverseTrial: B
            }),
            cardType: v.gM.CARD_CAROUSEL_SECOND_ROW
          }), (0, r.jsx)(c.X6q, {
            variant: "heading-xxl/extrabold",
            color: "header-primary",
            className: A.heading,
            children: S.intl.string(S.t.LTaxu7)
          }), (0, r.jsx)(y.Z, {
            className: A.cardCarousel,
            cards: (0, I.ZM)({
              perksCards: x,
              variant: v.gM.CARD_CAROUSEL_THIRD_ROW,
              isPremiumSubscriber: U,
              hideCardsOnNarrowScreen: true,
              fractionalState: G,
              isInReverseTrial: B
            }),
            cardType: v.gM.CARD_CAROUSEL_THIRD_ROW
          })]
        }), (0, r.jsx)("div", {
          className: A.footerSpacing
        }), (0, r.jsx)(l.$, {
          innerRef: D,
          onChange: e => {
            e && !j && (p.default.track(T.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
              location_stack: L
            }), M(true))
          },
          children: (0, r.jsx)("div", {
            ref: D,
            className: A.bottomOfPageVisibilitySensor
          })
        }), (0, r.jsx)("img", {
          src: C,
          className: A.bottomIllustration,
          width: 112,
          height: 85,
          alt: S.intl.string(S.t.X4IxWF)
        })]
      })
    })
  })
}