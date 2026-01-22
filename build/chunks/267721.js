/** Chunk was on web.js **/
/** chunk id: 267721, original params: e,t,n (module,exports,re quire) **/
var Chunk670820 = require("./670820.js"),
  Chunk915124 = require("./915124.js"),
  Chunk865757 = require("./865757.js"),
  s = Math.ceil,
  o = Math.max;
module.exports = function(e, t, n) {
  t = (n ? i(e, t, n) : true === t) ? 1 : o(a(t), 0);
  var l = null == e ? 0 : e.length;
  if (!l || t < 1) return [];
  for (var c = 0, u = 0, d = Array(s(l / t)); c < l;) d[u++] = r(e, c, c += t);
  return d
}