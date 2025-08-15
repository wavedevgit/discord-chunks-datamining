/** Chunk was on web.js **/
/** chunk id: 844781, original params: e,t,n (module,exports,re quire) **/
var Chunk402428 = require("./402428.js"),
  Chunk42848 = require("./42848.js"),
  a = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
  o = /^\w*$/;
module.exports = function(e, t) {
  if (r(e)) returnfalse;
  var n = typeof e;
  return !!("number" == n || "symbol" == n || "boolean" == n || null == e || i(e)) || o.test(e) || !a.test(e) || null != t && e in Object(t)
}