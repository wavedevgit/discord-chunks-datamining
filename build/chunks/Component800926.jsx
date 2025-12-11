/** Chunk was on 945 **/
/** chunk id: 800926, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk467721 = require("./467721.js"),
  Chunk49436 = require("./49436.js"),
  Chunk968843 = require("./968843.js"),
  Chunk217599 = require("./217599.jsx"),
  Chunk373322 = require("./373322.jsx"),
  Chunk167308 = require("./167308.jsx"),
  Chunk26275 = require("./26275.jsx"),
  Chunk945165 = require("./945165.js"),
  Chunk50683 = require("./50683.js");
let x = Chunk473749.forwardRef(function(e, t) {
  var n, i;
  let {
    className: x,
    expansionSpring: b,
    isExpanded: g,
    isExpansionAnimationComplete: v,
    quest: j,
    taskDetails: y,
    useReducedMotion: C,
    onCtxMenuOpen: _,
    onCtxMenuClose: S,
    onCtxMenuSelect: E,
    overlayRef: O
  } = e, T = (null == (n = j.userStatus) ? true : n.completedAt) != null, N = (0, c.Jf)(j), P = r.useRef(null), w = (null == (i = j.userStatus) ? true : i.enrolledAt) != null, I = null != N ? N.percentComplete : y.percentComplete, [k, R] = r.useState(false);
  return (0, a.jsxs)(a.Fragment, {
    children: [T && (0, a.jsx)(u.Z, {
      expansionSpring: b,
      overlayRef: O,
      progressBarRef: P,
      quest: j,
      isExpanded: g,
      isHovered: k
    }), (0, a.jsx)(s.animated.div, {
      ref: t,
      "aria-hidden": g && v,
      className: l()(x, f.contentCollapsed, {
        [f.contentCollapsedExpanded]: g,
        [f.contentCollapsedAccepted]: w
      }),
      style: {
        opacity: b.to({
          range: [0, 1],
          output: [1, 0]
        }),
        backgroundImage: T ? "linear-gradient(90deg, ".concat(h.cd, ", ").concat(h.v$, ")") : true
      },
      onMouseEnter: () => R(true),
      onMouseLeave: () => R(false),
      children: (0, a.jsxs)("div", {
        className: f.contentCollapsedWrapper,
        children: [T && (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsx)(p.Z, {
            quest: j,
            onCtxMenuOpen: _,
            onCtxMenuClose: S,
            onCtxMenuSelect: E
          }), (0, a.jsx)("div", {
            className: f.divider
          })]
        }), w ? (0, a.jsx)(m.Z, {
          contentLocation: "collapsed",
          quest: j,
          progressBarRef: P,
          isExpanded: false,
          percentComplete: I
        }) : null, T && (0, a.jsx)(d.r, {
          quest: j,
          useReducedMotion: C,
          isExpanded: false,
          awaitingConsoleConnections: false,
          hasMadeProgress: true,
          isProgressing: false,
          activeScreen: o.LI.DESKTOP,
          showBackButton: false,
          onBack: () => {},
          taskDetails: y,
          sourceQuestContent: o.jn.QUEST_BAR_V2
        })]
      })
    })]
  })
})