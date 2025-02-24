/** Chunk was on web.js **/
var r = n(689118),
  i = n(676972),
  o = n(957578).Buffer,
  a = [0x428a2f98, 0xd728ae22, 0x71374491, 0x23ef65cd, 0xb5c0fbcf, 0xec4d3b2f, 0xe9b5dba5, 0x8189dbbc, 0x3956c25b, 0xf348b538, 0x59f111f1, 0xb605d019, 0x923f82a4, 0xaf194f9b, 0xab1c5ed5, 0xda6d8118, 0xd807aa98, 0xa3030242, 0x12835b01, 0x45706fbe, 0x243185be, 0x4ee4b28c, 0x550c7dc3, 0xd5ffb4e2, 0x72be5d74, 0xf27b896f, 0x80deb1fe, 0x3b1696b1, 0x9bdc06a7, 0x25c71235, 0xc19bf174, 0xcf692694, 0xe49b69c1, 0x9ef14ad2, 0xefbe4786, 0x384f25e3, 0xfc19dc6, 0x8b8cd5b5, 0x240ca1cc, 0x77ac9c65, 0x2de92c6f, 0x592b0275, 0x4a7484aa, 0x6ea6e483, 0x5cb0a9dc, 0xbd41fbd4, 0x76f988da, 0x831153b5, 0x983e5152, 0xee66dfab, 0xa831c66d, 0x2db43210, 0xb00327c8, 0x98fb213f, 0xbf597fc7, 0xbeef0ee4, 0xc6e00bf3, 0x3da88fc2, 0xd5a79147, 0x930aa725, 0x6ca6351, 0xe003826f, 0x14292967, 0xa0e6e70, 0x27b70a85, 0x46d22ffc, 0x2e1b2138, 0x5c26c926, 0x4d2c6dfc, 0x5ac42aed, 0x53380d13, 0x9d95b3df, 0x650a7354, 0x8baf63de, 0x766a0abb, 0x3c77b2a8, 0x81c2c92e, 0x47edaee6, 0x92722c85, 0x1482353b, 0xa2bfe8a1, 0x4cf10364, 0xa81a664b, 0xbc423001, 0xc24b8b70, 0xd0f89791, 0xc76c51a3, 0x654be30, 0xd192e819, 0xd6ef5218, 0xd6990624, 0x5565a910, 0xf40e3585, 0x5771202a, 0x106aa070, 0x32bbd1b8, 0x19a4c116, 0xb8d2d0c8, 0x1e376c08, 0x5141ab53, 0x2748774c, 0xdf8eeb99, 0x34b0bcb5, 0xe19b48a8, 0x391c0cb3, 0xc5c95a63, 0x4ed8aa4a, 0xe3418acb, 0x5b9cca4f, 0x7763e373, 0x682e6ff3, 0xd6b2b8a3, 0x748f82ee, 0x5defb2fc, 0x78a5636f, 0x43172f60, 0x84c87814, 0xa1f0ab72, 0x8cc70208, 0x1a6439ec, 0x90befffa, 0x23631e28, 0xa4506ceb, 0xde82bde9, 0xbef9a3f7, 0xb2c67915, 0xc67178f2, 0xe372532b, 0xca273ece, 0xea26619c, 0xd186b8c7, 0x21c0c207, 0xeada7dd6, 0xcde0eb1e, 0xf57d4f7f, 0xee6ed178, 0x6f067aa, 0x72176fba, 0xa637dc5, 0xa2c898a6, 0x113f9804, 0xbef90dae, 0x1b710b35, 0x131c471b, 0x28db77f5, 0x23047d84, 0x32caab7b, 0x40c72493, 0x3c9ebe0a, 0x15c9bebc, 0x431d67c4, 0x9c100d4c, 0x4cc5d4be, 0xcb3e42b6, 0x597f299c, 0xfc657e2a, 0x5fcb6fab, 0x3ad6faec, 0x6c44198c, 0x4a475817],
  s = Array(160);

function l() {
  this.init(), this._w = s, i.call(this, 128, 112)
}

function c(e, t, n) {
  return n ^ e & (t ^ n)
}

function u(e, t, n) {
  return e & t | n & (e | t)
}

function d(e, t) {
  return (e >>> 28 | t << 4) ^ (t >>> 2 | e << 30) ^ (t >>> 7 | e << 25)
}

function f(e, t) {
  return (e >>> 14 | t << 18) ^ (e >>> 18 | t << 14) ^ (t >>> 9 | e << 23)
}

function p(e, t) {
  return (e >>> 1 | t << 31) ^ (e >>> 8 | t << 24) ^ e >>> 7
}

