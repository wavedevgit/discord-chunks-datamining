/** Chunk was on 76977 **/
var i = n(448730),
  r = n(386015),
  s = n(232396),
  o = n(263604);
e.exports = function(e) {
  return function(t) {
    var n = r(t = o(t)) ? s(t) : void 0,
      a = n ? n[0] : t.charAt(0),
      l = n ? i(n, 1).join("") : t.slice(1);
    return a[e]() + l
  }
}