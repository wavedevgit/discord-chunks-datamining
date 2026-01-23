/** Chunk was on 97492 **/
/** chunk id: 596540, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => b
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
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

function b(e) {
  let {
    children: t,
    popoutPosition: n,
    popoutAlign: i,
    targetElementRef: h,
    spacing: b = 0
  } = e, {
    isOpen: y,
    setIsOpen: _
  } = (0, p.A)(), O = l.useCallback(() => {
    _(false)
  }, [_]), j = l.useCallback(() => {
    _(!y)
  }, [y, _]);
  (0, c.Ay)(() => {
    let e = () => {
      _(false)
    };
    return o.h.subscribe("USER_SETTINGS_MODAL_OPEN", e), () => o.h.unsubscribe("USER_SETTINGS_MODAL_OPEN", e)
  }), l.useEffect(() => (u._.subscribe(f.jej.TOGGLE_INBOX, j), () => void u._.unsubscribe(f.jej.TOGGLE_INBOX, j)), [j]);
  let {
    entrypoint: v
  } = (0, d.X8)({
    location: "NotificationsInboxPopout"
  });
  return (0, r.jsx)(a.YNO, {
    targetElementRef: h,
    shouldShow: y,
    align: i,
    animation: v === d.RK.TITLE_BAR_LEFT ? a.YNO.Animation.TRANSLATE : a.YNO.Animation.FADE,
    animationPosition: v === d.RK.TITLE_BAR_LEFT ? "bottom" : "left",
    position: n,
    onRequestClose: O,
    spacing: b,
    renderPopout: () => (0, r.jsx)(a.lGe, {
      "aria-label": g.intl.string(g.t.GSmTKJ),
      className: s()({
        [m.Um]: v === d.RK.TITLE_BAR_LEFT,
        [m.vf]: v === d.RK.SERVER_RAIL_TOP
      }),
      children: (0, r.jsx)(A, {})
    }),
    children: (e, n) => {
      let {
        isShown: r
      } = n;
      return t(j, r, e)
    }
  })
}

function A() {
  return (0, r.jsxs)("div", {
    className: m.kL,
    children: [(0, r.jsx)("div", {
      className: m._Q,
      children: (0, r.jsx)("span", {
        className: m.Tp
      })
    }), (0, r.jsx)(h.A, {})]
  })
}