/** Chunk was on 37082 **/
/** chunk id: 321025, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => i
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk126663 = require("./126663.js"),
  Chunk613087 = require("./613087.js");

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
  }, [l, n]), <div style={{
      overflow: "hidden",
      pointerEvents: "none",
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      zIndex: 5
    }}>{i.map(e => {
      let {
        id: n,
        collapsedLeft: s,
        expandedLeft: a,
        collapsedTop: i,
        expandedTop: l,
        width: u
      } = e, d = c.get(n);
      return (0, r.jsx)(o.animated.div, {
        ref: d,
        style: {
          zIndex: 2,
          position: "absolute",
          top: 0,
          left: 0,
          width: u,
          transform: (0, o.to)([t.to({
            range: [0, 1],
            output: [s, a]
          }), t.to({
            range: [0, 1],
            output: [i, l]
          })], (e, t) => "translate(".concat(e, "px, ").concat(t, "px)"))
        }
      }, n)
    })}</div>
}