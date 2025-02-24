/** Chunk was on web (https://canary.discord.comweb.a4687b32e07d48ae.js.js) **/
var r = n(689118),
  i = n(676972),
  o = n(957578).Buffer,
  a = [0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174, 0xe49b69c1, 0xefbe4786, 0xfc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da, 0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x6ca6351, 0x14292967, 0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85, 0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070, 0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3, 0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2],
  s = Array(64);

function l() {
  this.init(), this._w = s, i.call(this, 64, 56)
}

function c(e, t, n) {
  return n ^ e & (t ^ n)
}

function u(e, t, n) {
  return e & t | n & (e | t)
}

function d(e) {
  return (e >>> 2 | e << 30) ^ (e >>> 13 | e << 19) ^ (e >>> 22 | e << 10)
}

function f(e) {
  return (e >>> 6 | e << 26) ^ (e >>> 11 | e << 21) ^ (e >>> 25 | e << 7)
}

function p(e) {
  return (e >>> 7 | e << 25) ^ (e >>> 18 | e << 14) ^ e >>> 3
}

function _(e) {
  return (e >>> 17 | e << 15) ^ (e >>> 19 | e << 13) ^ e >>> 10
}
r(l, i), l.prototype.init = function() {
  return this._a = 0x6a09e667, this._b = 0xbb67ae85, this._c = 0x3c6ef372, this._d = 0xa54ff53a, this._e = 0x510e527f, this._f = 0x9b05688c, this._g = 0x1f83d9ab, this._h = 0x5be0cd19, this
}, l.prototype._update = function(e) {
  for (var t = this._w, n = 0 | this._a, r = 0 | this._b, i = 0 | this._c, o = 0 | this._d, s = 0 | this._e, l = 0 | this._f, h = 0 | this._g, m = 0 | this._h, g = 0; g < 16; ++g) t[g] = e.readInt32BE(4 * g);
  for (; g < 64; ++g) t[g] = _(t[g - 2]) + t[g - 7] + p(t[g - 15]) + t[g - 16] | 0;
  for (var E = 0; E < 64; ++E) {
    var v = m + f(s) + c(s, l, h) + a[E] + t[E] | 0,
      b = d(n) + u(n, r, i) | 0;
    m = h, h = l, l = s, s = o + v | 0, o = i, i = r, r = n, n = v + b | 0
  }
  this._a = n + this._a | 0, this._b = r + this._b | 0, this._c = i + this._c | 0, this._d = o + this._d | 0, this._e = s + this._e | 0, this._f = l + this._f | 0, this._g = h + this._g | 0, this._h = m + this._h | 0
}, l.prototype._hash = function() {
  var e = o.allocUnsafe(32);
  return e.writeInt32BE(this._a, 0), e.writeInt32BE(this._b, 4), e.writeInt32BE(this._c, 8), e.writeInt32BE(this._d, 12), e.writeInt32BE(this._e, 16), e.writeInt32BE(this._f, 20), e.writeInt32BE(this._g, 24), e.writeInt32BE(this._h, 28), e
}, e.exports = l