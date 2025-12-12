/** Chunk was on web.js **/
/** chunk id: 775451, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  V9: () => g,
  ek: () => h
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
  Chunk461207 = require("./461207.js");
let h = {
    START: Chunk461207.alignLeft,
    END: Chunk461207.alignRight
  },
  g = e => {
    let {
      showNotificationBadge: t,
      ctaText: n,
      ctaOnClick: a,
      analyticsPage: g,
      linkText: E = _.intl.string(_.t.XRdyjz),
      cardAlignment: b = h.START,
      className: y
    } = e, {
      balance: O
    } = (0, c.A)(), [v, S] = i.useState(u.b.DEFAULT), [I, T] = i.useState(false), [C, A] = i.useState(false), N = i.useRef(null), P = i.useCallback(() => {
      let e = !I;
      e && null != g && (0, l.Y)({
        pageType: g,
        sectionType: p.jXE.ORBS_BALANCE_MENU,
        ctaObject: p.qAy.OPEN_ORB_BALANCE_MENU_FROM_PILL
      }), S(e ? u.b.SELECTED : u.b.DEFAULT), T(e)
    }, [I, g]), R = i.useCallback(() => {
      I && P()
    }, [I, P]), w = (0, s.Z)(null, R), D = i.useMemo(() => (0, r.jsx)(d.L, {
      analyticsPage: g,
      ctaText: n,
      ctaOnClick: () => {
        P(), a()
      },
      linkText: E
    }), [g, n, E, P, a]);
    return (0, r.jsxs)("div", {
      className: o()(m.container, y, {
        [m.hidden]: C,
        [m.visible]: !C
      }),
      children: [(0, r.jsx)(f.y, {
        pillRef: N,
        balance: O,
        balanceWidgetMode: v,
        onMouseDown: e => {
          e.stopPropagation()
        },
        onClick: P,
        showNotificationBadge: t
      }), I && (0, r.jsx)("div", {
        className: o()(m.cardContainer, b, {
          [m.hidden]: C,
          [m.visible]: !C
        }),
        ref: w,
        children: D
      })]
    })
  };
g.CardAlignment = h