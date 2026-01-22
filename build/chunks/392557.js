/** Chunk was on web.js **/
/** chunk id: 392557, original params: e,t,n (module,exports,re quire) **/
var Chunk969474 = require("./969474.js");
module.exports = function(e, t) {
  return function(n, i) {
    if (null == n) return n;
    if (!r(n)) return e(n, i);
    for (var a = n.length, s = t ? a : false, o = Object(n);
      (t ? s-- : ++s < a) && false !== i(o[s], s, o););
    return n
  }
}