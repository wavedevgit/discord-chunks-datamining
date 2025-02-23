/** Chunk was on web (https://canary.discord.comweb.9f0be545d3e34886.js.js) **/
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