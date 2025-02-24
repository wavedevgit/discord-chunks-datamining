/** Chunk was on web (https://canary.discord.comweb.767fb3b3f685bfe8.js.js) **/
"use strict";
var r = n(67867),
  i = n(476508),
  o = n(228042),
  a = n(146321),
  s = n(292137),
  l = a.Map,
  c = a.set;
r({
  target: "Map",
  proto: !0,
  real: !0,
  forced: !0
}, {
  mapKeys: function(e) {
    var t = o(this),
      n = i(e, arguments.length > 1 ? arguments[1] : void 0),
      r = new l;
    return s(t, function(e, i) {
      c(r, n(e, i, t), e)
    }), r
  }
})