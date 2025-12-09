/** Chunk was on 73755 **/
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
    channel: t,
    themeable: n,
    whichPopoutIsOpen: f,
    setWhichPopoutIsOpen: m
  } = e, {
    parentAnalyticsLocation: g
  } = (0, o.ZP)(), b = r.useRef(null), {
    isHovered: C,
    setIsHovered: y,
    onMouseEnter: _,
    onMouseLeave: v
  } = (0, c.Z)(200, 300), {
    Component: O,
    play: x,
    events: {
      onMouseEnter: E,
      onMouseLeave: j
    }
  } = (0, l.$)(), S = r.useCallback(e => {
    "focus" !== e.type && (_(), E())
  }, [_, E]), P = r.useCallback(() => {
    null == f && (v(), j())
  }, [v, j, f]), I = r.useCallback(() => {
    (0, s.v)(g, s.d.GIFTING), f === p.D.GIFTING ? (null == m || m(true), v()) : (null != f ? (x(), _()) : x(), null == m || m(p.D.GIFTING))
  }, [_, v, g, x, m, f]);
  return (0, i.jsx)(a.y, {
    targetElementRef: b,
    shouldShow: C && (f === p.D.GIFTING || null == f) || f === p.D.GIFTING,
    animation: a.y.Animation.FADE,
    animationPosition: "top",
    position: "top",
    align: "center",
    spacing: 16,
    onRequestClose: () => {
      y(false), null == m || m(true)
    },
    renderPopout: e => {
      let {
        closePopout: n
      } = e;
      return (0, i.jsx)(u.Z, {
        channel: t,
        closePopout: n,
        isHovered: C,
        onMouseEnter: _,
        onMouseLeave: v
      })
    },
    children: () => (0, i.jsx)(d.d, {
      ref: b,
      isTrayButton: true,
      themeable: n,
      "aria-label": h.intl.string(h.t.PEjaCx),
      iconComponent: O,
      onClick: I,
      onMouseEnter: S,
      onMouseLeave: P,
      isActive: C || f === p.D.GIFTING,
      color: C || f === p.D.GIFTING ? "primaryDark" : true
    })
  })
}