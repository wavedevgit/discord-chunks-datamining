/** Chunk was on web.js **/
/** chunk id: 951136, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  T: () => o
});
var Chunk304329 = require("./304329.js"),
  Chunk977584 = require("./977584.js"),
  o = function(e) {
    r.C.forEach(function(t) {
      t.activeTargets.splice(0, t.activeTargets.length), t.skippedTargets.splice(0, t.skippedTargets.length), t.observationTargets.forEach(function(n) {
        n.isActive() && ((0, i.D)(n.target) > e ? t.activeTargets.push(n) : t.skippedTargets.push(n))
      })
    })
  }