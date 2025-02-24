/** Chunk was on web (https://canary.discord.comweb.767fb3b3f685bfe8.js.js) **/
var r = n(815869),
  i = Array.prototype.splice;

function o(e) {
  var t = this.__data__,
    n = r(t, e);
  return !(n < 0) && (n == t.length - 1 ? t.pop() : i.call(t, n, 1), --this.size, !0)
}
e.exports = o