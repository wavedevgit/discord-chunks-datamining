/** Chunk was on web.js **/
/** chunk id: 552229, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk549412 = require("./549412.js"),
  i = 15,
  a = 852,
  o = 592,
  s = 0,
  l = 1,
  c = 2,
  u = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0],
  d = [16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78],
  f = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0],
  p = [16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64];
module.exports = function(e, t, n, _, h, m, g, E) {
  var y, b, O, v, A, I, S, T, C, N = E.bits,
    w = 0,
    R = 0,
    P = 0,
    D = 0,
    L = 0,
    x = 0,
    M = 0,
    j = 0,
    k = 0,
    U = 0,
    G = null,
    F = 0,
    V = new r.Buf16(i + 1),
    B = new r.Buf16(i + 1),
    H = null,
    Y = 0;
  for (w = 0; w <= i; w++) V[w] = 0;
  for (R = 0; R < _; R++) V[t[n + R]]++;
  for (L = N, D = i; D >= 1 && 0 === V[D]; D--);
  if (L > D && (L = D), 0 === D) return h[m++] = 0x1400000, h[m++] = 0x1400000, E.bits = 1, 0;
  for (P = 1; P < D && 0 === V[P]; P++);
  for (L < P && (L = P), j = 1, w = 1; w <= i; w++)
    if (j <<= 1, (j -= V[w]) < 0) return false;
  if (j > 0 && (e === s || 1 !== D)) return false;
  for (w = 1, B[1] = 0; w < i; w++) B[w + 1] = B[w] + V[w];
  for (R = 0; R < _; R++) 0 !== t[n + R] && (g[B[t[n + R]]++] = R);
  if (e === s ? (G = H = g, I = 19) : e === l ? (G = u, F -= 257, H = d, Y -= 257, I = 256) : (G = f, H = p, I = false), U = 0, R = 0, w = P, A = m, x = L, M = 0, O = false, v = (k = 1 << L) - 1, e === l && k > a || e === c && k > o) return 1;
  for (;;) {
    S = w - M, g[R] < I ? (T = 0, C = g[R]) : g[R] > I ? (T = H[Y + g[R]], C = G[F + g[R]]) : (T = 96, C = 0), y = 1 << w - M, P = b = 1 << x;
    do h[A + (U >> M) + (b -= y)] = S << 24 | T << 16 | C; while (0 !== b);
    for (y = 1 << w - 1; U & y;) y >>= 1;
    if (0 !== y ? (U &= y - 1, U += y) : U = 0, R++, 0 == --V[w]) {
      if (w === D) break;
      w = t[n + g[R]]
    }
    if (w > L && (U & v) !== O) {
      for (0 === M && (M = L), A += P, j = 1 << (x = w - M); x + M < D && !((j -= V[x + M]) <= 0);) x++, j <<= 1;
      if (k += 1 << x, e === l && k > a || e === c && k > o) return 1;
      h[O = U & v] = L << 24 | x << 16 | A - m
    }
  }
  return 0 !== U && (h[A + U] = w - M << 24 | 4194304), E.bits = L, 0
}