/** Chunk was on 26628 **/
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
  Chunk11779 = require("./11779.js");

function b(e) {
  let {
    children: t,
    popoutPosition: n,
    popoutAlign: l,
    targetElementRef: p,
    spacing: b = 0
  } = e, {
    isOpen: _,
    setIsOpen: y
  } = (0, h.Z)(), C = i.useCallback(() => {
    y(false)
  }, [y]), v = i.useCallback(() => {
    y(!_)
  }, [_, y]);
  (0, c.ZP)(() => {
    let e = () => {
      y(false)
    };
    return a.Z.subscribe("USER_SETTINGS_MODAL_OPEN", e), () => a.Z.unsubscribe("USER_SETTINGS_MODAL_OPEN", e)
  }), i.useEffect(() => (u.S.subscribe(f.CkL.TOGGLE_INBOX, v), () => void u.S.unsubscribe(f.CkL.TOGGLE_INBOX, v)), [v]);
  let {
    entrypoint: j
  } = (0, d.pN)({
    location: "NotificationsInboxPopout"
  });
  return (0, r.jsx)(s.yRy, {
    targetElementRef: p,
    shouldShow: _,
    align: l,
    animation: j === d.u3.TITLE_BAR_LEFT ? s.yRy.Animation.TRANSLATE : s.yRy.Animation.FADE,
    animationPosition: j === d.u3.TITLE_BAR_LEFT ? "bottom" : "left",
    position: n,
    onRequestClose: C,
    spacing: b,
    renderPopout: () => (0, r.jsx)(s.VqE, {
      "aria-label": g.intl.string(g.t.GSmTKC),
      className: o()({
        [m.repositionLayerTitlebarPopout]: j === d.u3.TITLE_BAR_LEFT,
        [m.repositionLayerSidebarPopout]: j === d.u3.SERVER_RAIL_TOP
      }),
      children: (0, r.jsx)(O, {})
    }),
    children: (e, n) => {
      let {
        isShown: r
      } = n;
      return t(v, r, e)
    }
  })
}

function O() {
  return (0, Chunk255367.jsxs)("div", {
    className: Chunk11779.container,
    children: [(0, Chunk255367.jsx)("div", {
      className: Chunk11779.backgroundContainer,
      children: (0, Chunk255367.jsx)("span", {
        className: Chunk11779.background
      })
    }), (0, Chunk255367.jsx)(Chunk82409.Z, {})]
  })
}