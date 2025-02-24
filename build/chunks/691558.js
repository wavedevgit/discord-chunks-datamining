/** Chunk was on web (https://canary.discord.comweb.a4687b32e07d48ae.js.js) **/
"use strict";
var r = n(926515),
  i = n(622281),
  o = n(323979),
  a = n(995739),
  s = n(337856),
  l = n(641236),
  c = TypeError,
  u = l("toPrimitive");
e.exports = function(e, t) {
  if (!i(e) || o(e)) return e;
  var n, l = a(e, u);
  if (l) {
    if (void 0 === t && (t = "default"), !i(n = r(l, e, t)) || o(n)) return n;
    throw c("Can't convert object to primitive value")
  }
  return void 0 === t && (t = "number"), s(e, t)
}