/** Chunk was on 45620 **/
/** chunk id: 859788, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => p
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk677850 = require("./677850.jsx"),
  Chunk607070 = require("./607070.js"),
  Chunk70097 = require("./70097.jsx"),
  Chunk451478 = require("./451478.js"),
  Chunk410572 = require("./410572.js");
let p = e => {
  let {
    bannerStatic: t,
    bannerAnimated: n,
    bannerRive: l,
    isResponsive: p = false,
    eventTargetRef: g
  } = e, f = (0, s.e7)([o.Z], () => o.Z.useReducedMotion), h = (0, s.e7)([u.Z], () => u.Z.isFocused()), C = null != n && !f && h;
  return null != l ? (0, r.jsx)(a.B, {
    src: l,
    fit: "fit-width",
    eventTargetRef: g
  }) : C ? (0, r.jsx)(c.Z, {
    className: i()({
      [d.responsive]: p
    }, d.bannerAsset, d.bannerVideoBackground),
    src: n,
    autoPlay: true,
    loop: true
  }) : (0, r.jsx)("div", {
    className: i()({
      [d.responsive]: p
    }, d.bannerAsset, d.bannerImage),
    style: {
      backgroundImage: "url(".concat(t, ")")
    }
  })
}