/** Chunk was on 84511 **/
/** chunk id: 85526, original params: t,e (module,exports,require) **/
"use strict";
exports.byteLength = function(t) {
  var e = c(t),
    r = e[0],
    n = e[1];
  return (r + n) * 3 / 4 - n
}, exports.toByteArray = function(t) {
  var e, r, s = c(t),
    o = s[0],
    a = s[1],
    u = new i((o + a) * 3 / 4 - a),
    h = 0,
    d = a > 0 ? o - 4 : o;
  for (r = 0; r < d; r += 4) e = n[t.charCodeAt(r)] << 18 | n[t.charCodeAt(r + 1)] << 12 | n[t.charCodeAt(r + 2)] << 6 | n[t.charCodeAt(r + 3)], u[h++] = e >> 16 & 255, u[h++] = e >> 8 & 255, u[h++] = 255 & e;
  return 2 === a && (e = n[t.charCodeAt(r)] << 2 | n[t.charCodeAt(r + 1)] >> 4, u[h++] = 255 & e), 1 === a && (e = n[t.charCodeAt(r)] << 10 | n[t.charCodeAt(r + 1)] << 4 | n[t.charCodeAt(r + 2)] >> 2, u[h++] = e >> 8 & 255, u[h++] = 255 & e), u
}, exports.fromByteArray = function(t) {
  for (var e, n = t.length, i = n % 3, s = [], o = 0, a = n - i; o < a; o += 16383) s.push(function(t, e, n) {
    for (var i, s = [], o = e; o < n; o += 3) i = (t[o] << 16 & 0xff0000) + (t[o + 1] << 8 & 65280) + (255 & t[o + 2]), s.push(r[i >> 18 & 63] + r[i >> 12 & 63] + r[i >> 6 & 63] + r[63 & i]);
    return s.join("")
  }(t, o, o + 16383 > a ? a : o + 16383));
  return 1 === i ? s.push(r[(e = t[n - 1]) >> 2] + r[e << 4 & 63] + "==") : 2 === i && s.push(r[(e = (t[n - 2] << 8) + t[n - 1]) >> 10] + r[e >> 4 & 63] + r[e << 2 & 63] + "="), s.join("")
};
for (var r = [], n = [], i = "u" > typeof Uint8Array ? Uint8Array : Array, s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", o = 0, a = s.length; o < a; ++o) r[o] = s[o], n[s.charCodeAt(o)] = o;

function c(t) {
  var e = t.length;
  if (e % 4 > 0) throw Error("Invalid string. Length must be a multiple of 4");
  var r = t.indexOf("=");
  false === r && (r = e);
  var n = r === e ? 0 : 4 - r % 4;
  return [r, n]
}
n[45] = 62, n[95] = 63