/** Chunk was on 45620 **/
/** chunk id: 859788, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => d
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk607070 = require("./607070.js"),
  Chunk70097 = require("./70097.jsx"),
  Chunk451478 = require("./451478.js"),
  Chunk410572 = require("./410572.js");
let d = e => {
  let {
    bannerStatic: t,
    bannerAnimated: r,
    isResponsive: l = false
  } = e, d = (0, i.e7)([o.Z], () => o.Z.useReducedMotion), p = (0, i.e7)([c.Z], () => c.Z.isFocused());
  return null != r && !d && p ? (0, n.jsx)(s.Z, {
    className: a()({
      [u.responsive]: l
    }, u.bannerAsset, u.bannerVideoBackground),
    src: r,
    autoPlay: true,
    loop: true
  }) : (0, n.jsx)("div", {
    className: a()({
      [u.responsive]: l
    }, u.bannerAsset, u.bannerImage),
    style: {
      backgroundImage: "url(".concat(t, ")")
    }
  })
}