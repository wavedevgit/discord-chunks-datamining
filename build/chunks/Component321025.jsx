/** Chunk was on 50433 **/
/** chunk id: 321025, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => i
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk203463 = require("./203463.js"),
  Chunk613087 = require("./613087.jsx");

function i(e) {
  let {
    expansionSpring: t,
    isExpanded: n
  } = e, {
    animatedComponentProps: i,
    recalculateAnimationPositions: l,
    mountPoints: c
  } = s.useContext(a.B$);
  return s.useEffect(() => {
    l()
  }, [l, n]), (0, r.jsx)("div", {
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
    children: i.map(e => {
      let {
        id: n,
        collapsedLeft: s,
        expandedLeft: a,
        collapsedTop: i,
        expandedTop: l,
        width: d
      } = e, u = c.get(n);
      return (0, r.jsx)(o.animated.div, {
        ref: u,
        style: {
          zIndex: 2,
          position: "absolute",
          top: 0,
          left: 0,
          width: d,
          transform: (0, o.to)([t.to({
            range: [0, 1],
            output: [s, a]
          }), t.to({
            range: [0, 1],
            output: [i, l]
          })], (e, t) => "translate(".concat(e, "px, ").concat(t, "px)"))
        }
      }, n)
    })
  })
}