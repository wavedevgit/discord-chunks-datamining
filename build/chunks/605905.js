/** Chunk was on web (https://canary.discord.comweb.38a06e56c3da3c7f.js.js) **/
function t(e, t, n, r) {
  var i = -1,
    o = null == e ? 0 : e.length;
  for (r && o && (n = e[++i]); ++i < o;) n = t(n, e[i], i, e);
  return n
}
e.exports = t