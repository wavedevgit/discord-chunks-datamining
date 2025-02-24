/** Chunk was on web (https://canary.discord.comweb.a4687b32e07d48ae.js.js) **/
"use strict";
var r = n(67867),
  i = n(43740),
  o = n(818140).indexOf,
  a = n(54659),
  s = i([].indexOf),
  l = !!s && 1 / s([1], 1, -0) < 0;
r({
  target: "Array",
  proto: !0,
  forced: l || !a("indexOf")
}, {
  indexOf: function(e) {
    var t = arguments.length > 1 ? arguments[1] : void 0;
    return l ? s(this, e, t) || 0 : o(this, e, t)
  }
})