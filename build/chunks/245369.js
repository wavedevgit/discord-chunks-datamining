/** Chunk was on web (https://canary.discord.comweb.38a06e56c3da3c7f.js.js) **/
"use strict";
n.d(t, {
  Z: () => i
});
var r = n(670097);
let i = function(e, t) {
  return function(n, i) {
    if (null == n) return n;
    if (!(0, r.Z)(n)) return e(n, i);
    for (var o = n.length, a = t ? o : -1, s = Object(n);
      (t ? a-- : ++a < o) && !1 !== i(s[a], a, s););
    return n
  }
}