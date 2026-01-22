/** Chunk was on web.js **/
/** chunk id: 91871, original params: e (module,exports,re quire) **/
"use strict";
module.exports = function(e, t) {
  var n = t.length,
    r = e.length;
  if (r > n) returnfalse;
  if (r === n) return e === t;
  n: for (var i = 0, a = 0; i < r; i++) {
    for (var s = e.charCodeAt(i); a < n;)
      if (t.charCodeAt(a++) === s) continue n;
    returnfalse
  }
  returntrue
}