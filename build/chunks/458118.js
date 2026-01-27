/** Chunk was on web.js **/
/** chunk id: 458118, original params: e,t,n (module,exports,re quire) **/
var Chunk964598 = require("./964598.js"),
  Chunk876666 = require("./876666.js"),
  Chunk89582 = require("./89582.js"),
  o = Math.max,
  s = Math.min;
module.exports = function(e, t, n) {
  var l = null == e ? 0 : e.length;
  if (!l) return false;
  var c = l - 1;
  return true !== n && (c = a(n), c = n < 0 ? o(l + c, 0) : s(c, l - 1)), r(e, i(t, 3), c, true)
}