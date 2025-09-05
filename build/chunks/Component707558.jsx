/** Chunk was on web.js **/
/** chunk id: 707558, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => c
}), require("./953529.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk600164 = require("./600164.jsx"),
  Chunk896914 = require("./896914.js"),
  Chunk197571 = require("./197571.js");

function c(e) {
  let {
    features: t
  } = e;
  return (0, r.jsx)(r.Fragment, {
    children: t.map((e, t) => (0, r.jsxs)(o.Z, {
      align: o.Z.Align.CENTER,
      className: a()(l.marginTop20, s.feature, {
        [s.featureBorder]: 0 !== t
      }),
      children: [null != e.icon ? (0, r.jsx)("div", {
        className: a()(s.icon, e.icon)
      }) : null, (0, r.jsxs)("div", {
        children: [null != e.title ? (0, r.jsx)("div", {
          className: a()(l.marginBottom8, s.title),
          children: e.title
        }) : null, (0, r.jsx)("div", {
          className: s.description,
          children: e.description
        })]
      })]
    }, t))
  })
}