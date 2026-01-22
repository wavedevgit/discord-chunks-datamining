/** Chunk was on 97492 **/
/** chunk id: 596540, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => m
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk73153 = require("./73153.js"),
  Chunk964486 = require("./964486.js"),
  Chunk203982 = require("./203982.js"),
  Chunk851109 = require("./851109.js"),
  Chunk355741 = require("./355741.js"),
  Chunk480680 = require("./480680.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk782462 = require("./782462.js");

function m(e) {
  let {
    children: t,
    popoutPosition: n,
    popoutAlign: i,
    targetElementRef: p,
    spacing: m = 0
  } = e, {
    isOpen: y,
    setIsOpen: O
  } = (0, f.A)(), j = l.useCallback(() => {
    O(false)
  }, [O]), v = l.useCallback(() => {
    O(!y)
  }, [y, O]);
  (0, c.Ay)(() => {
    let e = () => {
      O(false)
    };
    return o.h.subscribe("USER_SETTINGS_MODAL_OPEN", e), () => o.h.unsubscribe("USER_SETTINGS_MODAL_OPEN", e)
  }), l.useEffect(() => (u._.subscribe(h.jej.TOGGLE_INBOX, v), () => void u._.unsubscribe(h.jej.TOGGLE_INBOX, v)), [v]);
  let {
    entrypoint: x
  } = (0, d.X8)({
    location: "NotificationsInboxPopout"
  });
  return (0, r.jsx)(s.YNO, {
    targetElementRef: p,
    shouldShow: y,
    align: i,
    animation: x === d.RK.TITLE_BAR_LEFT ? s.YNO.Animation.TRANSLATE : s.YNO.Animation.FADE,
    animationPosition: x === d.RK.TITLE_BAR_LEFT ? "bottom" : "left",
    position: n,
    onRequestClose: j,
    spacing: m,
    renderPopout: () => (0, r.jsx)(s.lGe, {
      "aria-label": b.intl.string(b.t.GSmTKJ),
      className: a()({
        [g.Um]: x === d.RK.TITLE_BAR_LEFT,
        [g.vf]: x === d.RK.SERVER_RAIL_TOP
      }),
      children: (0, r.jsx)(A, {})
    }),
    children: (e, n) => {
      let {
        isShown: r
      } = n;
      return t(v, r, e)
    }
  })
}

function A() {
  return (0, r.jsxs)("div", {
    className: g.kL,
    children: [(0, r.jsx)("div", {
      className: g._Q,
      children: (0, r.jsx)("span", {
        className: g.Tp
      })
    }), (0, r.jsx)(p.A, {})]
  })
}