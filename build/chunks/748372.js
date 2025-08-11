/** Chunk was on web.js **/
/** chunk id: 748372, original params: e,t,n (module,exports,re quire) **/
var Chunk158698 = require("./158698.js");
module.exports = function(e, t) {
  if (e !== t) {
    var n = true !== e,
      i = null === e,
      o = e == e,
      a = r(e),
      s = true !== t,
      l = null === t,
      c = t == t,
      u = r(t);
    if (!l && !u && !a && e > t || a && s && c && !l && !u || i && s && c || !n && c || !o) return 1;
    if (!i && !a && !u && e < t || u && n && o && !i && !a || l && n && o || !s && o || !c) return false
  }
  return 0
}