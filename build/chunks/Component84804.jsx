/** Chunk was on web.js **/
/** chunk id: 84804, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
});
var Chunk54381 = require("./54381.js"),
  Chunk399606 = require("./399606.js"),
  Chunk607070 = require("./607070.js"),
  Chunk55373 = require("./55373.jsx"),
  Chunk761006 = require("./761006.jsx"),
  Chunk598112 = require("./598112.js"),
  Chunk798500 = require("./798500.js");
let u = e => {
  let {
    containerVisibilityPercentage: t
  } = e, n = (0, i.e7)([a.Z], () => a.Z.useReducedMotion);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("div", {
      className: l.jumpingWumpusContainer,
      children: (0, r.jsx)(o.ZP, {
        scaleAnimationData: {
          startScale: .9,
          endScale: 1,
          duration: o.SR
        },
        yAxisAnimationData: {
          range: 20,
          duration: o.b5,
          path: o.js.SINE
        },
        animateXAxisWiggle: true,
        isMotionReduced: n,
        parallaxAnimationData: {
          pathDirection: o.eo.UP,
          range: 125,
          containerVisibilityPercentage: t,
          changeOpacity: true
        },
        animationSpeedScale: 2,
        children: (0, r.jsx)("img", {
          src: c.Z,
          alt: "",
          className: l.jumpingWumpus
        })
      })
    }), (0, r.jsx)(s.Z, {
      isMotionReduced: n,
      containerVisibilityPercentage: t,
      hammerContainerClassName: l.hammerContainer,
      keyContainerClassName: l.keyContainer,
      starContainerClassName: l.starContainer,
      hammerAssetClassName: l.hammerTrinket,
      keyAssetClassName: l.keyTrinket,
      starAssetClassName: l.starTrinket,
      animationSpeedScale: 2
    })]
  })
}