/** Chunk was on web.js **/
"use strict";
var r = n(161581),
  i = n(972277),
  o = n(740362),
  a = n(457507),
  s = n(400957),
  l = n(769992),
  c = r.Symbol,
  u = i("wks"),
  d = l ? c.for || c : c && c.withoutSetter || a;
e.exports = function(e) {
  return o(u, e) || (u[e] = s && o(c, e) ? c[e] : d("Symbol." + e)), u[e]
}