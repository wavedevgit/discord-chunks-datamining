/** Chunk was on web.js **/
/** chunk id: 81833, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk106769 = require("./106769.js"),
  Chunk523317 = require("./523317.js"),
  a = Math.abs,
  o = 2220446049250313e-31;
module.exports = function(e, t, n, s) {
  var l = +e,
    c = a(l),
    u = r(l);
  if (c < s) return u * i(c / s / t) * s * t;
  var d = (1 + t / o) * c,
    f = d - (d - c);
  return f > n || f != f ? 1 / 0 * u : u * f
}