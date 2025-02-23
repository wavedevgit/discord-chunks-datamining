/** Chunk was on web (https://canary.discord.comweb.9f0be545d3e34886.js.js) **/
var r = n(413135).Buffer;
e.exports = function(e, t) {
  for (var n = Math.min(e.length, t.length), i = new r(n), o = 0; o < n; ++o) i[o] = e[o] ^ t[o];
  return i
}