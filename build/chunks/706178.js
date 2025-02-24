/** Chunk was on web (https://canary.discord.comweb.ada7066db2976a65.js.js) **/
"use strict";
var r = n(444675),
  i = 65536,
  o = 0xffffffff;

function a() {
  throw Error("Secure random number generation is not supported by this browser.\nUse Chrome, Firefox or Internet Explorer 11")
}
var s = n(957578).Buffer,
  l = n.g.crypto || n.g.msCrypto;

function c(e, t) {
  if (e > o) throw RangeError("requested too many random bytes");
  var n = s.allocUnsafe(e);
  if (e > 0) {
    if (e > i)
      for (var a = 0; a < e; a += i) l.getRandomValues(n.slice(a, a + i));
    else l.getRandomValues(n)
  }
  return "function" == typeof t ? r.nextTick(function() {
    t(null, n)
  }) : n
}
l && l.getRandomValues ? e.exports = c : e.exports = a