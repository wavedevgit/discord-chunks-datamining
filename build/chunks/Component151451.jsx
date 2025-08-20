/** Chunk was on web.js **/
/** chunk id: 151451, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _
});
var Chunk951288 = require("./951288.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk176754 = require("./176754.jsx"),
  Chunk715404 = require("./715404.js"),
  Chunk307248 = require("./307248.js"),
  Chunk389351 = require("./389351.js"),
  Chunk320067 = require("./320067.js"),
  Chunk476921 = require("./476921.js"),
  Chunk266768 = require("./266768.js");
let _ = e => {
  let {
    isMotionReduced: t,
    containerVisibilityPercentage: n,
    boltTrinketClassName: i,
    carTrinketClassName: _,
    hammerTrinketClassName: p,
    keyTrinketClassName: h,
    starTrinketClassName: m
  } = e;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("div", {
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
        children: (0, r.jsx)("img", {
          src: l.Z,
          className: s.boltTrinket,
          alt: ""
        })
      })
    }), (0, r.jsx)("div", {
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
        children: (0, r.jsx)("img", {
          src: c.Z,
          className: s.carTrinket,
          alt: ""
        })
      })
    }), (0, r.jsx)("div", {
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
        children: (0, r.jsx)("img", {
          src: u.Z,
          className: s.hammerTrinket,
          alt: ""
        })
      })
    }), (0, r.jsx)("div", {
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
        children: (0, r.jsx)("img", {
          src: d.Z,
          className: s.keyTrinket,
          alt: ""
        })
      })
    }), (0, r.jsx)("div", {
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
        children: (0, r.jsx)("img", {
          src: f.Z,
          className: s.starTrinket,
          alt: ""
        })
      })
    })]
  })
}