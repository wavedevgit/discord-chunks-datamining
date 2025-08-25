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
  Chunk861380 = require("./861380.js");

function s(e) {
  let {
    children: t,
    title: n,
    description: s,
    webSetting: l
  } = e;
  return (0, r.jsx)(o.F, {
    setting: l,
    children: (0, r.jsxs)("div", {
      className: a.category,
      children: [(0, r.jsxs)("div", {
        className: a.categoryHeader,
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
        className: a.categoryContent,
        children: t
      }), (0, r.jsx)(i.$i$, {
        className: a.categoryDivider
      })]
    })
  })
}