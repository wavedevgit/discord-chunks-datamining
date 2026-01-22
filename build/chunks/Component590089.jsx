/** Chunk was on web.js **/
/** chunk id: 590089, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  U: () => c
}), require("./228524.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk158954 = require("./158954.js"),
  Chunk397927 = require("./397927.js"),
  Chunk411809 = require("./411809.js");

function c(e) {
  let {
    headingColor: t = "text-strong",
    leadingElement: n,
    primaryTrailingElement: i,
    secondaryTrailingElement: c,
    title: u,
    description: d,
    onClick: f,
    ref: p,
    style: _
  } = e;
  return (0, r.jsxs)(o.DUT, {
    className: a()(l.EA, {
      [l.vk]: null != f
    }),
    onClick: f,
    innerRef: p,
    style: _,
    children: [null != n && (0, r.jsx)("div", {
      className: l._y,
      children: n
    }), (0, r.jsxs)("div", {
      className: l.jw,
      children: [(0, r.jsx)("div", {
        className: l.eg,
        children: (0, r.jsx)(s.DZT, {
          variant: "heading-md/medium",
          color: t,
          children: u
        })
      }), null != d && (0, r.jsx)(s.EYj, {
        variant: "text-sm/normal",
        color: "text-subtle",
        children: d
      })]
    }), (null != i || null != c) && (0, r.jsxs)("div", {
      className: l.fW,
      children: [i, c]
    })]
  })
}