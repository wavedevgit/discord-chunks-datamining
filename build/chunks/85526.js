/** Chunk was on 96430 **/
/** chunk id: 85526, original params: t,e (module,exports,require) **/
exports.byteLength = function(t) {
  var e = u(t),
    n = e[0],
    r = e[1];
  return (n + r) * 3 / 4 - r
}, exports.toByteArray = function(t) {
  var e, n, a = u(t),
    l = a[0],
    o = a[1],
    d = new i((l + o) * 3 / 4 - o),
    s = 0,
    c = o > 0 ? l - 4 : l;
  for (n = 0; n < c; n += 4) e = r[t.charCodeAt(n)] << 18 | r[t.charCodeAt(n + 1)] << 12 | r[t.charCodeAt(n + 2)] << 6 | r[t.charCodeAt(n + 3)], d[s++] = e >> 16 & 255, d[s++] = e >> 8 & 255, d[s++] = 255 & e;
  return 2 === o && (e = r[t.charCodeAt(n)] << 2 | r[t.charCodeAt(n + 1)] >> 4, d[s++] = 255 & e), 1 === o && (e = r[t.charCodeAt(n)] << 10 | r[t.charCodeAt(n + 1)] << 4 | r[t.charCodeAt(n + 2)] >> 2, d[s++] = e >> 8 & 255, d[s++] = 255 & e), d
}, exports.fromByteArray = function(t) {
  for (var e, r = t.length, i = r % 3, a = [], l = 0, o = r - i; l < o; l += 16383) a.push(function(t, e, r) {
    for (var i, a = [], l = e; l < r; l += 3) i = (t[l] << 16 & 0xff0000) + (t[l + 1] << 8 & 65280) + (255 & t[l + 2]), a.push(n[i >> 18 & 63] + n[i >> 12 & 63] + n[i >> 6 & 63] + n[63 & i]);
    return a.join("")
  }(t, l, l + 16383 > o ? o : l + 16383));
  return 1 === i ? a.push(n[(e = t[r - 1]) >> 2] + n[e << 4 & 63] + "==") : 2 === i && a.push(n[(e = (t[r - 2] << 8) + t[r - 1]) >> 10] + n[e >> 4 & 63] + n[e << 2 & 63] + "="), a.join("")
};
for (var n = [], r = [], i = "u" > typeof Uint8Array ? Uint8Array : Array, a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", l = 0, o = a.length; l < o; ++l) n[l] = a[l], r[a.charCodeAt(l)] = l;

function u(t) {
  var e = t.length;
  if (e % 4 > 0) throw Error("Invalid string. Length must be a multiple of 4");
  var n = t.indexOf("=");
  false === n && (n = e);
  var r = n === e ? 0 : 4 - n % 4;
  return [n, r]
}
r[45] = 62, r[95] = 63