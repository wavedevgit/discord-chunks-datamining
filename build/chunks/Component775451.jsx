/** Chunk was on web.js **/
/** chunk id: 775451, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  V9: () => g,
  ek: () => m
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk351773 = require("./351773.js"),
  Chunk507808 = require("./507808.js"),
  Chunk790542 = require("./790542.js"),
  Chunk317257 = require("./317257.js"),
  Chunk120786 = require("./120786.jsx"),
  Chunk82856 = require("./82856.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk152935 = require("./152935.js");
let m = {
    START: Chunk152935.alignLeft,
    END: Chunk152935.alignRight
  },
  g = e => {
    let {
      showNotificationBadge: t,
      ctaText: n,
      ctaOnClick: a,
      analyticsPage: g,
      linkText: E = p.intl.string(p.t.XRdyjz),
      cardAlignment: b = m.START,
      className: y
    } = e, {
      balance: O
    } = (0, c.A)(), [v, I] = i.useState(u.b.DEFAULT), [T, S] = i.useState(false), [A, C] = i.useState(false), N = i.useRef(null), R = i.useCallback(() => {
      let e = !T;
      e && null != g && (0, l.Y)({
        pageType: g,
        sectionType: _.jXE.ORBS_BALANCE_MENU,
        ctaObject: _.qAy.OPEN_ORB_BALANCE_MENU_FROM_PILL
      }), I(e ? u.b.SELECTED : u.b.DEFAULT), S(e)
    }, [T, g]), P = i.useCallback(() => {
      T && R()
    }, [T, R]), D = (0, s.Z)(null, P), w = i.useMemo(() => (0, r.jsx)(d.L, {
      analyticsPage: g,
      ctaText: n,
      ctaOnClick: () => {
        R(), a()
      },
      linkText: E
    }), [g, n, E, R, a]);
    return (0, r.jsxs)("div", {
      className: o()(h.container, y, {
        [h.hidden]: A,
        [h.visible]: !A
      }),
      children: [(0, r.jsx)(f.y, {
        pillRef: N,
        balance: O,
        balanceWidgetMode: v,
        onMouseDown: e => {
          e.stopPropagation()
        },
        onClick: R,
        showNotificationBadge: t
      }), T && (0, r.jsx)("div", {
        className: o()(h.cardContainer, b, {
          [h.hidden]: A,
          [h.visible]: !A
        }),
        ref: D,
        children: w
      })]
    })
  };
g.CardAlignment = m