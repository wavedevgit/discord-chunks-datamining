/** Chunk was on web.js **/
/** chunk id: 540499, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  L: () => s
});
var Chunk876026 = require("./876026.js"),
  Chunk518285 = require("./518285.js"),
  Chunk412169 = require("./412169.js"),
  Chunk219845 = require("./219845.js"),
  s = function() {
    var e = 1 / 0,
      t = [];
    r.C.forEach(function(n) {
      if (0 !== n.activeTargets.length) {
        var r = [];
        n.activeTargets.forEach(function(t) {
          var n = new i.A(t.target),
            s = (0, a.D)(t.target);
          r.push(n), t.lastReportedSize = (0, o.Y9)(t.target, t.observedBox), s < e && (e = s)
        }), t.push(function() {
          n.callback.call(n.observer, r, n.observer)
        }), n.activeTargets.splice(0, n.activeTargets.length)
      }
    });
    for (var n = 0, s = t; n < s.length; n++)(0, s[n])();
    return e
  }