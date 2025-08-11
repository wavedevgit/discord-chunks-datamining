/** Chunk was on 75708 **/
/** chunk id: 279804, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk255367 = require("./255367.js"),
  Chunk399606 = require("./399606.js"),
  Chunk607070 = require("./607070.js"),
  Chunk176754 = require("./176754.jsx"),
  Chunk151451 = require("./151451.jsx"),
  Chunk874773 = require("./874773.js"),
  Chunk798500 = require("./798500.js");
let d = () => {
  let e = (0, Chunk399606.e7)([Chunk607070.Z], () => Chunk607070.Z.useReducedMotion);
  return (0, Chunk255367.jsxs)(Chunk255367.Fragment, {
    children: [(0, Chunk255367.jsx)("div", {
      className: Chunk874773.jumpingWumpusContainer,
      children: (0, Chunk255367.jsx)(Chunk176754.ZP, {
        scaleAnimationData: {
          startScale: .9,
          endScale: 1,
          duration: Chunk176754.SR
        },
        yAxisAnimationData: {
          range: 20,
          duration: Chunk176754.b5,
          path: Chunk176754.js.SINE
        },
        animateXAxisWiggle: true,
        isMotionReduced: module,
        children: (0, Chunk255367.jsx)("img", {
          src: Chunk798500.Z,
          alt: "",
          className: Chunk874773.jumpingWumpus
        })
      })
    }), (0, Chunk255367.jsx)(Chunk151451.Z, {
      isMotionReduced: module,
      boltTrinketClassName: Chunk874773.bolt,
      carTrinketClassName: Chunk874773.car,
      hammerTrinketClassName: Chunk874773.hammer,
      keyTrinketClassName: Chunk874773.key,
      starTrinketClassName: Chunk874773.star
    })]
  })
}