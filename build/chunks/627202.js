/** Chunk was on web (https://canary.discord.comweb.6d4953f88f353958.js.js) **/
function t(e, t, n, r) {
  for (var i = e.length, o = n + (r ? 1 : -1); r ? o-- : ++o < i;)
    if (t(e[o], o, e)) return o;
  return -1
}
e.exports = t