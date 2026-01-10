/** Chunk was on 81985 **/
/** chunk id: 961040, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk493773 = require("./493773.js"),
  Chunk585483 = require("./585483.js"),
  Chunk821020 = require("./821020.js"),
  Chunk736670 = require("./736670.js"),
  Chunk82409 = require("./82409.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk122069 = require("./122069.js");

function b(e) {
  let {
    children: t,
    popoutPosition: n,
    popoutAlign: l,
    targetElementRef: f,
    spacing: b = 0
  } = e, {
    isOpen: v,
    setIsOpen: O
  } = (0, p.Z)(), j = i.useCallback(() => {
    O(false)
  }, [O]), x = i.useCallback(() => {
    O(!v)
  }, [v, O]);
  (0, c.ZP)(() => {
    let e = () => {
      O(false)
    };
    return s.Z.subscribe("USER_SETTINGS_MODAL_OPEN", e), () => s.Z.unsubscribe("USER_SETTINGS_MODAL_OPEN", e)
  }), i.useEffect(() => (u.S.subscribe(h.CkL.TOGGLE_INBOX, x), () => void u.S.unsubscribe(h.CkL.TOGGLE_INBOX, x)), [x]);
  let {
    entrypoint: C
  } = (0, d.pN)({
    location: "NotificationsInboxPopout"
  });
  return (0, r.jsx)(o.yRy, {
    targetElementRef: f,
    shouldShow: v,
    align: l,
    animation: C === d.u3.TITLE_BAR_LEFT ? o.yRy.Animation.TRANSLATE : o.yRy.Animation.FADE,
    animationPosition: C === d.u3.TITLE_BAR_LEFT ? "bottom" : "left",
    position: n,
    onRequestClose: j,
    spacing: b,
    renderPopout: () => (0, r.jsx)(o.VqE, {
      "aria-label": g.intl.string(g.t.GSmTKJ),
      className: a()({
        [m.repositionLayerTitlebarPopout]: C === d.u3.TITLE_BAR_LEFT,
        [m.repositionLayerSidebarPopout]: C === d.u3.SERVER_RAIL_TOP
      }),
      children: (0, r.jsx)(y, {})
    }),
    children: (e, n) => {
      let {
        isShown: r
      } = n;
      return t(x, r, e)
    }
  })
}

function y() {
  return (0, r.jsxs)("div", {
    className: m.container,
    children: [(0, r.jsx)("div", {
      className: m.backgroundContainer,
      children: (0, r.jsx)("span", {
        className: m.background
      })
    }), (0, r.jsx)(f.Z, {})]
  })
}