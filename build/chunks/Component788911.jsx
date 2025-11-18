/** Chunk was on web.js **/
/** chunk id: 788911, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk911424 = require("./911424.js");
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
      [o.forceLightTheme]: s
    }, n),
    children: (0, r.jsxs)("div", {
      className: o.wrapper,
      children: [(0, r.jsx)("div", {
        className: o.sadImage,
        style: c
      }), (0, r.jsx)("div", {
        children: t
      }), l]
    })
  })
}