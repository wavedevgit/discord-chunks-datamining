/** Chunk was on 79041 **/
/** chunk id: 775451, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  V9: () => b,
  ek: () => f
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk351773 = require("./351773.js"),
  Chunk507808 = require("./507808.js"),
  Chunk790542 = require("./790542.js"),
  Chunk317257 = require("./317257.js"),
  Chunk120786 = require("./120786.jsx"),
  Chunk82856 = require("./82856.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk152935 = require("./152935.js");
let f = {
    START: Chunk152935.alignLeft,
    END: Chunk152935.alignRight
  },
  b = e => {
    let {
      showNotificationBadge: t,
      ctaText: n,
      ctaOnClick: l,
      analyticsPage: b,
      linkText: g = h.intl.string(h.t.XRdyjz),
      cardAlignment: v = f.START,
      className: j
    } = e, {
      balance: _
    } = (0, c.A)(), [y, C] = r.useState(d.b.DEFAULT), [S, E] = r.useState(false), [O, T] = r.useState(false), N = r.useRef(null), P = r.useCallback(() => {
      let e = !S;
      e && null != b && (0, s.Y)({
        pageType: b,
        sectionType: p.jXE.ORBS_BALANCE_MENU,
        ctaObject: p.qAy.OPEN_ORB_BALANCE_MENU_FROM_PILL
      }), C(e ? d.b.SELECTED : d.b.DEFAULT), E(e)
    }, [S, b]), I = r.useCallback(() => {
      S && P()
    }, [S, P]), w = (0, o.Z)(null, I), k = r.useMemo(() => (0, a.jsx)(u.L, {
      analyticsPage: b,
      ctaText: n,
      ctaOnClick: () => {
        P(), l()
      },
      linkText: g
    }), [b, n, g, P, l]);
    return (0, a.jsxs)("div", {
      className: i()(x.container, j, {
        [x.hidden]: O,
        [x.visible]: !O
      }),
      children: [(0, a.jsx)(m.y, {
        pillRef: N,
        balance: _,
        balanceWidgetMode: y,
        onMouseDown: e => {
          e.stopPropagation()
        },
        onClick: P,
        showNotificationBadge: t
      }), S && (0, a.jsx)("div", {
        className: i()(x.cardContainer, v, {
          [x.hidden]: O,
          [x.visible]: !O
        }),
        ref: w,
        children: k
      })]
    })
  };
b.CardAlignment = f