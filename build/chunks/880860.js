/** Chunk was on web (https://canary.discord.comweb.767fb3b3f685bfe8.js.js) **/
"use strict";
var r = n(67867),
  i = n(228042),
  o = n(146321),
  a = o.get,
  s = o.has,
  l = o.set;
r({
  target: "Map",
  proto: !0,
  real: !0,
  forced: !0
}, {
  emplace: function(e, t) {
    var n, r, o = i(this);
    return s(o, e) ? (n = a(o, e), "update" in t && (n = t.update(n, e, o), l(o, e, n)), n) : (r = t.insert(e, o), l(o, e, r), r)
  }
})