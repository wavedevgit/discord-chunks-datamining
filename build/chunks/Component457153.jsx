/** Chunk was on web.js **/
/** chunk id: 457153, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => m
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk261616 = require("./261616.js"),
  Chunk113434 = require("./113434.js"),
  Chunk497505 = require("./497505.js"),
  Chunk164495 = require("./164495.jsx"),
  Chunk759853 = require("./759853.jsx"),
  Chunk95985 = require("./95985.jsx"),
  Chunk688927 = require("./688927.jsx"),
  Chunk743294 = require("./743294.js"),
  Chunk557579 = require("./557579.js");
let m = Chunk647438.forwardRef(function(e, t) {
  var n;
  let {
    className: a,
    expansionSpring: m,
    isExpanded: g,
    isExpansionAnimationComplete: E,
    quest: b,
    taskDetails: y,
    useReducedMotion: O,
    onCtxMenuOpen: v,
    onCtxMenuClose: I,
    onCtxMenuSelect: T,
    overlayRef: S,
    shouldShowRewardsCTAWhenCollapsed: A
  } = e, C = (0, l.Jf)(b), N = i.useRef(null), R = (null == (n = b.userStatus) ? true : n.enrolledAt) != null, P = null != C ? C.percentComplete : y.percentComplete, [w, D] = i.useState(false);
  return (0, r.jsxs)(r.Fragment, {
    children: [A && (0, r.jsx)(d.Z, {
      expansionSpring: m,
      overlayRef: S,
      progressBarRef: N,
      quest: b,
      isExpanded: g,
      isHovered: w,
      shouldShowRewardsCTAWhenCollapsed: true
    }), (0, r.jsx)(s.animated.div, {
      ref: t,
      "aria-hidden": g && E,
      className: o()(a, h.contentCollapsed, {
        [h.contentCollapsedExpanded]: g,
        [h.contentCollapsedAccepted]: R
      }),
      style: {
        opacity: m.to({
          range: [0, 1],
          output: [1, 0]
        }),
        backgroundImage: A ? "linear-gradient(90deg, ".concat(p.aY, ", ").concat(p.v6, ")") : true
      },
      onMouseEnter: () => D(true),
      onMouseLeave: () => D(false),
      children: (0, r.jsxs)("div", {
        className: h.contentCollapsedWrapper,
        children: [A && (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(_.Z, {
            quest: b,
            onCtxMenuOpen: v,
            onCtxMenuClose: I,
            onCtxMenuSelect: T
          }), (0, r.jsx)("div", {
            className: h.divider
          })]
        }), R ? (0, r.jsx)(f.Z, {
          contentLocation: "collapsed",
          quest: b,
          progressBarRef: N,
          isExpanded: false,
          percentComplete: P
        }) : null, A && (0, r.jsx)(u.y, {
          quest: b,
          useReducedMotion: O,
          isExpanded: false,
          awaitingConsoleConnections: false,
          hasMadeProgress: true,
          isProgressing: false,
          activeScreen: c.LI.DESKTOP,
          showBackButton: false,
          onBack: () => {},
          taskDetails: y,
          sourceQuestContent: c.jn.QUEST_BAR_V2,
          shouldShowRewardsCTAWhenCollapsed: true
        })]
      })
    })]
  })
})