/** Chunk was on web.js **/
/** chunk id: 6598, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
});
var Chunk951288 = require("./951288.js"),
  Chunk399606 = require("./399606.js"),
  Chunk607070 = require("./607070.js"),
  Chunk55373 = require("./55373.jsx"),
  Chunk761006 = require("./761006.jsx"),
  Chunk460196 = require("./460196.js"),
  Chunk798500 = require("./798500.js");
let u = () => {
  let e = (0, Chunk399606.e7)([Chunk607070.Z], () => Chunk607070.Z.useReducedMotion);
  return (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
    children: [(0, Chunk951288.jsx)("div", {
      className: Chunk460196.jumpingWumpusContainer,
      children: (0, Chunk951288.jsx)(Chunk55373.ZP, {
        scaleAnimationData: {
          startScale: .9,
          endScale: 1,
          duration: Chunk55373.SR
        },
        yAxisAnimationData: {
          range: 20,
          duration: Chunk55373.b5,
          path: Chunk55373.js.SINE
        },
        animateXAxisWiggle: true,
        isMotionReduced: module,
        children: (0, Chunk951288.jsx)("img", {
          src: Chunk798500.Z,
          alt: "",
          className: Chunk460196.jumpingWumpus
        })
      })
    }), (0, Chunk951288.jsx)(Chunk761006.Z, {
      isMotionReduced: module,
      boltTrinketClassName: Chunk460196.bolt,
      carTrinketClassName: Chunk460196.car,
      hammerTrinketClassName: Chunk460196.hammer,
      keyTrinketClassName: Chunk460196.key,
      starTrinketClassName: Chunk460196.star
    })]
  })
}