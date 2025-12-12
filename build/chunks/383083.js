/** Chunk was on web.js **/
/** chunk id: 383083, original params: e,t,n (module,exports,re quire) **/
var r = require("./413135.js").Buffer,
  i = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
  o = [255, 255, 26, 27, 28, 29, 30, 31, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 255, 255, 255, 255, 255, 255, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 255, 255, 255, 255, 255];

function a(e) {
  var t = Math.floor(e.length / 5);
  return e.length % 5 == 0 ? t : t + 1
}
exports.encode = function(e) {
  r.isBuffer(e) || (e = new r(e));
  for (var t = 0, n = 0, o = 0, s = 0, l = new r(8 * a(e)); t < e.length;) {
    var c = e[t];
    o > 3 ? (s = (s = c & 255 >> o) << (o = (o + 5) % 8) | (t + 1 < e.length ? e[t + 1] : 0) >> 8 - o, t++) : (s = c >> 8 - (o + 5) & 31, 0 == (o = (o + 5) % 8) && t++), l[n] = i.charCodeAt(s), n++
  }
  for (t = n; t < l.length; t++) l[t] = 61;
  return l
}, exports.decode = function(e) {
  var t, n = 0,
    i = 0,
    a = 0;
  r.isBuffer(e) || (e = new r(e));
  for (var s = new r(Math.ceil(5 * e.length / 8)), l = 0; l < e.length && 61 != e[l]; l++) {
    var c = e[l] - 48;
    if (c < o.length) i = o[c], n <= 3 ? 0 == (n = (n + 5) % 8) ? (t |= i, s[a] = t, a++, t = 0) : t |= 255 & i << 8 - n : (t |= 255 & i >>> (n = (n + 5) % 8), s[a] = t, a++, t = 255 & i << 8 - n);
    else throw Error("Invalid input - it is not base32 encoded string")
  }
  return s.slice(0, a)
}