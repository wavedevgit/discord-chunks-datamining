/** Chunk was on 50448 **/
/** chunk id: 229303, original params: t,r,n (module,exports,require) **/
"use strict";
var Chunk185156 = require("./185156.js"),
  Chunk506887 = require("./506887.js"),
  Chunk550172 = require("./550172.js"),
  Chunk268571 = require("./268571.js"),
  Chunk271221 = require("./271221.js"),
  Chunk825677 = require("./825677.js"),
  Chunk871959 = require("./871959.js"),
  a = Chunk506887.has,
  p = Chunk506887.remove;
module.exports = function(t) {
  var r = e(this),
    n = s(t),
    o = i(r);
  return u(r) <= n.size ? c(r, function(t) {
    n.includes(t) && p(o, t)
  }) : f(n.getIterator(), function(t) {
    a(r, t) && p(o, t)
  }), o
}