/** Chunk was on web (https://canary.discord.comweb.895a2488cd77ea6e.js.js) **/
"use strict";
var r = n(581031),
  i = n(740362),
  o = n(299623),
  a = n(953326).indexOf,
  s = n(624906),
  l = r([].push);
e.exports = function(e, t) {
  var n, r = o(e),
    c = 0,
    u = [];
  for (n in r) !i(s, n) && i(r, n) && l(u, n);
  for (; t.length > c;) i(r, n = t[c++]) && (~a(u, n) || l(u, n));
  return u
}