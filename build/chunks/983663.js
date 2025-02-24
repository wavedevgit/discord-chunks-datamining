/** Chunk was on web (https://canary.discord.comweb.ada7066db2976a65.js.js) **/
function t(e, t, n, r) {
  for (var i = e.length, o = n + (r ? 1 : -1); r ? o-- : ++o < i;)
    if (t(e[o], o, e)) return o;
  return -1
}
e.exports = t