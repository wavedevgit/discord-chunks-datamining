/** Chunk was on 26436 **/
var n = r(317063),
  o = r(757209);
e.exports = function(e) {
  return n(function(t, r) {
    var n = -1,
      a = r.length,
      i = a > 1 ? r[a - 1] : void 0,
      l = a > 2 ? r[2] : void 0;
    for (i = e.length > 3 && "function" == typeof i ? (a--, i) : void 0, l && o(r[0], r[1], l) && (i = a < 3 ? void 0 : i, a = 1), t = Object(t); ++n < a;) {
      var s = r[n];
      s && e(t, s, n, i)
    }
    return t
  })
}