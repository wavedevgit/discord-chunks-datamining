/** Chunk was on web (https://canary.discord.comweb.767fb3b3f685bfe8.js.js) **/
var r = n(413135).Buffer;
e.exports = function(e, t) {
  for (var n = Math.min(e.length, t.length), i = new r(n), o = 0; o < n; ++o) i[o] = e[o] ^ t[o];
  return i
}