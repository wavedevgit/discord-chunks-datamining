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
  Chunk401393 = require("./401393.js"),
  Chunk113434 = require("./113434.js"),
  Chunk497505 = require("./497505.js"),
  Chunk164495 = require("./164495.jsx"),
  Chunk759853 = require("./759853.jsx"),
  Chunk95985 = require("./95985.jsx"),
  Chunk688927 = require("./688927.jsx"),
  Chunk743294 = require("./743294.js"),
  Chunk764889 = require("./764889.js");
let m = Chunk647438.forwardRef(function(e, t) {
  var n, a;
  let {
    className: m,
    expansionSpring: g,
    isExpanded: E,
    isExpansionAnimationComplete: b,
    quest: y,
    taskDetails: O,
    useReducedMotion: v,
    onCtxMenuOpen: I,
    onCtxMenuClose: T,
    onCtxMenuSelect: S,
    overlayRef: A
  } = e, C = (null == (n = y.userStatus) ? true : n.completedAt) != null, N = (0, l.Jf)(y), R = i.useRef(null), P = (null == (a = y.userStatus) ? true : a.enrolledAt) != null, w = null != N ? N.percentComplete : O.percentComplete, [D, x] = i.useState(false);
  return (0, r.jsxs)(r.Fragment, {
    children: [C && (0, r.jsx)(d.Z, {
      expansionSpring: g,
      overlayRef: A,
      progressBarRef: R,
      quest: y,
      isExpanded: E,
      isHovered: D
    }), (0, r.jsx)(s.animated.div, {
      ref: t,
      "aria-hidden": E && b,
      className: o()(m, h.contentCollapsed, {
        [h.contentCollapsedExpanded]: E,
        [h.contentCollapsedAccepted]: P
      }),
      style: {
        opacity: g.to({
          range: [0, 1],
          output: [1, 0]
        }),
        backgroundImage: C ? "linear-gradient(90deg, ".concat(p.aY, ", ").concat(p.v6, ")") : true
      },
      onMouseEnter: () => x(true),
      onMouseLeave: () => x(false),
      children: (0, r.jsxs)("div", {
        className: h.contentCollapsedWrapper,
        children: [C && (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(_.Z, {
            quest: y,
            onCtxMenuOpen: I,
            onCtxMenuClose: T,
            onCtxMenuSelect: S
          }), (0, r.jsx)("div", {
            className: h.divider
          })]
        }), P ? (0, r.jsx)(f.Z, {
          contentLocation: "collapsed",
          quest: y,
          progressBarRef: R,
          isExpanded: false,
          percentComplete: w
        }) : null, C && (0, r.jsx)(u.y, {
          quest: y,
          useReducedMotion: v,
          isExpanded: false,
          awaitingConsoleConnections: false,
          hasMadeProgress: true,
          isProgressing: false,
          activeScreen: c.LI.DESKTOP,
          showBackButton: false,
          onBack: () => {},
          taskDetails: O,
          sourceQuestContent: c.jn.QUEST_BAR_V2
        })]
      })
    })]
  })
})