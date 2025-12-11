/** Chunk was on web.js **/
/** chunk id: 518707, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => c
});
var Chunk54381 = require("./54381.js"),
  Chunk70097 = require("./70097.jsx"),
  Chunk55373 = require("./55373.jsx"),
  Chunk929039 = require("./929039.js"),
  Chunk412892 = require("./412892.js"),
  Chunk581662 = require("./581662.js");
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
      src: l.Z,
      alt: "",
      className: d
    })
  }) : (0, r.jsx)("div", {
    className: u,
    children: (0, r.jsx)(a.ZP, {
      scaleAnimationData: {
        startScale: .9,
        endScale: 1,
        duration: a.SR
      },
      yAxisAnimationData: {
        range: 20,
        duration: a.b5,
        path: a.js.SINE
      },
      parallaxAnimationData: {
        pathDirection: a.eo.UP,
        range: 200,
        containerVisibilityPercentage: c,
        changeOpacity: false
      },
      animateXAxisWiggle: true,
      children: t ? (0, r.jsx)("img", {
        src: o.Z,
        alt: "",
        className: d
      }) : (0, r.jsx)(i.Z, {
        muted: true,
        autoPlay: true,
        playsInline: true,
        loop: true,
        className: d,
        children: (0, r.jsx)("source", {
          src: s.Z
        })
      }, s.Z)
    })
  })
}