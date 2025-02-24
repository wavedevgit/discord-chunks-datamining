/** Chunk was on web (https://canary.discord.comweb.ada7066db2976a65.js.js) **/
var t = 0x1fffffffffffff,
  n = /^(?:0|[1-9]\d*)$/;

function r(e, r) {
  var i = typeof e;
  return !!(r = null == r ? t : r) && ("number" == i || "symbol" != i && n.test(e)) && e > -1 && e % 1 == 0 && e < r
}
e.exports = r