/** Chunk was on web.js **/
/** chunk id: 6598, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
});
var Chunk54381 = require("./54381.js"),
  Chunk399606 = require("./399606.js"),
  Chunk607070 = require("./607070.js"),
  Chunk55373 = require("./55373.jsx"),
  Chunk761006 = require("./761006.jsx"),
  Chunk513870 = require("./513870.js"),
  Chunk798500 = require("./798500.js");
let u = () => {
  let e = (0, Chunk399606.e7)([Chunk607070.Z], () => Chunk607070.Z.useReducedMotion);
  return (0, Chunk54381.jsxs)(Chunk54381.Fragment, {
    children: [(0, Chunk54381.jsx)("div", {
      className: Chunk513870.jumpingWumpusContainer,
      children: (0, Chunk54381.jsx)(Chunk55373.ZP, {
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
        children: (0, Chunk54381.jsx)("img", {
          src: Chunk798500.Z,
          alt: "",
          className: Chunk513870.jumpingWumpus
        })
      })
    }), (0, Chunk54381.jsx)(Chunk761006.Z, {
      isMotionReduced: module,
      boltContainerClassName: Chunk513870.boltContainer,
      carContainerClassName: Chunk513870.carContainer,
      hammerContainerClassName: Chunk513870.hammerContainer,
      keyContainerClassName: Chunk513870.keyContainer,
      starContainerClassName: Chunk513870.starContainer,
      boltAssetClassName: Chunk513870.boltTrinket,
      carAssetClassName: Chunk513870.carTrinket,
      hammerAssetClassName: Chunk513870.hammerTrinket,
      keyAssetClassName: Chunk513870.keyTrinket,
      starAssetClassName: Chunk513870.starTrinket
    })]
  })
}