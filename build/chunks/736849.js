/** Chunk was on web (https://canary.discord.comweb.6d4953f88f353958.js.js) **/
"use strict";
var r = n(570596),
  i = n(28886),
  o = n(621528);
e.exports = function(e, t, n) {
  var a, s;
  i(e);
  try {
    if (!(a = o(e, "return"))) {
      if ("throw" === t) throw n;
      return n
    }
    a = r(a, e)
  } catch (e) {
    s = !0, a = e
  }
  if ("throw" === t) throw n;
  if (s) throw a;
  return i(a), n
}