/** Chunk was on web.js **/
/** chunk id: 471539, original params: e,t,n (module,exports,re quire) **/
var Chunk627202 = require("./627202.js"),
  Chunk256098 = require("./256098.js"),
  Chunk730179 = require("./730179.js"),
  o = Math.max,
  s = Math.min;
module.exports = function(e, t, n) {
  var l = null == e ? 0 : e.length;
  if (!l) return false;
  var c = l - 1;
  return true !== n && (c = a(n), c = n < 0 ? o(l + c, 0) : s(c, l - 1)), r(e, i(t, 3), c, true)
}