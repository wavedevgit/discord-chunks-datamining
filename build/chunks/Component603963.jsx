/** Chunk was on web.js **/
/** chunk id: 603963, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  N: () => s,
  Z: () => l
}), require("./953529.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk921801 = require("./921801.js"),
  Chunk22354 = require("./22354.js");

function s(e) {
  let {
    children: t,
    title: n,
    description: a
  } = e;
  return (0, r.jsxs)("div", {
    className: o.category,
    children: [(null != n || null != a) && (0, r.jsxs)("div", {
      className: o.categoryHeader,
      children: [null != n && (0, r.jsx)(i.Heading, {
        variant: "heading-lg/semibold",
        color: "header-primary",
        children: n
      }), null != a && (0, r.jsx)(i.Text, {
        variant: "text-sm/normal",
        color: "text-default",
        children: a
      })]
    }), (0, r.jsx)("div", {
      className: o.categoryContent,
      children: t
    }), (0, r.jsx)(i.izJ, {
      className: o.categoryDivider
    })]
  })
}

function l(e) {
  let {
    children: t,
    title: n,
    description: i,
    webSetting: o
  } = e;
  return (0, r.jsx)(a.F, {
    setting: o,
    children: (0, r.jsx)(s, {
      title: n,
      description: i,
      children: t
    })
  })
}