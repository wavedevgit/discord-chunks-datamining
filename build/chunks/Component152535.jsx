/** Chunk was on 77870 **/
/** chunk id: 152535, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => f
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

function f(e) {
  let {
    channel: t,
    themeable: n,
    whichPopoutIsOpen: f,
    setWhichPopoutIsOpen: g
  } = e, {
    parentAnalyticsLocation: m
  } = (0, a.Ay)(), b = l.useRef(null), {
    isHovered: A,
    setIsHovered: y,
    onMouseEnter: _,
    onMouseLeave: O
  } = (0, c.A)(200, 300), {
    Component: j,
    play: v,
    events: {
      onMouseEnter: x,
      onMouseLeave: E
    }
  } = (0, i.T)(), C = l.useCallback(e => {
    "focus" !== e.type && (_(), x())
  }, [_, x]), S = l.useCallback(() => {
    null == f && (O(), E())
  }, [O, E, f]), I = l.useCallback(() => {
    (0, o.X)(m, o.O.GIFTING), f === p.P.GIFTING ? (null == g || g(true), O()) : (null != f ? (v(), _()) : v(), null == g || g(p.P.GIFTING))
  }, [_, O, m, v, g, f]);
  return (0, r.jsx)(s.Y, {
    targetElementRef: b,
    shouldShow: A && (f === p.P.GIFTING || null == f) || f === p.P.GIFTING,
    animation: s.Y.Animation.FADE,
    animationPosition: "top",
    position: "top",
    align: "center",
    spacing: 16,
    onRequestClose: () => {
      y(false), null == g || g(true)
    },
    renderPopout: e => {
      let {
        closePopout: n
      } = e;
      return (0, r.jsx)(u.A, {
        channel: t,
        closePopout: n,
        isHovered: A,
        onMouseEnter: _,
        onMouseLeave: O
      })
    },
    children: () => (0, r.jsx)(d.l, {
      ref: b,
      isTrayButton: true,
      themeable: n,
      "aria-label": h.intl.string(h.t.PEjaCx),
      iconComponent: j,
      onClick: I,
      onMouseEnter: C,
      onMouseLeave: S,
      isActive: A || f === p.P.GIFTING,
      color: A || f === p.P.GIFTING ? "primaryDark" : true
    })
  })
}