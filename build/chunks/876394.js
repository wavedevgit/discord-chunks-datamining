/** Chunk was on web (https://canary.discord.comweb.6d4953f88f353958.js.js) **/
"use strict";
var r = n(67867),
  i = n(96403),
  o = n(952256),
  a = i([].reverse),
  s = [1, 2];
r({
  target: "Array",
  proto: !0,
  forced: String(s) === String(s.reverse())
}, {
  reverse: function() {
    return o(this) && (this.length = this.length), a(this)
  }
})