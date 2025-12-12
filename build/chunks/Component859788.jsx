/** Chunk was on 45620 **/
/** chunk id: 859788, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => g
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk677850 = require("./677850.jsx"),
  Chunk607070 = require("./607070.js"),
  Chunk70097 = require("./70097.jsx"),
  Chunk451478 = require("./451478.js"),
  Chunk410572 = require("./410572.js");
let g = e => {
  let {
    bannerStatic: t,
    bannerAnimated: n,
    bannerRive: l,
    isResponsive: g = false,
    eventTargetRef: f
  } = e, p = (0, i.e7)([a.Z], () => a.Z.useReducedMotion), m = (0, i.e7)([u.Z], () => u.Z.isFocused()), C = null != n && !p && m;
  return null != l ? (0, r.jsx)(s.B, {
    src: l,
    fit: "fit-width",
    eventTargetRef: f
  }) : C ? (0, r.jsx)(c.Z, {
    className: o()({
      [d.responsive]: g
    }, d.bannerAsset, d.bannerVideoBackground),
    src: n,
    autoPlay: true,
    loop: true
  }) : (0, r.jsx)("div", {
    className: o()({
      [d.responsive]: g
    }, d.bannerAsset, d.bannerImage),
    style: {
      backgroundImage: "url(".concat(t, ")")
    }
  })
}