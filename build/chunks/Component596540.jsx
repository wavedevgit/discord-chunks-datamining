/** Chunk was on 1113 **/
/** chunk id: 596540, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => f
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
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

function f(e) {
  let {
    children: t,
    popoutPosition: n,
    popoutAlign: d,
    targetElementRef: g,
    spacing: f = 0
  } = e, {
    isOpen: b,
    setIsOpen: A
  } = (0, u.A)(), y = l.useCallback(() => {
    A(false)
  }, [A]), O = l.useCallback(() => {
    A(!b)
  }, [b, A]);
  (0, a.Ay)(() => {
    let e = () => {
      A(false)
    };
    return s.h.subscribe("USER_SETTINGS_MODAL_OPEN", e), () => s.h.unsubscribe("USER_SETTINGS_MODAL_OPEN", e)
  }), l.useEffect(() => (o._.subscribe(h.jej.TOGGLE_INBOX, O), () => void o._.unsubscribe(h.jej.TOGGLE_INBOX, O)), [O]);
  let {
    entrypoint: _
  } = (0, c.X8)({
    location: "NotificationsInboxPopout"
  });
  return (0, r.jsx)(i.YNO, {
    targetElementRef: g,
    shouldShow: b,
    align: d,
    animation: _ === c.RK.TITLE_BAR_LEFT ? i.YNO.Animation.TRANSLATE : i.YNO.Animation.FADE,
    animationPosition: _ === c.RK.TITLE_BAR_LEFT ? "bottom" : "left",
    position: n,
    onRequestClose: y,
    spacing: f,
    renderPopout: () => (0, r.jsx)(i.lGe, {
      "aria-label": p.intl.string(p.t.GSmTKJ),
      children: (0, r.jsx)(m, {})
    }),
    children: (e, n) => {
      let {
        isShown: r
      } = n;
      return t(O, r, e)
    }
  })
}

function m() {
  return (0, r.jsxs)("div", {
    className: g.kL,
    children: [(0, r.jsx)("div", {
      className: g._Q,
      children: (0, r.jsx)("span", {
        className: g.Tp
      })
    }), (0, r.jsx)(d.A, {})]
  })
}