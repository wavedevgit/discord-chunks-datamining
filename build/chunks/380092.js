/** Chunk was on web (https://canary.discord.comweb.a4687b32e07d48ae.js.js) **/
var r = n(559969);

function i(e, t) {
  var n = this.__data__,
    i = r(n, e);
  return i < 0 ? (++this.size, n.push([e, t])) : n[i][1] = t, this
}
e.exports = i