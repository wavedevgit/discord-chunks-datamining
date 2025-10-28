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
  Chunk638758 = require("./638758.js");

function g(e) {
  let {
    category: t
  } = e, n = (0, l.e7)([i.Z], () => i.Z.useReducedMotion), a = (0, l.e7)([s.Z], () => s.Z.isFocused()), {
    catalogBannerStatic: g,
    catalogBannerAnimated: p
  } = (0, u.Oi)(t);
  return (0, r.jsxs)("div", {
    className: d.catalogBanner,
    children: [(0, r.jsx)("img", {
      className: d.catalogBannerImage,
      src: g,
      alt: t.name
    }), null != p && !n && a && (0, r.jsx)(o.Z, {
      src: p,
      className: d.animationAsset,
      autoPlay: true,
      loop: true
    }), (0, r.jsx)(c.Z, {
      category: t,
      className: d.limitedTimeBadge,
      display: c.k.BANNER
    })]
  })
}(0, Chunk884697.IC)(90)