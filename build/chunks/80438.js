/** Chunk was on web (https://canary.discord.comweb.6d4953f88f353958.js.js) **/
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