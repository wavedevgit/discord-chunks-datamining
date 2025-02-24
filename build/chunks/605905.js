/** Chunk was on web (https://canary.discord.comweb.767fb3b3f685bfe8.js.js) **/
function t(e, t, n, r) {
  var i = -1,
    o = null == e ? 0 : e.length;
  for (r && o && (n = e[++i]); ++i < o;) n = t(n, e[i], i, e);
  return n
}
e.exports = t