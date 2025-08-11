/** Chunk was on web.js **/
/** chunk id: 508567, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  T: () => a
});
var Chunk876026 = require("./876026.js"),
  Chunk412169 = require("./412169.js"),
  Chunk219845 = require("./219845.js"),
  a = function(e) {
    o.Fs.clear(), r.C.forEach(function(t) {
      t.activeTargets.splice(0, t.activeTargets.length), t.skippedTargets.splice(0, t.skippedTargets.length), t.observationTargets.forEach(function(n) {
        n.isActive() && ((0, i.D)(n.target) > e ? t.activeTargets.push(n) : t.skippedTargets.push(n))
      })
    })
  }