/** Chunk was on 33311 **/
/** chunk id: 457153, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk636606 = require("./636606.js"),
  Chunk113434 = require("./113434.js"),
  Chunk497505 = require("./497505.js"),
  Chunk164495 = require("./164495.jsx"),
  Chunk759853 = require("./759853.jsx"),
  Chunk95985 = require("./95985.jsx"),
  Chunk688927 = require("./688927.jsx"),
  Chunk743294 = require("./743294.js"),
  Chunk764889 = require("./764889.js");
let h = Chunk473749.forwardRef(function(e, t) {
  var n, o;
  let {
    className: h,
    expansionSpring: x,
    isExpanded: b,
    isExpansionAnimationComplete: _,
    quest: j,
    taskDetails: v,
    useReducedMotion: C,
    onCtxMenuOpen: y,
    onCtxMenuClose: E,
    onCtxMenuSelect: O,
    overlayRef: S
  } = e, T = (null == (n = j.userStatus) ? true : n.completedAt) != null, w = (0, l.Jf)(j), P = s.useRef(null), N = (null == (o = j.userStatus) ? true : o.enrolledAt) != null, A = null != w ? w.percentComplete : v.percentComplete, [R, B] = s.useState(false);
  return (0, r.jsxs)(r.Fragment, {
    children: [T && (0, r.jsx)(u.Z, {
      expansionSpring: x,
      overlayRef: S,
      progressBarRef: P,
      quest: j,
      isExpanded: b,
      isHovered: R
    }), (0, r.jsx)(i.animated.div, {
      ref: t,
      "aria-hidden": b && _,
      className: a()(h, f.contentCollapsed, {
        [f.contentCollapsedExpanded]: b,
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
          percentComplete: A
        }) : null, T && (0, r.jsx)(d.y, {
          quest: j,
          useReducedMotion: C,
          isExpanded: false,
          awaitingConsoleConnections: false,
          hasMadeProgress: true,
          isProgressing: false,
          activeScreen: c.LI.DESKTOP,
          showBackButton: false,
          onBack: () => {},
          taskDetails: v,
          sourceQuestContent: c.jn.QUEST_BAR_V2
        })]
      })
    })]
  })
})