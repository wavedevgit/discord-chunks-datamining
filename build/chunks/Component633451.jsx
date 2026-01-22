/** Chunk was on web.js **/
/** chunk id: 633451, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => u
});
var Chunk627968 = require("./627968.js"),
  Chunk417597 = require("./417597.js"),
  Chunk775602 = require("./775602.js"),
  Chunk608416 = require("./608416.jsx"),
  Chunk307973 = require("./307973.jsx"),
  Chunk660595 = require("./660595.js"),
  Chunk180894 = require("./180894.js");
let u = e => {
  let {
    containerVisibilityPercentage: t
  } = e, n = (0, i.bG)([a.A], () => a.A.useReducedMotion);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("div", {
      className: l.BI,
      children: (0, r.jsx)(s.Ay, {
        scaleAnimationData: {
          startScale: .9,
          endScale: 1,
          duration: s.$G
        },
        yAxisAnimationData: {
          range: 20,
          duration: s.Mp,
          path: s.aV.SINE
        },
        animateXAxisWiggle: true,
        isMotionReduced: n,
        parallaxAnimationData: {
          pathDirection: s.MN.UP,
          range: 125,
          containerVisibilityPercentage: t,
          changeOpacity: true
        },
        animationSpeedScale: 2,
        children: (0, r.jsx)("img", {
          src: c.A,
          alt: "",
          className: l.Q
        })
      })
    }), (0, r.jsx)(o.A, {
      isMotionReduced: n,
      containerVisibilityPercentage: t,
      hammerContainerClassName: l.Gj,
      keyContainerClassName: l.FV,
      starContainerClassName: l.E1,
      hammerAssetClassName: l.Wv,
      keyAssetClassName: l.rs,
      starAssetClassName: l.OY,
      animationSpeedScale: 2
    })]
  })
}