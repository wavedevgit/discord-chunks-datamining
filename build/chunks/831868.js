/** Chunk was on web.js **/
/** chunk id: 831868, original params: e,t,n (module,exports,re quire) **/
"use strict";
var r, i, o, Chunk754793 = require("./754793.js"),
  s = 4,
  l = 0,
  c = 1,
  u = 2;

function d(e) {
  for (var t = e.length; --t >= 0;) e[t] = 0
}
var f = 0,
  p = 1,
  _ = 2,
  m = 3,
  h = 258,
  g = 29,
  E = 256,
  b = 286,
  y = 30,
  O = 19,
  v = 573,
  S = 15,
  I = 16,
  T = 7,
  C = 256,
  A = 16,
  N = 17,
  P = 18,
  R = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0],
  w = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13],
  D = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7],
  x = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
  L = 512,
  j = Array(576);
d(j);
var M = Array(2 * y);
d(M);
var k = Array(L);
d(k);
var U = Array(h - m + 1);
d(U);
var G = Array(g);
d(G);
var Z = Array(y);

function F(e, t, n, r, i) {
  this.static_tree = e, this.extra_bits = t, this.extra_base = n, this.elems = r, this.max_length = i, this.has_stree = e && e.length
}

function B(e, t) {
  this.dyn_tree = e, this.max_code = 0, this.stat_desc = t
}

function V(e) {
  return e < 256 ? k[e] : k[256 + (e >>> 7)]
}

function H(e, t) {
  e.pending_buf[e.pending++] = 255 & t, e.pending_buf[e.pending++] = t >>> 8 & 255
}

function Y(e, t, n) {
  e.bi_valid > I - n ? (e.bi_buf |= t << e.bi_valid & 65535, H(e, e.bi_buf), e.bi_buf = t >> I - e.bi_valid, e.bi_valid += n - I) : (e.bi_buf |= t << e.bi_valid & 65535, e.bi_valid += n)
}

function W(e, t, n) {
  Y(e, n[2 * t], n[2 * t + 1])
}

function K(e, t) {
  var n = 0;
  do n |= 1 & e, e >>>= 1, n <<= 1; while (--t > 0);
  return n >>> 1
}

function z(e) {
  16 === e.bi_valid ? (H(e, e.bi_buf), e.bi_buf = 0, e.bi_valid = 0) : e.bi_valid >= 8 && (e.pending_buf[e.pending++] = 255 & e.bi_buf, e.bi_buf >>= 8, e.bi_valid -= 8)
}

function q(e, t) {
  var n, r, i, o, a, s, l = t.dyn_tree,
    c = t.max_code,
    u = t.stat_desc.static_tree,
    d = t.stat_desc.has_stree,
    f = t.stat_desc.extra_bits,
    p = t.stat_desc.extra_base,
    _ = t.stat_desc.max_length,
    m = 0;
  for (o = 0; o <= S; o++) e.bl_count[o] = 0;
  for (l[2 * e.heap[e.heap_max] + 1] = 0, n = e.heap_max + 1; n < v; n++)(o = l[2 * l[2 * (r = e.heap[n]) + 1] + 1] + 1) > _ && (o = _, m++), l[2 * r + 1] = o, !(r > c) && (e.bl_count[o]++, a = 0, r >= p && (a = f[r - p]), s = l[2 * r], e.opt_len += s * (o + a), d && (e.static_len += s * (u[2 * r + 1] + a)));
  if (0 !== m) {
    do {
      for (o = _ - 1; 0 === e.bl_count[o];) o--;
      e.bl_count[o]--, e.bl_count[o + 1] += 2, e.bl_count[_]--, m -= 2
    } while (m > 0);
    for (o = _; 0 !== o; o--)
      for (r = e.bl_count[o]; 0 !== r;) !((i = e.heap[--n]) > c) && (l[2 * i + 1] !== o && (e.opt_len += (o - l[2 * i + 1]) * l[2 * i], l[2 * i + 1] = o), r--)
  }
}

function Q(e, t, n) {
  var r, i, o = Array(S + 1),
    a = 0;
  for (r = 1; r <= S; r++) o[r] = a = a + n[r - 1] << 1;
  for (i = 0; i <= t; i++) {
    var s = e[2 * i + 1];
    0 !== s && (e[2 * i] = K(o[s]++, s))
  }
}

