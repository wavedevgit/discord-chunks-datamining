/** Chunk was on web (https://canary.discord.comweb.767fb3b3f685bfe8.js.js) **/
"use strict";
var r = n(690244),
  i = r("%Number%"),
  o = r("%RegExp%"),
  a = r("%TypeError%"),
  s = r("%parseInt%"),
  l = n(192853),
  c = n(385097),
  u = l("String.prototype.slice"),
  d = c(/^0b[01]+$/i),
  f = c(/^0o[0-7]+$/i),
  p = c(/^[-+]0x[0-9a-f]+$/i),
  _ = c(new o("[\x85​￾]", "g")),
  h = n(761652),
  m = n(632384);
e.exports = function e(t) {
  if ("String" !== m(t)) throw new a("Assertion failed: `argument` is not a String");
  if (d(t)) return i(s(u(t, 2), 2));
  if (f(t)) return i(s(u(t, 2), 8));
  if (_(t) || p(t)) return NaN;
  var n = h(t);
  return n !== t ? e(n) : i(t)
}