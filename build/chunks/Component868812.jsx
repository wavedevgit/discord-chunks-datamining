/** Chunk was on 40184 **/
/** chunk id: 868812, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
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

function h(e) {
  let {
    channel: t,
    themeable: n,
    whichPopoutIsOpen: h,
    setWhichPopoutIsOpen: m
  } = e, {
    parentAnalyticsLocation: g
  } = (0, o.ZP)(), b = r.useRef(null), {
    isHovered: y,
    setIsHovered: C,
    onMouseEnter: v,
    onMouseLeave: x
  } = (0, c.Z)(200, 300), {
    Component: O,
    play: E,
    events: {
      onMouseEnter: j,
      onMouseLeave: S
    }
  } = (0, l.$)(), _ = r.useCallback(e => {
    "focus" !== e.type && (v(), j())
  }, [v, j]), P = r.useCallback(() => {
    null == h && (x(), S())
  }, [x, S, h]), I = r.useCallback(() => {
    (0, s.v)(g, s.d.GIFTING), h === p.D.GIFTING ? (null == m || m(true), x()) : (null != h ? (E(), v()) : E(), null == m || m(p.D.GIFTING))
  }, [v, x, g, E, m, h]);
  return (0, i.jsx)(a.y, {
    targetElementRef: b,
    shouldShow: y && (h === p.D.GIFTING || null == h) || h === p.D.GIFTING,
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
        onMouseLeave: x
      })
    },
    children: () => (0, i.jsx)(d.d, {
      ref: b,
      isTrayButton: true,
      themeable: n,
      "aria-label": f.intl.string(f.t.PEjaCx),
      iconComponent: O,
      onClick: I,
      onMouseEnter: _,
      onMouseLeave: P,
      isActive: y || h === p.D.GIFTING,
      color: y || h === p.D.GIFTING ? "primaryDark" : true
    })
  })
}