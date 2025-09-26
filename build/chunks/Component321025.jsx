/** Chunk was on web.js **/
/** chunk id: 321025, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk488290 = require("./488290.js"),
  Chunk613087 = require("./613087.jsx");

function s(e) {
  let {
    expansionSpring: t,
    isExpanded: n
  } = e, {
    animatedComponentProps: s,
    recalculateAnimationPositions: l,
    mountPoints: c
  } = i.useContext(o.B$);
  return i.useEffect(() => {
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
    children: s.map(e => {
      let {
        id: n,
        collapsedLeft: i,
        expandedLeft: o,
        collapsedTop: s,
        expandedTop: l,
        width: u
      } = e, d = c.get(n);
      return (0, r.jsx)(a.animated.div, {
        ref: d,
        style: {
          zIndex: 2,
          position: "absolute",
          top: 0,
          left: 0,
          width: u,
          transform: (0, a.to)([t.to({
            range: [0, 1],
            output: [i, o]
          }), t.to({
            range: [0, 1],
            output: [s, l]
          })], (e, t) => "translate(".concat(e, "px, ").concat(t, "px)"))
        }
      }, n)
    })
  })
}