/** Chunk was on web (https://canary.discord.comweb.9f0be545d3e34886.js.js) **/
"use strict";
e.exports = function(e) {
  var t, n = this;
  e = e || {};
  var r = !1;
  for (t in n.sequenceLevels) {
    if (e[t]) {
      r = !0;
      continue
    }
    n.sequenceLevels[t] = 0
  }
  r || (n.nextExpectedAction = !1)
}