/** Chunk was on web.js **/
/** chunk id: 761006, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
});
var Chunk54381 = require("./54381.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk55373 = require("./55373.jsx"),
  Chunk741890 = require("./741890.js"),
  Chunk307248 = require("./307248.js"),
  Chunk389351 = require("./389351.js"),
  Chunk320067 = require("./320067.js"),
  Chunk476921 = require("./476921.js"),
  Chunk266768 = require("./266768.js");
let p = e => {
  let {
    isMotionReduced: t,
    containerVisibilityPercentage: n,
    boltContainerClassName: i,
    carContainerClassName: p,
    hammerContainerClassName: _,
    keyContainerClassName: m,
    starContainerClassName: h,
    boltAssetClassName: g,
    carAssetClassName: E,
    hammerAssetClassName: b,
    keyAssetClassName: y,
    starAssetClassName: O,
    animationSpeedScale: v = 1
  } = e;
  return (0, r.jsxs)(r.Fragment, {
    children: [null != i && (0, r.jsx)("div", {
      className: o()(s.boltContainer, i),
      children: (0, r.jsx)(a.ZP, {
        blurAnimationData: {
          startBlurRadius: 10,
          endBlurRadius: 0,
          duration: a.SR
        },
        scaleAnimationData: {
          startScale: .85,
          endScale: 1,
          duration: a.SR
        },
        yAxisAnimationData: {
          range: 15,
          duration: a.vi,
          path: a.js.COSINE
        },
        parallaxAnimationData: null != n ? {
          pathDirection: a.eo.UP,
          range: 125,
          containerVisibilityPercentage: n,
          changeOpacity: true
        } : true,
        animateXAxisWiggle: true,
        isMotionReduced: t,
        animationSpeedScale: v,
        children: (0, r.jsx)("img", {
          src: l.Z,
          className: g,
          alt: ""
        })
      })
    }), null != p && (0, r.jsx)("div", {
      className: o()(s.carContainer, p),
      children: (0, r.jsx)(a.ZP, {
        yAxisAnimationData: {
          range: 15,
          duration: a.vi,
          path: a.js.COSINE
        },
        parallaxAnimationData: null != n ? {
          pathDirection: a.eo.DOWN,
          range: 50,
          containerVisibilityPercentage: n,
          changeOpacity: true
        } : true,
        animateXAxisWiggle: true,
        isMotionReduced: t,
        animationSpeedScale: v,
        children: (0, r.jsx)("img", {
          src: c.Z,
          className: E,
          alt: ""
        })
      })
    }), null != _ && (0, r.jsx)("div", {
      className: o()(s.hammerContainer, _),
      children: (0, r.jsx)(a.ZP, {
        yAxisAnimationData: {
          range: 15,
          duration: a.vi,
          path: a.js.SINE
        },
        parallaxAnimationData: null != n ? {
          pathDirection: a.eo.DOWN,
          range: 120,
          containerVisibilityPercentage: n,
          changeOpacity: true
        } : true,
        animateXAxisWiggle: true,
        isMotionReduced: t,
        animationSpeedScale: v,
        children: (0, r.jsx)("img", {
          src: u.Z,
          className: b,
          alt: ""
        })
      })
    }), null != m && (0, r.jsx)("div", {
      className: o()(s.keyContainer, m),
      children: (0, r.jsx)(a.ZP, {
        blurAnimationData: {
          startBlurRadius: 5,
          endBlurRadius: 0,
          duration: a.b5
        },
        scaleAnimationData: {
          startScale: .85,
          endScale: 1,
          duration: a.b5
        },
        yAxisAnimationData: {
          range: 15,
          duration: a.vi,
          path: a.js.SINE
        },
        parallaxAnimationData: null != n ? {
          pathDirection: a.eo.UP,
          range: 200,
          containerVisibilityPercentage: n,
          changeOpacity: true
        } : true,
        animateXAxisWiggle: true,
        isMotionReduced: t,
        animationSpeedScale: v,
        children: (0, r.jsx)("img", {
          src: d.Z,
          className: y,
          alt: ""
        })
      })
    }), null != h && (0, r.jsx)("div", {
      className: o()(s.starContainer, h),
      children: (0, r.jsx)(a.ZP, {
        blurAnimationData: {
          startBlurRadius: 0,
          endBlurRadius: 2,
          duration: a.SR
        },
        scaleAnimationData: {
          startScale: 1,
          endScale: .85,
          duration: a.SR
        },
        yAxisAnimationData: {
          range: 20,
          duration: a.b5,
          path: a.js.COSINE
        },
        parallaxAnimationData: null != n ? {
          pathDirection: a.eo.UP,
          range: 50,
          containerVisibilityPercentage: n,
          changeOpacity: true
        } : true,
        animateXAxisWiggle: true,
        isMotionReduced: t,
        animationSpeedScale: v,
        children: (0, r.jsx)("img", {
          src: f.Z,
          className: O,
          alt: ""
        })
      })
    })]
  })
}