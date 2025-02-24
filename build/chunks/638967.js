/** Chunk was on web (https://canary.discord.comweb.38a06e56c3da3c7f.js.js) **/
"use strict";
var r = n(67867),
  i = n(476508),
  o = n(228042),
  a = n(292137);
r({
  target: "Map",
  proto: !0,
  real: !0,
  forced: !0
}, {
  findKey: function(e) {
    var t = o(this),
      n = i(e, arguments.length > 1 ? arguments[1] : void 0),
      r = a(t, function(e, r) {
        if (n(e, r, t)) return {
          key: r
        }
      }, !0);
    return r && r.key
  }
})