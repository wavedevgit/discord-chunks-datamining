/** Chunk was on 34740 **/
/** chunk id: 868812, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk996146 = require("./996146.jsx"),
  Chunk235874 = require("./235874.jsx"),
  Chunk906732 = require("./906732.jsx"),
  Chunk522651 = require("./522651.js"),
  Chunk579185 = require("./579185.js"),
  Chunk621586 = require("./621586.jsx"),
  Chunk871499 = require("./871499.jsx"),
  Chunk127379 = require("./127379.js"),
  Chunk388032 = require("./388032.jsx");

function f(e) {
  let {
    themeable: t,
    whichPopoutIsOpen: n,
    setWhichPopoutIsOpen: f
  } = e, {
    parentAnalyticsLocation: m
  } = (0, o.ZP)(), g = r.useRef(null), {
    isHovered: b,
    setIsHovered: y,
    onMouseEnter: C,
    onMouseLeave: v
  } = (0, c.Z)(200, 300), {
    Component: _,
    play: x,
    events: {
      onMouseEnter: j,
      onMouseLeave: O
    }
  } = (0, l.$)(), E = r.useCallback(e => {
    "focus" !== e.type && (C(), j())
  }, [C, j]), S = r.useCallback(() => {
    null == n && (v(), O())
  }, [v, O, n]), P = r.useCallback(() => {
    (0, s.v)(m, s.d.GIFTING), n === p.D.GIFTING ? (null == f || f(true), v()) : (null != n ? (x(), C()) : x(), null == f || f(p.D.GIFTING))
  }, [C, v, m, x, f, n]);
  return (0, i.jsx)(a.y, {
    targetElementRef: g,
    shouldShow: b && (n === p.D.GIFTING || null == n) || n === p.D.GIFTING,
    animation: a.y.Animation.FADE,
    animationPosition: "top",
    position: "top",
    align: "center",
    spacing: 16,
    onRequestClose: () => {
      y(false), null == f || f(true)
    },
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, i.jsx)(u.Z, {
        closePopout: t,
        isHovered: b,
        onMouseEnter: C,
        onMouseLeave: v
      })
    },
    children: () => (0, i.jsx)(d.d, {
      ref: g,
      isTrayButton: true,
      themeable: t,
      "aria-label": h.intl.string(h.t.PEjaCx),
      iconComponent: _,
      onClick: P,
      onMouseEnter: E,
      onMouseLeave: S,
      isActive: b || n === p.D.GIFTING,
      color: b || n === p.D.GIFTING ? "primaryDark" : true
    })
  })
}