/** Chunk was on web.js **/
/** chunk id: 552229, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk549412 = require("./549412.js"),
  i = 15,
  a = 852,
  s = 592,
  o = 0,
  l = 1,
  c = 2,
  u = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0],
  d = [16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78],
  f = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0],
  p = [16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64];
module.exports = function(e, t, n, _, h, m, g, E) {
  var y, b, O, v, A, I, S, T, C, N = E.bits,
    R = 0,
    w = 0,
    P = 0,
    D = 0,
    x = 0,
    L = 0,
    j = 0,
    M = 0,
    k = 0,
    U = 0,
    G = null,
    V = 0,
    F = new r.Buf16(i + 1),
    B = new r.Buf16(i + 1),
    H = null,
    Y = 0;
  for (R = 0; R <= i; R++) F[R] = 0;
  for (w = 0; w < _; w++) F[t[n + w]]++;
  for (x = N, D = i; D >= 1 && 0 === F[D]; D--);
  if (x > D && (x = D), 0 === D) return h[m++] = 0x1400000, h[m++] = 0x1400000, E.bits = 1, 0;
  for (P = 1; P < D && 0 === F[P]; P++);
  for (x < P && (x = P), M = 1, R = 1; R <= i; R++)
    if (M <<= 1, (M -= F[R]) < 0) return false;
  if (M > 0 && (e === o || 1 !== D)) return false;
  for (R = 1, B[1] = 0; R < i; R++) B[R + 1] = B[R] + F[R];
  for (w = 0; w < _; w++) 0 !== t[n + w] && (g[B[t[n + w]]++] = w);
  if (e === o ? (G = H = g, I = 19) : e === l ? (G = u, V -= 257, H = d, Y -= 257, I = 256) : (G = f, H = p, I = false), U = 0, w = 0, R = P, A = m, L = x, j = 0, O = false, v = (k = 1 << x) - 1, e === l && k > a || e === c && k > s) return 1;
  for (;;) {
    S = R - j, g[w] < I ? (T = 0, C = g[w]) : g[w] > I ? (T = H[Y + g[w]], C = G[V + g[w]]) : (T = 96, C = 0), y = 1 << R - j, P = b = 1 << L;
    do h[A + (U >> j) + (b -= y)] = S << 24 | T << 16 | C; while (0 !== b);
    for (y = 1 << R - 1; U & y;) y >>= 1;
    if (0 !== y ? (U &= y - 1, U += y) : U = 0, w++, 0 == --F[R]) {
      if (R === D) break;
      R = t[n + g[w]]
    }
    if (R > x && (U & v) !== O) {
      for (0 === j && (j = x), A += P, M = 1 << (L = R - j); L + j < D && !((M -= F[L + j]) <= 0);) L++, M <<= 1;
      if (k += 1 << L, e === l && k > a || e === c && k > s) return 1;
      h[O = U & v] = x << 24 | L << 16 | A - m
    }
  }
  return 0 !== U && (h[A + U] = R - j << 24 | 4194304), E.bits = x, 0
}