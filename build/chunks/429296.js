/** Chunk was on web (https://canary.discord.comweb.38a06e56c3da3c7f.js.js) **/
"use strict";
n.d(t, {
  Z: () => o
});
var r = 0x1fffffffffffff,
  i = /^(?:0|[1-9]\d*)$/;
let o = function(e, t) {
  var n = typeof e;
  return !!(t = null == t ? r : t) && ("number" == n || "symbol" != n && i.test(e)) && e > -1 && e % 1 == 0 && e < t
}