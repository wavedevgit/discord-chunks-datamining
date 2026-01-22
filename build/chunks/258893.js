/** Chunk was on 94678 **/
/** chunk id: 258893, original params: t,r,e (module,exports,require) **/
"use strict";
var Chunk610475 = require("./610475.js"),
  Chunk208909 = require("./208909.js"),
  Chunk523005 = require("./523005.js"),
  Chunk433979 = require("./433979.js"),
  Chunk500968 = require("./500968.js"),
  Chunk587822 = require("./587822.js"),
  Chunk349674 = require("./349674.js"),
  f = Chunk208909.has,
  p = Chunk208909.remove;
module.exports = function(t) {
  var r = n(this),
    e = u(t),
    o = s(r);
  return i(r) <= e.size ? c(r, function(t) {
    e.includes(t) && p(o, t)
  }) : a(e.getIterator(), function(t) {
    f(r, t) && p(o, t)
  }), o
}