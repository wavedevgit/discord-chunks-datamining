/** Chunk was on web.js **/
/** chunk id: 889634, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => s
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk784016 = require("./784016.js");
let s = e => {
  let {
    columns: t = 3,
    children: n
  } = e, i = Math.max(1, Math.min(6, Math.floor(t)));
  return (0, r.jsx)("div", {
    className: a()(o.grid, o["columns".concat(i)]),
    children: n
  })
}