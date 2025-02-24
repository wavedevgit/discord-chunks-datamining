/** Chunk was on web (https://canary.discord.comweb.767fb3b3f685bfe8.js.js) **/
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