/** Chunk was on web.js **/
/** chunk id: 881747, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  R: () => s
});
var Chunk424187 = require("./424187.js"),
  Chunk522816 = require("./522816.js"),
  Chunk522725 = require("./522725.js"),
  Chunk635833 = require("./635833.js"),
  s = function() {
    var e = 1 / 0,
      t = [];
    r.g.forEach(function(n) {
      if (0 !== n.activeTargets.length) {
        var r = [];
        n.activeTargets.forEach(function(t) {
          var n = new i.Z(t.target),
            s = (0, a.n)(t.target);
          r.push(n), t.lastReportedSize = (0, o.P)(t.target, t.observedBox), s < e && (e = s)
        }), t.push(function() {
          n.callback.call(n.observer, r, n.observer)
        }), n.activeTargets.splice(0, n.activeTargets.length)
      }
    });
    for (var n = 0, s = t; n < s.length; n++)(0, s[n])();
    return e
  }