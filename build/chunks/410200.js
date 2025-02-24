/** Chunk was on web (https://canary.discord.comweb.38a06e56c3da3c7f.js.js) **/
var r = n(11537),
  i = n(685347);

function o(e, t, n, o) {
  var a = !n;
  n || (n = {});
  for (var s = -1, l = t.length; ++s < l;) {
    var c = t[s],
      u = o ? o(n[c], e[c], c, n, e) : void 0;
    void 0 === u && (u = e[c]), a ? i(n, c, u) : r(n, c, u)
  }
  return n
}
e.exports = o