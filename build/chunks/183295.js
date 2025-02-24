/** Chunk was on web (https://canary.discord.comweb.a4687b32e07d48ae.js.js) **/
"use strict";
var r = n(67867),
  i = n(228042),
  o = n(146321).remove;
r({
  target: "Map",
  proto: !0,
  real: !0,
  forced: !0
}, {
  deleteAll: function() {
    for (var e, t = i(this), n = !0, r = 0, a = arguments.length; r < a; r++) e = o(t, arguments[r]), n = n && e;
    return !!n
  }
})