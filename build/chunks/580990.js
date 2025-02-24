/** Chunk was on web (https://canary.discord.comweb.38a06e56c3da3c7f.js.js) **/
"use strict";
var r = n(67867),
  i = n(141603),
  o = n(538769),
  a = n(858698),
  s = n(293303),
  l = n(56684),
  c = s("symbol-to-string-registry");
r({
  target: "Symbol",
  stat: !0,
  forced: !l
}, {
  keyFor: function(e) {
    if (!o(e)) throw TypeError(a(e) + " is not a symbol");
    if (i(c, e)) return c[e]
  }
})