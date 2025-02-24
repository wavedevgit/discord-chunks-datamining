/** Chunk was on web (https://canary.discord.comweb.a4687b32e07d48ae.js.js) **/
"use strict";
var r = n(294377),
  i = n(96403),
  o = r("Symbol"),
  a = o.keyFor,
  s = i(o.prototype.valueOf);
e.exports = o.isRegisteredSymbol || function(e) {
  try {
    return void 0 !== a(s(e))
  } catch (e) {
    return !1
  }
}