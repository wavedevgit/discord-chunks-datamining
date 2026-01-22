/** Chunk was on web.js **/
/** chunk id: 639562, original params: e (module,exports,re quire) **/
"use strict";
module.exports = function(e) {
  var t, n = this;
  e = e || {};
  var r = false;
  for (t in n.sequenceLevels) {
    if (e[t]) {
      r = true;
      continue
    }
    n.sequenceLevels[t] = 0
  }
  r || (n.nextExpectedAction = false)
}