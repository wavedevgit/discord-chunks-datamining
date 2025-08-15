/** Chunk was on web.js **/
/** chunk id: 467544, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  L: () => s
});
var Chunk312413 = require("./312413.js"),
  Chunk595691 = require("./595691.js"),
  Chunk995687 = require("./995687.js"),
  Chunk641862 = require("./641862.js"),
  s = function() {
    var e = 1 / 0,
      t = [];
    Chunk312413.C.forEach(function(n) {
      if (0 !== n.activeTargets.length) {
        var r = [];
        n.activeTargets.forEach(function(t) {
          var n = new i.A(t.target),
            s = (0, a.D)(t.target);
          r.push(n), t.lastReportedSize = (0, o.Y)(t.target, t.observedBox), s < e && (e = s)
        }), t.push(function() {
          n.callback.call(n.observer, r, n.observer)
        }), n.activeTargets.splice(0, n.activeTargets.length)
      }
    });
    for (var n = 0, s = exports; require < s.length; require++)(0, s[require])();
    return module
  }