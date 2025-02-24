/** Chunk was on web (https://canary.discord.comweb.6d4953f88f353958.js.js) **/
var r = n(625898),
  i = n(771701);

function o(e, t) {
  var n = -1,
    o = i(e) ? Array(e.length) : [];
  return r(e, function(e, r, i) {
    o[++n] = t(e, r, i)
  }), o
}
e.exports = o