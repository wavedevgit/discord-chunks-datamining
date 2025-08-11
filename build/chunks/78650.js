/** Chunk was on web.js **/
/** chunk id: 78650, original params: e,t,n (module,exports,re quire) **/
var Chunk314545 = require("./314545.js"),
  Chunk757209 = require("./757209.js"),
  Chunk373640 = require("./373640.js"),
  a = parseFloat,
  s = Math.min,
  l = Math.random;
module.exports = function(e, t, n) {
  if (n && "boolean" != typeof n && i(e, t, n) && (t = n = true), true === n && ("boolean" == typeof t ? (n = t, t = true) : "boolean" == typeof e && (n = e, e = true)), true === e && true === t ? (e = 0, t = 1) : (e = o(e), true === t ? (t = e, e = 0) : t = o(t)), e > t) {
    var c = e;
    e = t, t = c
  }
  if (n || e % 1 || t % 1) {
    var u = l();
    return s(e + u * (t - e + a("1e-" + ((u + "").length - 1))), t)
  }
  return r(e, t)
}