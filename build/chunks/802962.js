/** Chunk was on 94700 **/
/** chunk id: 802962, original params: t,e,r (module,exports,require) **/
var n = require("./264572.js").Buffer,
  s = [255, 255, 26, 27, 28, 29, 30, 31, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 255, 255, 255, 255, 255, 255, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 255, 255, 255, 255, 255];
exports.encode = function(t) {
  n.isBuffer(t) || (t = new n(t));
  for (var e, r, s = 0, i = 0, o = 0, a = 0, c = new n(8 * (r = Math.floor((e = t).length / 5), e.length % 5 == 0 ? r : r + 1)); s < t.length;) {
    var u = t[s];
    o > 3 ? (a = (a = u & 255 >> o) << (o = (o + 5) % 8) | (s + 1 < t.length ? t[s + 1] : 0) >> 8 - o, s++) : (a = u >> 8 - (o + 5) & 31, 0 == (o = (o + 5) % 8) && s++), c[i] = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567".charCodeAt(a), i++
  }
  for (s = i; s < c.length; s++) c[s] = 61;
  return c
}, exports.decode = function(t) {
  var e, r = 0,
    i = 0,
    o = 0;
  n.isBuffer(t) || (t = new n(t));
  for (var a = new n(Math.ceil(5 * t.length / 8)), c = 0; c < t.length && 61 != t[c]; c++) {
    var u = t[c] - 48;
    if (u < s.length) i = s[u], r <= 3 ? 0 == (r = (r + 5) % 8) ? (e |= i, a[o] = e, o++, e = 0) : e |= 255 & i << 8 - r : (e |= 255 & i >>> (r = (r + 5) % 8), a[o] = e, o++, e = 255 & i << 8 - r);
    else throw Error("Invalid input - it is not base32 encoded string")
  }
  return a.slice(0, o)
}