/** Chunk was on 30437 **/
/** chunk id: 961040, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk493773 = require("./493773.js"),
  Chunk585483 = require("./585483.js"),
  Chunk821020 = require("./821020.js"),
  Chunk736670 = require("./736670.js"),
  Chunk82409 = require("./82409.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk888831 = require("./888831.js");

function b(e) {
  let {
    children: t,
    popoutPosition: n,
    popoutAlign: l,
    targetElementRef: f,
    spacing: b = 0
  } = e, {
    isOpen: O,
    setIsOpen: y
  } = (0, p.Z)(), j = i.useCallback(() => {
    y(false)
  }, [y]), v = i.useCallback(() => {
    y(!O)
  }, [O, y]);
  (0, c.ZP)(() => {
    let e = () => {
      y(false)
    };
    return s.Z.subscribe("USER_SETTINGS_MODAL_OPEN", e), () => s.Z.unsubscribe("USER_SETTINGS_MODAL_OPEN", e)
  }), i.useEffect(() => (u.S.subscribe(h.CkL.TOGGLE_INBOX, v), () => void u.S.unsubscribe(h.CkL.TOGGLE_INBOX, v)), [v]);
  let {
    entrypoint: x
  } = (0, d.pN)({
    location: "NotificationsInboxPopout"
  });
  return (0, r.jsx)(a.yRy, {
    targetElementRef: f,
    shouldShow: O,
    align: l,
    animation: x === d.u3.TITLE_BAR_LEFT ? a.yRy.Animation.TRANSLATE : a.yRy.Animation.FADE,
    animationPosition: x === d.u3.TITLE_BAR_LEFT ? "bottom" : "left",
    position: n,
    onRequestClose: j,
    spacing: b,
    renderPopout: () => (0, r.jsx)(a.VqE, {
      "aria-label": g.intl.string(g.t.GSmTKJ),
      className: o()({
        [m.repositionLayerTitlebarPopout]: x === d.u3.TITLE_BAR_LEFT,
        [m.repositionLayerSidebarPopout]: x === d.u3.SERVER_RAIL_TOP
      }),
      children: (0, r.jsx)(_, {})
    }),
    children: (e, n) => {
      let {
        isShown: r
      } = n;
      return t(v, r, e)
    }
  })
}

function _() {
  return (0, Chunk951288.jsxs)("div", {
    className: Chunk888831.container,
    children: [(0, Chunk951288.jsx)("div", {
      className: Chunk888831.backgroundContainer,
      children: (0, Chunk951288.jsx)("span", {
        className: Chunk888831.background
      })
    }), (0, Chunk951288.jsx)(Chunk82409.Z, {})]
  })
}