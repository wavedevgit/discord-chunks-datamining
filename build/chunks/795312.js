/** Chunk was on web (https://canary.discord.comweb.38a06e56c3da3c7f.js.js) **/
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