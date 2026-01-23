/** Chunk was on 22477 **/
/** chunk id: 818276, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => b
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk108531 = require("./108531.js"),
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
let b = Chunk64700.forwardRef(function(e, t) {
  var n, r;
  let {
    className: b,
    overlayRef: v
  } = e, {
    expansionSpring: j
  } = l.useContext(d.PW), {
    quest: _,
    taskDetails: y,
    isExpanded: A,
    isExpansionAnimationComplete: C
  } = l.useContext(p.T), S = (null == (n = _.userStatus) ? true : n.completedAt) != null, O = (0, c.I3)(_), E = l.useRef(null), T = (null == (r = _.userStatus) ? true : r.enrolledAt) != null, N = null != O ? O.percentComplete : y.percentComplete, [w, I] = l.useState(false);
  return (0, a.jsxs)(a.Fragment, {
    children: [S && (0, a.jsx)(m.A, {
      overlayRef: v,
      progressBarRef: E,
      isHovered: w
    }), (0, a.jsx)(s.animated.div, {
      ref: t,
      "aria-hidden": A && C,
      className: i()(b, f.hR, {
        [f.Ag]: A,
        [f.s]: T
      }),
      style: {
        opacity: j.to({
          range: [0, 1],
          output: [1, 0]
        }),
        backgroundImage: S ? "linear-gradient(90deg, ".concat(g.V, ", ").concat(g.u, ")") : true
      },
      onMouseEnter: () => I(true),
      onMouseLeave: () => I(false),
      children: (0, a.jsxs)("div", {
        className: f.o8,
        children: [S && (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsx)(x.A, {}), (0, a.jsx)("div", {
            className: f.yF
          })]
        }), T ? (0, a.jsx)(h.A, {
          contentLocation: "collapsed",
          progressBarRef: E,
          isExpanded: false,
          percentComplete: N
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