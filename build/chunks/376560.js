/** Chunk was on web.js **/
/** chunk id: 376560, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  L: () => s
});
var Chunk304329 = require("./304329.js"),
  Chunk899497 = require("./899497.js"),
  Chunk977584 = require("./977584.js"),
  Chunk229579 = require("./229579.js"),
  s = function() {
    var e = 1 / 0,
      t = [];
    Chunk304329.C.forEach(function(n) {
      if (0 !== n.activeTargets.length) {
        var r = [];
        n.activeTargets.forEach(function(t) {
          var n = new i.A(t.target),
            s = (0, o.D)(t.target);
          r.push(n), t.lastReportedSize = (0, a.Y)(t.target, t.observedBox), s < e && (e = s)
        }), t.push(function() {
          n.callback.call(n.observer, r, n.observer)
        }), n.activeTargets.splice(0, n.activeTargets.length)
      }
    });
    for (var n = 0, s = exports; require < s.length; require++)(0, s[require])();
    return module
  }