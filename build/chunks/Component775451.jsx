/** Chunk was on web.js **/
/** chunk id: 775451, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  V9: () => b,
  ek: () => E
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk351773 = require("./351773.js"),
  Chunk375527 = require("./375527.js"),
  Chunk627725 = require("./627725.jsx"),
  Chunk507808 = require("./507808.js"),
  Chunk790542 = require("./790542.js"),
  Chunk317257 = require("./317257.js"),
  Chunk120786 = require("./120786.jsx"),
  Chunk82856 = require("./82856.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk461207 = require("./461207.js");
let E = {
    START: Chunk461207.alignLeft,
    END: Chunk461207.alignRight
  },
  b = e => {
    let {
      showNotificationBadge: t,
      ctaText: n,
      ctaOnClick: a,
      analyticsPage: b,
      linkText: y = m.intl.string(m.t.XRdyjz),
      cardAlignment: O = E.START,
      className: v
    } = e, {
      balance: S
    } = (0, d.A)(), {
      isInTreatment: I
    } = (0, l.er)("BalanceWidgetMenu"), [T, C] = i.useState(f.b.DEFAULT), [A, N] = i.useState(false), [P, w] = i.useState(false), R = i.useRef(null), D = i.useCallback(() => {
      let e = !A;
      e && null != b && (0, u.Y)({
        pageType: b,
        sectionType: h.jXE.ORBS_BALANCE_MENU,
        ctaObject: h.qAy.OPEN_ORB_BALANCE_MENU_FROM_PILL
      }), C(e ? f.b.SELECTED : f.b.DEFAULT), N(e)
    }, [A, b]), x = i.useCallback(() => {
      A && D()
    }, [A, D]), L = (0, s.Z)(null, x), j = i.useMemo(() => (0, r.jsx)(p.L, {
      analyticsPage: b,
      ctaText: n,
      ctaOnClick: () => {
        D(), a()
      },
      linkText: y
    }), [b, n, y, D, a]), M = i.useMemo(() => (0, r.jsx)(c.Z, {
      targetElementRef: R,
      shouldShow: A,
      onRequestClose: D,
      ctaText: n,
      ctaOnClick: () => {
        D(), a()
      }
    }), [A, D, n, a]);
    return (0, r.jsxs)("div", {
      className: o()(g.container, v, {
        [g.hidden]: P,
        [g.visible]: !P
      }),
      children: [(0, r.jsx)(_.y, {
        pillRef: R,
        balance: S,
        balanceWidgetMode: T,
        onMouseDown: e => {
          e.stopPropagation()
        },
        onClick: D,
        showNotificationBadge: t
      }), I ? M : A && (0, r.jsx)("div", {
        className: o()(g.cardContainer, O, {
          [g.hidden]: P,
          [g.visible]: !P
        }),
        ref: L,
        children: j
      })]
    })
  };
b.CardAlignment = E