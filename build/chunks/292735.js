/** Chunk was on web (https://canary.discord.comweb.ada7066db2976a65.js.js) **/
"use strict";
var r = n(689118),
  i = n(258922),
  o = n(957578).Buffer,
  a = Array(16);

function s() {
  i.call(this, 64), this._a = 0x67452301, this._b = 0xefcdab89, this._c = 0x98badcfe, this._d = 0x10325476
}

function l(e, t) {
  return e << t | e >>> 32 - t
}

function c(e, t, n, r, i, o, a) {
  return l(e + (t & n | ~t & r) + i + o | 0, a) + t | 0
}

function u(e, t, n, r, i, o, a) {
  return l(e + (t & r | n & ~r) + i + o | 0, a) + t | 0
}

function d(e, t, n, r, i, o, a) {
  return l(e + (t ^ n ^ r) + i + o | 0, a) + t | 0
}

function f(e, t, n, r, i, o, a) {
  return l(e + (n ^ (t | ~r)) + i + o | 0, a) + t | 0
}
r(s, i), s.prototype._update = function() {
  for (var e = a, t = 0; t < 16; ++t) e[t] = this._block.readInt32LE(4 * t);
  var n = this._a,
    r = this._b,
    i = this._c,
    o = this._d;
  n = c(n, r, i, o, e[0], 0xd76aa478, 7), o = c(o, n, r, i, e[1], 0xe8c7b756, 12), i = c(i, o, n, r, e[2], 0x242070db, 17), r = c(r, i, o, n, e[3], 0xc1bdceee, 22), n = c(n, r, i, o, e[4], 0xf57c0faf, 7), o = c(o, n, r, i, e[5], 0x4787c62a, 12), i = c(i, o, n, r, e[6], 0xa8304613, 17), r = c(r, i, o, n, e[7], 0xfd469501, 22), n = c(n, r, i, o, e[8], 0x698098d8, 7), o = c(o, n, r, i, e[9], 0x8b44f7af, 12), i = c(i, o, n, r, e[10], 0xffff5bb1, 17), r = c(r, i, o, n, e[11], 0x895cd7be, 22), n = c(n, r, i, o, e[12], 0x6b901122, 7), o = c(o, n, r, i, e[13], 0xfd987193, 12), i = c(i, o, n, r, e[14], 0xa679438e, 17), r = c(r, i, o, n, e[15], 0x49b40821, 22), n = u(n, r, i, o, e[1], 0xf61e2562, 5), o = u(o, n, r, i, e[6], 0xc040b340, 9), i = u(i, o, n, r, e[11], 0x265e5a51, 14), r = u(r, i, o, n, e[0], 0xe9b6c7aa, 20), n = u(n, r, i, o, e[5], 0xd62f105d, 5), o = u(o, n, r, i, e[10], 0x2441453, 9), i = u(i, o, n, r, e[15], 0xd8a1e681, 14), r = u(r, i, o, n, e[4], 0xe7d3fbc8, 20), n = u(n, r, i, o, e[9], 0x21e1cde6, 5), o = u(o, n, r, i, e[14], 0xc33707d6, 9), i = u(i, o, n, r, e[3], 0xf4d50d87, 14), r = u(r, i, o, n, e[8], 0x455a14ed, 20), n = u(n, r, i, o, e[13], 0xa9e3e905, 5), o = u(o, n, r, i, e[2], 0xfcefa3f8, 9), i = u(i, o, n, r, e[7], 0x676f02d9, 14), r = u(r, i, o, n, e[12], 0x8d2a4c8a, 20), n = d(n, r, i, o, e[5], 0xfffa3942, 4), o = d(o, n, r, i, e[8], 0x8771f681, 11), i = d(i, o, n, r, e[11], 0x6d9d6122, 16), r = d(r, i, o, n, e[14], 0xfde5380c, 23), n = d(n, r, i, o, e[1], 0xa4beea44, 4), o = d(o, n, r, i, e[4], 0x4bdecfa9, 11), i = d(i, o, n, r, e[7], 0xf6bb4b60, 16), r = d(r, i, o, n, e[10], 0xbebfbc70, 23), n = d(n, r, i, o, e[13], 0x289b7ec6, 4), o = d(o, n, r, i, e[0], 0xeaa127fa, 11), i = d(i, o, n, r, e[3], 0xd4ef3085, 16), r = d(r, i, o, n, e[6], 0x4881d05, 23), n = d(n, r, i, o, e[9], 0xd9d4d039, 4), o = d(o, n, r, i, e[12], 0xe6db99e5, 11), i = d(i, o, n, r, e[15], 0x1fa27cf8, 16), r = d(r, i, o, n, e[2], 0xc4ac5665, 23), n = f(n, r, i, o, e[0], 0xf4292244, 6), o = f(o, n, r, i, e[7], 0x432aff97, 10), i = f(i, o, n, r, e[14], 0xab9423a7, 15), r = f(r, i, o, n, e[5], 0xfc93a039, 21), n = f(n, r, i, o, e[12], 0x655b59c3, 6), o = f(o, n, r, i, e[3], 0x8f0ccc92, 10), i = f(i, o, n, r, e[10], 0xffeff47d, 15), r = f(r, i, o, n, e[1], 0x85845dd1, 21), n = f(n, r, i, o, e[8], 0x6fa87e4f, 6), o = f(o, n, r, i, e[15], 0xfe2ce6e0, 10), i = f(i, o, n, r, e[6], 0xa3014314, 15), r = f(r, i, o, n, e[13], 0x4e0811a1, 21), n = f(n, r, i, o, e[4], 0xf7537e82, 6), o = f(o, n, r, i, e[11], 0xbd3af235, 10), i = f(i, o, n, r, e[2], 0x2ad7d2bb, 15), r = f(r, i, o, n, e[9], 0xeb86d391, 21), this._a = this._a + n | 0, this._b = this._b + r | 0, this._c = this._c + i | 0, this._d = this._d + o | 0
}, s.prototype._digest = function() {
  this._block[this._blockOffset++] = 128, this._blockOffset > 56 && (this._block.fill(0, this._blockOffset, 64), this._update(), this._blockOffset = 0), this._block.fill(0, this._blockOffset, 56), this._block.writeUInt32LE(this._length[0], 56), this._block.writeUInt32LE(this._length[1], 60), this._update();
  var e = o.allocUnsafe(16);
  return e.writeInt32LE(this._a, 0), e.writeInt32LE(this._b, 4), e.writeInt32LE(this._c, 8), e.writeInt32LE(this._d, 12), e
}, e.exports = s