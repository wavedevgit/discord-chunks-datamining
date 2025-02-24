/** Chunk was on web (https://canary.discord.comweb.a4687b32e07d48ae.js.js) **/
"use strict";
var r = n(546299),
  i = n(261638),
  o = n(411108),
  a = n(21841),
  s = r.sum32,
  l = r.sum32_4,
  c = r.sum32_5,
  u = o.ch32,
  d = o.maj32,
  f = o.s0_256,
  p = o.s1_256,
  _ = o.g0_256,
  h = o.g1_256,
  m = i.BlockHash,
  g = [0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174, 0xe49b69c1, 0xefbe4786, 0xfc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da, 0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x6ca6351, 0x14292967, 0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85, 0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070, 0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3, 0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2];

function E() {
  if (!(this instanceof E)) return new E;
  m.call(this), this.h = [0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19], this.k = g, this.W = Array(64)
}
r.inherits(E, m), e.exports = E, E.blockSize = 512, E.outSize = 256, E.hmacStrength = 192, E.padLength = 64, E.prototype._update = function(e, t) {
  for (var n = this.W, r = 0; r < 16; r++) n[r] = e[t + r];
  for (; r < n.length; r++) n[r] = l(h(n[r - 2]), n[r - 7], _(n[r - 15]), n[r - 16]);
  var i = this.h[0],
    o = this.h[1],
    m = this.h[2],
    g = this.h[3],
    E = this.h[4],
    v = this.h[5],
    b = this.h[6],
    y = this.h[7];
  for (a(this.k.length === n.length), r = 0; r < n.length; r++) {
    var O = c(y, p(E), u(E, v, b), this.k[r], n[r]),
      S = s(f(i), d(i, o, m));
    y = b, b = v, v = E, E = s(g, O), g = m, m = o, o = i, i = s(O, S)
  }
  this.h[0] = s(this.h[0], i), this.h[1] = s(this.h[1], o), this.h[2] = s(this.h[2], m), this.h[3] = s(this.h[3], g), this.h[4] = s(this.h[4], E), this.h[5] = s(this.h[5], v), this.h[6] = s(this.h[6], b), this.h[7] = s(this.h[7], y)
}, E.prototype._digest = function(e) {
  return "hex" === e ? r.toHex32(this.h, "big") : r.split32(this.h, "big")
}