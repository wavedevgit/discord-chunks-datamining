/** Chunk was on web (https://canary.discord.comweb.9f0be545d3e34886.js.js) **/
var r = n(748372);

function i(e, t, n) {
  for (var i = -1, o = e.criteria, a = t.criteria, s = o.length, l = n.length; ++i < s;) {
    var c = r(o[i], a[i]);
    if (c) {
      if (i >= l) return c;
      return c * ("desc" == n[i] ? -1 : 1)
    }
  }
  return e.index - t.index
}
e.exports = i