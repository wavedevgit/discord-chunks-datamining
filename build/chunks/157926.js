/** Chunk was on web (https://canary.discord.comweb.6d4953f88f353958.js.js) **/
var r = n(779518),
  i = n(474401),
  o = n(759248),
  a = n(320249),
  s = n(584428),
  l = n(85357),
  c = n(278757),
  u = 1,
  d = 2;

function f(e, t) {
  return a(e) && s(t) ? l(c(e), t) : function(n) {
    var a = i(n, e);
    return void 0 === a && a === t ? o(n, e) : r(t, a, u | d)
  }
}
e.exports = f