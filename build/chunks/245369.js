/** Chunk was on web (https://canary.discord.comweb.767fb3b3f685bfe8.js.js) **/
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