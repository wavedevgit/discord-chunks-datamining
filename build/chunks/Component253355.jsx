/** Chunk was on 45620 **/
/** chunk id: 253355, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => g
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk399606 = require("./399606.js"),
  Chunk607070 = require("./607070.js"),
  Chunk70097 = require("./70097.jsx"),
  Chunk451478 = require("./451478.js"),
  Chunk884697 = require("./884697.js"),
  Chunk813083 = require("./813083.jsx"),
  Chunk794324 = require("./794324.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk986517 = require("./986517.js");

function g(e) {
  let {
    category: t
  } = e, n = (0, l.e7)([a.Z], () => a.Z.useReducedMotion), s = (0, l.e7)([o.Z], () => o.Z.isFocused()), {
    catalogBannerStatic: g,
    catalogBannerAnimated: p
  } = (0, u.Oi)(t);
  return (0, r.jsxs)("div", {
    className: f.catalogBanner,
    children: [(0, r.jsx)("img", {
      className: f.catalogBannerImage,
      src: g,
      alt: t.name
    }), null != p && !n && s && (0, r.jsx)(i.Z, {
      src: p,
      className: f.animationAsset,
      autoPlay: true,
      loop: true
    }), (0, r.jsx)(c.Z, {
      category: t,
      className: f.limitedTimeBadge,
      daysRemainingText: d.t["8gsP5M"]
    })]
  })
}(0, Chunk884697.IC)(90)