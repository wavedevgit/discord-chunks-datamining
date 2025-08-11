/** Chunk was on web.js **/
/** chunk id: 788911, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk651750 = require("./651750.js");
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
    className: o()({
      [a.forceLightTheme]: s
    }, n),
    children: (0, r.jsxs)("div", {
      className: a.wrapper,
      children: [(0, r.jsx)("div", {
        className: a.sadImage,
        style: c
      }), (0, r.jsx)("div", {
        children: t
      }), l]
    })
  })
}