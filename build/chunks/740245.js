/** Chunk was on web (https://canary.discord.comweb.38a06e56c3da3c7f.js.js) **/
"use strict";
var r = n(546299),
  i = n(261638),
  o = n(21841),
  a = r.rotr64_hi,
  s = r.rotr64_lo,
  l = r.shr64_hi,
  c = r.shr64_lo,
  u = r.sum64,
  d = r.sum64_hi,
  f = r.sum64_lo,
  p = r.sum64_4_hi,
  _ = r.sum64_4_lo,
  h = r.sum64_5_hi,
  m = r.sum64_5_lo,
  g = i.BlockHash,
  E = [0x428a2f98, 0xd728ae22, 0x71374491, 0x23ef65cd, 0xb5c0fbcf, 0xec4d3b2f, 0xe9b5dba5, 0x8189dbbc, 0x3956c25b, 0xf348b538, 0x59f111f1, 0xb605d019, 0x923f82a4, 0xaf194f9b, 0xab1c5ed5, 0xda6d8118, 0xd807aa98, 0xa3030242, 0x12835b01, 0x45706fbe, 0x243185be, 0x4ee4b28c, 0x550c7dc3, 0xd5ffb4e2, 0x72be5d74, 0xf27b896f, 0x80deb1fe, 0x3b1696b1, 0x9bdc06a7, 0x25c71235, 0xc19bf174, 0xcf692694, 0xe49b69c1, 0x9ef14ad2, 0xefbe4786, 0x384f25e3, 0xfc19dc6, 0x8b8cd5b5, 0x240ca1cc, 0x77ac9c65, 0x2de92c6f, 0x592b0275, 0x4a7484aa, 0x6ea6e483, 0x5cb0a9dc, 0xbd41fbd4, 0x76f988da, 0x831153b5, 0x983e5152, 0xee66dfab, 0xa831c66d, 0x2db43210, 0xb00327c8, 0x98fb213f, 0xbf597fc7, 0xbeef0ee4, 0xc6e00bf3, 0x3da88fc2, 0xd5a79147, 0x930aa725, 0x6ca6351, 0xe003826f, 0x14292967, 0xa0e6e70, 0x27b70a85, 0x46d22ffc, 0x2e1b2138, 0x5c26c926, 0x4d2c6dfc, 0x5ac42aed, 0x53380d13, 0x9d95b3df, 0x650a7354, 0x8baf63de, 0x766a0abb, 0x3c77b2a8, 0x81c2c92e, 0x47edaee6, 0x92722c85, 0x1482353b, 0xa2bfe8a1, 0x4cf10364, 0xa81a664b, 0xbc423001, 0xc24b8b70, 0xd0f89791, 0xc76c51a3, 0x654be30, 0xd192e819, 0xd6ef5218, 0xd6990624, 0x5565a910, 0xf40e3585, 0x5771202a, 0x106aa070, 0x32bbd1b8, 0x19a4c116, 0xb8d2d0c8, 0x1e376c08, 0x5141ab53, 0x2748774c, 0xdf8eeb99, 0x34b0bcb5, 0xe19b48a8, 0x391c0cb3, 0xc5c95a63, 0x4ed8aa4a, 0xe3418acb, 0x5b9cca4f, 0x7763e373, 0x682e6ff3, 0xd6b2b8a3, 0x748f82ee, 0x5defb2fc, 0x78a5636f, 0x43172f60, 0x84c87814, 0xa1f0ab72, 0x8cc70208, 0x1a6439ec, 0x90befffa, 0x23631e28, 0xa4506ceb, 0xde82bde9, 0xbef9a3f7, 0xb2c67915, 0xc67178f2, 0xe372532b, 0xca273ece, 0xea26619c, 0xd186b8c7, 0x21c0c207, 0xeada7dd6, 0xcde0eb1e, 0xf57d4f7f, 0xee6ed178, 0x6f067aa, 0x72176fba, 0xa637dc5, 0xa2c898a6, 0x113f9804, 0xbef90dae, 0x1b710b35, 0x131c471b, 0x28db77f5, 0x23047d84, 0x32caab7b, 0x40c72493, 0x3c9ebe0a, 0x15c9bebc, 0x431d67c4, 0x9c100d4c, 0x4cc5d4be, 0xcb3e42b6, 0x597f299c, 0xfc657e2a, 0x5fcb6fab, 0x3ad6faec, 0x6c44198c, 0x4a475817];

function v() {
  if (!(this instanceof v)) return new v;
  g.call(this), this.h = [0x6a09e667, 0xf3bcc908, 0xbb67ae85, 0x84caa73b, 0x3c6ef372, 0xfe94f82b, 0xa54ff53a, 0x5f1d36f1, 0x510e527f, 0xade682d1, 0x9b05688c, 0x2b3e6c1f, 0x1f83d9ab, 0xfb41bd6b, 0x5be0cd19, 0x137e2179], this.k = E, this.W = Array(160)
}

