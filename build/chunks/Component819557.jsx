/** Chunk was on web.js **/
/** chunk id: 819557, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  q: () => c,
  z: () => l
}), require("./953529.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk916704 = require("./916704.js");

function l(e) {
  let {
    children: t
  } = e;
  return (0, r.jsx)("div", {
    className: s.cellGroup,
    children: (0, r.jsx)("div", {
      className: s.content,
      children: t
    })
  })
}

function c(e) {
  let {
    icon: t,
    title: n,
    description: i,
    iconClassName: l,
    color: c,
    listType: u = "icon",
    index: d
  } = e;
  return (0, r.jsxs)("div", {
    className: s.cell,
    children: ["numbered" === u && null != d ? (0, r.jsx)(a.X6q, {
      variant: "heading-md/semibold",
      color: "text-brand",
      className: s.number,
      children: d + 1
    }) : null != t && (0, r.jsx)("div", {
      className: s.iconContainer,
      children: (0, r.jsx)(t, {
        color: null != c ? c : "currentColor",
        className: o()(s.icon, l)
      })
    }), (0, r.jsxs)("div", {
      className: s.textContainer,
      children: [(0, r.jsx)(a.Text, {
        variant: "text-md/semibold",
        color: "header-primary",
        children: n
      }), null != i && (0, r.jsx)(a.Text, {
        variant: "text-xs/medium",
        color: "text-secondary",
        children: i
      })]
    })]
  })
}