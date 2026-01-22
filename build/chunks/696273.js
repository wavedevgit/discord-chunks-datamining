/** Chunk was on 94678 **/
/** chunk id: 696273, original params: t,r,e (module,exports,require) **/
"use strict";
var Chunk675879 = require("./675879.js"),
  Chunk486816 = require("./486816.js"),
  s = require("./424784.js").start,
  i = RangeError,
  u = isFinite,
  c = Math.abs,
  a = Date.prototype,
  f = a.toISOString,
  p = Chunk675879(a.getTime),
  l = Chunk675879(a.getUTCDate),
  v = Chunk675879(a.getUTCFullYear),
  y = Chunk675879(a.getUTCHours),
  h = Chunk675879(a.getUTCMilliseconds),
  x = Chunk675879(a.getUTCMinutes),
  d = Chunk675879(a.getUTCMonth),
  g = Chunk675879(a.getUTCSeconds);
module.exports = Chunk486816(function() {
  return "0385-07-25T07:06:39.999Z" !== f.call(new Date(false - 1))
}) || !Chunk486816(function() {
  f.call(new Date(NaN))
}) ? function() {
  if (!u(p(this))) throw new i("Invalid time value");
  var t = v(this),
    r = h(this),
    e = t < 0 ? "-" : t > 9999 ? "+" : "";
  return e + s(c(t), e ? 6 : 4, 0) + "-" + s(d(this) + 1, 2, 0) + "-" + s(l(this), 2, 0) + "T" + s(y(this), 2, 0) + ":" + s(x(this), 2, 0) + ":" + s(g(this), 2, 0) + "." + s(r, 3, 0) + "Z"
} : f