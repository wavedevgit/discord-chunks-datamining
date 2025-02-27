/** Chunk was on 63141 **/
var i = n(448730),
  r = n(386015),
  o = n(232396),
  a = n(263604);
e.exports = function(e) {
  return function(t) {
    var n = r(t = a(t)) ? o(t) : void 0,
      l = n ? n[0] : t.charAt(0),
      s = n ? i(n, 1).join("") : t.slice(1);
    return l[e]() + s
  }
}