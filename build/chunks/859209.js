/** Chunk was on web (https://canary.discord.comweb.a4687b32e07d48ae.js.js) **/
"use strict";
var r = n(354848),
  i = n(97131),
  o = n(230364),
  a = n(492424);
e.exports = function(e, t, n, s) {
  s || (s = {});
  var l = s.enumerable,
    c = void 0 !== s.name ? s.name : t;
  if (r(n) && o(n, c, s), s.global) l ? e[t] = n : a(t, n);
  else {
    try {
      s.unsafe ? e[t] && (l = !0) : delete e[t]
    } catch (e) {}
    l ? e[t] = n : i.f(e, t, {
      value: n,
      enumerable: !1,
      configurable: !s.nonConfigurable,
      writable: !s.nonWritable
    })
  }
  return e
}