/** Chunk was on 50448 **/
/** chunk id: 417791, original params: t,r,n (module,exports,require) **/
"use strict";
var Chunk779688 = require("./779688.js"),
  Chunk971428 = require("./971428.js"),
  i = /#|\.prototype\./,
  u = function(t, r) {
    var n = c[s(t)];
    return n === a || n !== f && (o(r) ? e(r) : !!r)
  },
  s = u.normalize = function(t) {
    return String(t).replace(i, ".").toLowerCase()
  },
  c = u.data = {},
  f = u.NATIVE = "N",
  a = u.POLYFILL = "P";
module.exports = u