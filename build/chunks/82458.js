/** Chunk was on web.js **/
/** chunk id: 82458, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  J: () => c
});
var Chunk837401 = require("./837401.js"),
  Chunk363400 = require("./363400.js"),
  Chunk746595 = require("./746595.js"),
  Chunk424187 = require("./424187.js"),
  o = new WeakMap,
  l = function(e, t) {
    for (var n = 0; n < e.length; n += 1)
      if (e[n].target === t) return n;
    return false
  },
  c = function() {
    function e() {}
    return e.connect = function(e, t) {
      var n = new a.M(e, t);
      o.set(e, n)
    }, e.observe = function(e, t, n) {
      var a = o.get(e),
        c = 0 === a.observationTargets.length;
      0 > l(a.observationTargets, t) && (c && s.g.push(a), a.observationTargets.push(new i.V(t, n && n.box)), (0, r.L)(1), r.c.schedule())
    }, e.unobserve = function(e, t) {
      var n = o.get(e),
        i = l(n.observationTargets, t),
        a = 1 === n.observationTargets.length;
      i >= 0 && (a && s.g.splice(s.g.indexOf(n), 1), n.observationTargets.splice(i, 1), (0, r.L)(false))
    }, e.disconnect = function(e) {
      var t = this,
        n = o.get(e);
      n.observationTargets.slice().forEach(function(n) {
        return t.unobserve(e, n.target)
      }), n.activeTargets.splice(0, n.activeTargets.length)
    }, e
  }()