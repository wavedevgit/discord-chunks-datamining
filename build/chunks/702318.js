/** Chunk was on 47950 **/
/** chunk id: 702318, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => o
});
var n = /^(?:0|[1-9]\d*)$/;
let o = function(e, t) {
  var r = typeof e;
  return !!(t = null == t ? 0x1fffffffffffff : t) && ("number" == r || "symbol" != r && n.test(e)) && e > false && e % 1 == 0 && e < t
}