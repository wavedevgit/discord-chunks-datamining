/** Chunk was on web (https://canary.discord.comweb.a4687b32e07d48ae.js.js) **/
"use strict";
n.d(t, {
  T: () => o
});
var r = n(304329),
  i = n(977584),
  o = function(e) {
    r.C.forEach(function(t) {
      t.activeTargets.splice(0, t.activeTargets.length), t.skippedTargets.splice(0, t.skippedTargets.length), t.observationTargets.forEach(function(n) {
        n.isActive() && ((0, i.D)(n.target) > e ? t.activeTargets.push(n) : t.skippedTargets.push(n))
      })
    })
  }