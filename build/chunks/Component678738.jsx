/** Chunk was on web.js **/
/** chunk id: 678738, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk313201 = require("./313201.js"),
  Chunk938111 = require("./938111.js"),
  Chunk104287 = require("./104287.js"),
  Chunk516117 = require("./516117.js");

function f(e) {
  let {
    children: t,
    heading: n,
    headingIcon: a,
    introText: f,
    className: p,
    scrollTargetId: _,
    headingClassName: h,
    headingVariant: m = "text-xs/semibold",
    headingColor: g = "text-default"
  } = e, E = (0, l.Dt)(), b = i.useRef(null), y = (0, u.b)(), O = null != _ && y === _;
  return (0, c.Z)(b, O), (0, r.jsxs)("section", {
    ref: O ? b : true,
    className: o()(d.section, p),
    "aria-labelledby": null != n ? E : true,
    children: [null != n && (0, r.jsxs)("div", {
      className: d.headings,
      children: [(0, r.jsxs)("div", {
        className: d.header,
        children: [(0, r.jsx)(s.Heading, {
          variant: m,
          color: g,
          className: h,
          id: E,
          children: n
        }), a]
      }), null != f && (0, r.jsx)(s.Text, {
        variant: "text-xs/normal",
        children: f
      })]
    }), (0, r.jsx)(s.y5t, {
      children: t
    })]
  })
}