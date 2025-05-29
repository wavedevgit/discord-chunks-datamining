/** Chunk was on 70791 **/
e.byteLength = function(t) {
  var e = c(t),
    s = e[0],
    i = e[1];
  return (s + i) * 3 / 4 - i
}, e.toByteArray = function(t) {
  var e, s, r = c(t),
    o = r[0],
    a = r[1],
    h = new n((o + a) * 3 / 4 - a),
    u = 0,
    _ = a > 0 ? o - 4 : o;
  for (s = 0; s < _; s += 4) e = i[t.charCodeAt(s)] << 18 | i[t.charCodeAt(s + 1)] << 12 | i[t.charCodeAt(s + 2)] << 6 | i[t.charCodeAt(s + 3)], h[u++] = e >> 16 & 255, h[u++] = e >> 8 & 255, h[u++] = 255 & e;
  return 2 === a && (e = i[t.charCodeAt(s)] << 2 | i[t.charCodeAt(s + 1)] >> 4, h[u++] = 255 & e), 1 === a && (e = i[t.charCodeAt(s)] << 10 | i[t.charCodeAt(s + 1)] << 4 | i[t.charCodeAt(s + 2)] >> 2, h[u++] = e >> 8 & 255, h[u++] = 255 & e), h
}, e.fromByteArray = function(t) {
  for (var e, i = t.length, n = i % 3, r = [], o = 0, a = i - n; o < a; o += 16383) r.push(function(t, e, i) {
    for (var n, r = [], o = e; o < i; o += 3) n = (t[o] << 16 & 0xff0000) + (t[o + 1] << 8 & 65280) + (255 & t[o + 2]), r.push(s[n >> 18 & 63] + s[n >> 12 & 63] + s[n >> 6 & 63] + s[63 & n]);
    return r.join("")
  }(t, o, o + 16383 > a ? a : o + 16383));
  return 1 === n ? r.push(s[(e = t[i - 1]) >> 2] + s[e << 4 & 63] + "==") : 2 === n && r.push(s[(e = (t[i - 2] << 8) + t[i - 1]) >> 10] + s[e >> 4 & 63] + s[e << 2 & 63] + "="), r.join("")
};
for (var s = [], i = [], n = "undefined" != typeof Uint8Array ? Uint8Array : Array, r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", o = 0, a = r.length; o < a; ++o) s[o] = r[o], i[r.charCodeAt(o)] = o;

function c(t) {
  var e = t.length;
  if (e % 4 > 0) throw Error("Invalid string. Length must be a multiple of 4");
  var s = t.indexOf("="); - 1 === s && (s = e);
  var i = s === e ? 0 : 4 - s % 4;
  return [s, i]
}
i[45] = 62, i[95] = 63