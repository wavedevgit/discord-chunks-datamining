/** Chunk was on web.js **/
/** chunk id: 900179, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => f
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk915089 = require("./915089.js"),
  Chunk94343 = require("./94343.js"),
  Chunk716804 = require("./716804.js"),
  Chunk892007 = require("./892007.js");

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
  } = e, E = (0, l.GV)(), y = i.useRef(null), b = (0, u.g)(), O = null != _ && b === _;
  return (0, c.A)(y, O), (0, r.jsxs)("section", {
    ref: O ? y : true,
    className: o()(d.uW, p),
    "aria-labelledby": null != n ? E : true,
    children: [null != n && (0, r.jsxs)("div", {
      className: d.so,
      children: [(0, r.jsxs)("div", {
        className: d.wx,
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
    }), (0, r.jsx)(s.Fmo, {
      children: t
    })]
  })
}