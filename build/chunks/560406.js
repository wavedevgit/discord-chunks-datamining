/** Chunk was on web.js **/
/** chunk id: 560406, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk46015 = require("./46015.js"),
  i = 0x7fffffff,
  a = 36,
  o = 1,
  s = 26,
  l = 38,
  c = 700,
  u = 72,
  d = 128,
  f = "-",
  p = /[^\0-\u007E]/,
  _ = /[.\u3002\uFF0E\uFF61]/g,
  h = "Overflow: input needs wider integers to process",
  m = 35,
  g = RangeError,
  E = Chunk46015(_.exec),
  b = Math.floor,
  y = String.fromCharCode,
  O = Chunk46015("".charCodeAt),
  v = Chunk46015([].join),
  S = Chunk46015([].push),
  I = Chunk46015("".replace),
  T = Chunk46015("".split),
  C = Chunk46015("".toLowerCase),
  A = function(e) {
    for (var t = [], n = 0, r = e.length; n < r;) {
      var i = O(e, n++);
      if (i >= 55296 && i <= 56319 && n < r) {
        var a = O(e, n++);
        (64512 & a) == 56320 ? S(t, ((1023 & i) << 10) + (1023 & a) + 65536) : (S(t, i), n--)
      } else S(t, i)
    }
    return t
  },
  N = function(e) {
    return e + 22 + 75 * (e < 26)
  },
  P = function(e, t, n) {
    var r = 0;
    for (e = n ? b(e / c) : e >> 1, e += b(e / t); e > m * s >> 1;) e = b(e / m), r += a;
    return b(r + (m + 1) * e / (e + l))
  },
  w = function(e) {
    var t, n, r = [],
      l = (e = A(e)).length,
      c = d,
      p = 0,
      _ = u;
    for (t = 0; t < e.length; t++)(n = e[t]) < 128 && S(r, y(n));
    var m = r.length,
      E = m;
    for (m && S(r, f); E < l;) {
      var O = i;
      for (t = 0; t < e.length; t++)(n = e[t]) >= c && n < O && (O = n);
      var I = E + 1;
      if (O - c > b((i - p) / I)) throw new g(h);
      for (p += (O - c) * I, c = O, t = 0; t < e.length; t++) {
        if ((n = e[t]) < c && ++p > i) throw new g(h);
        if (n === c) {
          for (var T = p, C = a;;) {
            var w = C <= _ ? o : C >= _ + s ? s : C - _;
            if (T < w) break;
            var R = T - w,
              D = a - w;
            S(r, y(N(w + R % D))), T = b(R / D), C += a
          }
          S(r, y(N(T))), _ = P(p, I, E === m), p = 0, E++
        }
      }
      p++, c++
    }
    return v(r, "")
  };
module.exports = function(e) {
  var t, n, r = [],
    i = T(I(C(e), _, "."), ".");
  for (t = 0; t < i.length; t++) S(r, E(p, n = i[t]) ? "xn--" + w(n) : n);
  return v(r, ".")
}