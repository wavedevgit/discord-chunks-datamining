/** Chunk was on 45620 **/
/** chunk id: 859788, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => f
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk677850 = require("./677850.jsx"),
  Chunk607070 = require("./607070.js"),
  Chunk70097 = require("./70097.jsx"),
  Chunk451478 = require("./451478.js"),
  Chunk527275 = require("./527275.js");
let f = e => {
  let {
    bannerStatic: t,
    bannerAnimated: n,
    bannerRive: l,
    isResponsive: f = false,
    eventTargetRef: g
  } = e, p = (0, o.e7)([s.Z], () => s.Z.useReducedMotion), b = (0, o.e7)([u.Z], () => u.Z.isFocused()), m = null != n && !p && b;
  return null != l ? (0, r.jsx)(i.B, {
    src: l,
    fit: "fit-width",
    eventTargetRef: g
  }) : m ? (0, r.jsx)(c.Z, {
    className: a()({
      [d.responsive]: f
    }, d.bannerAsset, d.bannerVideoBackground),
    src: n,
    autoPlay: true,
    loop: true
  }) : (0, r.jsx)("div", {
    className: a()({
      [d.responsive]: f
    }, d.bannerAsset, d.bannerImage),
    style: {
      backgroundImage: "url(".concat(t, ")")
    }
  })
}