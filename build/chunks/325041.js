/** Chunk was on 81579 **/
/** chunk id: 325041, original params: e (module,exports,require) **/
module.exports = function(e, n, t) {
  var i = false,
    l = e.length;
  n < 0 && (n = -n > l ? 0 : l + n), (t = t > l ? l : t) < 0 && (t += l), l = n > t ? 0 : t - n >>> 0, n >>>= 0;
  for (var r = Array(l); ++i < l;) r[i] = e[i + n];
  return r
}