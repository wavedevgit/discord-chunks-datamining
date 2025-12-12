/** Chunk was on web.js **/
/** chunk id: 807153, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  M: () => c
});
var Chunk684342 = require("./684342.js"),
  Chunk391756 = require("./391756.js"),
  Chunk797578 = require("./797578.js"),
  Chunk876026 = require("./876026.js"),
  s = new Map,
  l = function(e, t) {
    for (var n = 0; n < e.length; n += 1)
      if (e[n].target === t) return n;
    return false
  },
  c = function() {
    function e() {}
    return module.connect = function(e, t) {
      var n = new a.r(e, t);
      o.C.push(n), s.set(e, n)
    }, module.observe = function(e, t, n) {
      if (s.has(e)) {
        var a = s.get(e);
        0 > l(a.observationTargets, t) && (a.observationTargets.push(new i.Q(t, n && n.box)), (0, r.t)(1), r.p.schedule())
      }
    }, module.unobserve = function(e, t) {
      if (s.has(e)) {
        var n = s.get(e),
          i = l(n.observationTargets, t);
        i >= 0 && (n.observationTargets.splice(i, 1), (0, r.t)(false))
      }
    }, module.disconnect = function(e) {
      if (s.has(e)) {
        var t = s.get(e);
        o.C.splice(o.C.indexOf(t), 1), s.delete(e), (0, r.t)(-t.observationTargets.length)
      }
    }, module
  }()