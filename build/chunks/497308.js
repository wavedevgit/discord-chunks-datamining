/** Chunk was on web (https://canary.discord.comweb.38a06e56c3da3c7f.js.js) **/
"use strict";
var r = n(821819),
  i = n(982665),
  o = n(726433),
  a = n(448894),
  s = Object.isExtensible,
  l = r(function() {
    s(1)
  });
e.exports = l || a ? function(e) {
  return !!i(e) && (!a || "ArrayBuffer" !== o(e)) && (!s || s(e))
} : s