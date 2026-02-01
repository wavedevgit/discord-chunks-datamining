/** Chunk was on 61344 **/
/** chunk id: 989985, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  _: () => s
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk36353 = require("./36353.js");

function s(e) {
  let {
    bannerIcon: t,
    bannerHeader: n,
    bannerSubtext: r,
    textStyles: s,
    headerStyles: o,
    containerStyles: c,
    children: u
  } = e;
  return (0, l.jsxs)("div", {
    className: i()(a.Ew, c),
    children: [(0, l.jsxs)("div", {
      className: i()(a.lt, s),
      children: [null != t && ("string" == typeof t ? (0, l.jsx)("img", {
        src: t,
        alt: "",
        className: a.q3
      }) : t), (0, l.jsxs)("div", {
        className: a._M,
        children: [(0, l.jsx)("div", {
          className: i()(a.U_, o),
          children: n
        }), null != r && (0, l.jsx)("div", {
          className: a.mi,
          children: r
        })]
      })]
    }), (0, l.jsx)("div", {
      className: a.uu,
      children: u
    })]
  })
}