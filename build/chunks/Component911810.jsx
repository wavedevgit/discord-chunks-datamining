/** Chunk was on web.js **/
/** chunk id: 911810, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  k: () => l
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk939350 = require("./939350.js"),
  Chunk564546 = require("./564546.js");

function l(e) {
  let {
    contents: t,
    label: n,
    className: i,
    color: l = "default"
  } = e;
  return 0 === t.length ? null : (0, r.jsxs)("div", {
    "aria-label": n,
    role: "group",
    className: i,
    children: [null != n ? (0, r.jsx)("div", {
      className: a()(s.groupLabel, s.hideInteraction, o._e[l]),
      children: n
    }) : null, t]
  })
}