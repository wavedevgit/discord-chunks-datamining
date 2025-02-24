/** Chunk was on web (https://canary.discord.comweb.767fb3b3f685bfe8.js.js) **/
var r = n(733892),
  i = n(102423),
  o = n(164400),
  a = n(844781),
  s = n(92801),
  l = n(849513),
  c = n(828091),
  u = 1,
  d = 2;

function f(e, t) {
  return a(e) && s(t) ? l(c(e), t) : function(n) {
    var a = i(n, e);
    return void 0 === a && a === t ? o(n, e) : r(t, a, u | d)
  }
}
e.exports = f