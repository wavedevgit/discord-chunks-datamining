/** Chunk was on web (https://canary.discord.comweb.38a06e56c3da3c7f.js.js) **/
var r = n(543744),
  i = n(436091);

function o(e, t) {
  var n = -1,
    o = i(e) ? Array(e.length) : [];
  return r(e, function(e, r, i) {
    o[++n] = t(e, r, i)
  }), o
}
e.exports = o