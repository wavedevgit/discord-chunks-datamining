/** Chunk was on 23736 **/
/** chunk id: 404672, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk467721 = require("./467721.js"),
  Chunk444134 = require("./444134.jsx"),
  Chunk526188 = require("./526188.jsx");

function o() {
  let {
    expansionSpring: e,
    animatedComponentProps: t,
    recalculateAnimationPositions: n,
    mountPoints: o
  } = Chunk473749.useContext(Chunk444134.xo), {
    isExpanded: c
  } = Chunk473749.useContext(Chunk526188.A);
  return Chunk473749.useEffect(() => {
    require()
  }, [require, c]), (0, Chunk54381.jsx)("div", {
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
    children: exports.map(t => {
      let {
        id: n,
        collapsedLeft: r,
        expandedLeft: l,
        collapsedTop: s,
        expandedTop: c,
        width: d
      } = t, u = o.get(n);
      return (0, a.jsx)(i.animated.div, {
        ref: u,
        style: {
          zIndex: 2,
          position: "absolute",
          top: 0,
          left: 0,
          width: d,
          transform: (0, i.to)([e.to({
            range: [0, 1],
            output: [r, l]
          }), e.to({
            range: [0, 1],
            output: [s, c]
          })], (e, t) => "translate(".concat(e, "px, ").concat(t, "px)"))
        }
      }, n)
    })
  })
}