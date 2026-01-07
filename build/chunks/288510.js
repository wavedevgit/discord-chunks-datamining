/** Chunk was on 50448 **/
/** chunk id: 288510, original params: t,r,n (module,exports,require) **/
"use strict";
var Chunk764908 = require("./764908.js"),
  Chunk779688 = require("./779688.js"),
  i = require("./565413.js").start,
  u = RangeError,
  s = isFinite,
  c = Math.abs,
  f = Date.prototype,
  a = f.toISOString,
  p = Chunk764908(f.getTime),
  l = Chunk764908(f.getUTCDate),
  v = Chunk764908(f.getUTCFullYear),
  y = Chunk764908(f.getUTCHours),
  h = Chunk764908(f.getUTCMilliseconds),
  x = Chunk764908(f.getUTCMinutes),
  d = Chunk764908(f.getUTCMonth),
  g = Chunk764908(f.getUTCSeconds);
module.exports = Chunk779688(function() {
  return "0385-07-25T07:06:39.999Z" !== a.call(new Date(false - 1))
}) || !Chunk779688(function() {
  a.call(new Date(NaN))
}) ? function() {
  if (!s(p(this))) throw new u("Invalid time value");
  var t = v(this),
    r = h(this),
    n = t < 0 ? "-" : t > 9999 ? "+" : "";
  return n + i(c(t), n ? 6 : 4, 0) + "-" + i(d(this) + 1, 2, 0) + "-" + i(l(this), 2, 0) + "T" + i(y(this), 2, 0) + ":" + i(x(this), 2, 0) + ":" + i(g(this), 2, 0) + "." + i(r, 3, 0) + "Z"
} : a