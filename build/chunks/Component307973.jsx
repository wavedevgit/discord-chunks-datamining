/** Chunk was on web.js **/
/** chunk id: 307973, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => p
});
var Chunk627968 = require("./627968.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk608416 = require("./608416.jsx"),
  Chunk285637 = require("./285637.js"),
  Chunk194225 = require("./194225.js"),
  Chunk104400 = require("./104400.js"),
  Chunk737968 = require("./737968.js"),
  Chunk275869 = require("./275869.js"),
  Chunk979250 = require("./979250.js");
let p = e => {
  let {
    isMotionReduced: t,
    containerVisibilityPercentage: n,
    boltContainerClassName: i,
    carContainerClassName: p,
    hammerContainerClassName: _,
    keyContainerClassName: h,
    starContainerClassName: m,
    boltAssetClassName: g,
    carAssetClassName: E,
    hammerAssetClassName: y,
    keyAssetClassName: b,
    starAssetClassName: O,
    animationSpeedScale: v = 1
  } = e;
  return (0, r.jsxs)(r.Fragment, {
    children: [null != i && (0, r.jsx)("div", {
      className: a()(o.nJ, i),
      children: (0, r.jsx)(s.Ay, {
        blurAnimationData: {
          startBlurRadius: 10,
          endBlurRadius: 0,
          duration: s.$G
        },
        scaleAnimationData: {
          startScale: .85,
          endScale: 1,
          duration: s.$G
        },
        yAxisAnimationData: {
          range: 15,
          duration: s.XN,
          path: s.aV.COSINE
        },
        parallaxAnimationData: null != n ? {
          pathDirection: s.MN.UP,
          range: 125,
          containerVisibilityPercentage: n,
          changeOpacity: true
        } : true,
        animateXAxisWiggle: true,
        isMotionReduced: t,
        animationSpeedScale: v,
        children: (0, r.jsx)("img", {
          src: l.A,
          className: g,
          alt: ""
        })
      })
    }), null != p && (0, r.jsx)("div", {
      className: a()(o.IN, p),
      children: (0, r.jsx)(s.Ay, {
        yAxisAnimationData: {
          range: 15,
          duration: s.XN,
          path: s.aV.COSINE
        },
        parallaxAnimationData: null != n ? {
          pathDirection: s.MN.DOWN,
          range: 50,
          containerVisibilityPercentage: n,
          changeOpacity: true
        } : true,
        animateXAxisWiggle: true,
        isMotionReduced: t,
        animationSpeedScale: v,
        children: (0, r.jsx)("img", {
          src: c.A,
          className: E,
          alt: ""
        })
      })
    }), null != _ && (0, r.jsx)("div", {
      className: a()(o.Gj, _),
      children: (0, r.jsx)(s.Ay, {
        yAxisAnimationData: {
          range: 15,
          duration: s.XN,
          path: s.aV.SINE
        },
        parallaxAnimationData: null != n ? {
          pathDirection: s.MN.DOWN,
          range: 120,
          containerVisibilityPercentage: n,
          changeOpacity: true
        } : true,
        animateXAxisWiggle: true,
        isMotionReduced: t,
        animationSpeedScale: v,
        children: (0, r.jsx)("img", {
          src: u.A,
          className: y,
          alt: ""
        })
      })
    }), null != h && (0, r.jsx)("div", {
      className: a()(o.FV, h),
      children: (0, r.jsx)(s.Ay, {
        blurAnimationData: {
          startBlurRadius: 5,
          endBlurRadius: 0,
          duration: s.Mp
        },
        scaleAnimationData: {
          startScale: .85,
          endScale: 1,
          duration: s.Mp
        },
        yAxisAnimationData: {
          range: 15,
          duration: s.XN,
          path: s.aV.SINE
        },
        parallaxAnimationData: null != n ? {
          pathDirection: s.MN.UP,
          range: 200,
          containerVisibilityPercentage: n,
          changeOpacity: true
        } : true,
        animateXAxisWiggle: true,
        isMotionReduced: t,
        animationSpeedScale: v,
        children: (0, r.jsx)("img", {
          src: d.A,
          className: b,
          alt: ""
        })
      })
    }), null != m && (0, r.jsx)("div", {
      className: a()(o.E1, m),
      children: (0, r.jsx)(s.Ay, {
        blurAnimationData: {
          startBlurRadius: 0,
          endBlurRadius: 2,
          duration: s.$G
        },
        scaleAnimationData: {
          startScale: 1,
          endScale: .85,
          duration: s.$G
        },
        yAxisAnimationData: {
          range: 20,
          duration: s.Mp,
          path: s.aV.COSINE
        },
        parallaxAnimationData: null != n ? {
          pathDirection: s.MN.UP,
          range: 50,
          containerVisibilityPercentage: n,
          changeOpacity: true
        } : true,
        animateXAxisWiggle: true,
        isMotionReduced: t,
        animationSpeedScale: v,
        children: (0, r.jsx)("img", {
          src: f.A,
          className: O,
          alt: ""
        })
      })
    })]
  })
}