function b(e, t, n, r, i) {
  var o = e & n ^ ~e & i;
  return o < 0 && (o += 0x100000000), o
}

function y(e, t, n, r, i, o) {
  var a = t & r ^ ~t & o;
  return a < 0 && (a += 0x100000000), a
}

function O(e, t, n, r, i) {
  var o = e & n ^ e & i ^ n & i;
  return o < 0 && (o += 0x100000000), o
}

function S(e, t, n, r, i, o) {
  var a = t & r ^ t & o ^ r & o;
  return a < 0 && (a += 0x100000000), a
}

function I(e, t) {
  var n = a(e, t, 28) ^ a(t, e, 2) ^ a(t, e, 7);
  return n < 0 && (n += 0x100000000), n
}

function T(e, t) {
  var n = s(e, t, 28) ^ s(t, e, 2) ^ s(t, e, 7);
  return n < 0 && (n += 0x100000000), n
}

function N(e, t) {
  var n = a(e, t, 14) ^ a(e, t, 18) ^ a(t, e, 9);
  return n < 0 && (n += 0x100000000), n
}

function A(e, t) {
  var n = s(e, t, 14) ^ s(e, t, 18) ^ s(t, e, 9);
  return n < 0 && (n += 0x100000000), n
}

function C(e, t) {
  var n = a(e, t, 1) ^ a(e, t, 8) ^ l(e, t, 7);
  return n < 0 && (n += 0x100000000), n
}

function R(e, t) {
  var n = s(e, t, 1) ^ s(e, t, 8) ^ c(e, t, 7);
  return n < 0 && (n += 0x100000000), n
}

function P(e, t) {
  var n = a(e, t, 19) ^ a(t, e, 29) ^ l(e, t, 6);
  return n < 0 && (n += 0x100000000), n
}

function w(e, t) {
  var n = s(e, t, 19) ^ s(t, e, 29) ^ c(e, t, 6);
  return n < 0 && (n += 0x100000000), n
}
r.inherits(v, g), e.exports = v, v.blockSize = 1024, v.outSize = 512, v.hmacStrength = 192, v.padLength = 128, v.prototype._prepareBlock = function(e, t) {
  for (var n = this.W, r = 0; r < 32; r++) n[r] = e[t + r];
  for (; r < n.length; r += 2) {
    var i = P(n[r - 4], n[r - 3]),
      o = w(n[r - 4], n[r - 3]),
      a = n[r - 14],
      s = n[r - 13],
      l = C(n[r - 30], n[r - 29]),
      c = R(n[r - 30], n[r - 29]),
      u = n[r - 32],
      d = n[r - 31];
    n[r] = p(i, o, a, s, l, c, u, d), n[r + 1] = _(i, o, a, s, l, c, u, d)
  }
}, v.prototype._update = function(e, t) {
  this._prepareBlock(e, t);
  var n = this.W,
    r = this.h[0],
    i = this.h[1],
    a = this.h[2],
    s = this.h[3],
    l = this.h[4],
    c = this.h[5],
    p = this.h[6],
    _ = this.h[7],
    g = this.h[8],
    E = this.h[9],
    v = this.h[10],
    C = this.h[11],
    R = this.h[12],
    P = this.h[13],
    w = this.h[14],
    D = this.h[15];
  o(this.k.length === n.length);
  for (var x = 0; x < n.length; x += 2) {
    var L = w,
      M = D,
      k = N(g, E),
      j = A(g, E),
      U = b(g, E, v, C, R, P),
      G = y(g, E, v, C, R, P),
      B = this.k[x],
      Z = this.k[x + 1],
      F = n[x],
      V = n[x + 1],
      H = h(L, M, k, j, U, G, B, Z, F, V),
      W = m(L, M, k, j, U, G, B, Z, F, V);
    L = I(r, i), M = T(r, i);
    var Y = d(L, M, k = O(r, i, a, s, l, c), j = S(r, i, a, s, l, c)),
      K = f(L, M, k, j);
    w = R, D = P, R = v, P = C, v = g, C = E, g = d(p, _, H, W), E = f(_, _, H, W), p = l, _ = c, l = a, c = s, a = r, s = i, r = d(H, W, Y, K), i = f(H, W, Y, K)
  }
  u(this.h, 0, r, i), u(this.h, 2, a, s), u(this.h, 4, l, c), u(this.h, 6, p, _), u(this.h, 8, g, E), u(this.h, 10, v, C), u(this.h, 12, R, P), u(this.h, 14, w, D)
}, v.prototype._digest = function(e) {
  return "hex" === e ? r.toHex32(this.h, "big") : r.split32(this.h, "big")
}