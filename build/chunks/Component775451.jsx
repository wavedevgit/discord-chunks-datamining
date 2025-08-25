/** Chunk was on web.js **/
/** chunk id: 775451, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  V9: () => E,
  ek: () => g
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk351773 = require("./351773.js"),
  Chunk507808 = require("./507808.js"),
  Chunk23547 = require("./23547.jsx"),
  Chunk790542 = require("./790542.js"),
  Chunk317257 = require("./317257.js"),
  Chunk120786 = require("./120786.jsx"),
  Chunk82856 = require("./82856.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk152935 = require("./152935.js");
let g = {
    START: Chunk152935.alignLeft,
    END: Chunk152935.alignRight
  },
  E = e => {
    let {
      showNotificationBadge: t,
      ctaText: n,
      ctaOnClick: o,
      anchorPillType: E,
      analyticsPage: b,
      isCoachmarkEnabled: y = true,
      linkText: O = h.intl.string(h.t.XRdyj4),
      cardAlignment: v = g.START,
      className: I
    } = e, {
      balance: T
    } = (0, u.A)(), [S, A] = i.useState(d.b.DEFAULT), [C, N] = i.useState(false), [R, P] = i.useState(false), w = i.useRef(null), {
      shouldOpen: D
    } = (0, c.Mm)({
      backgroundElementRef: w,
      isCoachmarkEnabled: y,
      onCloseCallback: p.dG4,
      onClickPill: p.dG4
    });
    i.useEffect(() => {
      y && ((0, c.wH)() || D ? (P(true), N(false)) : P(false))
    }, [y, D]);
    let x = i.useCallback(() => {
        let e = !C;
        e && null != b && (0, l.Y)({
          pageType: b,
          sectionType: p.jXE.ORBS_BALANCE_MENU,
          ctaObject: p.qAy.OPEN_ORB_BALANCE_MENU_FROM_PILL
        }), A(e ? d.b.SELECTED : d.b.DEFAULT), N(e)
      }, [C, b]),
      L = i.useCallback(() => {
        C && x()
      }, [C, x]),
      j = (0, s.Z)(null, L),
      M = i.useMemo(() => (0, r.jsx)(f.L, {
        analyticsPage: b,
        ctaText: n,
        ctaOnClick: () => {
          x(), o()
        },
        linkText: O
      }), [b, n, O, x, o]);
    return (0, r.jsxs)("div", {
      className: a()(m.container, I, {
        [m.hidden]: R,
        [m.visible]: !R
      }),
      children: [(0, r.jsx)(_.y, {
        pillRef: w,
        anchorPillType: E,
        balance: T,
        balanceWidgetMode: D ? d.b.DEFAULT : S,
        onMouseDown: e => {
          e.stopPropagation()
        },
        onClick: x,
        showNotificationBadge: t
      }), C && (0, r.jsx)("div", {
        className: a()(m.cardContainer, v, {
          [m.hidden]: R,
          [m.visible]: !R
        }),
        ref: j,
        children: M
      })]
    })
  };
E.CardAlignment = g