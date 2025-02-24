/** Chunk was on web (https://canary.discord.comweb.a4687b32e07d48ae.js.js) **/
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