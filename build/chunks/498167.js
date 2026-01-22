/** Chunk was on 94678 **/
/** chunk id: 498167, original params: t,r,e (module,exports,require) **/
"use strict";
var Chunk610475 = require("./610475.js"),
  Chunk208909 = require("./208909.js"),
  Chunk523005 = require("./523005.js"),
  Chunk500968 = require("./500968.js"),
  Chunk349674 = require("./349674.js"),
  c = Chunk208909.add,
  a = Chunk208909.has,
  f = Chunk208909.remove;
module.exports = function(t) {
  var r = n(this),
    e = i(t).getIterator(),
    o = s(r);
  return u(e, function(t) {
    a(r, t) ? f(o, t) : c(o, t)
  }), o
}