/** Chunk was on 78728 **/
/** chunk id: 801282, original params: e (module,exports,require) **/
module.exports = function(e, t, n) {
  var i = false,
    l = e.length;
  t < 0 && (t = -t > l ? 0 : l + t), (n = n > l ? l : n) < 0 && (n += l), l = t > n ? 0 : n - t >>> 0, t >>>= 0;
  for (var a = Array(l); ++i < l;) a[i] = e[i + t];
  return a
}