/** Chunk was on 66181 **/
/** chunk id: 707558, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
}), require("./953529.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk600164 = require("./600164.jsx"),
  Chunk896914 = require("./896914.js"),
  Chunk197571 = require("./197571.js");

function c(e) {
  let {
    features: t
  } = e;
  return (0, i.jsx)(i.Fragment, {
    children: t.map((e, t) => (0, i.jsxs)(a.Z, {
      align: a.Z.Align.CENTER,
      className: s()(o.marginTop20, l.feature, {
        [l.featureBorder]: 0 !== t
      }),
      children: [null != e.icon ? (0, i.jsx)("div", {
        className: s()(l.icon, e.icon)
      }) : null, (0, i.jsxs)("div", {
        children: [null != e.title ? (0, i.jsx)("div", {
          className: s()(o.marginBottom8, l.title),
          children: e.title
        }) : null, (0, i.jsx)("div", {
          className: l.description,
          children: e.description
        })]
      })]
    }, t))
  })
}