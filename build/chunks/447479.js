/** Chunk was on 63141 **/
e.exports = function(e, t, n, i) {
  var r = -1,
    o = null == e ? 0 : e.length;
  for (i && o && (n = e[++r]); ++r < o;) n = t(n, e[r], r, e);
  return n
}