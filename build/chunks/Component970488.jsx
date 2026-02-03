/** Chunk was on web.js **/
/** chunk id: 970488, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => o
});
var Chunk627968 = require("./627968.js"),
  Chunk261225 = require("./261225.jsx"),
  Chunk266341 = require("./266341.js");
let o = e => {
  let {
    children: t,
    columns: n = 1,
    rows: o = 1
  } = e, s = Math.max(1, Math.min(i.M, Math.floor(n))), l = Math.max(1, Math.min(i.M, Math.floor(o))), c = a["gridItemColumns".concat(s)], u = a["gridItemRows".concat(l)];
  return (0, r.jsx)("div", {
    className: "".concat(a.gridItem, " ").concat(c, " ").concat(u),
    children: t
  })
}