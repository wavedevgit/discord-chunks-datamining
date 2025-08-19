/** Chunk was on 66181 **/
/** chunk id: 775451, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  V9: () => x,
  ek: () => b
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
let b = {
    START: Chunk152935.alignLeft,
    END: Chunk152935.alignRight
  },
  x = e => {
    let {
      showNotificationBadge: t,
      ctaText: n,
      ctaOnClick: s,
      anchorPillType: x,
      analyticsPage: _,
      isCoachmarkEnabled: j = true,
      linkText: E = h.intl.string(h.t.XRdyj4),
      cardAlignment: C = b.START,
      className: O
    } = e, {
      balance: v
    } = (0, d.A)(), [S, T] = r.useState(u.b.DEFAULT), [N, I] = r.useState(false), [y, A] = r.useState(false), P = r.useRef(null), {
      shouldOpen: R
    } = (0, c.Mm)({
      backgroundElementRef: P,
      isCoachmarkEnabled: j,
      onCloseCallback: g.dG4,
      onClickPill: g.dG4
    });
    r.useEffect(() => {
      j && ((0, c.wH)() || R ? (A(true), I(false)) : A(false))
    }, [j, R]);
    let D = r.useCallback(() => {
        let e = !N;
        e && null != _ && (0, o.Y)({
          pageType: _,
          sectionType: g.jXE.ORBS_BALANCE_MENU,
          ctaObject: g.qAy.OPEN_ORB_BALANCE_MENU_FROM_PILL
        }), T(e ? u.b.SELECTED : u.b.DEFAULT), I(e)
      }, [N, _]),
      Z = r.useCallback(() => {
        N && D()
      }, [N, D]),
      w = (0, l.Z)(null, Z),
      k = r.useMemo(() => (0, i.jsx)(m.L, {
        analyticsPage: _,
        ctaText: n,
        ctaOnClick: () => {
          D(), s()
        },
        linkText: E
      }), [_, n, E, D, s]);
    return (0, i.jsxs)("div", {
      className: a()(f.container, O, {
        [f.hidden]: y,
        [f.visible]: !y
      }),
      children: [(0, i.jsx)(p.y, {
        pillRef: P,
        anchorPillType: x,
        balance: v,
        balanceWidgetMode: R ? u.b.DEFAULT : S,
        onMouseDown: e => {
          e.stopPropagation()
        },
        onClick: D,
        showNotificationBadge: t
      }), N && (0, i.jsx)("div", {
        className: a()(f.cardContainer, C, {
          [f.hidden]: y,
          [f.visible]: !y
        }),
        ref: w,
        children: k
      })]
    })
  };
x.CardAlignment = b