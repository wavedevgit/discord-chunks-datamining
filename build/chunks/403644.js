/** Chunk was on web.js **/
/** chunk id: 403644, original params: e,t,n (module,exports,re quire) **/
var Chunk812639 = require("./812639.js"),
  Chunk757209 = require("./757209.js"),
  Chunk105890 = require("./105890.js"),
  a = Math.ceil,
  s = Math.max;
module.exports = function(e, t, n) {
  t = (n ? i(e, t, n) : true === t) ? 1 : s(o(t), 0);
  var l = null == e ? 0 : e.length;
  if (!l || t < 1) return [];
  for (var c = 0, u = 0, d = Array(a(l / t)); c < l;) d[u++] = r(e, c, c += t);
  return d
}