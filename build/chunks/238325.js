/** Chunk was on web (https://canary.discord.comweb.ada7066db2976a65.js.js) **/
"use strict";
var r = n(67867),
  i = n(96403),
  o = Date,
  a = i(o.prototype.getTime);
r({
  target: "Date",
  stat: !0
}, {
  now: function() {
    return a(new o)
  }
})