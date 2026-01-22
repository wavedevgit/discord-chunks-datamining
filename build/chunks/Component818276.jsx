/** Chunk was on 22477 **/
/** chunk id: 818276, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => g
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  r = require.n(Chunk503698),
  Chunk432022 = require("./432022.js"),
  Chunk341915 = require("./341915.js"),
  Chunk890687 = require("./890687.js"),
  Chunk568329 = require("./568329.jsx"),
  Chunk207869 = require("./207869.jsx"),
  Chunk158265 = require("./158265.jsx"),
  Chunk963713 = require("./963713.jsx"),
  Chunk277928 = require("./277928.jsx"),
  Chunk783602 = require("./783602.jsx"),
  Chunk272111 = require("./272111.js"),
  Chunk596850 = require("./596850.js");
let g = Chunk64700.forwardRef(function(e, t) {
  var n, i;
  let {
    className: g,
    overlayRef: v
  } = e, {
    expansionSpring: j
  } = l.useContext(d.PW), {
    quest: y,
    taskDetails: _,
    isExpanded: A,
    isExpansionAnimationComplete: C
  } = l.useContext(p.T), S = (null == (n = y.userStatus) ? true : n.completedAt) != null, O = (0, c.I3)(y), E = l.useRef(null), N = (null == (i = y.userStatus) ? true : i.enrolledAt) != null, T = null != O ? O.percentComplete : _.percentComplete, [I, w] = l.useState(false);
  return (0, a.jsxs)(a.Fragment, {
    children: [S && (0, a.jsx)(m.A, {
      overlayRef: v,
      progressBarRef: E,
      isHovered: I
    }), (0, a.jsx)(s.animated.div, {
      ref: t,
      "aria-hidden": A && C,
      className: r()(g, b.hR, {
        [b.Ag]: A,
        [b.s]: N
      }),
      style: {
        opacity: j.to({
          range: [0, 1],
          output: [1, 0]
        }),
        backgroundImage: S ? "linear-gradient(90deg, ".concat(x.V, ", ").concat(x.u, ")") : true
      },
      onMouseEnter: () => w(true),
      onMouseLeave: () => w(false),
      children: (0, a.jsxs)("div", {
        className: b.o8,
        children: [S && (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsx)(f.A, {}), (0, a.jsx)("div", {
            className: b.yF
          })]
        }), N ? (0, a.jsx)(h.A, {
          contentLocation: "collapsed",
          progressBarRef: E,
          isExpanded: false,
          percentComplete: T
        }) : null, S && (0, a.jsx)(u.f, {
          awaitingConsoleConnections: false,
          hasMadeProgress: true,
          isProgressing: false,
          activeScreen: o.X0.DESKTOP,
          showBackButton: false,
          onBack: () => {},
          sourceQuestContent: o.uF.QUEST_BAR_V2
        })]
      })
    })]
  })
})