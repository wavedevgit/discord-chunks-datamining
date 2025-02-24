/** Chunk was on web (https://canary.discord.comweb.895a2488cd77ea6e.js.js) **/
var r = n(585606),
  i = n(443735),
  o = n(402428),
  a = n(207757),
  s = n(830911),
  l = n(556868),
  c = Object.prototype.hasOwnProperty;

function u(e, t) {
  var n = o(e),
    u = !n && i(e),
    d = !n && !u && a(e),
    f = !n && !u && !d && l(e),
    p = n || u || d || f,
    _ = p ? r(e.length, String) : [],
    h = _.length;
  for (var m in e)(t || c.call(e, m)) && !(p && ("length" == m || d && ("offset" == m || "parent" == m) || f && ("buffer" == m || "byteLength" == m || "byteOffset" == m) || s(m, h))) && _.push(m);
  return _
}
e.exports = u