/** Chunk was on web.js **/
/** chunk id: 893996, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s
}), require("./953529.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk921801 = require("./921801.js"),
  Chunk159263 = require("./159263.js");

function s(e) {
  let {
    children: t,
    title: n,
    description: s,
    webSetting: l
  } = e;
  return (0, r.jsx)(a.F, {
    setting: l,
    children: (0, r.jsxs)("div", {
      className: o.category,
      children: [(0, r.jsxs)("div", {
        className: o.categoryHeader,
        children: [(0, r.jsx)(i.X6q, {
          variant: "heading-lg/semibold",
          color: "header-primary",
          children: n
        }), null != s ? (0, r.jsx)(i.Text, {
          variant: "text-sm/normal",
          color: "header-secondary",
          children: s
        }) : null]
      }), (0, r.jsx)("div", {
        className: o.categoryContent,
        children: t
      }), (0, r.jsx)(i.izJ, {
        className: o.categoryDivider
      })]
    })
  })
}