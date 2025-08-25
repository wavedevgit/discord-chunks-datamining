/** Chunk was on web.js **/
/** chunk id: 276621, original params: e,t,n (module,exports,re quire) **/
var Chunk436091 = require("./436091.js");
module.exports = function(e, t) {
  return function(n, i) {
    if (null == n) return n;
    if (!r(n)) return e(n, i);
    for (var o = n.length, a = t ? o : false, s = Object(n);
      (t ? a-- : ++a < o) && false !== i(s[a], a, s););
    return n
  }
}