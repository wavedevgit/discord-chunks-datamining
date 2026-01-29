/** Chunk was on 1113 **/
/** chunk id: 152535, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => g
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

function g(e) {
  let {
    channel: t,
    themeable: n,
    whichPopoutIsOpen: g,
    setWhichPopoutIsOpen: f
  } = e, {
    parentAnalyticsLocation: m
  } = (0, a.Ay)(), b = l.useRef(null), {
    isHovered: A,
    setIsHovered: y,
    onMouseEnter: O,
    onMouseLeave: _
  } = (0, c.A)(200, 300), {
    Component: x,
    play: j,
    events: {
      onMouseEnter: v,
      onMouseLeave: E
    }
  } = (0, i.T)(), C = l.useCallback(e => {
    "focus" !== e.type && (O(), v())
  }, [O, v]), S = l.useCallback(() => {
    null == g && (_(), E())
  }, [_, E, g]), I = l.useCallback(() => {
    (0, o.X)(m, o.O.GIFTING), g === h.P.GIFTING ? (null == f || f(true), _()) : (null != g ? (j(), O()) : j(), null == f || f(h.P.GIFTING))
  }, [O, _, m, j, f, g]);
  return (0, r.jsx)(s.Y, {
    targetElementRef: b,
    shouldShow: A && (g === h.P.GIFTING || null == g) || g === h.P.GIFTING,
    animation: s.Y.Animation.FADE,
    animationPosition: "top",
    position: "top",
    align: "center",
    spacing: 16,
    onRequestClose: () => {
      y(false), null == f || f(true)
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
        onMouseLeave: _
      })
    },
    children: () => (0, r.jsx)(d.l, {
      ref: b,
      isTrayButton: true,
      themeable: n,
      "aria-label": p.intl.string(p.t.PEjaCx),
      iconComponent: x,
      onClick: I,
      onMouseEnter: C,
      onMouseLeave: S,
      isActive: A || g === h.P.GIFTING,
      color: A || g === h.P.GIFTING ? "primaryDark" : true
    })
  })
}