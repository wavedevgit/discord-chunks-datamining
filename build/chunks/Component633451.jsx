/** Chunk was on 9207 **/
/** chunk id: 633451, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => d
});
var Chunk627968 = require("./627968.js"),
  Chunk417597 = require("./417597.js"),
  Chunk775602 = require("./775602.js"),
  Chunk608416 = require("./608416.jsx"),
  Chunk307973 = require("./307973.jsx"),
  Chunk660595 = require("./660595.js"),
  Chunk180894 = require("./180894.js");
let d = e => {
  let {
    containerVisibilityPercentage: t
  } = e, n = (0, i.bG)([l.A], () => l.A.useReducedMotion);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("div", {
      className: o.BI,
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
          className: o.Q
        })
      })
    }), (0, r.jsx)(a.A, {
      isMotionReduced: n,
      containerVisibilityPercentage: t,
      hammerContainerClassName: o.Gj,
      keyContainerClassName: o.FV,
      starContainerClassName: o.E1,
      hammerAssetClassName: o.Wv,
      keyAssetClassName: o.rs,
      starAssetClassName: o.OY,
      animationSpeedScale: 2
    })]
  })
}