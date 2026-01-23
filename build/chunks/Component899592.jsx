/** Chunk was on 36054 **/
/** chunk id: 899592, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => o
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk108531 = require("./108531.js"),
  Chunk568329 = require("./568329.jsx"),
  Chunk963713 = require("./963713.jsx");

function o() {
  let {
    expansionSpring: e,
    animatedComponentProps: t,
    recalculateAnimationPositions: n,
    mountPoints: o
  } = l.useContext(i.PW), {
    isExpanded: c
  } = l.useContext(s.T);
  return l.useEffect(() => {
    n()
  }, [n, c]), (0, a.jsx)("div", {
    style: {
      overflow: "hidden",
      pointerEvents: "none",
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      zIndex: 5
    },
    children: t.map(t => {
      let {
        id: n,
        collapsedLeft: l,
        expandedLeft: i,
        collapsedTop: s,
        expandedTop: c,
        width: d
      } = t, u = o.get(n);
      return (0, a.jsx)(r.animated.div, {
        ref: u,
        style: {
          zIndex: 2,
          position: "absolute",
          top: 0,
          left: 0,
          width: d,
          transform: (0, r.to)([e.to({
            range: [0, 1],
            output: [l, i]
          }), e.to({
            range: [0, 1],
            output: [s, c]
          })], (e, t) => "translate(".concat(e, "px, ").concat(t, "px)"))
        }
      }, n)
    })
  })
}