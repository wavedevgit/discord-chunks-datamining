/** Chunk was on 60667 **/
/** chunk id: 891858, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => S
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk230109 = require("./230109.js"),
  Chunk397927 = require("./397927.js"),
  Chunk775602 = require("./775602.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk531260 = require("./531260.js"),
  Chunk954571 = require("./954571.js"),
  Chunk637073 = require("./637073.js"),
  Chunk278977 = require("./278977.jsx"),
  Chunk967196 = require("./967196.jsx"),
  Chunk907838 = require("./907838.jsx"),
  Chunk975662 = require("./975662.jsx"),
  Chunk322631 = require("./322631.js"),
  Chunk17307 = require("./17307.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk70338 = require("./70338.js"),
  Chunk288894 = require("./288894.js");
let S = e => {
  let t, n, {
      isAllPerksVisible: l,
      setIsAllPerksVisible: S,
      previousComponent: j,
      enablePremiumBrandRefresh: v
    } = e,
    N = i.useRef(null),
    y = i.useRef(null),
    P = Object.entries((0, b.A)()).reduce((e, t) => {
      let [n, r] = t;
      returnfalse !== r.canReveal && "upcomingDropUntimed" !== r.name && (e[n] = r), e
    }, {}),
    {
      analyticsLocations: R
    } = (0, _.Ay)(u.A.PREMIUM_SUBSCRIBER_NITRO_HOME),
    [D, w] = i.useState(false),
    L = (0, a.bG)([d.A], () => d.A.useReducedMotion),
    M = (0, x.LQ)(),
    {
      fractionalState: U
    } = (0, p.A)(),
    G = (0, g.d)();
  M ? (t = C.intl.string(C.t["+vt7w9"]), n = C.intl.string(C.t.LgHbnL)) : (t = C.intl.string(C.t.LgHbnL), n = C.intl.string(C.t["+vt7w9"]));
  let k = () => {
    S(false), m.default.track(O.HAw.NITRO_HOME_NAVIGATION, {
      current_component: E.A2.SEE_ALL,
      next_component: j,
      interaction_component: "Back Button"
    })
  };
  return (0, r.jsx)(c.GtU, {
    className: s()(I.NX, {
      [I.ho]: l,
      [I.LM]: L
    }),
    ref: N,
    children: (0, r.jsx)(c.hLv, {
      color: "nitro-pink",
      className: s()(I.kL, I.Gd, {
        [I.fv]: !v
      }),
      children: (0, r.jsxs)(_.f5, {
        value: R,
        children: [v ? (0, r.jsx)(f.A, {
          onBackClick: k
        }) : (0, r.jsx)(A.A, {
          className: I.v1,
          onBackClick: k
        }), (0, r.jsxs)("div", {
          className: s()(I.fi, {
            [I._9]: v
          }),
          children: [(0, r.jsx)(c.Heading, {
            variant: "heading-xxl/extrabold",
            color: "text-strong",
            className: I.R_,
            children: t
          }), (0, r.jsx)(h.A, {
            className: I.Nm,
            cards: (0, x.vx)({
              perksCards: P,
              variant: E.cJ.CARD_CAROUSEL_FIRST_ROW,
              isPremiumSubscriber: M,
              hideCardsOnNarrowScreen: true,
              fractionalState: U,
              isInReverseTrial: G
            }),
            cardType: E.cJ.CARD_CAROUSEL_FIRST_ROW
          }), (0, r.jsx)(c.Heading, {
            variant: "heading-xxl/extrabold",
            color: "text-strong",
            className: I.R_,
            children: n
          }), (0, r.jsx)(h.A, {
            className: I.Nm,
            cards: (0, x.vx)({
              perksCards: P,
              variant: E.cJ.CARD_CAROUSEL_SECOND_ROW,
              isPremiumSubscriber: M,
              hideCardsOnNarrowScreen: true,
              fractionalState: U,
              isInReverseTrial: G
            }),
            cardType: E.cJ.CARD_CAROUSEL_SECOND_ROW
          }), (0, r.jsx)(c.Heading, {
            variant: "heading-xxl/extrabold",
            color: "text-strong",
            className: I.R_,
            children: C.intl.string(C.t.LTaxu9)
          }), (0, r.jsx)(h.A, {
            className: I.Nm,
            cards: (0, x.vx)({
              perksCards: P,
              variant: E.cJ.CARD_CAROUSEL_THIRD_ROW,
              isPremiumSubscriber: M,
              hideCardsOnNarrowScreen: true,
              fractionalState: U,
              isInReverseTrial: G
            }),
            cardType: E.cJ.CARD_CAROUSEL_THIRD_ROW
          })]
        }), (0, r.jsx)("div", {
          className: I.hz
        }), (0, r.jsx)(o.L, {
          innerRef: y,
          onChange: e => {
            e && !D && (m.default.track(O.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
              location_stack: R
            }), w(true))
          },
          children: (0, r.jsx)("div", {
            ref: y,
            className: I._Z
          })
        }), (0, r.jsx)("img", {
          src: T,
          className: I.Kw,
          width: 112,
          height: 85,
          alt: C.intl.string(C.t.X4IxWL)
        })]
      })
    })
  })
}