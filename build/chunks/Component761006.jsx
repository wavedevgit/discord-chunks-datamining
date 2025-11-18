/** Chunk was on web.js **/
/** chunk id: 761006, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _
});
var Chunk54381 = require("./54381.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk55373 = require("./55373.jsx"),
  Chunk555270 = require("./555270.js"),
  Chunk307248 = require("./307248.js"),
  Chunk389351 = require("./389351.js"),
  Chunk320067 = require("./320067.js"),
  Chunk476921 = require("./476921.js"),
  Chunk266768 = require("./266768.js");
let _ = e => {
  let {
    isMotionReduced: t,
    containerVisibilityPercentage: n,
    boltContainerClassName: i,
    carContainerClassName: _,
    hammerContainerClassName: p,
    keyContainerClassName: h,
    starContainerClassName: m,
    boltAssetClassName: g,
    carAssetClassName: E,
    hammerAssetClassName: b,
    keyAssetClassName: y,
    starAssetClassName: O,
    animationSpeedScale: v = 1
  } = e;
  return (0, r.jsxs)(r.Fragment, {
    children: [null != i && (0, r.jsx)("div", {
      className: a()(s.boltContainer, i),
      children: (0, r.jsx)(o.ZP, {
        blurAnimationData: {
          startBlurRadius: 10,
          endBlurRadius: 0,
          duration: o.SR
        },
        scaleAnimationData: {
          startScale: .85,
          endScale: 1,
          duration: o.SR
        },
        yAxisAnimationData: {
          range: 15,
          duration: o.vi,
          path: o.js.COSINE
        },
        parallaxAnimationData: null != n ? {
          pathDirection: o.eo.UP,
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
    }), null != _ && (0, r.jsx)("div", {
      className: a()(s.carContainer, _),
      children: (0, r.jsx)(o.ZP, {
        yAxisAnimationData: {
          range: 15,
          duration: o.vi,
          path: o.js.COSINE
        },
        parallaxAnimationData: null != n ? {
          pathDirection: o.eo.DOWN,
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
    }), null != p && (0, r.jsx)("div", {
      className: a()(s.hammerContainer, p),
      children: (0, r.jsx)(o.ZP, {
        yAxisAnimationData: {
          range: 15,
          duration: o.vi,
          path: o.js.SINE
        },
        parallaxAnimationData: null != n ? {
          pathDirection: o.eo.DOWN,
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
    }), null != h && (0, r.jsx)("div", {
      className: a()(s.keyContainer, h),
      children: (0, r.jsx)(o.ZP, {
        blurAnimationData: {
          startBlurRadius: 5,
          endBlurRadius: 0,
          duration: o.b5
        },
        scaleAnimationData: {
          startScale: .85,
          endScale: 1,
          duration: o.b5
        },
        yAxisAnimationData: {
          range: 15,
          duration: o.vi,
          path: o.js.SINE
        },
        parallaxAnimationData: null != n ? {
          pathDirection: o.eo.UP,
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
    }), null != m && (0, r.jsx)("div", {
      className: a()(s.starContainer, m),
      children: (0, r.jsx)(o.ZP, {
        blurAnimationData: {
          startBlurRadius: 0,
          endBlurRadius: 2,
          duration: o.SR
        },
        scaleAnimationData: {
          startScale: 1,
          endScale: .85,
          duration: o.SR
        },
        yAxisAnimationData: {
          range: 20,
          duration: o.b5,
          path: o.js.COSINE
        },
        parallaxAnimationData: null != n ? {
          pathDirection: o.eo.UP,
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