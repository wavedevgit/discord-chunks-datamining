/** Chunk was on web (https://canary.discord.comweb.6d4953f88f353958.js.js) **/
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