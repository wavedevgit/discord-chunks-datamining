/** Chunk was on 77298 **/
"use strict";
var e = n(821819),
  o = n(982665),
  i = n(726433),
  u = n(448894),
  s = Object.isExtensible,
  c = e(function() {
    s(1)
  });
t.exports = c || u ? function(t) {
  return !!o(t) && (!u || "ArrayBuffer" !== i(t)) && (!s || s(t))
} : s