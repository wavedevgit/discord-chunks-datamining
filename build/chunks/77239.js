/** Chunk was on web.js **/
"use strict";
var r = n(754793),
  i = 15,
  o = 852,
  a = 592,
  s = 0,
  l = 1,
  c = 2,
  u = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0],
  d = [16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78],
  f = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0],
  _ = [16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64];
e.exports = function(e, t, n, p, h, g, m, E) {
  var v, b, y, O, S, I, T, N, A, C = E.bits,
    R = 0,
    P = 0,
    D = 0,
    w = 0,
    L = 0,
    x = 0,
    M = 0,
    k = 0,
    j = 0,
    U = 0,
    G = null,
    B = 0,
    V = new r.Buf16(i + 1),
    F = new r.Buf16(i + 1),
    Z = null,
    H = 0;
  for (R = 0; R <= i; R++) V[R] = 0;
  for (P = 0; P < p; P++) V[t[n + P]]++;
  for (L = C, w = i; w >= 1 && 0 === V[w]; w--);
  if (L > w && (L = w), 0 === w) return h[g++] = 0x1400000, h[g++] = 0x1400000, E.bits = 1, 0;
  for (D = 1; D < w && 0 === V[D]; D++);
  for (L < D && (L = D), k = 1, R = 1; R <= i; R++)
    if (k <<= 1, (k -= V[R]) < 0) return -1;
  if (k > 0 && (e === s || 1 !== w)) return -1;
  for (R = 1, F[1] = 0; R < i; R++) F[R + 1] = F[R] + V[R];
  for (P = 0; P < p; P++) 0 !== t[n + P] && (m[F[t[n + P]]++] = P);
  if (e === s ? (G = Z = m, I = 19) : e === l ? (G = u, B -= 257, Z = d, H -= 257, I = 256) : (G = f, Z = _, I = -1), U = 0, P = 0, R = D, S = g, x = L, M = 0, y = -1, O = (j = 1 << L) - 1, e === l && j > o || e === c && j > a) return 1;
  for (;;) {
    T = R - M, m[P] < I ? (N = 0, A = m[P]) : m[P] > I ? (N = Z[H + m[P]], A = G[B + m[P]]) : (N = 96, A = 0), v = 1 << R - M, D = b = 1 << x;
    do h[S + (U >> M) + (b -= v)] = T << 24 | N << 16 | A | 0; while (0 !== b);
    for (v = 1 << R - 1; U & v;) v >>= 1;
    if (0 !== v ? (U &= v - 1, U += v) : U = 0, P++, 0 == --V[R]) {
      if (R === w) break;
      R = t[n + m[P]]
    }
    if (R > L && (U & O) !== y) {
      for (0 === M && (M = L), S += D, k = 1 << (x = R - M); x + M < w && !((k -= V[x + M]) <= 0);) x++, k <<= 1;
      if (j += 1 << x, e === l && j > o || e === c && j > a) return 1;
      h[y = U & O] = L << 24 | x << 16 | S - g | 0
    }
  }
  return 0 !== U && (h[S + U] = R - M << 24 | 4194304), E.bits = L, 0
}