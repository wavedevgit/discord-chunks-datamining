/** Chunk was on web.js **/
/** chunk id: 748372, original params: e,t,n (module,exports,re quire) **/
var Chunk158698 = require("./158698.js");
module.exports = function(e, t) {
  if (e !== t) {
    var n = true !== e,
      i = null === e,
      a = e == e,
      o = r(e),
      s = true !== t,
      l = null === t,
      c = t == t,
      u = r(t);
    if (!l && !u && !o && e > t || o && s && c && !l && !u || i && s && c || !n && c || !a) return 1;
    if (!i && !o && !u && e < t || u && n && a && !i && !o || l && n && a || !s && a || !c) return false
  }
  return 0
}