function X() {
  var e, t, n, a, s, l = Array(S + 1);
  for (a = 0, n = 0; Chunk754793 < g - 1; Chunk754793++)
    for (e = 0, G[Chunk754793] = require; module < 1 << R[Chunk754793]; module++) U[require++] = Chunk754793;
  for (U[require - 1] = Chunk754793, s = 0, a = 0; Chunk754793 < 16; Chunk754793++)
    for (e = 0, Z[Chunk754793] = s; module < 1 << w[Chunk754793]; module++) k[s++] = Chunk754793;
  for (s >>= 7; Chunk754793 < y; Chunk754793++)
    for (e = 0, Z[Chunk754793] = s << 7; module < 1 << w[Chunk754793] - 7; module++) k[256 + s++] = Chunk754793;
  for (t = 0; exports <= S; exports++) l[exports] = 0;
  for (e = 0; module <= 143;) j[2 * module + 1] = 8, module++, l[8]++;
  for (; module <= 255;) j[2 * module + 1] = 9, module++, l[9]++;
  for (; module <= 279;) j[2 * module + 1] = 7, module++, l[7]++;
  for (; module <= 287;) j[2 * module + 1] = 8, module++, l[8]++;
  for (Q(j, b + 1, l), e = 0; module < y; module++) M[2 * module + 1] = 5, M[2 * module] = K(module, 5);
  r = new F(j, R, E + 1, b, S), i = new F(M, w, 0, y, S), o = new F([], D, 0, O, T)
}

function J(e) {
  var t;
  for (t = 0; t < b; t++) e.dyn_ltree[2 * t] = 0;
  for (t = 0; t < y; t++) e.dyn_dtree[2 * t] = 0;
  for (t = 0; t < O; t++) e.bl_tree[2 * t] = 0;
  e.dyn_ltree[2 * C] = 1, e.opt_len = e.static_len = 0, e.last_lit = e.matches = 0
}

function $(e) {
  e.bi_valid > 8 ? H(e, e.bi_buf) : e.bi_valid > 0 && (e.pending_buf[e.pending++] = e.bi_buf), e.bi_buf = 0, e.bi_valid = 0
}

function ee(e, t, n, r) {
  $(e), r && (H(e, n), H(e, ~n)), a.arraySet(e.pending_buf, e.window, t, n, e.pending), e.pending += n
}

function et(e, t, n, r) {
  var i = 2 * t,
    o = 2 * n;
  return e[i] < e[o] || e[i] === e[o] && r[t] <= r[n]
}

function en(e, t, n) {
  for (var r = e.heap[n], i = n << 1; i <= e.heap_len && (i < e.heap_len && et(t, e.heap[i + 1], e.heap[i], e.depth) && i++, !et(t, r, e.heap[i], e.depth));) e.heap[n] = e.heap[i], n = i, i <<= 1;
  e.heap[n] = r
}

function er(e, t, n) {
  var r, i, o, a, s = 0;
  if (0 !== e.last_lit)
    do r = e.pending_buf[e.d_buf + 2 * s] << 8 | e.pending_buf[e.d_buf + 2 * s + 1], i = e.pending_buf[e.l_buf + s], s++, 0 === r ? W(e, i, t) : (W(e, (o = U[i]) + E + 1, t), 0 !== (a = R[o]) && Y(e, i -= G[o], a), W(e, o = V(--r), n), 0 !== (a = w[o]) && Y(e, r -= Z[o], a)); while (s < e.last_lit);
  W(e, C, t)
}

function ei(e, t) {
  var n, r, i, o = t.dyn_tree,
    a = t.stat_desc.static_tree,
    s = t.stat_desc.has_stree,
    l = t.stat_desc.elems,
    c = false;
  for (n = 0, e.heap_len = 0, e.heap_max = v; n < l; n++) 0 !== o[2 * n] ? (e.heap[++e.heap_len] = c = n, e.depth[n] = 0) : o[2 * n + 1] = 0;
  for (; e.heap_len < 2;) o[2 * (i = e.heap[++e.heap_len] = c < 2 ? ++c : 0)] = 1, e.depth[i] = 0, e.opt_len--, s && (e.static_len -= a[2 * i + 1]);
  for (t.max_code = c, n = e.heap_len >> 1; n >= 1; n--) en(e, o, n);
  i = l;
  do n = e.heap[1], e.heap[1] = e.heap[e.heap_len--], en(e, o, 1), r = e.heap[1], e.heap[--e.heap_max] = n, e.heap[--e.heap_max] = r, o[2 * i] = o[2 * n] + o[2 * r], e.depth[i] = (e.depth[n] >= e.depth[r] ? e.depth[n] : e.depth[r]) + 1, o[2 * n + 1] = o[2 * r + 1] = i, e.heap[1] = i++, en(e, o, 1); while (e.heap_len >= 2);
  e.heap[--e.heap_max] = e.heap[1], q(e, t), Q(o, c, e.bl_count)
}

