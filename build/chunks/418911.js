/** Chunk was on 94678 **/
/** chunk id: 418911, original params: t,r,e (module,exports,require) **/
"use strict";
var Chunk610475 = require("./610475.js"),
  Chunk208909 = require("./208909.js"),
  Chunk433979 = require("./433979.js"),
  Chunk500968 = require("./500968.js"),
  Chunk587822 = require("./587822.js"),
  Chunk349674 = require("./349674.js"),
  a = Chunk208909.Set,
  f = Chunk208909.add,
  p = Chunk208909.has;
module.exports = function(t) {
  var r = n(this),
    e = i(t),
    o = new a;
  return s(r) > e.size ? c(e.getIterator(), function(t) {
    p(r, t) && f(o, t)
  }) : u(r, function(t) {
    e.includes(t) && f(o, t)
  }), o
}