/** Chunk was on web (https://canary.discord.comweb.6d4953f88f353958.js.js) **/
var r = n(796581),
  i = n(149912);

function o(e, t, n, a, s) {
  var l = -1,
    c = e.length;
  for (n || (n = i), s || (s = []); ++l < c;) {
    var u = e[l];
    t > 0 && n(u) ? t > 1 ? o(u, t - 1, n, a, s) : r(s, u) : a || (s[s.length] = u)
  }
  return s
}
e.exports = o