/** Chunk was on 50737 **/
/** chunk id: 961040, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
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
    isOpen: _,
    setIsOpen: y
  } = (0, p.Z)(), v = i.useCallback(() => {
    y(false)
  }, [y]), j = i.useCallback(() => {
    y(!_)
  }, [_, y]);
  (0, c.ZP)(() => {
    let e = () => {
      y(false)
    };
    return s.Z.subscribe("USER_SETTINGS_MODAL_OPEN", e), () => s.Z.unsubscribe("USER_SETTINGS_MODAL_OPEN", e)
  }), i.useEffect(() => (u.S.subscribe(h.CkL.TOGGLE_INBOX, j), () => void u.S.unsubscribe(h.CkL.TOGGLE_INBOX, j)), [j]);
  let {
    entrypoint: C
  } = (0, d.pN)({
    location: "NotificationsInboxPopout"
  });
  return (0, r.jsx)(a.yRy, {
    targetElementRef: f,
    shouldShow: _,
    align: l,
    animation: C === d.u3.TITLE_BAR_LEFT ? a.yRy.Animation.TRANSLATE : a.yRy.Animation.FADE,
    animationPosition: C === d.u3.TITLE_BAR_LEFT ? "bottom" : "left",
    position: n,
    onRequestClose: v,
    spacing: b,
    renderPopout: () => (0, r.jsx)(a.VqE, {
      "aria-label": g.intl.string(g.t.GSmTKC),
      className: o()({
        [m.repositionLayerTitlebarPopout]: C === d.u3.TITLE_BAR_LEFT,
        [m.repositionLayerSidebarPopout]: C === d.u3.SERVER_RAIL_TOP
      }),
      children: (0, r.jsx)(O, {})
    }),
    children: (e, n) => {
      let {
        isShown: r
      } = n;
      return t(j, r, e)
    }
  })
}

function O() {
  return (0, Chunk255367.jsxs)("div", {
    className: Chunk888831.container,
    children: [(0, Chunk255367.jsx)("div", {
      className: Chunk888831.backgroundContainer,
      children: (0, Chunk255367.jsx)("span", {
        className: Chunk888831.background
      })
    }), (0, Chunk255367.jsx)(Chunk82409.Z, {})]
  })
}