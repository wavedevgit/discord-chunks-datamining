/** Chunk was on web (https://canary.discord.comweb.38a06e56c3da3c7f.js.js) **/
"use strict";
var r = n(67867),
  i = n(548828),
  o = n(228042),
  a = n(292137),
  s = TypeError;
r({
  target: "Map",
  proto: !0,
  real: !0,
  forced: !0
}, {
  reduce: function(e) {
    var t = o(this),
      n = arguments.length < 2,
      r = n ? void 0 : arguments[1];
    if (i(e), a(t, function(i, o) {
        n ? (n = !1, r = i) : r = e(r, i, o, t)
      }), n) throw new s("Reduce of empty map with no initial value");
    return r
  }
})