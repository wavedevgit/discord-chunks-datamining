/** Chunk was on 22979 **/
/** chunk id: 800926, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk853590 = require("./853590.js"),
  Chunk49436 = require("./49436.js"),
  Chunk968843 = require("./968843.js"),
  Chunk444134 = require("./444134.jsx"),
  Chunk217599 = require("./217599.jsx"),
  Chunk373322 = require("./373322.jsx"),
  Chunk526188 = require("./526188.jsx"),
  Chunk167308 = require("./167308.jsx"),
  Chunk26275 = require("./26275.jsx"),
  Chunk945165 = require("./945165.js"),
  Chunk50683 = require("./50683.js");
let g = Chunk473749.forwardRef(function(e, t) {
  var n, i;
  let {
    className: g,
    overlayRef: v
  } = e, {
    expansionSpring: j
  } = r.useContext(d.xo), {
    quest: y,
    taskDetails: C,
    isExpanded: _,
    isExpansionAnimationComplete: S
  } = r.useContext(p.A), E = (null == (n = y.userStatus) ? true : n.completedAt) != null, T = (0, c.Jf)(y), O = r.useRef(null), N = (null == (i = y.userStatus) ? true : i.enrolledAt) != null, P = null != T ? T.percentComplete : C.percentComplete, [w, I] = r.useState(false);
  return (0, a.jsxs)(a.Fragment, {
    children: [E && (0, a.jsx)(m.Z, {
      overlayRef: v,
      progressBarRef: O,
      isHovered: w
    }), (0, a.jsx)(s.animated.div, {
      ref: t,
      "aria-hidden": _ && S,
      className: l()(g, b.contentCollapsed, {
        [b.contentCollapsedExpanded]: _,
        [b.contentCollapsedAccepted]: N
      }),
      style: {
        opacity: j.to({
          range: [0, 1],
          output: [1, 0]
        }),
        backgroundImage: E ? "linear-gradient(90deg, ".concat(x.cd, ", ").concat(x.v$, ")") : true
      },
      onMouseEnter: () => I(true),
      onMouseLeave: () => I(false),
      children: (0, a.jsxs)("div", {
        className: b.contentCollapsedWrapper,
        children: [E && (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsx)(f.Z, {}), (0, a.jsx)("div", {
            className: b.divider
          })]
        }), N ? (0, a.jsx)(h.Z, {
          contentLocation: "collapsed",
          progressBarRef: O,
          isExpanded: false,
          percentComplete: P
        }) : null, E && (0, a.jsx)(u.r, {
          awaitingConsoleConnections: false,
          hasMadeProgress: true,
          isProgressing: false,
          activeScreen: o.LI.DESKTOP,
          showBackButton: false,
          onBack: () => {},
          sourceQuestContent: o.jn.QUEST_BAR_V2
        })]
      })
    })]
  })
})