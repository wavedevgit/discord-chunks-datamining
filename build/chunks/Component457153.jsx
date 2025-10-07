/** Chunk was on 17013 **/
/** chunk id: 457153, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk137317 = require("./137317.js"),
  Chunk113434 = require("./113434.js"),
  Chunk497505 = require("./497505.js"),
  Chunk164495 = require("./164495.jsx"),
  Chunk759853 = require("./759853.jsx"),
  Chunk95985 = require("./95985.jsx"),
  Chunk688927 = require("./688927.jsx"),
  Chunk743294 = require("./743294.js"),
  Chunk557579 = require("./557579.js");
let h = Chunk647438.forwardRef(function(e, t) {
  var n, o;
  let {
    className: h,
    expansionSpring: x,
    isExpanded: _,
    isExpansionAnimationComplete: b,
    quest: v,
    taskDetails: j,
    useReducedMotion: C,
    onCtxMenuOpen: y,
    onCtxMenuClose: E,
    onCtxMenuSelect: O,
    overlayRef: S
  } = e, T = (null == (n = v.userStatus) ? true : n.completedAt) != null, w = (0, l.Jf)(v), P = s.useRef(null), N = (null == (o = v.userStatus) ? true : o.enrolledAt) != null, A = null != w ? w.percentComplete : j.percentComplete, [R, B] = s.useState(false);
  return (0, r.jsxs)(r.Fragment, {
    children: [T && (0, r.jsx)(u.Z, {
      expansionSpring: x,
      overlayRef: S,
      progressBarRef: P,
      quest: v,
      isExpanded: _,
      isHovered: R
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
        backgroundImage: T ? "linear-gradient(90deg, ".concat(g.aY, ", ").concat(g.v6, ")") : true
      },
      onMouseEnter: () => B(true),
      onMouseLeave: () => B(false),
      children: (0, r.jsxs)("div", {
        className: f.contentCollapsedWrapper,
        children: [T && (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(m.Z, {
            quest: v,
            onCtxMenuOpen: y,
            onCtxMenuClose: E,
            onCtxMenuSelect: O
          }), (0, r.jsx)("div", {
            className: f.divider
          })]
        }), N ? (0, r.jsx)(p.Z, {
          contentLocation: "collapsed",
          quest: v,
          progressBarRef: P,
          isExpanded: false,
          percentComplete: A
        }) : null, T && (0, r.jsx)(d.y, {
          quest: v,
          useReducedMotion: C,
          isExpanded: false,
          awaitingConsoleConnections: false,
          hasMadeProgress: true,
          isProgressing: false,
          activeScreen: c.LI.DESKTOP,
          showBackButton: false,
          onBack: () => {},
          taskDetails: j,
          sourceQuestContent: c.jn.QUEST_BAR_V2
        })]
      })
    })]
  })
})