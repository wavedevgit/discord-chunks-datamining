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
  Chunk522323 = require("./522323.js");
let m = {
    START: Chunk522323.alignLeft,
    END: Chunk522323.alignRight
  },
  g = e => {
    let {
      showNotificationBadge: t,
      ctaText: n,
      ctaOnClick: a,
      anchorPillType: g,
      analyticsPage: E,
      linkText: b = p.intl.string(p.t.XRdyj4),
      cardAlignment: y = m.START,
      className: O
    } = e, {
      balance: v
    } = (0, c.A)(), [I, T] = i.useState(u.b.DEFAULT), [S, A] = i.useState(false), [C, N] = i.useState(false), R = i.useRef(null), P = i.useCallback(() => {
      let e = !S;
      e && null != E && (0, l.Y)({
        pageType: E,
        sectionType: _.jXE.ORBS_BALANCE_MENU,
        ctaObject: _.qAy.OPEN_ORB_BALANCE_MENU_FROM_PILL
      }), T(e ? u.b.SELECTED : u.b.DEFAULT), A(e)
    }, [S, E]), w = i.useCallback(() => {
      S && P()
    }, [S, P]), D = (0, s.Z)(null, w), x = i.useMemo(() => (0, r.jsx)(d.L, {
      analyticsPage: E,
      ctaText: n,
      ctaOnClick: () => {
        P(), a()
      },
      linkText: b
    }), [E, n, b, P, a]);
    return (0, r.jsxs)("div", {
      className: o()(h.container, O, {
        [h.hidden]: C,
        [h.visible]: !C
      }),
      children: [(0, r.jsx)(f.y, {
        pillRef: R,
        anchorPillType: g,
        balance: v,
        balanceWidgetMode: I,
        onMouseDown: e => {
          e.stopPropagation()
        },
        onClick: P,
        showNotificationBadge: t
      }), S && (0, r.jsx)("div", {
        className: o()(h.cardContainer, y, {
          [h.hidden]: C,
          [h.visible]: !C
        }),
        ref: D,
        children: x
      })]
    })
  };
g.CardAlignment = m