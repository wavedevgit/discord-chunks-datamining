/** Chunk was on 20501 **/
/** chunk id: 151451, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
});
var Chunk255367 = require("./255367.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk176754 = require("./176754.jsx"),
  Chunk635149 = require("./635149.js"),
  Chunk307248 = require("./307248.js"),
  Chunk389351 = require("./389351.js"),
  Chunk320067 = require("./320067.js"),
  Chunk476921 = require("./476921.js"),
  Chunk266768 = require("./266768.js");
let p = e => {
  let {
    isMotionReduced: t,
    containerVisibilityPercentage: n,
    boltTrinketClassName: r,
    carTrinketClassName: p,
    hammerTrinketClassName: g,
    keyTrinketClassName: h,
    starTrinketClassName: f
  } = e;
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)("div", {
      className: s()(l.boltContainer, r),
      children: (0, i.jsx)(a.ZP, {
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
        children: (0, i.jsx)("img", {
          src: o.Z,
          className: l.boltTrinket,
          alt: ""
        })
      })
    }), (0, i.jsx)("div", {
      className: s()(l.carContainer, p),
      children: (0, i.jsx)(a.ZP, {
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
        children: (0, i.jsx)("img", {
          src: c.Z,
          className: l.carTrinket,
          alt: ""
        })
      })
    }), (0, i.jsx)("div", {
      className: s()(l.hammerContainer, g),
      children: (0, i.jsx)(a.ZP, {
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
        children: (0, i.jsx)("img", {
          src: d.Z,
          className: l.hammerTrinket,
          alt: ""
        })
      })
    }), (0, i.jsx)("div", {
      className: s()(l.keyContainer, h),
      children: (0, i.jsx)(a.ZP, {
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
        children: (0, i.jsx)("img", {
          src: u.Z,
          className: l.keyTrinket,
          alt: ""
        })
      })
    }), (0, i.jsx)("div", {
      className: s()(l.starContainer, f),
      children: (0, i.jsx)(a.ZP, {
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
        children: (0, i.jsx)("img", {
          src: m.Z,
          className: l.starTrinket,
          alt: ""
        })
      })
    })]
  })
}