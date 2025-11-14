/** Chunk was on 45620 **/
/** chunk id: 253355, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => g
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk399606 = require("./399606.js"),
  Chunk607070 = require("./607070.js"),
  Chunk70097 = require("./70097.jsx"),
  Chunk451478 = require("./451478.js"),
  Chunk884697 = require("./884697.js"),
  Chunk813083 = require("./813083.jsx"),
  Chunk794324 = require("./794324.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk638758 = require("./638758.js");

function g(e) {
  let {
    category: t
  } = e, n = (0, l.e7)([i.Z], () => i.Z.useReducedMotion), s = (0, l.e7)([o.Z], () => o.Z.isFocused()), {
    catalogBannerStatic: g,
    catalogBannerAnimated: f
  } = (0, u.Oi)(t);
  return (0, r.jsxs)("div", {
    className: p.catalogBanner,
    children: [(0, r.jsx)("img", {
      className: p.catalogBannerImage,
      src: g,
      alt: t.name
    }), null != f && !n && s && (0, r.jsx)(a.Z, {
      src: f,
      className: p.animationAsset,
      autoPlay: true,
      loop: true
    }), (0, r.jsx)(c.Z, {
      category: t,
      className: p.limitedTimeBadge,
      daysRemainingText: d.t["8gsP5M"]
    })]
  })
}(0, Chunk884697.IC)(90)