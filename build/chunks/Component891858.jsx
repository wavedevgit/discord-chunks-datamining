/** Chunk was on 9207 **/
/** chunk id: 891858, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => I
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
  Chunk520089 = require("./520089.js"),
  Chunk288894 = require("./288894.js");
let I = e => {
  let t, n, {
      isAllPerksVisible: l,
      setIsAllPerksVisible: I,
      previousComponent: N,
      enablePremiumBrandRefresh: y
    } = e,
    j = i.useRef(null),
    v = i.useRef(null),
    P = Object.entries((0, h.A)()).reduce((e, t) => {
      let [n, r] = t;
      returnfalse !== r.canReveal && "upcomingDropUntimed" !== r.name && (e[n] = r), e
    }, {}),
    {
      analyticsLocations: R
    } = (0, _.Ay)(u.A.PREMIUM_SUBSCRIBER_NITRO_HOME),
    [D, L] = i.useState(false),
    w = (0, a.bG)([d.A], () => d.A.useReducedMotion),
    M = (0, O.LQ)(),
    {
      fractionalState: G
    } = (0, p.A)(),
    U = (0, g.d)();
  M ? (t = C.intl.string(C.t["+vt7w9"]), n = C.intl.string(C.t.LgHbnL)) : (t = C.intl.string(C.t.LgHbnL), n = C.intl.string(C.t["+vt7w9"]));
  let k = () => {
    I(false), m.default.track(x.HAw.NITRO_HOME_NAVIGATION, {
      current_component: E.A2.SEE_ALL,
      next_component: N,
      interaction_component: "Back Button"
    })
  };
  return (0, r.jsx)(c.GtU, {
    className: s()(S.NX, {
      [S.ho]: l,
      [S.LM]: w
    }),
    ref: j,
    children: (0, r.jsx)(c.hLv, {
      color: "nitro-pink",
      className: s()(S.kL, S.Gd, {
        [S.fv]: !y
      }),
      children: (0, r.jsxs)(_.f5, {
        value: R,
        children: [y ? (0, r.jsx)(f.A, {
          onBackClick: k
        }) : (0, r.jsx)(A.A, {
          className: S.v1,
          onBackClick: k
        }), (0, r.jsxs)("div", {
          className: s()(S.fi, {
            [S._9]: y
          }),
          children: [(0, r.jsx)(c.Heading, {
            variant: "heading-xxl/extrabold",
            color: "text-strong",
            className: S.R_,
            children: t
          }), (0, r.jsx)(b.A, {
            className: S.Nm,
            cards: (0, O.vx)({
              perksCards: P,
              variant: E.cJ.CARD_CAROUSEL_FIRST_ROW,
              isPremiumSubscriber: M,
              hideCardsOnNarrowScreen: true,
              fractionalState: G,
              isInReverseTrial: U
            }),
            cardType: E.cJ.CARD_CAROUSEL_FIRST_ROW
          }), (0, r.jsx)(c.Heading, {
            variant: "heading-xxl/extrabold",
            color: "text-strong",
            className: S.R_,
            children: n
          }), (0, r.jsx)(b.A, {
            className: S.Nm,
            cards: (0, O.vx)({
              perksCards: P,
              variant: E.cJ.CARD_CAROUSEL_SECOND_ROW,
              isPremiumSubscriber: M,
              hideCardsOnNarrowScreen: true,
              fractionalState: G,
              isInReverseTrial: U
            }),
            cardType: E.cJ.CARD_CAROUSEL_SECOND_ROW
          }), (0, r.jsx)(c.Heading, {
            variant: "heading-xxl/extrabold",
            color: "text-strong",
            className: S.R_,
            children: C.intl.string(C.t.LTaxu9)
          }), (0, r.jsx)(b.A, {
            className: S.Nm,
            cards: (0, O.vx)({
              perksCards: P,
              variant: E.cJ.CARD_CAROUSEL_THIRD_ROW,
              isPremiumSubscriber: M,
              hideCardsOnNarrowScreen: true,
              fractionalState: G,
              isInReverseTrial: U
            }),
            cardType: E.cJ.CARD_CAROUSEL_THIRD_ROW
          })]
        }), (0, r.jsx)("div", {
          className: S.hz
        }), (0, r.jsx)(o.L, {
          innerRef: v,
          onChange: e => {
            e && !D && (m.default.track(x.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
              location_stack: R
            }), L(true))
          },
          children: (0, r.jsx)("div", {
            ref: v,
            className: S._Z
          })
        }), (0, r.jsx)("img", {
          src: T,
          className: S.Kw,
          width: 112,
          height: 85,
          alt: C.intl.string(C.t.X4IxWL)
        })]
      })
    })
  })
}