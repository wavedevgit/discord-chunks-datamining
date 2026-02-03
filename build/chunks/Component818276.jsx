/** Chunk was on 90228 **/
/** chunk id: 818276, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => v
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk92674 = require("./92674.js"),
  Chunk341915 = require("./341915.js"),
  Chunk890687 = require("./890687.js"),
  Chunk398025 = require("./398025.js"),
  Chunk568329 = require("./568329.jsx"),
  Chunk207869 = require("./207869.jsx"),
  Chunk158265 = require("./158265.jsx"),
  Chunk963713 = require("./963713.jsx"),
  Chunk277928 = require("./277928.jsx"),
  Chunk783602 = require("./783602.jsx"),
  Chunk272111 = require("./272111.js"),
  Chunk596850 = require("./596850.js");
let v = Chunk64700.forwardRef(function(e, t) {
  var n, r;
  let {
    className: v,
    overlayRef: j
  } = e, {
    expansionSpring: _
  } = l.useContext(u.PW), {
    quest: y,
    taskDetails: A,
    isExpanded: C,
    isExpansionAnimationComplete: S
  } = l.useContext(h.T), O = (null == (n = y.userStatus) ? true : n.completedAt) != null, T = (0, c.I3)(y), E = l.useRef(null), N = (null == (r = y.userStatus) ? true : r.enrolledAt) != null, w = null != T ? T.percentComplete : A.percentComplete, [I, k] = l.useState(false);
  return (0, a.jsxs)(a.Fragment, {
    children: [O && (0, a.jsx)(p.A, {
      overlayRef: j,
      progressBarRef: E,
      isHovered: I
    }), (0, a.jsx)(s.animated.div, {
      ref: t,
      "aria-hidden": C && S,
      className: i()(v, b.hR, {
        [b.Ag]: C,
        [b.s]: N
      }),
      style: {
        opacity: (0, d.a)(_.to({
          range: [0, 1],
          output: [1, 0]
        })),
        backgroundImage: O ? "linear-gradient(90deg, ".concat(f.V, ", ").concat(f.u, ")") : true
      },
      onMouseEnter: () => k(true),
      onMouseLeave: () => k(false),
      children: (0, a.jsxs)("div", {
        className: b.o8,
        children: [O && (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsx)(g.A, {}), (0, a.jsx)("div", {
            className: b.yF
          })]
        }), N ? (0, a.jsx)(x.A, {
          contentLocation: "collapsed",
          progressBarRef: E,
          isExpanded: false,
          percentComplete: w
        }) : null, O && (0, a.jsx)(m.f, {
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