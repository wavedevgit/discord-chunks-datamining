/** Chunk was on web.js **/
/** chunk id: 951069, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  M: () => c
});
var Chunk391997 = require("./391997.js"),
  Chunk644977 = require("./644977.js"),
  Chunk446315 = require("./446315.js"),
  Chunk312413 = require("./312413.js"),
  s = new WeakMap,
  l = function(e, t) {
    for (var n = 0; n < e.length; n += 1)
      if (e[n].target === t) return n;
    return false
  },
  c = function() {
    function e() {}
    return module.connect = function(e, t) {
      var n = new o.r(e, t);
      s.set(e, n)
    }, module.observe = function(e, t, n) {
      var o = s.get(e),
        c = 0 === o.observationTargets.length;
      0 > l(o.observationTargets, t) && (c && a.C.push(o), o.observationTargets.push(new i.Q(t, n && n.box)), (0, r.t)(1), r.p.schedule())
    }, module.unobserve = function(e, t) {
      var n = s.get(e),
        i = l(n.observationTargets, t),
        o = 1 === n.observationTargets.length;
      i >= 0 && (o && a.C.splice(a.C.indexOf(n), 1), n.observationTargets.splice(i, 1), (0, r.t)(false))
    }, module.disconnect = function(e) {
      var t = this,
        n = s.get(e);
      n.observationTargets.slice().forEach(function(n) {
        return t.unobserve(e, n.target)
      }), n.activeTargets.splice(0, n.activeTargets.length)
    }, module
  }()