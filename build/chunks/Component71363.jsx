/** Chunk was on 75708 **/
/** chunk id: 71363, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => S
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
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
  Chunk166021 = require("./166021.jsx"),
  Chunk22189 = require("./22189.jsx"),
  Chunk391110 = require("./391110.js"),
  Chunk75077 = require("./75077.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk614729 = require("./614729.js"),
  Chunk865215 = require("./865215.js");
let S = e => {
  let t, n, {
      isAllPerksVisible: s,
      setIsAllPerksVisible: S,
      previousComponent: T
    } = e,
    I = r.useRef(null),
    N = r.useRef(null),
    y = Object.entries((0, x.Z)()).reduce((e, t) => {
      let [n, i] = t;
      returnfalse !== i.canReveal && "upcomingDropUntimed" !== i.name && (e[n] = i), e
    }, {}),
    {
      analyticsLocations: A
    } = (0, m.ZP)(u.Z.PREMIUM_SUBSCRIBER_NITRO_HOME),
    [P, R] = r.useState(false),
    D = (0, l.e7)([d.Z], () => d.Z.useReducedMotion),
    Z = (0, j.mN)(),
    {
      fractionalState: w
    } = (0, p.Z)(),
    k = (0, h.W)();
  return Z ? (t = C.intl.string(C.t["+vt7w8"]), n = C.intl.string(C.t.LgHbnJ)) : (t = C.intl.string(C.t.LgHbnJ), n = C.intl.string(C.t["+vt7w8"])), (0, i.jsx)(c.yWw, {
    className: a()(O.allPerksScroller, {
      [O.open]: s,
      [O.openCloseReduceMotion]: D
    }),
    ref: I,
    children: (0, i.jsx)("div", {
      className: O.container,
      children: (0, i.jsxs)(m.Gt, {
        value: A,
        children: [(0, i.jsx)(f.Z, {
          className: O.heroHeading,
          onBackClick: () => {
            S(false), g.default.track(E.rMx.NITRO_HOME_NAVIGATION, {
              current_component: _.MQ.SEE_ALL,
              next_component: T,
              interaction_component: "Back Button"
            })
          }
        }), (0, i.jsxs)("div", {
          className: O.column,
          children: [(0, i.jsx)(c.X6q, {
            variant: "heading-xxl/extrabold",
            color: "header-primary",
            className: O.heading,
            children: t
          }), (0, i.jsx)(b.Z, {
            className: O.cardCarousel,
            cards: (0, j.ZM)({
              perksCards: y,
              variant: _.gM.CARD_CAROUSEL_FIRST_ROW,
              isPremiumSubscriber: Z,
              hideCardsOnNarrowScreen: true,
              fractionalState: w,
              isInReverseTrial: k
            }),
            cardType: _.gM.CARD_CAROUSEL_FIRST_ROW
          }), (0, i.jsx)(c.X6q, {
            variant: "heading-xxl/extrabold",
            color: "header-primary",
            className: O.heading,
            children: n
          }), (0, i.jsx)(b.Z, {
            className: O.cardCarousel,
            cards: (0, j.ZM)({
              perksCards: y,
              variant: _.gM.CARD_CAROUSEL_SECOND_ROW,
              isPremiumSubscriber: Z,
              hideCardsOnNarrowScreen: true,
              fractionalState: w,
              isInReverseTrial: k
            }),
            cardType: _.gM.CARD_CAROUSEL_SECOND_ROW
          }), (0, i.jsx)(c.X6q, {
            variant: "heading-xxl/extrabold",
            color: "header-primary",
            className: O.heading,
            children: C.intl.string(C.t.LTaxu7)
          }), (0, i.jsx)(b.Z, {
            className: O.cardCarousel,
            cards: (0, j.ZM)({
              perksCards: y,
              variant: _.gM.CARD_CAROUSEL_THIRD_ROW,
              isPremiumSubscriber: Z,
              hideCardsOnNarrowScreen: true,
              fractionalState: w,
              isInReverseTrial: k
            }),
            cardType: _.gM.CARD_CAROUSEL_THIRD_ROW
          })]
        }), (0, i.jsx)("div", {
          className: O.footerSpacing
        }), (0, i.jsx)(o.$, {
          innerRef: N,
          onChange: e => {
            e && !P && (g.default.track(E.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
              location_stack: A
            }), R(true))
          },
          children: (0, i.jsx)("div", {
            ref: N,
            className: O.bottomOfPageVisibilitySensor
          })
        }), (0, i.jsx)("img", {
          src: v,
          className: O.bottomIllustration,
          width: 112,
          height: 85,
          alt: C.intl.string(C.t.X4IxWF)
        })]
      })
    })
  })
}