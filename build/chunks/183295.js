/** Chunk was on 23357 **/
"use strict";
var r = n(766362),
  o = n(228042),
  a = n(146321).remove;
r({
  target: "Map",
  proto: !0,
  real: !0,
  forced: !0
}, {
  deleteAll: function() {
    for (var e, t = o(this), n = !0, r = 0, i = arguments.length; r < i; r++) e = a(t, arguments[r]), n = n && e;
    return !!n
  }
})