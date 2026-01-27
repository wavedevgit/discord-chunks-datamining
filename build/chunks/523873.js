/** Chunk was on web.js **/
/** chunk id: 523873, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  R: () => s
});
var Chunk648061 = require("./648061.js"),
  Chunk860902 = require("./860902.js"),
  Chunk792843 = require("./792843.js"),
  Chunk250015 = require("./250015.js"),
  s = function() {
    var e = 1 / 0,
      t = [];
    r.g.forEach(function(n) {
      if (0 !== n.activeTargets.length) {
        var r = [];
        n.activeTargets.forEach(function(t) {
          var n = new i.Z(t.target),
            s = (0, a.n)(t.target);
          r.push(n), t.lastReportedSize = (0, o.Px)(t.target, t.observedBox), s < e && (e = s)
        }), t.push(function() {
          n.callback.call(n.observer, r, n.observer)
        }), n.activeTargets.splice(0, n.activeTargets.length)
      }
    });
    for (var n = 0, s = t; n < s.length; n++)(0, s[n])();
    return e
  }