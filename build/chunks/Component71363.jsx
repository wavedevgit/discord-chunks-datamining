/** Chunk was on web.js **/
/** chunk id: 71363, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => A
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
let A = e => {
  let t, n, {
      isAllPerksVisible: a,
      setIsAllPerksVisible: A,
      previousComponent: C,
      enablePremiumBrandRefresh: N
    } = e,
    P = i.useRef(null),
    R = i.useRef(null),
    w = Object.entries((0, b.Z)()).reduce((e, t) => {
      let [n, r] = t;
      returnfalse !== r.canReveal && "upcomingDropUntimed" !== r.name && (e[n] = r), e
    }, {}),
    {
      analyticsLocations: D
    } = (0, f.ZP)(d.Z.PREMIUM_SUBSCRIBER_NITRO_HOME),
    [x, L] = i.useState(false),
    j = (0, s.e7)([u.Z], () => u.Z.useReducedMotion),
    M = (0, O.mN)(),
    {
      fractionalState: k
    } = (0, p.Z)(),
    U = (0, m.W)();
  M ? (t = S.intl.string(S.t["+vt7w9"]), n = S.intl.string(S.t.LgHbnL)) : (t = S.intl.string(S.t.LgHbnL), n = S.intl.string(S.t["+vt7w9"]));
  let G = () => {
    A(false), _.default.track(v.rMx.NITRO_HOME_NAVIGATION, {
      current_component: y.MQ.SEE_ALL,
      next_component: C,
      interaction_component: "Back Button"
    })
  };
  return (0, r.jsx)(c.yWw, {
    className: o()(I.allPerksScroller, {
      [I.open]: a,
      [I.openCloseReduceMotion]: j
    }),
    ref: P,
    children: (0, r.jsx)(c.$1m, {
      color: "nitro-pink",
      className: o()(I.container, I.responsiveContainer, {
        [I.hiddenGradient]: !N
      }),
      children: (0, r.jsxs)(f.Gt, {
        value: D,
        children: [N ? (0, r.jsx)(g.Z, {
          onBackClick: G
        }) : (0, r.jsx)(h.Z, {
          className: I.heroHeading,
          onBackClick: G
        }), (0, r.jsxs)("div", {
          className: o()(I.column, {
            [I.premiumBrandRefresh]: N
          }),
          children: [(0, r.jsx)(c.Heading, {
            variant: "heading-xxl/extrabold",
            color: "header-primary",
            className: I.heading,
            children: t
          }), (0, r.jsx)(E.Z, {
            className: I.cardCarousel,
            cards: (0, O.ZM)({
              perksCards: w,
              variant: y.gM.CARD_CAROUSEL_FIRST_ROW,
              isPremiumSubscriber: M,
              hideCardsOnNarrowScreen: true,
              fractionalState: k,
              isInReverseTrial: U
            }),
            cardType: y.gM.CARD_CAROUSEL_FIRST_ROW
          }), (0, r.jsx)(c.Heading, {
            variant: "heading-xxl/extrabold",
            color: "header-primary",
            className: I.heading,
            children: n
          }), (0, r.jsx)(E.Z, {
            className: I.cardCarousel,
            cards: (0, O.ZM)({
              perksCards: w,
              variant: y.gM.CARD_CAROUSEL_SECOND_ROW,
              isPremiumSubscriber: M,
              hideCardsOnNarrowScreen: true,
              fractionalState: k,
              isInReverseTrial: U
            }),
            cardType: y.gM.CARD_CAROUSEL_SECOND_ROW
          }), (0, r.jsx)(c.Heading, {
            variant: "heading-xxl/extrabold",
            color: "header-primary",
            className: I.heading,
            children: S.intl.string(S.t.LTaxu9)
          }), (0, r.jsx)(E.Z, {
            className: I.cardCarousel,
            cards: (0, O.ZM)({
              perksCards: w,
              variant: y.gM.CARD_CAROUSEL_THIRD_ROW,
              isPremiumSubscriber: M,
              hideCardsOnNarrowScreen: true,
              fractionalState: k,
              isInReverseTrial: U
            }),
            cardType: y.gM.CARD_CAROUSEL_THIRD_ROW
          })]
        }), (0, r.jsx)("div", {
          className: I.footerSpacing
        }), (0, r.jsx)(l.$, {
          innerRef: R,
          onChange: e => {
            e && !x && (_.default.track(v.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
              location_stack: D
            }), L(true))
          },
          children: (0, r.jsx)("div", {
            ref: R,
            className: I.bottomOfPageVisibilitySensor
          })
        }), (0, r.jsx)("img", {
          src: T,
          className: I.bottomIllustration,
          width: 112,
          height: 85,
          alt: S.intl.string(S.t.X4IxWL)
        })]
      })
    })
  })
}