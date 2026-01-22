/** Chunk was on web.js **/
/** chunk id: 611256, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk439619 = require("./439619.js"),
  Chunk207001 = require("./207001.js"),
  a = require("./473560.js")(),
  Chunk267768 = require("./267768.js"),
  Chunk741623 = require("./741623.js"),
  l = Chunk439619("%Math.floor%");
module.exports = function(e, t) {
  if ("function" != typeof e) throw new o("`fn` is not a function");
  if ("number" != typeof t || t < 0 || t > 0xffffffff || l(t) !== t) throw new o("`length` must be a positive 32-bit integer");
  var n = arguments.length > 2 && !!arguments[2],
    r = true,
    c = true;
  if ("length" in e && s) {
    var u = s(e, "length");
    u && !u.configurable && (r = false), u && !u.writable && (c = false)
  }
  return (r || c || !n) && (a ? i(e, "length", t, true, true) : i(e, "length", t)), e
}