/** Chunk was on web.js **/
/** chunk id: 142270, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  SS: () => b,
  cP: () => E
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk82495 = require("./82495.js"),
  Chunk84483 = require("./84483.js"),
  Chunk938396 = require("./938396.jsx"),
  Chunk318346 = require("./318346.js"),
  Chunk309954 = require("./309954.js"),
  Chunk305003 = require("./305003.js"),
  Chunk162097 = require("./162097.jsx"),
  Chunk219980 = require("./219980.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk847688 = require("./847688.js");
let E = {
    START: Chunk847688.Vl,
    END: Chunk847688.Wk
  },
  b = e => {
    let {
      showNotificationBadge: t,
      ctaText: n,
      ctaOnClick: a,
      analyticsPage: b,
      linkText: y = m.intl.string(m.t.XRdyjz),
      cardAlignment: O = E.START,
      className: A
    } = e, {
      balance: v
    } = (0, d.W)(), {
      isInTreatment: S
    } = (0, l.uX)("BalanceWidgetMenu"), [I, T] = i.useState(f.k.DEFAULT), [C, N] = i.useState(false), [R, w] = i.useState(false), P = i.useRef(null), D = i.useCallback(() => {
      let e = !C;
      e && null != b && (0, u.Y)({
        pageType: b,
        sectionType: h.JJy.ORBS_BALANCE_MENU,
        ctaObject: h.ZSU.OPEN_ORB_BALANCE_MENU_FROM_PILL
      }), T(e ? f.k.SELECTED : f.k.DEFAULT), N(e)
    }, [C, b]), x = i.useCallback(() => {
      C && D()
    }, [C, D]), L = (0, o.A)(null, x), j = i.useMemo(() => (0, r.jsx)(p.b, {
      analyticsPage: b,
      ctaText: n,
      ctaOnClick: () => {
        D(), a()
      },
      linkText: y
    }), [b, n, y, D, a]), M = i.useMemo(() => (0, r.jsx)(c.A, {
      targetElementRef: P,
      shouldShow: C,
      onRequestClose: D,
      ctaText: n,
      ctaOnClick: () => {
        D(), a()
      }
    }), [C, D, n, a]);
    return (0, r.jsxs)("div", {
      className: s()(g.kL, A, {
        [g.R]: R,
        [g.RK]: !R
      }),
      children: [(0, r.jsx)(_.J, {
        pillRef: P,
        balance: v,
        balanceWidgetMode: I,
        onMouseDown: e => {
          e.stopPropagation()
        },
        onClick: D,
        showNotificationBadge: t
      }), S ? M : C && (0, r.jsx)("div", {
        className: s()(g.Ui, O, {
          [g.R]: R,
          [g.RK]: !R
        }),
        ref: L,
        children: j
      })]
    })
  };
b.CardAlignment = E