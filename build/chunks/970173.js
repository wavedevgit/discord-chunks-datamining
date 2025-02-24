/** Chunk was on web (https://canary.discord.comweb.38a06e56c3da3c7f.js.js) **/
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