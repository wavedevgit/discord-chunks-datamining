/** Chunk was on web.js **/
/** chunk id: 537652, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => s
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk106666 = require("./106666.js");
let s = e => {
  let {
    message: t,
    className: n,
    noResultsImageURL: i,
    forceLightTheme: s,
    suggestions: l
  } = e, c = null != i ? {
    backgroundImage: "url(".concat(i, ")")
  } : {};
  return (0, r.jsx)("div", {
    className: a()({
      [o.VC]: s
    }, n),
    children: (0, r.jsxs)("div", {
      className: o.iE,
      children: [(0, r.jsx)("div", {
        className: o.Gg,
        style: c
      }), (0, r.jsx)("div", {
        children: t
      }), l]
    })
  })
}