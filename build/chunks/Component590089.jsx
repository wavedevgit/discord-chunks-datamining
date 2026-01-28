/** Chunk was on 5606 **/
/** chunk id: 590089, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  U: () => c
}), require("./228524.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  l = require.n(Chunk503698),
  Chunk158954 = require("./158954.js"),
  Chunk397927 = require("./397927.js"),
  Chunk411809 = require("./411809.js");

function c(e) {
  let {
    headingColor: t = "text-strong",
    leadingElement: n,
    primaryTrailingElement: i,
    secondaryTrailingElement: c,
    title: d,
    description: u,
    onClick: p,
    ref: _,
    style: m
  } = e;
  return (0, r.jsxs)(a.DUT, {
    className: l()(o.EA, {
      [o.vk]: null != p
    }),
    onClick: p,
    innerRef: _,
    style: m,
    children: [null != n && (0, r.jsx)("div", {
      className: o._y,
      children: n
    }), (0, r.jsxs)("div", {
      className: o.jw,
      children: [(0, r.jsx)("div", {
        className: o.eg,
        children: (0, r.jsx)(s.DZT, {
          variant: "heading-md/medium",
          color: t,
          children: d
        })
      }), null != u && (0, r.jsx)(s.EYj, {
        variant: "text-sm/normal",
        color: "text-subtle",
        children: u
      })]
    }), (null != i || null != c) && (0, r.jsxs)("div", {
      className: o.fW,
      children: [i, c]
    })]
  })
}