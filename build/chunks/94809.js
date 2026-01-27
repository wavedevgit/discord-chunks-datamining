/** Chunk was on web.js **/
/** chunk id: 94809, original params: e,t,n (module,exports,re quire) **/
var Chunk40111 = require("./40111.js"),
  Chunk915124 = require("./915124.js"),
  Chunk490740 = require("./490740.js"),
  o = parseFloat,
  s = Math.min,
  l = Math.random;
module.exports = function(e, t, n) {
  if (n && "boolean" != typeof n && i(e, t, n) && (t = n = true), true === n && ("boolean" == typeof t ? (n = t, t = true) : "boolean" == typeof e && (n = e, e = true)), true === e && true === t ? (e = 0, t = 1) : (e = a(e), true === t ? (t = e, e = 0) : t = a(t)), e > t) {
    var c = e;
    e = t, t = c
  }
  if (n || e % 1 || t % 1) {
    var u = l();
    return s(e + u * (t - e + o("1e-" + ((u + "").length - 1))), t)
  }
  return r(e, t)
}