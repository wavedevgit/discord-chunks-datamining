/** Chunk was on web (https://canary.discord.comweb.a4687b32e07d48ae.js.js) **/
var r = n(771701);

function i(e, t) {
  return function(n, i) {
    if (null == n) return n;
    if (!r(n)) return e(n, i);
    for (var o = n.length, a = t ? o : -1, s = Object(n);
      (t ? a-- : ++a < o) && !1 !== i(s[a], a, s););
    return n
  }
}
e.exports = i