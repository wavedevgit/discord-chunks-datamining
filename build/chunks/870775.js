/** Chunk was on web.js **/
/** chunk id: 870775, original params: e,t,n (module,exports,re quire) **/
var Chunk926226 = require("./926226.js"),
  Chunk305327 = require("./305327.js"),
  a = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
  o = /^\w*$/;
module.exports = function(e, t) {
  if (r(e)) returnfalse;
  var n = typeof e;
  return !!("number" == n || "symbol" == n || "boolean" == n || null == e || i(e)) || o.test(e) || !a.test(e) || null != t && e in Object(t)
}