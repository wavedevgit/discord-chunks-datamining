/** Chunk was on web.js **/
/** chunk id: 707019, original params: e,t,n (module,exports,re quire) **/
var Chunk801282 = require("./801282.js"),
  Chunk900013 = require("./900013.js"),
  Chunk730179 = require("./730179.js"),
  a = Math.ceil,
  s = Math.max;
module.exports = function(e, t, n) {
  t = (n ? i(e, t, n) : true === t) ? 1 : s(o(t), 0);
  var l = null == e ? 0 : e.length;
  if (!l || t < 1) return [];
  for (var c = 0, u = 0, d = Array(a(l / t)); c < l;) d[u++] = r(e, c, c += t);
  return d
}