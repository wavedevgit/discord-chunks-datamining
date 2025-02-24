/** Chunk was on web (https://canary.discord.comweb.6d4953f88f353958.js.js) **/
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