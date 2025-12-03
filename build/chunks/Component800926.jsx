/** Chunk was on 83615 **/
/** chunk id: 800926, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk205120 = require("./205120.js"),
  Chunk49436 = require("./49436.js"),
  Chunk968843 = require("./968843.js"),
  Chunk217599 = require("./217599.jsx"),
  Chunk373322 = require("./373322.jsx"),
  Chunk167308 = require("./167308.jsx"),
  Chunk26275 = require("./26275.jsx"),
  Chunk945165 = require("./945165.js"),
  Chunk504350 = require("./504350.js");
let h = Chunk473749.forwardRef(function(e, t) {
  var n, o;
  let {
    className: h,
    expansionSpring: x,
    isExpanded: _,
    isExpansionAnimationComplete: b,
    quest: j,
    taskDetails: v,
    useReducedMotion: C,
    onCtxMenuOpen: y,
    onCtxMenuClose: E,
    onCtxMenuSelect: O,
    overlayRef: S
  } = e, T = (null == (n = j.userStatus) ? true : n.completedAt) != null, w = (0, c.Jf)(j), P = s.useRef(null), N = (null == (o = j.userStatus) ? true : o.enrolledAt) != null, R = null != w ? w.percentComplete : v.percentComplete, [A, B] = s.useState(false);
  return (0, r.jsxs)(r.Fragment, {
    children: [T && (0, r.jsx)(u.Z, {
      expansionSpring: x,
      overlayRef: S,
      progressBarRef: P,
      quest: j,
      isExpanded: _,
      isHovered: A
    }), (0, r.jsx)(i.animated.div, {
      ref: t,
      "aria-hidden": _ && b,
      className: a()(h, f.contentCollapsed, {
        [f.contentCollapsedExpanded]: _,
        [f.contentCollapsedAccepted]: N
      }),
      style: {
        opacity: x.to({
          range: [0, 1],
          output: [1, 0]
        }),
        backgroundImage: T ? "linear-gradient(90deg, ".concat(g.cd, ", ").concat(g.v$, ")") : true
      },
      onMouseEnter: () => B(true),
      onMouseLeave: () => B(false),
      children: (0, r.jsxs)("div", {
        className: f.contentCollapsedWrapper,
        children: [T && (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(m.Z, {
            quest: j,
            onCtxMenuOpen: y,
            onCtxMenuClose: E,
            onCtxMenuSelect: O
          }), (0, r.jsx)("div", {
            className: f.divider
          })]
        }), N ? (0, r.jsx)(p.Z, {
          contentLocation: "collapsed",
          quest: j,
          progressBarRef: P,
          isExpanded: false,
          percentComplete: R
        }) : null, T && (0, r.jsx)(d.r, {
          quest: j,
          useReducedMotion: C,
          isExpanded: false,
          awaitingConsoleConnections: false,
          hasMadeProgress: true,
          isProgressing: false,
          activeScreen: l.LI.DESKTOP,
          showBackButton: false,
          onBack: () => {},
          taskDetails: v,
          sourceQuestContent: l.jn.QUEST_BAR_V2
        })]
      })
    })]
  })
})