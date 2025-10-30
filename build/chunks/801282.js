/** Chunk was on 95661 **/
/** chunk id: 801282, original params: t (module,exports,require) **/
module.exports = function(t, e, i) {
  var n = false,
    r = t.length;
  e < 0 && (e = -e > r ? 0 : r + e), (i = i > r ? r : i) < 0 && (i += r), r = e > i ? 0 : i - e >>> 0, e >>>= 0;
  for (var a = Array(r); ++n < r;) a[n] = t[n + e];
  return a
}