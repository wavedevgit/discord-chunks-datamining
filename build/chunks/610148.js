/** Chunk was on web (https://canary.discord.comweb.a4687b32e07d48ae.js.js) **/
"use strict";
var r = n(325008),
  i = n(498576),
  o = TypeError,
  a = Object.getOwnPropertyDescriptor,
  s = r && ! function() {
    if (void 0 !== this) return !0;
    try {
      Object.defineProperty([], "length", {
        writable: !1
      }).length = 1
    } catch (e) {
      return e instanceof TypeError
    }
  }();
e.exports = s ? function(e, t) {
  if (i(e) && !a(e, "length").writable) throw o("Cannot set read only .length");
  return e.length = t
} : function(e, t) {
  return e.length = t
}