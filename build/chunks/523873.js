/** Chunk was on web.js **/
/** chunk id: 523873, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  R: () => o
});
var Chunk648061 = require("./648061.js"),
  Chunk860902 = require("./860902.js"),
  Chunk792843 = require("./792843.js"),
  Chunk250015 = require("./250015.js"),
  o = function() {
    var e = 1 / 0,
      t = [];
    r.g.forEach(function(n) {
      if (0 !== n.activeTargets.length) {
        var r = [];
        n.activeTargets.forEach(function(t) {
          var n = new i.Z(t.target),
            o = (0, a.n)(t.target);
          r.push(n), t.lastReportedSize = (0, s.Px)(t.target, t.observedBox), o < e && (e = o)
        }), t.push(function() {
          n.callback.call(n.observer, r, n.observer)
        }), n.activeTargets.splice(0, n.activeTargets.length)
      }
    });
    for (var n = 0, o = t; n < o.length; n++)(0, o[n])();
    return e
  }