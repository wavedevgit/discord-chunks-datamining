/** Chunk was on web.js **/
/** chunk id: 909136, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk680018 = require("./680018.jsx"),
  Chunk607070 = require("./607070.js"),
  Chunk164662 = require("./164662.js"),
  Chunk123274 = require("./123274.jsx"),
  Chunk732728 = require("./732728.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk460103 = require("./460103.js");
let p = e => {
  let {
    className: t,
    onBackClick: n
  } = e, i = (0, o.e7)([l.Z], () => l.Z.useReducedMotion), {
    visibilityPercentageRef: p,
    visibilityPercentage: h
  } = (0, c.E)(!i);
  return (0, r.jsxs)("div", {
    className: a()(_.container, t),
    "data-testid": "all-perks-hero-header",
    ref: p,
    children: [(0, r.jsx)("div", {
      className: _.backButtonContainer,
      children: (0, r.jsx)(s.z, {
        onClick: n,
        text: f.intl.string(f.t["13/7kZ"]),
        variant: "overlay-secondary"
      })
    }), (0, r.jsxs)("div", {
      className: _.content,
      children: [(0, r.jsx)(d.Z, {
        containerVisibilityPercentage: h,
        isMotionReduced: i
      }), (0, r.jsx)("div", {
        className: _.headerContainer,
        children: (0, r.jsx)(u.Z, {
          children: f.intl.string(f.t.hqjDX1)
        })
      })]
    })]
  })
}