/** Chunk was on web.js **/
/** chunk id: 71363, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => C
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk622535 = require("./622535.js"),
  Chunk304789 = require("./304789.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk975298 = require("./975298.js"),
  Chunk626135 = require("./626135.js"),
  Chunk695349 = require("./695349.js"),
  Chunk103433 = require("./103433.jsx"),
  Chunk982370 = require("./982370.jsx"),
  Chunk166021 = require("./166021.jsx"),
  Chunk22189 = require("./22189.jsx"),
  Chunk391110 = require("./391110.js"),
  Chunk75077 = require("./75077.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk677599 = require("./677599.js"),
  Chunk865215 = require("./865215.js");
let C = e => {
  let t, n, {
      isAllPerksVisible: a,
      setIsAllPerksVisible: C,
      previousComponent: N,
      enablePremiumBrandRefresh: R
    } = e,
    P = i.useRef(null),
    w = i.useRef(null),
    D = Object.entries((0, y.Z)()).reduce((e, t) => {
      let [n, r] = t;
      returnfalse !== r.canReveal && "upcomingDropUntimed" !== r.name && (e[n] = r), e
    }, {}),
    {
      analyticsLocations: x
    } = (0, _.ZP)(f.Z.PREMIUM_SUBSCRIBER_NITRO_HOME),
    [L, j] = i.useState(false),
    M = (0, s.e7)([d.Z], () => d.Z.useReducedMotion),
    k = (0, v.mN)(),
    {
      fractionalState: U
    } = (0, p.Z)(),
    G = (0, m.W)();
  k ? (t = S.intl.string(S.t["+vt7w8"]), n = S.intl.string(S.t.LgHbnJ)) : (t = S.intl.string(S.t.LgHbnJ), n = S.intl.string(S.t["+vt7w8"]));
  let B = () => {
    C(false), h.default.track(I.rMx.NITRO_HOME_NAVIGATION, {
      current_component: O.MQ.SEE_ALL,
      next_component: N,
      interaction_component: "Back Button"
    })
  };
  return (0, r.jsx)(u.yWw, {
    className: o()(T.allPerksScroller, {
      [T.open]: a,
      [T.openCloseReduceMotion]: M
    }),
    ref: P,
    children: (0, r.jsx)(c.$, {
      color: "nitro-pink",
      className: o()(T.container, T.responsiveContainer, {
        [T.hiddenGradient]: !R
      }),
      children: (0, r.jsxs)(_.Gt, {
        value: x,
        children: [R ? (0, r.jsx)(E.Z, {
          onBackClick: B
        }) : (0, r.jsx)(g.Z, {
          className: T.heroHeading,
          onBackClick: B
        }), (0, r.jsxs)("div", {
          className: o()(T.column, {
            [T.premiumBrandRefresh]: R
          }),
          children: [(0, r.jsx)(u.X6q, {
            variant: "heading-xxl/extrabold",
            color: "header-primary",
            className: T.heading,
            children: t
          }), (0, r.jsx)(b.Z, {
            className: T.cardCarousel,
            cards: (0, v.ZM)({
              perksCards: D,
              variant: O.gM.CARD_CAROUSEL_FIRST_ROW,
              isPremiumSubscriber: k,
              hideCardsOnNarrowScreen: true,
              fractionalState: U,
              isInReverseTrial: G
            }),
            cardType: O.gM.CARD_CAROUSEL_FIRST_ROW
          }), (0, r.jsx)(u.X6q, {
            variant: "heading-xxl/extrabold",
            color: "header-primary",
            className: T.heading,
            children: n
          }), (0, r.jsx)(b.Z, {
            className: T.cardCarousel,
            cards: (0, v.ZM)({
              perksCards: D,
              variant: O.gM.CARD_CAROUSEL_SECOND_ROW,
              isPremiumSubscriber: k,
              hideCardsOnNarrowScreen: true,
              fractionalState: U,
              isInReverseTrial: G
            }),
            cardType: O.gM.CARD_CAROUSEL_SECOND_ROW
          }), (0, r.jsx)(u.X6q, {
            variant: "heading-xxl/extrabold",
            color: "header-primary",
            className: T.heading,
            children: S.intl.string(S.t.LTaxu7)
          }), (0, r.jsx)(b.Z, {
            className: T.cardCarousel,
            cards: (0, v.ZM)({
              perksCards: D,
              variant: O.gM.CARD_CAROUSEL_THIRD_ROW,
              isPremiumSubscriber: k,
              hideCardsOnNarrowScreen: true,
              fractionalState: U,
              isInReverseTrial: G
            }),
            cardType: O.gM.CARD_CAROUSEL_THIRD_ROW
          })]
        }), (0, r.jsx)("div", {
          className: T.footerSpacing
        }), (0, r.jsx)(l.$, {
          innerRef: w,
          onChange: e => {
            e && !L && (h.default.track(I.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
              location_stack: x
            }), j(true))
          },
          children: (0, r.jsx)("div", {
            ref: w,
            className: T.bottomOfPageVisibilitySensor
          })
        }), (0, r.jsx)("img", {
          src: A,
          className: T.bottomIllustration,
          width: 112,
          height: 85,
          alt: S.intl.string(S.t.X4IxWF)
        })]
      })
    })
  })
}