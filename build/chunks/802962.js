/** Chunk was on 86142 **/
/** chunk id: 802962, original params: e,t,n (module,exports,require) **/
var r = require("./264572.js").Buffer,
  i = [255, 255, 26, 27, 28, 29, 30, 31, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 255, 255, 255, 255, 255, 255, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 255, 255, 255, 255, 255];
exports.encode = function(e) {
  r.isBuffer(e) || (e = new r(e));
  for (var t, n, i = 0, s = 0, l = 0, a = 0, o = new r(8 * (n = Math.floor((t = e).length / 5), t.length % 5 == 0 ? n : n + 1)); i < e.length;) {
    var c = e[i];
    l > 3 ? (a = (a = c & 255 >> l) << (l = (l + 5) % 8) | (i + 1 < e.length ? e[i + 1] : 0) >> 8 - l, i++) : (a = c >> 8 - (l + 5) & 31, 0 == (l = (l + 5) % 8) && i++), o[s] = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567".charCodeAt(a), s++
  }
  for (i = s; i < o.length; i++) o[i] = 61;
  return o
}, exports.decode = function(e) {
  var t, n = 0,
    s = 0,
    l = 0;
  r.isBuffer(e) || (e = new r(e));
  for (var a = new r(Math.ceil(5 * e.length / 8)), o = 0; o < e.length && 61 != e[o]; o++) {
    var c = e[o] - 48;
    if (c < i.length) s = i[c], n <= 3 ? 0 == (n = (n + 5) % 8) ? (t |= s, a[l] = t, l++, t = 0) : t |= 255 & s << 8 - n : (t |= 255 & s >>> (n = (n + 5) % 8), a[l] = t, l++, t = 255 & s << 8 - n);
    else throw Error("Invalid input - it is not base32 encoded string")
  }
  return a.slice(0, l)
}