/** Chunk was on 37082 **/
/** chunk id: 457153, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk717976 = require("./717976.js"),
  Chunk113434 = require("./113434.js"),
  Chunk497505 = require("./497505.js"),
  Chunk164495 = require("./164495.jsx"),
  Chunk759853 = require("./759853.jsx"),
  Chunk95985 = require("./95985.jsx"),
  Chunk688927 = require("./688927.jsx"),
  Chunk743294 = require("./743294.js"),
  Chunk667904 = require("./667904.js");
let x = Chunk73800.forwardRef(function(e, t) {
  var n;
  let {
    className: o,
    expansionSpring: x,
    isExpanded: h,
    isExpansionAnimationComplete: j,
    quest: b,
    taskDetails: _,
    useReducedMotion: v,
    onCtxMenuOpen: C,
    onCtxMenuClose: y,
    onCtxMenuSelect: O,
    overlayRef: E,
    shouldShowRewardsCTAWhenCollapsed: S
  } = e, T = (0, l.Jf)(b), w = s.useRef(null), P = (null == (n = b.userStatus) ? true : n.enrolledAt) != null, A = null != T ? T.percentComplete : _.percentComplete, [N, R] = s.useState(false);
  return (0, r.jsxs)(r.Fragment, {
    children: [S && (0, r.jsx)(d.Z, {
      expansionSpring: x,
      overlayRef: E,
      progressBarRef: w,
      quest: b,
      isExpanded: h,
      isHovered: N,
      shouldShowRewardsCTAWhenCollapsed: true
    }), (0, r.jsx)(i.animated.div, {
      ref: t,
      "aria-hidden": h && j,
      className: a()(o, f.contentCollapsed, {
        [f.contentCollapsedExpanded]: h,
        [f.contentCollapsedAccepted]: P
      }),
      style: {
        opacity: x.to({
          range: [0, 1],
          output: [1, 0]
        }),
        backgroundImage: S ? "linear-gradient(90deg, ".concat(g.aY, ", ").concat(g.v6, ")") : true
      },
      onMouseEnter: () => R(true),
      onMouseLeave: () => R(false),
      children: (0, r.jsxs)("div", {
        className: f.contentCollapsedWrapper,
        children: [S && (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(m.Z, {
            quest: b,
            onCtxMenuOpen: C,
            onCtxMenuClose: y,
            onCtxMenuSelect: O
          }), (0, r.jsx)("div", {
            className: f.divider
          })]
        }), P ? (0, r.jsx)(p.Z, {
          contentLocation: "collapsed",
          quest: b,
          progressBarRef: w,
          isExpanded: false,
          percentComplete: A
        }) : null, S && (0, r.jsx)(u.y, {
          quest: b,
          useReducedMotion: v,
          isExpanded: false,
          awaitingConsoleConnections: false,
          hasMadeProgress: true,
          isProgressing: false,
          activeScreen: c.LI.DESKTOP,
          showBackButton: false,
          onBack: () => {},
          taskDetails: _,
          sourceQuestContent: c.jn.QUEST_BAR_V2,
          shouldShowRewardsCTAWhenCollapsed: true
        })]
      })
    })]
  })
})