function eo(e, t, n) {
  var r, i, o = false,
    a = t[1],
    s = 0,
    l = 7,
    c = 4;
  for (0 === a && (l = 138, c = 3), t[(n + 1) * 2 + 1] = 65535, r = 0; r <= n; r++) i = a, a = t[(r + 1) * 2 + 1], ++s < l && i === a || (s < c ? e.bl_tree[2 * i] += s : 0 !== i ? (i !== o && e.bl_tree[2 * i]++, e.bl_tree[2 * A]++) : s <= 10 ? e.bl_tree[2 * N]++ : e.bl_tree[2 * P]++, s = 0, o = i, 0 === a ? (l = 138, c = 3) : i === a ? (l = 6, c = 3) : (l = 7, c = 4))
}

function ea(e, t, n) {
  var r, i, o = false,
    a = t[1],
    s = 0,
    l = 7,
    c = 4;
  for (0 === a && (l = 138, c = 3), r = 0; r <= n; r++)
    if (i = a, a = t[(r + 1) * 2 + 1], !(++s < l) || i !== a) {
      if (s < c)
        do W(e, i, e.bl_tree); while (0 != --s);
      else 0 !== i ? (i !== o && (W(e, i, e.bl_tree), s--), W(e, A, e.bl_tree), Y(e, s - 3, 2)) : s <= 10 ? (W(e, N, e.bl_tree), Y(e, s - 3, 3)) : (W(e, P, e.bl_tree), Y(e, s - 11, 7));
      s = 0, o = i, 0 === a ? (l = 138, c = 3) : i === a ? (l = 6, c = 3) : (l = 7, c = 4)
    }
}

function es(e) {
  var t;
  for (eo(e, e.dyn_ltree, e.l_desc.max_code), eo(e, e.dyn_dtree, e.d_desc.max_code), ei(e, e.bl_desc), t = O - 1; t >= 3 && 0 === e.bl_tree[2 * x[t] + 1]; t--);
  return e.opt_len += 3 * (t + 1) + 5 + 5 + 4, t
}

function el(e, t, n, r) {
  var i;
  for (Y(e, t - 257, 5), Y(e, n - 1, 5), Y(e, r - 4, 4), i = 0; i < r; i++) Y(e, e.bl_tree[2 * x[i] + 1], 3);
  ea(e, e.dyn_ltree, t - 1), ea(e, e.dyn_dtree, n - 1)
}

function ec(e) {
  var t, n = 0xf3ffc07f;
  for (t = 0; t <= 31; t++, n >>>= 1)
    if (1 & n && 0 !== e.dyn_ltree[2 * t]) return l;
  if (0 !== e.dyn_ltree[18] || 0 !== e.dyn_ltree[20] || 0 !== e.dyn_ltree[26]) return c;
  for (t = 32; t < E; t++)
    if (0 !== e.dyn_ltree[2 * t]) return c;
  return l
}
d(Z);
var eu = false;

function ed(e, t, n, r) {
  Y(e, (f << 1) + +!!r, 3), ee(e, t, n, true)
}

function ef(e) {
  Y(e, p << 1, 3), W(e, C, j), z(e)
}

function ep(e, t, n, r) {
  var i, o, a = 0;
  e.level > 0 ? (e.strm.data_type === u && (e.strm.data_type = ec(e)), ei(e, e.l_desc), ei(e, e.d_desc), a = es(e), i = e.opt_len + 3 + 7 >>> 3, (o = e.static_len + 3 + 7 >>> 3) <= i && (i = o)) : i = o = n + 5, n + 4 <= i && false !== t ? ed(e, t, n, r) : e.strategy === s || o === i ? (Y(e, (p << 1) + +!!r, 3), er(e, j, M)) : (Y(e, (_ << 1) + +!!r, 3), el(e, e.l_desc.max_code + 1, e.d_desc.max_code + 1, a + 1), er(e, e.dyn_ltree, e.dyn_dtree)), J(e), r && $(e)
}

function e_(e, t, n) {
  return e.pending_buf[e.d_buf + 2 * e.last_lit] = t >>> 8 & 255, e.pending_buf[e.d_buf + 2 * e.last_lit + 1] = 255 & t, e.pending_buf[e.l_buf + e.last_lit] = 255 & n, e.last_lit++, 0 === t ? e.dyn_ltree[2 * n]++ : (e.matches++, t--, e.dyn_ltree[(U[n] + E + 1) * 2]++, e.dyn_dtree[2 * V(t)]++), e.last_lit === e.lit_bufsize - 1
}
exports._tr_init = function(e) {
  eu || (X(), eu = true), e.l_desc = new B(e.dyn_ltree, r), e.d_desc = new B(e.dyn_dtree, i), e.bl_desc = new B(e.bl_tree, o), e.bi_buf = 0, e.bi_valid = 0, J(e)
}, exports._tr_stored_block = ed, exports._tr_flush_block = ep, exports._tr_tally = e_, exports._tr_align = ef