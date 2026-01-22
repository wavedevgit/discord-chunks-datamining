/** Chunk was on web.js **/
/** chunk id: 363477, original params: e,t,n (module,exports,re quire) **/
var Chunk305327 = require("./305327.js");
module.exports = function(e, t) {
  if (e !== t) {
    var n = true !== e,
      i = null === e,
      a = e == e,
      s = r(e),
      o = true !== t,
      l = null === t,
      c = t == t,
      u = r(t);
    if (!l && !u && !s && e > t || s && o && c && !l && !u || i && o && c || !n && c || !a) return 1;
    if (!i && !s && !u && e < t || u && n && a && !i && !s || l && n && a || !o && a || !c) return false
  }
  return 0
}