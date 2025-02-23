/** Chunk was on web (https://canary.discord.comweb.9f0be545d3e34886.js.js) **/
"use strict";
var r = n(67867),
  i = n(570596),
  o = n(653457);
r({
  target: "Promise",
  stat: !0,
  forced: n(732116).CONSTRUCTOR
}, {
  reject: function(e) {
    var t = o.f(this);
    return i(t.reject, void 0, e), t.promise
  }
})