/** Chunk was on web.js **/
/** chunk id: 891858, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => T
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
let T = e => {
  let t, n, {
      isAllPerksVisible: a,
      setIsAllPerksVisible: T,
      previousComponent: C,
      enablePremiumBrandRefresh: N
    } = e,
    R = i.useRef(null),
    w = i.useRef(null),
    P = Object.entries((0, b.A)()).reduce((e, t) => {
      let [n, r] = t;
      returnfalse !== r.canReveal && "upcomingDropUntimed" !== r.name && (e[n] = r), e
    }, {}),
    {
      analyticsLocations: D
    } = (0, f.Ay)(d.A.PREMIUM_SUBSCRIBER_NITRO_HOME),
    [x, L] = i.useState(false),
    j = (0, o.bG)([u.A], () => u.A.useReducedMotion),
    M = (0, O.LQ)(),
    {
      fractionalState: k
    } = (0, p.A)(),
    U = (0, h.d)();
  M ? (t = v.intl.string(v.t["+vt7w9"]), n = v.intl.string(v.t.LgHbnL)) : (t = v.intl.string(v.t.LgHbnL), n = v.intl.string(v.t["+vt7w9"]));
  let G = () => {
    T(false), _.default.track(A.HAw.NITRO_HOME_NAVIGATION, {
      current_component: y.A2.SEE_ALL,
      next_component: C,
      interaction_component: "Back Button"
    })
  };
  return (0, r.jsx)(c.GtU, {
    className: s()(S.NX, {
      [S.ho]: a,
      [S.LM]: j
    }),
    ref: R,
    children: (0, r.jsx)(c.hLv, {
      color: "nitro-pink",
      className: s()(S.kL, S.Gd, {
        [S.fv]: !N
      }),
      children: (0, r.jsxs)(f.f5, {
        value: D,
        children: [N ? (0, r.jsx)(g.A, {
          onBackClick: G
        }) : (0, r.jsx)(m.A, {
          className: S.v1,
          onBackClick: G
        }), (0, r.jsxs)("div", {
          className: s()(S.fi, {
            [S._9]: N
          }),
          children: [(0, r.jsx)(c.Heading, {
            variant: "heading-xxl/extrabold",
            color: "text-strong",
            className: S.R_,
            children: t
          }), (0, r.jsx)(E.A, {
            className: S.Nm,
            cards: (0, O.vx)({
              perksCards: P,
              variant: y.cJ.CARD_CAROUSEL_FIRST_ROW,
              isPremiumSubscriber: M,
              hideCardsOnNarrowScreen: true,
              fractionalState: k,
              isInReverseTrial: U
            }),
            cardType: y.cJ.CARD_CAROUSEL_FIRST_ROW
          }), (0, r.jsx)(c.Heading, {
            variant: "heading-xxl/extrabold",
            color: "text-strong",
            className: S.R_,
            children: n
          }), (0, r.jsx)(E.A, {
            className: S.Nm,
            cards: (0, O.vx)({
              perksCards: P,
              variant: y.cJ.CARD_CAROUSEL_SECOND_ROW,
              isPremiumSubscriber: M,
              hideCardsOnNarrowScreen: true,
              fractionalState: k,
              isInReverseTrial: U
            }),
            cardType: y.cJ.CARD_CAROUSEL_SECOND_ROW
          }), (0, r.jsx)(c.Heading, {
            variant: "heading-xxl/extrabold",
            color: "text-strong",
            className: S.R_,
            children: v.intl.string(v.t.LTaxu9)
          }), (0, r.jsx)(E.A, {
            className: S.Nm,
            cards: (0, O.vx)({
              perksCards: P,
              variant: y.cJ.CARD_CAROUSEL_THIRD_ROW,
              isPremiumSubscriber: M,
              hideCardsOnNarrowScreen: true,
              fractionalState: k,
              isInReverseTrial: U
            }),
            cardType: y.cJ.CARD_CAROUSEL_THIRD_ROW
          })]
        }), (0, r.jsx)("div", {
          className: S.hz
        }), (0, r.jsx)(l.L, {
          innerRef: w,
          onChange: e => {
            e && !x && (_.default.track(A.HAw.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
              location_stack: D
            }), L(true))
          },
          children: (0, r.jsx)("div", {
            ref: w,
            className: S._Z
          })
        }), (0, r.jsx)("img", {
          src: I,
          className: S.Kw,
          width: 112,
          height: 85,
          alt: v.intl.string(v.t.X4IxWL)
        })]
      })
    })
  })
}