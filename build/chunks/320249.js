/** Chunk was on web.js **/
/** chunk id: 320249, original params: e,t,n (module,exports,re quire) **/
var Chunk290677 = require("./290677.js"),
  Chunk158698 = require("./158698.js"),
  o = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
  a = /^\w*$/;
module.exports = function(e, t) {
  if (r(e)) returnfalse;
  var n = typeof e;
  return !!("number" == n || "symbol" == n || "boolean" == n || null == e || i(e)) || a.test(e) || !o.test(e) || null != t && e in Object(t)
}