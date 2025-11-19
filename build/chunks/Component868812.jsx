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
    channel: t,
    themeable: n,
    whichPopoutIsOpen: f,
    setWhichPopoutIsOpen: m
  } = e, {
    parentAnalyticsLocation: g
  } = (0, o.ZP)(), b = r.useRef(null), {
    isHovered: y,
    setIsHovered: C,
    onMouseEnter: v,
    onMouseLeave: _
  } = (0, c.Z)(200, 300), {
    Component: x,
    play: j,
    events: {
      onMouseEnter: O,
      onMouseLeave: E
    }
  } = (0, l.$)(), S = r.useCallback(e => {
    "focus" !== e.type && (v(), O())
  }, [v, O]), P = r.useCallback(() => {
    null == f && (_(), E())
  }, [_, E, f]), I = r.useCallback(() => {
    (0, s.v)(g, s.d.GIFTING), f === p.D.GIFTING ? (null == m || m(true), _()) : (null != f ? (j(), v()) : j(), null == m || m(p.D.GIFTING))
  }, [v, _, g, j, m, f]);
  return (0, i.jsx)(a.y, {
    targetElementRef: b,
    shouldShow: y && (f === p.D.GIFTING || null == f) || f === p.D.GIFTING,
    animation: a.y.Animation.FADE,
    animationPosition: "top",
    position: "top",
    align: "center",
    spacing: 16,
    onRequestClose: () => {
      C(false), null == m || m(true)
    },
    renderPopout: e => {
      let {
        closePopout: n
      } = e;
      return (0, i.jsx)(u.Z, {
        channel: t,
        closePopout: n,
        isHovered: y,
        onMouseEnter: v,
        onMouseLeave: _
      })
    },
    children: () => (0, i.jsx)(d.d, {
      ref: b,
      isTrayButton: true,
      themeable: n,
      "aria-label": h.intl.string(h.t.PEjaCx),
      iconComponent: x,
      onClick: I,
      onMouseEnter: S,
      onMouseLeave: P,
      isActive: y || f === p.D.GIFTING,
      color: y || f === p.D.GIFTING ? "primaryDark" : true
    })
  })
}