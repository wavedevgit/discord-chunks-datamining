/** Chunk was on web (https://canary.discord.comweb.a4687b32e07d48ae.js.js) **/
var r = n(703284),
  i = n(771701),
  o = n(830911),
  a = n(706627);

function s(e, t, n) {
  if (!a(n)) return !1;
  var s = typeof t;
  return ("number" == s ? !!(i(n) && o(t, n.length)) : "string" == s && t in n) && r(n[t], e)
}
e.exports = s