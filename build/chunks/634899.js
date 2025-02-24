/** Chunk was on web (https://canary.discord.comweb.895a2488cd77ea6e.js.js) **/
"use strict";
var r = n(546299),
  i = n(261638),
  o = r.rotl32,
  a = r.sum32,
  s = r.sum32_3,
  l = r.sum32_4,
  c = i.BlockHash;

function u() {
  if (!(this instanceof u)) return new u;
  c.call(this), this.h = [0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0], this.endian = "little"
}

function d(e, t, n, r) {
  return e <= 15 ? t ^ n ^ r : e <= 31 ? t & n | ~t & r : e <= 47 ? (t | ~n) ^ r : e <= 63 ? t & r | n & ~r : t ^ (n | ~r)
}

function f(e) {
  return e <= 15 ? 0 : e <= 31 ? 0x5a827999 : e <= 47 ? 0x6ed9eba1 : e <= 63 ? 0x8f1bbcdc : 0xa953fd4e
}

function p(e) {
  return e <= 15 ? 0x50a28be6 : e <= 31 ? 0x5c4dd124 : e <= 47 ? 0x6d703ef3 : 0x7a6d76e9 * !!(e <= 63)
}
r.inherits(u, c), t.ripemd160 = u, u.blockSize = 512, u.outSize = 160, u.hmacStrength = 192, u.padLength = 64, u.prototype._update = function(e, t) {
  for (var n = this.h[0], r = this.h[1], i = this.h[2], c = this.h[3], u = this.h[4], E = n, v = r, b = i, y = c, O = u, S = 0; S < 80; S++) {
    var I = a(o(l(n, d(S, r, i, c), e[_[S] + t], f(S)), m[S]), u);
    n = u, u = c, c = o(i, 10), i = r, r = I, I = a(o(l(E, d(79 - S, v, b, y), e[h[S] + t], p(S)), g[S]), O), E = O, O = y, y = o(b, 10), b = v, v = I
  }
  I = s(this.h[1], i, y), this.h[1] = s(this.h[2], c, O), this.h[2] = s(this.h[3], u, E), this.h[3] = s(this.h[4], n, v), this.h[4] = s(this.h[0], r, b), this.h[0] = I
}, u.prototype._digest = function(e) {
  return "hex" === e ? r.toHex32(this.h, "little") : r.split32(this.h, "little")
};
var _ = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13],
  h = [5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11],
  m = [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6],
  g = [8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11]