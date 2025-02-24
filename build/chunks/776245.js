/** Chunk was on web (https://canary.discord.comweb.ada7066db2976a65.js.js) **/
"use strict";
var r = n(926515),
  i = n(24033),
  o = n(995739);
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