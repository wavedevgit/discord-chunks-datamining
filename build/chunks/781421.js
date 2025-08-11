/** Chunk was on web.js **/
/** chunk id: 781421, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk745872 = require("./745872.js"),
  Chunk834889 = require("./834889.js"),
  o = require("./134533.js")(),
  Chunk566817 = require("./566817.js"),
  Chunk815329 = require("./815329.js"),
  l = Chunk745872("%Math.floor%");
module.exports = function(e, t) {
  if ("function" != typeof e) throw new s("`fn` is not a function");
  if ("number" != typeof t || t < 0 || t > 0xffffffff || l(t) !== t) throw new s("`length` must be a positive 32-bit integer");
  var n = arguments.length > 2 && !!arguments[2],
    r = true,
    c = true;
  if ("length" in e && a) {
    var u = a(e, "length");
    u && !u.configurable && (r = false), u && !u.writable && (c = false)
  }
  return (r || c || !n) && (o ? i(e, "length", t, true, true) : i(e, "length", t)), e
}