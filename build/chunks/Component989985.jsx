/** Chunk was on 97887 **/
/** chunk id: 989985, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  _: () => a
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk36353 = require("./36353.js");

function a(e) {
  let {
    bannerIcon: t,
    bannerHeader: n,
    bannerSubtext: l,
    textStyles: a,
    headerStyles: o,
    containerStyles: c,
    children: u
  } = e;
  return (0, r.jsxs)("div", {
    className: i()(s.Ew, c),
    children: [(0, r.jsxs)("div", {
      className: i()(s.lt, a),
      children: [null != t && ("string" == typeof t ? (0, r.jsx)("img", {
        src: t,
        alt: "",
        className: s.q3
      }) : t), (0, r.jsxs)("div", {
        className: s._M,
        children: [(0, r.jsx)("div", {
          className: i()(s.U_, o),
          children: n
        }), null != l && (0, r.jsx)("div", {
          className: s.mi,
          children: l
        })]
      })]
    }), (0, r.jsx)("div", {
      className: s.uu,
      children: u
    })]
  })
}