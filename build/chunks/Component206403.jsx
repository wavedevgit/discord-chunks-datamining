/** Chunk was on web.js **/
/** chunk id: 206403, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  x: () => c
}), require("./953529.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk845442 = require("./845442.js");

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
  return (0, r.jsxs)(s.P3F, {
    className: o()(l.baseControlItem, {
      [l.clickable]: null != f
    }),
    onClick: f,
    innerRef: p,
    style: _,
    children: [null != n && (0, r.jsx)("div", {
      className: l.baseControlItemLeadingElement,
      children: n
    }), (0, r.jsxs)("div", {
      className: l.baseControlItemContent,
      children: [(0, r.jsx)("div", {
        className: l.baseControlItemTitle,
        children: (0, r.jsx)(a.X6q, {
          variant: "heading-md/medium",
          color: t,
          children: u
        })
      }), null != d && (0, r.jsx)(a.xvT, {
        variant: "text-sm/normal",
        color: "text-subtle",
        className: l.baseControlItemDescription,
        children: d
      })]
    }), (null != i || null != c) && (0, r.jsxs)("div", {
      className: l.baseControlItemTrailingElements,
      children: [i, c]
    })]
  })
}