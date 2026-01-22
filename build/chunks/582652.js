/** Chunk was on web.js **/
/** chunk id: 582652, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  J: () => c
});
var Chunk336527 = require("./336527.js"),
  Chunk335146 = require("./335146.js"),
  Chunk428541 = require("./428541.js"),
  Chunk648061 = require("./648061.js"),
  o = new Map,
  l = function(e, t) {
    for (var n = 0; n < e.length; n += 1)
      if (e[n].target === t) return n;
    return false
  },
  c = function() {
    function e() {}
    return e.connect = function(e, t) {
      var n = new a.M(e, t);
      s.g.push(n), o.set(e, n)
    }, e.observe = function(e, t, n) {
      if (o.has(e)) {
        var a = o.get(e);
        0 > l(a.observationTargets, t) && (a.observationTargets.push(new i.V(t, n && n.box)), (0, r.L)(1), r.c.schedule())
      }
    }, e.unobserve = function(e, t) {
      if (o.has(e)) {
        var n = o.get(e),
          i = l(n.observationTargets, t);
        i >= 0 && (n.observationTargets.splice(i, 1), (0, r.L)(false))
      }
    }, e.disconnect = function(e) {
      if (o.has(e)) {
        var t = o.get(e);
        s.g.splice(s.g.indexOf(t), 1), o.delete(e), (0, r.L)(-t.observationTargets.length)
      }
    }, e
  }()