function _(e, t) {
  return (e >>> 1 | t << 31) ^ (e >>> 8 | t << 24) ^ (e >>> 7 | t << 25)
}

function h(e, t) {
  return (e >>> 19 | t << 13) ^ (t >>> 29 | e << 3) ^ e >>> 6
}

function m(e, t) {
  return (e >>> 19 | t << 13) ^ (t >>> 29 | e << 3) ^ (e >>> 6 | t << 26)
}

function g(e, t) {
  return +(e >>> 0 < t >>> 0)
}
r(l, i), l.prototype.init = function() {
  return this._ah = 0x6a09e667, this._bh = 0xbb67ae85, this._ch = 0x3c6ef372, this._dh = 0xa54ff53a, this._eh = 0x510e527f, this._fh = 0x9b05688c, this._gh = 0x1f83d9ab, this._hh = 0x5be0cd19, this._al = 0xf3bcc908, this._bl = 0x84caa73b, this._cl = 0xfe94f82b, this._dl = 0x5f1d36f1, this._el = 0xade682d1, this._fl = 0x2b3e6c1f, this._gl = 0xfb41bd6b, this._hl = 0x137e2179, this
}, l.prototype._update = function(e) {
  for (var t = this._w, n = 0 | this._ah, r = 0 | this._bh, i = 0 | this._ch, o = 0 | this._dh, s = 0 | this._eh, l = 0 | this._fh, E = 0 | this._gh, v = 0 | this._hh, b = 0 | this._al, y = 0 | this._bl, O = 0 | this._cl, S = 0 | this._dl, I = 0 | this._el, T = 0 | this._fl, N = 0 | this._gl, A = 0 | this._hl, C = 0; C < 32; C += 2) t[C] = e.readInt32BE(4 * C), t[C + 1] = e.readInt32BE(4 * C + 4);
  for (; C < 160; C += 2) {
    var R = t[C - 30],
      P = t[C - 30 + 1],
      w = p(R, P),
      D = _(P, R),
      x = h(R = t[C - 4], P = t[C - 4 + 1]),
      L = m(P, R),
      M = t[C - 14],
      k = t[C - 14 + 1],
      j = t[C - 32],
      U = t[C - 32 + 1],
      G = D + k | 0,
      B = w + M + g(G, D) | 0;
    B = (B = B + x + g(G = G + L | 0, L) | 0) + j + g(G = G + U | 0, U) | 0, t[C] = B, t[C + 1] = G
  }
  for (var Z = 0; Z < 160; Z += 2) {
    B = t[Z], G = t[Z + 1];
    var F = u(n, r, i),
      V = u(b, y, O),
      H = d(n, b),
      W = d(b, n),
      Y = f(s, I),
      K = f(I, s),
      z = a[Z],
      q = a[Z + 1],
      Q = c(s, l, E),
      X = c(I, T, N),
      J = A + K | 0,
      $ = v + Y + g(J, A) | 0;
    $ = ($ = ($ = $ + Q + g(J = J + X | 0, X) | 0) + z + g(J = J + q | 0, q) | 0) + B + g(J = J + G | 0, G) | 0;
    var ee = W + V | 0,
      et = H + F + g(ee, W) | 0;
    v = E, A = N, E = l, N = T, l = s, T = I, s = o + $ + g(I = S + J | 0, S) | 0, o = i, S = O, i = r, O = y, r = n, y = b, n = $ + et + g(b = J + ee | 0, J) | 0
  }
  this._al = this._al + b | 0, this._bl = this._bl + y | 0, this._cl = this._cl + O | 0, this._dl = this._dl + S | 0, this._el = this._el + I | 0, this._fl = this._fl + T | 0, this._gl = this._gl + N | 0, this._hl = this._hl + A | 0, this._ah = this._ah + n + g(this._al, b) | 0, this._bh = this._bh + r + g(this._bl, y) | 0, this._ch = this._ch + i + g(this._cl, O) | 0, this._dh = this._dh + o + g(this._dl, S) | 0, this._eh = this._eh + s + g(this._el, I) | 0, this._fh = this._fh + l + g(this._fl, T) | 0, this._gh = this._gh + E + g(this._gl, N) | 0, this._hh = this._hh + v + g(this._hl, A) | 0
}, l.prototype._hash = function() {
  var e = o.allocUnsafe(64);

  function t(t, n, r) {
    e.writeInt32BE(t, r), e.writeInt32BE(n, r + 4)
  }
  return t(this._ah, this._al, 0), t(this._bh, this._bl, 8), t(this._ch, this._cl, 16), t(this._dh, this._dl, 24), t(this._eh, this._el, 32), t(this._fh, this._fl, 40), t(this._gh, this._gl, 48), t(this._hh, this._hl, 56), e
}, e.exports = l