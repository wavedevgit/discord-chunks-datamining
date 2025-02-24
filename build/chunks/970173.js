/** Chunk was on web (https://canary.discord.comweb.6d4953f88f353958.js.js) **/
"use strict";
var r = n(192291),
  i = n(49693),
  o = n(959318),
  a = r.aTypedArray;
(0, r.exportTypedArrayMethod)("at", function(e) {
  var t = a(this),
    n = i(t),
    r = o(e),
    s = r >= 0 ? r : n + r;
  return s < 0 || s >= n ? void 0 : t[s]
})