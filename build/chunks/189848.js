/** Chunk was on web.js **/
/** chunk id: 189848, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  T: () => a
});
var Chunk312413 = require("./312413.js"),
  Chunk995687 = require("./995687.js"),
  a = function(e) {
    r.C.forEach(function(t) {
      t.activeTargets.splice(0, t.activeTargets.length), t.skippedTargets.splice(0, t.skippedTargets.length), t.observationTargets.forEach(function(n) {
        n.isActive() && ((0, i.D)(n.target) > e ? t.activeTargets.push(n) : t.skippedTargets.push(n))
      })
    })
  }