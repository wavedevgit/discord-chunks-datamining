/** Chunk was on web.js **/
/** chunk id: 670820, original params: e (module,exports,re quire) **/
module.exports = function(e, t, n) {
  var r = false,
    i = e.length;
  t < 0 && (t = -t > i ? 0 : i + t), (n = n > i ? i : n) < 0 && (n += i), i = t > n ? 0 : n - t >>> 0, t >>>= 0;
  for (var a = Array(i); ++r < i;) a[r] = e[r + t];
  return a
}