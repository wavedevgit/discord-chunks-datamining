/** Chunk was on web (https://canary.discord.comweb.767fb3b3f685bfe8.js.js) **/
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