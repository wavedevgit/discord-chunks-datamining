/** Chunk was on web.js **/
/** chunk id: 982370, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk159691 = require("./159691.js"),
  Chunk607070 = require("./607070.js"),
  Chunk175418 = require("./175418.jsx"),
  Chunk164662 = require("./164662.js"),
  Chunk732728 = require("./732728.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk527552 = require("./527552.js");
let p = e => {
  let {
    className: t,
    onBackClick: n
  } = e, i = (0, o.e7)([l.Z], () => l.Z.useReducedMotion), {
    visibilityPercentageRef: p,
    visibilityPercentage: h
  } = (0, u.E)(!i);
  return (0, r.jsxs)("div", {
    className: a()(_.container, t),
    "data-testid": "all-perks-hero-header",
    ref: p,
    children: [(0, r.jsx)("div", {
      className: _.backButtonContainer,
      children: (0, r.jsx)(s.zxk, {
        onClick: n,
        text: f.intl.string(f.t["13/7kX"]),
        variant: "overlay-secondary"
      })
    }), (0, r.jsx)("div", {
      className: _.content,
      children: (0, r.jsxs)("div", {
        className: _.headerContainer,
        children: [(0, r.jsx)(d.Z, {
          containerVisibilityPercentage: h,
          isMotionReduced: i
        }), (0, r.jsx)(c.Z, {
          children: f.intl.string(f.t["hqjDX/"])
        })]
      })
    })]
  })
}