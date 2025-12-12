/** Chunk was on web.js **/
/** chunk id: 658722, original params: e (module,exports,re quire) **/
"use strict";
module.exports = function(e, t) {
  var n = t.length,
    r = e.length;
  if (r > n) returnfalse;
  if (r === n) return e === t;
  n: for (var i = 0, a = 0; i < r; i++) {
    for (var o = e.charCodeAt(i); a < n;)
      if (t.charCodeAt(a++) === o) continue n;
    returnfalse
  }
  returntrue
}