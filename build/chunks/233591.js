/** Chunk was on web.js **/
"use strict";
var r = n(581031),
  i = 0x7fffffff,
  o = 36,
  a = 1,
  s = 26,
  l = 38,
  c = 700,
  u = 72,
  d = 128,
  f = "-",
  _ = /[^\0-\u007E]/,
  p = /[.\u3002\uFF0E\uFF61]/g,
  h = "Overflow: input needs wider integers to process",
  m = 35,
  g = RangeError,
  E = r(p.exec),
  v = Math.floor,
  b = String.fromCharCode,
  y = r("".charCodeAt),
  O = r([].join),
  S = r([].push),
  I = r("".replace),
  T = r("".split),
  N = r("".toLowerCase),
  A = function(e) {
    for (var t = [], n = 0, r = e.length; n < r;) {
      var i = y(e, n++);
      if (i >= 55296 && i <= 56319 && n < r) {
        var o = y(e, n++);
        (64512 & o) == 56320 ? S(t, ((1023 & i) << 10) + (1023 & o) + 65536) : (S(t, i), n--)
      } else S(t, i)
    }
    return t
  },
  C = function(e) {
    return e + 22 + 75 * (e < 26)
  },
  R = function(e, t, n) {
    var r = 0;
    for (e = n ? v(e / c) : e >> 1, e += v(e / t); e > m * s >> 1;) e = v(e / m), r += o;
    return v(r + (m + 1) * e / (e + l))
  },
  P = function(e) {
    var t, n, r = [],
      l = (e = A(e)).length,
      c = d,
      _ = 0,
      p = u;
    for (t = 0; t < e.length; t++)(n = e[t]) < 128 && S(r, b(n));
    var m = r.length,
      E = m;
    for (m && S(r, f); E < l;) {
      var y = i;
      for (t = 0; t < e.length; t++)(n = e[t]) >= c && n < y && (y = n);
      var I = E + 1;
      if (y - c > v((i - _) / I)) throw g(h);
      for (_ += (y - c) * I, c = y, t = 0; t < e.length; t++) {
        if ((n = e[t]) < c && ++_ > i) throw g(h);
        if (n === c) {
          for (var T = _, N = o;;) {
            var P = N <= p ? a : N >= p + s ? s : N - p;
            if (T < P) break;
            var w = T - P,
              D = o - P;
            S(r, b(C(P + w % D))), T = v(w / D), N += o
          }
          S(r, b(C(T))), p = R(_, I, E === m), _ = 0, E++
        }
      }
      _++, c++
    }
    return O(r, "")
  };
e.exports = function(e) {
  var t, n, r = [],
    i = T(I(N(e), p, "."), ".");
  for (t = 0; t < i.length; t++) S(r, E(_, n = i[t]) ? "xn--" + P(n) : n);
  return O(r, ".")
}