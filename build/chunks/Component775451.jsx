/** Chunk was on 97571 **/
/** chunk id: 775451, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  V9: () => b,
  ek: () => f
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk351773 = require("./351773.js"),
  Chunk507808 = require("./507808.js"),
  Chunk790542 = require("./790542.js"),
  Chunk317257 = require("./317257.js"),
  Chunk120786 = require("./120786.jsx"),
  Chunk82856 = require("./82856.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk522323 = require("./522323.js");
let f = {
    START: Chunk522323.alignLeft,
    END: Chunk522323.alignRight
  },
  b = e => {
    let {
      showNotificationBadge: t,
      ctaText: n,
      ctaOnClick: i,
      anchorPillType: b,
      analyticsPage: g,
      linkText: v = h.intl.string(h.t.XRdyj4),
      cardAlignment: j = f.START,
      className: _
    } = e, {
      balance: y
    } = (0, c.A)(), [C, E] = r.useState(d.b.DEFAULT), [N, T] = r.useState(false), [S, O] = r.useState(false), P = r.useRef(null), I = r.useCallback(() => {
      let e = !N;
      e && null != g && (0, o.Y)({
        pageType: g,
        sectionType: p.jXE.ORBS_BALANCE_MENU,
        ctaObject: p.qAy.OPEN_ORB_BALANCE_MENU_FROM_PILL
      }), E(e ? d.b.SELECTED : d.b.DEFAULT), T(e)
    }, [N, g]), k = r.useCallback(() => {
      N && I()
    }, [N, I]), w = (0, s.Z)(null, k), R = r.useMemo(() => (0, a.jsx)(u.L, {
      analyticsPage: g,
      ctaText: n,
      ctaOnClick: () => {
        I(), i()
      },
      linkText: v
    }), [g, n, v, I, i]);
    return (0, a.jsxs)("div", {
      className: l()(x.container, _, {
        [x.hidden]: S,
        [x.visible]: !S
      }),
      children: [(0, a.jsx)(m.y, {
        pillRef: P,
        anchorPillType: b,
        balance: y,
        balanceWidgetMode: C,
        onMouseDown: e => {
          e.stopPropagation()
        },
        onClick: I,
        showNotificationBadge: t
      }), N && (0, a.jsx)("div", {
        className: l()(x.cardContainer, j, {
          [x.hidden]: S,
          [x.visible]: !S
        }),
        ref: w,
        children: R
      })]
    })
  };
b.CardAlignment = f