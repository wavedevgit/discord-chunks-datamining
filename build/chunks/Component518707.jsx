/** Chunk was on web.js **/
/** chunk id: 518707, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => c
});
var Chunk54381 = require("./54381.js"),
  Chunk70097 = require("./70097.jsx"),
  Chunk55373 = require("./55373.jsx"),
  Chunk323053 = require("./323053.js"),
  Chunk530347 = require("./530347.js"),
  Chunk334937 = require("./334937.js");
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
    children: (0, r.jsx)(o.ZP, {
      scaleAnimationData: {
        startScale: .9,
        endScale: 1,
        duration: o.SR
      },
      yAxisAnimationData: {
        range: 20,
        duration: o.b5,
        path: o.js.SINE
      },
      parallaxAnimationData: {
        pathDirection: o.eo.UP,
        range: 200,
        containerVisibilityPercentage: c,
        changeOpacity: false
      },
      animateXAxisWiggle: true,
      children: t ? (0, r.jsx)("img", {
        src: a.Z,
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