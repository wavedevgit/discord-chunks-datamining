/** Chunk was on 97492 **/
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
    bannerSubtext: l,
    textStyles: s,
    headerStyles: o,
    containerStyles: c,
    children: u
  } = e;
  return (0, r.jsxs)("div", {
    className: i()(a.Ew, c),
    children: [(0, r.jsxs)("div", {
      className: i()(a.lt, s),
      children: [null != t && ("string" == typeof t ? (0, r.jsx)("img", {
        src: t,
        alt: "",
        className: a.q3
      }) : t), (0, r.jsxs)("div", {
        className: a._M,
        children: [(0, r.jsx)("div", {
          className: i()(a.U_, o),
          children: n
        }), null != l && (0, r.jsx)("div", {
          className: a.mi,
          children: l
        })]
      })]
    }), (0, r.jsx)("div", {
      className: a.uu,
      children: u
    })]
  })
}