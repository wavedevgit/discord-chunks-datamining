/** Chunk was on web.js **/
/** chunk id: 196567, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk304055 = require("./304055.js");

function l(e) {
  let {
    className: t,
    copy: n,
    bannerImage: i,
    textColor: l = "always-white",
    hideGiftIcon: c = false,
    hideNitroIcon: u = false
  } = e;
  return (0, r.jsxs)("div", {
    className: a()(s.bannerContainer, t),
    children: [null == i ? null : (0, r.jsx)("img", {
      alt: "",
      className: s.banner,
      src: i
    }), (0, r.jsxs)("div", {
      className: s.textContainer,
      children: [false === c && (0, r.jsx)(o.OgN, {
        size: "md",
        color: "currentColor",
        className: s.giftIcon
      }), false === u && (0, r.jsx)(o.SrA, {
        size: "md",
        color: o.TVs.colors.TEXT_INVERT,
        className: s.nitroIcon
      }), (0, r.jsx)(o.X6q, {
        className: a()(s.textHeader, {
          [s.textHeaderWithIcon]: !c
        }),
        color: l,
        variant: "heading-md/bold",
        children: n
      })]
    })]
  })
}