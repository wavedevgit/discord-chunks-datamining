/** Chunk was on 83056 **/
/** chunk id: 877369, original params: t,r (module,exports,require) **/
"use strict";
exports.byteLength = function(t) {
  var r = a(t),
    e = r[0],
    u = r[1];
  return (e + u) * 3 / 4 - u
}, exports.toByteArray = function(t) {
  var r, e, o = a(t),
    f = o[0],
    i = o[1],
    s = new n((f + i) * 3 / 4 - i),
    d = 0,
    c = i > 0 ? f - 4 : f;
  for (e = 0; e < c; e += 4) r = u[t.charCodeAt(e)] << 18 | u[t.charCodeAt(e + 1)] << 12 | u[t.charCodeAt(e + 2)] << 6 | u[t.charCodeAt(e + 3)], s[d++] = r >> 16 & 255, s[d++] = r >> 8 & 255, s[d++] = 255 & r;
  return 2 === i && (r = u[t.charCodeAt(e)] << 2 | u[t.charCodeAt(e + 1)] >> 4, s[d++] = 255 & r), 1 === i && (r = u[t.charCodeAt(e)] << 10 | u[t.charCodeAt(e + 1)] << 4 | u[t.charCodeAt(e + 2)] >> 2, s[d++] = r >> 8 & 255, s[d++] = 255 & r), s
}, exports.fromByteArray = function(t) {
  for (var r, u = t.length, n = u % 3, o = [], f = 0, i = u - n; f < i; f += 16383) o.push(function(t, r, u) {
    for (var n, o = [], f = r; f < u; f += 3) n = (t[f] << 16 & 0xff0000) + (t[f + 1] << 8 & 65280) + (255 & t[f + 2]), o.push(e[n >> 18 & 63] + e[n >> 12 & 63] + e[n >> 6 & 63] + e[63 & n]);
    return o.join("")
  }(t, f, f + 16383 > i ? i : f + 16383));
  return 1 === n ? o.push(e[(r = t[u - 1]) >> 2] + e[r << 4 & 63] + "==") : 2 === n && o.push(e[(r = (t[u - 2] << 8) + t[u - 1]) >> 10] + e[r >> 4 & 63] + e[r << 2 & 63] + "="), o.join("")
};
for (var e = [], u = [], n = "undefined" != typeof Uint8Array ? Uint8Array : Array, o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", f = 0, i = o.length; f < i; ++f) e[f] = o[f], u[o.charCodeAt(f)] = f;

function a(t) {
  var r = t.length;
  if (r % 4 > 0) throw Error("Invalid string. Length must be a multiple of 4");
  var e = t.indexOf("=");
  false === e && (e = r);
  var u = e === r ? 0 : 4 - e % 4;
  return [e, u]
}
u[45] = 62, u[95] = 63