/** Chunk was on web.js **/
/** chunk id: 709670, original params: e,t,n (module,exports,re quire) **/
var Chunk467957 = require("./467957.js"),
  Chunk168110 = require("./168110.js"),
  a = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
  s = /^\w*$/;
module.exports = function(e, t) {
  if (r(e)) returnfalse;
  var n = typeof e;
  return !!("number" == n || "symbol" == n || "boolean" == n || null == e || i(e)) || s.test(e) || !a.test(e) || null != t && e in Object(t)
}