/** Chunk was on web (https://canary.discord.comweb.38a06e56c3da3c7f.js.js) **/
"use strict";
var t = function(e, t, n, r, i, o, a, s) {
  if (!e) {
    var l;
    if (void 0 === t) l = Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
    else {
      var c = [n, r, i, o, a, s],
        u = 0;
      (l = Error(t.replace(/%s/g, function() {
        return c[u++]
      }))).name = "Invariant Violation"
    }
    throw l.framesToPop = 1, l
  }
};
e.exports = t