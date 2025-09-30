/** Chunk was on 45620 **/
/** chunk id: 859788, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => g
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
let g = e => {
  let {
    bannerStatic: t,
    bannerAnimated: n,
    isResponsive: l = false,
    eventTargetRef: g
  } = e, p = (0, a.e7)([o.Z], () => o.Z.useReducedMotion), f = (0, a.e7)([u.Z], () => u.Z.isFocused()), _ = null != n && !p && f;
  return null != n && n.endsWith(".riv") ? (0, r.jsx)(s.B, {
    src: n,
    fit: "fit-width",
    eventTargetRef: g
  }) : _ ? (0, r.jsx)(c.Z, {
    className: i()({
      [d.responsive]: l
    }, d.bannerAsset, d.bannerVideoBackground),
    src: n,
    autoPlay: true,
    loop: true
  }) : (0, r.jsx)("div", {
    className: i()({
      [d.responsive]: l
    }, d.bannerAsset, d.bannerImage),
    style: {
      backgroundImage: "url(".concat(t, ")")
    }
  })
}