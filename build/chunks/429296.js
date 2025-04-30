/** Chunk was on 26436 **/
"use strict";
r.d(t, {
  Z: () => o
});
var n = /^(?:0|[1-9]\d*)$/;
let o = function(e, t) {
  var r = typeof e;
  return !!(t = null == t ? 0x1fffffffffffff : t) && ("number" == r || "symbol" != r && n.test(e)) && e > -1 && e % 1 == 0 && e < t
}