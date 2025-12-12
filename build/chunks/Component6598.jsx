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
  Chunk640560 = require("./640560.js"),
  Chunk319515 = require("./319515.js");
let u = () => {
  let e = (0, Chunk399606.e7)([Chunk607070.Z], () => Chunk607070.Z.useReducedMotion);
  return (0, Chunk54381.jsxs)(Chunk54381.Fragment, {
    children: [(0, Chunk54381.jsx)("div", {
      className: Chunk640560.jumpingWumpusContainer,
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
          src: Chunk319515.Z,
          alt: "",
          className: Chunk640560.jumpingWumpus
        })
      })
    }), (0, Chunk54381.jsx)(Chunk761006.Z, {
      isMotionReduced: module,
      boltContainerClassName: Chunk640560.boltContainer,
      carContainerClassName: Chunk640560.carContainer,
      hammerContainerClassName: Chunk640560.hammerContainer,
      keyContainerClassName: Chunk640560.keyContainer,
      starContainerClassName: Chunk640560.starContainer,
      boltAssetClassName: Chunk640560.boltTrinket,
      carAssetClassName: Chunk640560.carTrinket,
      hammerAssetClassName: Chunk640560.hammerTrinket,
      keyAssetClassName: Chunk640560.keyTrinket,
      starAssetClassName: Chunk640560.starTrinket
    })]
  })
}