/** Chunk was on web.js **/
"use strict";
var r = n(690244),
  i = n(834889),
  o = n(134533)(),
  a = n(49662),
  s = n(815329),
  l = r("%Math.floor%");
e.exports = function(e, t) {
  if ("function" != typeof e) throw new s("`fn` is not a function");
  if ("number" != typeof t || t < 0 || t > 0xffffffff || l(t) !== t) throw new s("`length` must be a positive 32-bit integer");
  var n = arguments.length > 2 && !!arguments[2],
    r = !0,
    c = !0;
  if ("length" in e && a) {
    var u = a(e, "length");
    u && !u.configurable && (r = !1), u && !u.writable && (c = !1)
  }
  return (r || c || !n) && (o ? i(e, "length", t, !0, !0) : i(e, "length", t)), e
}