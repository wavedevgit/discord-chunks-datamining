/** Chunk was on 81985 **/
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
    setWhichPopoutIsOpen: g
  } = e, {
    parentAnalyticsLocation: m
  } = (0, o.ZP)(), b = i.useRef(null), {
    isHovered: y,
    setIsHovered: v,
    onMouseEnter: O,
    onMouseLeave: j
  } = (0, c.Z)(200, 300), {
    Component: x,
    play: C,
    events: {
      onMouseEnter: E,
      onMouseLeave: S
    }
  } = (0, l.$)(), _ = i.useCallback(e => {
    "focus" !== e.type && (O(), E())
  }, [O, E]), I = i.useCallback(() => {
    null == h && (j(), S())
  }, [j, S, h]), P = i.useCallback(() => {
    (0, s.v)(m, s.d.GIFTING), h === p.D.GIFTING ? (null == g || g(true), j()) : (null != h ? (C(), O()) : C(), null == g || g(p.D.GIFTING))
  }, [O, j, m, C, g, h]);
  return (0, r.jsx)(a.y, {
    targetElementRef: b,
    shouldShow: y && (h === p.D.GIFTING || null == h) || h === p.D.GIFTING,
    animation: a.y.Animation.FADE,
    animationPosition: "top",
    position: "top",
    align: "center",
    spacing: 16,
    onRequestClose: () => {
      v(false), null == g || g(true)
    },
    renderPopout: e => {
      let {
        closePopout: n
      } = e;
      return (0, r.jsx)(u.Z, {
        channel: t,
        closePopout: n,
        isHovered: y,
        onMouseEnter: O,
        onMouseLeave: j
      })
    },
    children: () => (0, r.jsx)(d.d, {
      ref: b,
      isTrayButton: true,
      themeable: n,
      "aria-label": f.intl.string(f.t.PEjaCx),
      iconComponent: x,
      onClick: P,
      onMouseEnter: _,
      onMouseLeave: I,
      isActive: y || h === p.D.GIFTING,
      color: y || h === p.D.GIFTING ? "primaryDark" : true
    })
  })
}