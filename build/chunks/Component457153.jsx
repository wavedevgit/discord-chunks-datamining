/** Chunk was on 21046 **/
/** chunk id: 457153, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk815061 = require("./815061.js"),
  Chunk113434 = require("./113434.js"),
  Chunk497505 = require("./497505.js"),
  Chunk164495 = require("./164495.jsx"),
  Chunk759853 = require("./759853.jsx"),
  Chunk95985 = require("./95985.jsx"),
  Chunk688927 = require("./688927.jsx"),
  Chunk743294 = require("./743294.js"),
  Chunk557579 = require("./557579.js");
let x = Chunk647438.forwardRef(function(e, t) {
  var n;
  let {
    className: o,
    expansionSpring: x,
    isExpanded: h,
    isExpansionAnimationComplete: b,
    quest: _,
    taskDetails: j,
    useReducedMotion: v,
    onCtxMenuOpen: C,
    onCtxMenuClose: y,
    onCtxMenuSelect: E,
    overlayRef: O,
    shouldShowRewardsCTAWhenCollapsed: S
  } = e, T = (0, l.Jf)(_), w = s.useRef(null), P = (null == (n = _.userStatus) ? true : n.enrolledAt) != null, A = null != T ? T.percentComplete : j.percentComplete, [N, R] = s.useState(false);
  return (0, r.jsxs)(r.Fragment, {
    children: [S && (0, r.jsx)(u.Z, {
      expansionSpring: x,
      overlayRef: O,
      progressBarRef: w,
      quest: _,
      isExpanded: h,
      isHovered: N,
      shouldShowRewardsCTAWhenCollapsed: true
    }), (0, r.jsx)(i.animated.div, {
      ref: t,
      "aria-hidden": h && b,
      className: a()(o, g.contentCollapsed, {
        [g.contentCollapsedExpanded]: h,
        [g.contentCollapsedAccepted]: P
      }),
      style: {
        opacity: x.to({
          range: [0, 1],
          output: [1, 0]
        }),
        backgroundImage: S ? "linear-gradient(90deg, ".concat(f.aY, ", ").concat(f.v6, ")") : true
      },
      onMouseEnter: () => R(true),
      onMouseLeave: () => R(false),
      children: (0, r.jsxs)("div", {
        className: g.contentCollapsedWrapper,
        children: [S && (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(m.Z, {
            quest: _,
            onCtxMenuOpen: C,
            onCtxMenuClose: y,
            onCtxMenuSelect: E
          }), (0, r.jsx)("div", {
            className: g.divider
          })]
        }), P ? (0, r.jsx)(p.Z, {
          contentLocation: "collapsed",
          quest: _,
          progressBarRef: w,
          isExpanded: false,
          percentComplete: A
        }) : null, S && (0, r.jsx)(d.y, {
          quest: _,
          useReducedMotion: v,
          isExpanded: false,
          awaitingConsoleConnections: false,
          hasMadeProgress: true,
          isProgressing: false,
          activeScreen: c.LI.DESKTOP,
          showBackButton: false,
          onBack: () => {},
          taskDetails: j,
          sourceQuestContent: c.jn.QUEST_BAR_V2,
          shouldShowRewardsCTAWhenCollapsed: true
        })]
      })
    })]
  })
})