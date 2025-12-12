/** Chunk was on web.js **/
/** chunk id: 320249, original params: e,t,n (module,exports,re quire) **/
var Chunk290677 = require("./290677.js"),
  Chunk158698 = require("./158698.js"),
  a = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
  o = /^\w*$/;
module.exports = function(e, t) {
  if (r(e)) returnfalse;
  var n = typeof e;
  return !!("number" == n || "symbol" == n || "boolean" == n || null == e || i(e)) || o.test(e) || !a.test(e) || null != t && e in Object(t)
}