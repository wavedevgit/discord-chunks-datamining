/** Chunk was on 82477 **/
/** chunk id: 961040, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
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

function m(e) {
  let {
    children: t,
    popoutPosition: n,
    popoutAlign: l,
    targetElementRef: h,
    spacing: m = 0
  } = e, {
    isOpen: O,
    setIsOpen: v
  } = (0, f.Z)(), j = i.useCallback(() => {
    v(false)
  }, [v]), C = i.useCallback(() => {
    v(!O)
  }, [O, v]);
  (0, c.ZP)(() => {
    let e = () => {
      v(false)
    };
    return s.Z.subscribe("USER_SETTINGS_MODAL_OPEN", e), () => s.Z.unsubscribe("USER_SETTINGS_MODAL_OPEN", e)
  }), i.useEffect(() => (u.S.subscribe(p.CkL.TOGGLE_INBOX, C), () => void u.S.unsubscribe(p.CkL.TOGGLE_INBOX, C)), [C]);
  let {
    entrypoint: x
  } = (0, d.pN)({
    location: "NotificationsInboxPopout"
  });
  return (0, r.jsx)(o.yRy, {
    targetElementRef: h,
    shouldShow: O,
    align: l,
    animation: x === d.u3.TITLE_BAR_LEFT ? o.yRy.Animation.TRANSLATE : o.yRy.Animation.FADE,
    animationPosition: x === d.u3.TITLE_BAR_LEFT ? "bottom" : "left",
    position: n,
    onRequestClose: j,
    spacing: m,
    renderPopout: () => (0, r.jsx)(o.VqE, {
      "aria-label": g.intl.string(g.t.GSmTKJ),
      className: a()({
        [b.repositionLayerTitlebarPopout]: x === d.u3.TITLE_BAR_LEFT,
        [b.repositionLayerSidebarPopout]: x === d.u3.SERVER_RAIL_TOP
      }),
      children: (0, r.jsx)(y, {})
    }),
    children: (e, n) => {
      let {
        isShown: r
      } = n;
      return t(C, r, e)
    }
  })
}

function y() {
  return (0, Chunk54381.jsxs)("div", {
    className: Chunk122069.container,
    children: [(0, Chunk54381.jsx)("div", {
      className: Chunk122069.backgroundContainer,
      children: (0, Chunk54381.jsx)("span", {
        className: Chunk122069.background
      })
    }), (0, Chunk54381.jsx)(Chunk82409.Z, {})]
  })
}