/** Chunk was on web (https://canary.discord.comweb.38a06e56c3da3c7f.js.js) **/
"use strict";
var r = n(546299),
  i = n(261638),
  o = n(411108),
  a = r.rotl32,
  s = r.sum32,
  l = r.sum32_5,
  c = o.ft_1,
  u = i.BlockHash,
  d = [0x5a827999, 0x6ed9eba1, 0x8f1bbcdc, 0xca62c1d6];

function f() {
  if (!(this instanceof f)) return new f;
  u.call(this), this.h = [0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0], this.W = Array(80)
}
r.inherits(f, u), e.exports = f, f.blockSize = 512, f.outSize = 160, f.hmacStrength = 80, f.padLength = 64, f.prototype._update = function(e, t) {
  for (var n = this.W, r = 0; r < 16; r++) n[r] = e[t + r];
  for (; r < n.length; r++) n[r] = a(n[r - 3] ^ n[r - 8] ^ n[r - 14] ^ n[r - 16], 1);
  var i = this.h[0],
    o = this.h[1],
    u = this.h[2],
    f = this.h[3],
    p = this.h[4];
  for (r = 0; r < n.length; r++) {
    var _ = ~~(r / 20),
      h = l(a(i, 5), c(_, o, u, f), p, n[r], d[_]);
    p = f, f = u, u = a(o, 30), o = i, i = h
  }
  this.h[0] = s(this.h[0], i), this.h[1] = s(this.h[1], o), this.h[2] = s(this.h[2], u), this.h[3] = s(this.h[3], f), this.h[4] = s(this.h[4], p)
}, f.prototype._digest = function(e) {
  return "hex" === e ? r.toHex32(this.h, "big") : r.split32(this.h, "big")
}