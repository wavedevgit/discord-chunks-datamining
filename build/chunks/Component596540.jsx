/** Chunk was on 41727 **/
/** chunk id: 596540, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => g
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

function g(e) {
  let {
    children: t,
    popoutPosition: n,
    popoutAlign: d,
    targetElementRef: f,
    spacing: g = 0
  } = e, {
    isOpen: b,
    setIsOpen: A
  } = (0, u.A)(), y = l.useCallback(() => {
    A(false)
  }, [A]), _ = l.useCallback(() => {
    A(!b)
  }, [b, A]);
  (0, a.Ay)(() => {
    let e = () => {
      A(false)
    };
    return s.h.subscribe("USER_SETTINGS_MODAL_OPEN", e), () => s.h.unsubscribe("USER_SETTINGS_MODAL_OPEN", e)
  }), l.useEffect(() => (o._.subscribe(p.jej.TOGGLE_INBOX, _), () => void o._.unsubscribe(p.jej.TOGGLE_INBOX, _)), [_]);
  let {
    entrypoint: O
  } = (0, c.X8)({
    location: "NotificationsInboxPopout"
  });
  return (0, r.jsx)(i.YNO, {
    targetElementRef: f,
    shouldShow: b,
    align: d,
    animation: O === c.RK.TITLE_BAR_LEFT ? i.YNO.Animation.TRANSLATE : i.YNO.Animation.FADE,
    animationPosition: O === c.RK.TITLE_BAR_LEFT ? "bottom" : "left",
    position: n,
    onRequestClose: y,
    spacing: g,
    renderPopout: () => (0, r.jsx)(i.lGe, {
      "aria-label": h.intl.string(h.t.GSmTKJ),
      children: (0, r.jsx)(m, {})
    }),
    children: (e, n) => {
      let {
        isShown: r
      } = n;
      return t(_, r, e)
    }
  })
}

function m() {
  return (0, r.jsxs)("div", {
    className: f.kL,
    children: [(0, r.jsx)("div", {
      className: f._Q,
      children: (0, r.jsx)("span", {
        className: f.Tp
      })
    }), (0, r.jsx)(d.A, {})]
  })
}