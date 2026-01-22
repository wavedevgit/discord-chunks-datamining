/** Chunk was on web.js **/
/** chunk id: 596513, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => c
});
var Chunk627968 = require("./627968.js"),
  Chunk607470 = require("./607470.jsx"),
  Chunk608416 = require("./608416.jsx"),
  Chunk48415 = require("./48415.js"),
  Chunk592151 = require("./592151.js"),
  Chunk844738 = require("./844738.js");
let c = e => {
  let {
    supportHEVCAlpha: t,
    isMotionReduced: n,
    containerVisibilityPercentage: c,
    containerClassName: u,
    assetClassName: d
  } = e;
  return n ? (0, r.jsx)("div", {
    className: u,
    children: (0, r.jsx)("img", {
      src: l.A,
      alt: "",
      className: d
    })
  }) : (0, r.jsx)("div", {
    className: u,
    children: (0, r.jsx)(a.Ay, {
      scaleAnimationData: {
        startScale: .9,
        endScale: 1,
        duration: a.$G
      },
      yAxisAnimationData: {
        range: 20,
        duration: a.Mp,
        path: a.aV.SINE
      },
      parallaxAnimationData: {
        pathDirection: a.MN.UP,
        range: 200,
        containerVisibilityPercentage: c,
        changeOpacity: false
      },
      animateXAxisWiggle: true,
      children: t ? (0, r.jsx)("img", {
        src: s.A,
        alt: "",
        className: d
      }) : (0, r.jsx)(i.A, {
        muted: true,
        autoPlay: true,
        playsInline: true,
        loop: true,
        className: d,
        children: (0, r.jsx)("source", {
          src: o.A
        })
      }, o.A)
    })
  })
}