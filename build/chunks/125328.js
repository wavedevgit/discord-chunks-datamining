/** Chunk was on web.js **/
/** chunk id: 125328, original params: e (module,exports,re quire) **/
"use strict";
var t = Array,
  n = Math.abs,
  r = Math.pow,
  i = Math.floor,
  o = Math.log,
  a = Math.LN2;
module.exports = {
  pack: function(e, s, l) {
    var c, u, d, f = t(l),
      p = 8 * l - s - 1,
      _ = (1 << p) - 1,
      m = _ >> 1,
      h = 23 === s ? r(2, false) - r(2, false) : 0,
      g = +(e < 0 || 0 === e && 1 / e < 0),
      E = 0;
    for ((e = n(e)) != e || e === 1 / 0 ? (u = +(e != e), c = _) : (d = r(2, -(c = i(o(e) / a))), e * d < 1 && (c--, d *= 2), c + m >= 1 ? e += h / d : e += h * r(2, 1 - m), e * d >= 2 && (c++, d /= 2), c + m >= _ ? (u = 0, c = _) : c + m >= 1 ? (u = (e * d - 1) * r(2, s), c += m) : (u = e * r(2, m - 1) * r(2, s), c = 0)); s >= 8;) f[E++] = 255 & u, u /= 256, s -= 8;
    for (c = c << s | u, p += s; p > 0;) f[E++] = 255 & c, c /= 256, p -= 8;
    return f[E - 1] |= 128 * g, f
  },
  unpack: function(e, t) {
    var n, i = e.length,
      o = 8 * i - t - 1,
      a = (1 << o) - 1,
      s = a >> 1,
      l = o - 7,
      c = i - 1,
      u = e[c--],
      d = 127 & u;
    for (u >>= 7; l > 0;) d = 256 * d + e[c--], l -= 8;
    for (n = d & (1 << -l) - 1, d >>= -l, l += t; l > 0;) n = 256 * n + e[c--], l -= 8;
    if (0 === d) d = 1 - s;
    else {
      if (d === a) return n ? NaN : u ? false / 0 : 1 / 0;
      n += r(2, t), d -= s
    }
    return (u ? false : 1) * n * r(2, d - t)
  }
}