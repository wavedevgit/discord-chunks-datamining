/** Chunk was on 7384 **/
/** chunk id: 71363, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => N
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
      isAllPerksVisible: s,
      setIsAllPerksVisible: N,
      previousComponent: y
    } = e,
    A = (0, f.ZP)({
      location: "SeeAllNitroPerks"
    }),
    P = r.useRef(null),
    R = r.useRef(null),
    D = Object.entries((0, E.Z)()).reduce((e, t) => {
      let [n, i] = t;
      returnfalse !== i.canReveal && "upcomingDropUntimed" !== i.name && (e[n] = i), e
    }, {}),
    {
      analyticsLocations: Z
    } = (0, m.ZP)(u.Z.PREMIUM_SUBSCRIBER_NITRO_HOME),
    [w, k] = r.useState(false),
    L = (0, l.e7)([d.Z], () => d.Z.useReducedMotion),
    B = (0, O.mN)(),
    {
      fractionalState: M
    } = (0, p.Z)(),
    U = (0, h.W)();
  B ? (t = S.intl.string(S.t["+vt7w8"]), n = S.intl.string(S.t.LgHbnJ)) : (t = S.intl.string(S.t.LgHbnJ), n = S.intl.string(S.t["+vt7w8"]));
  let V = () => {
    N(false), g.default.track(v.rMx.NITRO_HOME_NAVIGATION, {
      current_component: C.MQ.SEE_ALL,
      next_component: y,
      interaction_component: "Back Button"
    })
  };
  return (0, i.jsx)(c.yWw, {
    className: a()(T.allPerksScroller, {
      [T.open]: s,
      [T.openCloseReduceMotion]: L
    }),
    ref: P,
    children: (0, i.jsx)("div", {
      className: T.container,
      children: (0, i.jsxs)(m.Gt, {
        value: Z,
        children: [A ? (0, i.jsxs)(i.Fragment, {
          children: [(0, i.jsx)(_.Z, {
            className: T.premiumBrandRefreshGradientBackground
          }), (0, i.jsx)(x.Z, {
            onBackClick: V
          })]
        }) : (0, i.jsx)(b.Z, {
          className: T.heroHeading,
          onBackClick: V
        }), (0, i.jsxs)("div", {
          className: a()(T.column, {
            [T.premiumBrandRefresh]: A
          }),
          children: [(0, i.jsx)(c.X6q, {
            variant: "heading-xxl/extrabold",
            color: "header-primary",
            className: T.heading,
            children: t
          }), (0, i.jsx)(j.Z, {
            className: T.cardCarousel,
            cards: (0, O.ZM)({
              perksCards: D,
              variant: C.gM.CARD_CAROUSEL_FIRST_ROW,
              isPremiumSubscriber: B,
              hideCardsOnNarrowScreen: true,
              fractionalState: M,
              isInReverseTrial: U
            }),
            cardType: C.gM.CARD_CAROUSEL_FIRST_ROW
          }), (0, i.jsx)(c.X6q, {
            variant: "heading-xxl/extrabold",
            color: "header-primary",
            className: T.heading,
            children: n
          }), (0, i.jsx)(j.Z, {
            className: T.cardCarousel,
            cards: (0, O.ZM)({
              perksCards: D,
              variant: C.gM.CARD_CAROUSEL_SECOND_ROW,
              isPremiumSubscriber: B,
              hideCardsOnNarrowScreen: true,
              fractionalState: M,
              isInReverseTrial: U
            }),
            cardType: C.gM.CARD_CAROUSEL_SECOND_ROW
          }), (0, i.jsx)(c.X6q, {
            variant: "heading-xxl/extrabold",
            color: "header-primary",
            className: T.heading,
            children: S.intl.string(S.t.LTaxu7)
          }), (0, i.jsx)(j.Z, {
            className: T.cardCarousel,
            cards: (0, O.ZM)({
              perksCards: D,
              variant: C.gM.CARD_CAROUSEL_THIRD_ROW,
              isPremiumSubscriber: B,
              hideCardsOnNarrowScreen: true,
              fractionalState: M,
              isInReverseTrial: U
            }),
            cardType: C.gM.CARD_CAROUSEL_THIRD_ROW
          })]
        }), (0, i.jsx)("div", {
          className: T.footerSpacing
        }), (0, i.jsx)(o.$, {
          innerRef: R,
          onChange: e => {
            e && !w && (g.default.track(v.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
              location_stack: Z
            }), k(true))
          },
          children: (0, i.jsx)("div", {
            ref: R,
            className: T.bottomOfPageVisibilitySensor
          })
        }), (0, i.jsx)("img", {
          src: I,
          className: T.bottomIllustration,
          width: 112,
          height: 85,
          alt: S.intl.string(S.t.X4IxWF)
        })]
      })
    })
  })
}