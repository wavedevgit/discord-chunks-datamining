/** Chunk was on web.js **/
function t(e, t, n) {
  var r = -1,
    i = e.length;
  t < 0 && (t = -t > i ? 0 : i + t), (n = n > i ? i : n) < 0 && (n += i), i = t > n ? 0 : n - t >>> 0, t >>>= 0;
  for (var o = Array(i); ++r < i;) o[r] = e[r + t];
  return o
}
e.exports = t