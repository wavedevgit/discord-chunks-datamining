/** Chunk was on 50448 **/
/** chunk id: 326234, original params: t,r,n (module,exports,require) **/
"use strict";
var Chunk185156 = require("./185156.js"),
  Chunk506887 = require("./506887.js"),
  Chunk268571 = require("./268571.js"),
  Chunk271221 = require("./271221.js"),
  Chunk825677 = require("./825677.js"),
  Chunk871959 = require("./871959.js"),
  f = Chunk506887.Set,
  a = Chunk506887.add,
  p = Chunk506887.has;
module.exports = function(t) {
  var r = e(this),
    n = u(t),
    o = new f;
  return i(r) > n.size ? c(n.getIterator(), function(t) {
    p(r, t) && a(o, t)
  }) : s(r, function(t) {
    n.includes(t) && a(o, t)
  }), o
}