/** Chunk was on web.js **/
/** chunk id: 645616, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => h
});
var Chunk951288 = require("./951288.js"),
  Chunk399606 = require("./399606.js"),
  Chunk607070 = require("./607070.js"),
  Chunk70097 = require("./70097.jsx"),
  Chunk526167 = require("./526167.js"),
  Chunk176754 = require("./176754.jsx"),
  Chunk151451 = require("./151451.jsx"),
  Chunk115596 = require("./115596.js"),
  Chunk323053 = require("./323053.js"),
  Chunk530347 = require("./530347.js"),
  Chunk334937 = require("./334937.js");
let p = e => {
    let {
      supportHEVCAlpha: t,
      isMotionReduced: n,
      containerVisibilityPercentage: i
    } = e;
    return n ? (0, r.jsx)("div", {
      className: u.flyingWumpusContainer,
      children: (0, r.jsx)("img", {
        src: _.Z,
        alt: "",
        className: u.flyingWumpusAsset
      })
    }) : (0, r.jsx)("div", {
      className: u.flyingWumpusContainer,
      children: (0, r.jsx)(l.ZP, {
        scaleAnimationData: {
          startScale: .9,
          endScale: 1,
          duration: l.SR
        },
        yAxisAnimationData: {
          range: 20,
          duration: l.b5,
          path: l.js.SINE
        },
        parallaxAnimationData: {
          pathDirection: l.eo.UP,
          range: 200,
          containerVisibilityPercentage: i,
          changeOpacity: false
        },
        animateXAxisWiggle: true,
        children: t ? (0, r.jsx)("img", {
          src: d.Z,
          alt: "",
          className: u.flyingWumpusAsset
        }) : (0, r.jsx)(o.Z, {
          muted: true,
          autoPlay: true,
          playsInline: true,
          loop: true,
          className: u.flyingWumpusAsset,
          children: (0, r.jsx)("source", {
            src: f.Z
          })
        }, f.Z)
      })
    })
  },
  h = e => {
    let {
      containerVisibilityPercentage: t
    } = e, n = (0, i.e7)([a.Z], () => a.Z.useReducedMotion), o = (0, s.rO)();
    return (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(p, {
        supportHEVCAlpha: o,
        isMotionReduced: n,
        containerVisibilityPercentage: t
      }), (0, r.jsx)(c.Z, {
        isMotionReduced: n,
        containerVisibilityPercentage: t,
        boltTrinketClassName: u.bolt,
        carTrinketClassName: u.car,
        hammerTrinketClassName: u.hammer,
        keyTrinketClassName: u.key,
        starTrinketClassName: u.star
      })]
    })
  }