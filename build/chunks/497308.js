/** Chunk was on web (https://canary.discord.comweb.9f0be545d3e34886.js.js) **/
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