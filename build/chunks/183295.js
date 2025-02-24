/** Chunk was on web (https://canary.discord.comweb.38a06e56c3da3c7f.js.js) **/
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