/** Chunk was on web (https://canary.discord.comweb.767fb3b3f685bfe8.js.js) **/
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