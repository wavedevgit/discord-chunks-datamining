/** Chunk was on 45620 **/
/** chunk id: 253355, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => h
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk399606 = require("./399606.js"),
  Chunk677850 = require("./677850.jsx"),
  Chunk607070 = require("./607070.js"),
  Chunk70097 = require("./70097.jsx"),
  Chunk451478 = require("./451478.js"),
  Chunk884697 = require("./884697.js"),
  Chunk813083 = require("./813083.jsx"),
  Chunk794324 = require("./794324.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk986517 = require("./986517.js");

function h(e) {
  let {
    category: t
  } = e, n = (0, i.e7)([c.Z], () => c.Z.useReducedMotion), a = (0, i.e7)([d.Z], () => d.Z.isFocused()), {
    catalogBannerStatic: f,
    catalogBannerAnimated: h,
    catalogBannerRive: C
  } = (0, b.Oi)(t), E = l.useRef(null), v = null != C;
  return (0, r.jsxs)("div", {
    ref: E,
    className: s()(m.catalogBanner, {
      [m.riveBanner]: v
    }),
    children: [v ? (0, r.jsx)(o.B, {
      src: C,
      fit: "cover",
      alignment: "center-left",
      style: {
        width: "100%",
        height: "100%"
      },
      eventTargetRef: E,
      autoplay: true
    }) : (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)("img", {
        className: m.catalogBannerImage,
        src: f,
        alt: t.name
      }), null != h && !n && a && (0, r.jsx)(u.Z, {
        src: h,
        className: m.animationAsset,
        autoPlay: true,
        loop: true
      })]
    }), (0, r.jsx)(g.Z, {
      category: t,
      className: m.limitedTimeBadge,
      daysRemainingText: p.t["8gsP5M"]
    })]
  })
}(0, Chunk884697.IC)(90)