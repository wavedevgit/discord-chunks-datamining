/** Chunk was on 23357 **/
"use strict";
var r = n(67867),
  o = n(548828),
  a = n(228042),
  i = n(292137),
  s = TypeError;
r({
  target: "Map",
  proto: !0,
  real: !0,
  forced: !0
}, {
  reduce: function(e) {
    var t = a(this),
      n = arguments.length < 2,
      r = n ? void 0 : arguments[1];
    if (o(e), i(t, function(o, a) {
        n ? (n = !1, r = o) : r = e(r, o, a, t)
      }), n) throw new s("Reduce of empty map with no initial value");
    return r
  }
})