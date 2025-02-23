/** Chunk was on web (https://canary.discord.comweb.9f0be545d3e34886.js.js) **/
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