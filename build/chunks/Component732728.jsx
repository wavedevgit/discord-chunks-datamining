/** Chunk was on web.js **/
/** chunk id: 732728, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
});
var Chunk951288 = require("./951288.js"),
  Chunk55373 = require("./55373.jsx"),
  Chunk314042 = require("./314042.js"),
  Chunk320067 = require("./320067.js"),
  Chunk476921 = require("./476921.js");
let l = e => {
  let {
    isMotionReduced: t,
    containerVisibilityPercentage: n
  } = e;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("div", {
      className: a.hammerContainer,
      children: (0, r.jsx)(i.ZP, {
        yAxisAnimationData: {
          range: 15,
          duration: i.vi,
          path: i.js.SINE
        },
        parallaxAnimationData: null != n ? {
          pathDirection: i.eo.DOWN,
          range: 120,
          containerVisibilityPercentage: n,
          changeOpacity: true
        } : true,
        animateXAxisWiggle: true,
        isMotionReduced: t,
        children: (0, r.jsx)("img", {
          src: o.Z,
          className: a.hammerTrinket,
          alt: ""
        })
      })
    }), (0, r.jsx)("div", {
      className: a.keyContainer,
      children: (0, r.jsx)(i.ZP, {
        blurAnimationData: {
          startBlurRadius: 5,
          endBlurRadius: 0,
          duration: i.b5
        },
        scaleAnimationData: {
          startScale: .85,
          endScale: 1,
          duration: i.b5
        },
        yAxisAnimationData: {
          range: 15,
          duration: i.vi,
          path: i.js.SINE
        },
        parallaxAnimationData: null != n ? {
          pathDirection: i.eo.UP,
          range: 200,
          containerVisibilityPercentage: n,
          changeOpacity: true
        } : true,
        animateXAxisWiggle: true,
        isMotionReduced: t,
        children: (0, r.jsx)("img", {
          src: s.Z,
          className: a.keyTrinket,
          alt: ""
        })
      })
    })]
  })
}