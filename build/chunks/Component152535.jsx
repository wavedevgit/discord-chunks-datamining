/** Chunk was on 97492 **/
/** chunk id: 152535, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => h
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk533781 = require("./533781.jsx"),
  Chunk265872 = require("./265872.jsx"),
  Chunk688810 = require("./688810.jsx"),
  Chunk384059 = require("./384059.js"),
  Chunk421773 = require("./421773.js"),
  Chunk729081 = require("./729081.jsx"),
  Chunk709562 = require("./709562.jsx"),
  Chunk376086 = require("./376086.js"),
  Chunk985018 = require("./985018.jsx");

function h(e) {
  let {
    channel: t,
    themeable: n,
    whichPopoutIsOpen: h,
    setWhichPopoutIsOpen: b
  } = e, {
    parentAnalyticsLocation: g
  } = (0, s.Ay)(), m = l.useRef(null), {
    isHovered: A,
    setIsHovered: y,
    onMouseEnter: O,
    onMouseLeave: j
  } = (0, c.A)(200, 300), {
    Component: v,
    play: x,
    events: {
      onMouseEnter: E,
      onMouseLeave: _
    }
  } = (0, i.T)(), C = l.useCallback(e => {
    "focus" !== e.type && (O(), E())
  }, [O, E]), S = l.useCallback(() => {
    null == h && (j(), _())
  }, [j, _, h]), I = l.useCallback(() => {
    (0, o.X)(g, o.O.GIFTING), h === f.P.GIFTING ? (null == b || b(true), j()) : (null != h ? (x(), O()) : x(), null == b || b(f.P.GIFTING))
  }, [O, j, g, x, b, h]);
  return (0, r.jsx)(a.Y, {
    targetElementRef: m,
    shouldShow: A && (h === f.P.GIFTING || null == h) || h === f.P.GIFTING,
    animation: a.Y.Animation.FADE,
    animationPosition: "top",
    position: "top",
    align: "center",
    spacing: 16,
    onRequestClose: () => {
      y(false), null == b || b(true)
    },
    renderPopout: e => {
      let {
        closePopout: n
      } = e;
      return (0, r.jsx)(u.A, {
        channel: t,
        closePopout: n,
        isHovered: A,
        onMouseEnter: O,
        onMouseLeave: j
      })
    },
    children: () => (0, r.jsx)(d.l, {
      ref: m,
      isTrayButton: true,
      themeable: n,
      "aria-label": p.intl.string(p.t.PEjaCx),
      iconComponent: v,
      onClick: I,
      onMouseEnter: C,
      onMouseLeave: S,
      isActive: A || h === f.P.GIFTING,
      color: A || h === f.P.GIFTING ? "primaryDark" : true
    })
  })
}