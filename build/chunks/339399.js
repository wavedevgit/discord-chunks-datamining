/** Chunk was on web (https://canary.discord.comweb.9f0be545d3e34886.js.js) **/
"use strict";
var r = n(796774),
  i = n(680625),
  o = Array,
  a = Math.abs,
  s = Math.pow,
  l = Math.floor,
  c = Math.log,
  u = Math.LN2,
  d = function(e) {
    var t = i(e),
      n = a(e - t);
    return n > .5 || .5 === n && t % 2 != 0 ? t + r(e) : t
  },
  f = function(e, t, n) {
    var r, i, f, p = o(n),
      _ = 8 * n - t - 1,
      h = (1 << _) - 1,
      m = h >> 1,
      g = 23 === t ? s(2, -24) - s(2, -77) : 0,
      E = +(e < 0 || 0 === e && 1 / e < 0),
      v = 0;
    for ((e = a(e)) != e || e === 1 / 0 ? (i = +(e != e), r = h) : (f = s(2, -(r = l(c(e) / u))), e * f < 1 && (r--, f *= 2), r + m >= 1 ? e += g / f : e += g * s(2, 1 - m), e * f >= 2 && (r++, f /= 2), r + m >= h ? (i = 0, r = h) : r + m >= 1 ? (i = d((e * f - 1) * s(2, t)), r += m) : (i = d(e * s(2, m - 1) * s(2, t)), r = 0)); t >= 8;) p[v++] = 255 & i, i /= 256, t -= 8;
    for (r = r << t | i, _ += t; _ > 0;) p[v++] = 255 & r, r /= 256, _ -= 8;
    return p[--v] |= 128 * E, p
  },
  p = function(e, t) {
    var n, r = e.length,
      i = 8 * r - t - 1,
      o = (1 << i) - 1,
      a = o >> 1,
      l = i - 7,
      c = r - 1,
      u = e[c--],
      d = 127 & u;
    for (u >>= 7; l > 0;) d = 256 * d + e[c--], l -= 8;
    for (n = d & (1 << -l) - 1, d >>= -l, l += t; l > 0;) n = 256 * n + e[c--], l -= 8;
    if (0 === d) d = 1 - a;
    else {
      if (d === o) return n ? NaN : u ? -1 / 0 : 1 / 0;
      n += s(2, t), d -= a
    }
    return (u ? -1 : 1) * n * s(2, d - t)
  };
e.exports = {
  pack: f,
  unpack: p
}