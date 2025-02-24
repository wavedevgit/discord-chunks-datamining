/** Chunk was on web (https://canary.discord.comweb.38a06e56c3da3c7f.js.js) **/
var r = n(815869);

function i(e, t) {
  var n = this.__data__,
    i = r(n, e);
  return i < 0 ? (++this.size, n.push([e, t])) : n[i][1] = t, this
}
e.exports = i