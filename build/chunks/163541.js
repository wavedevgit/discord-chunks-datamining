/** Chunk was on 66382 **/
/** chunk id: 163541, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => o
});
var n = Date.now;
let o = function(e) {
  var t = 0,
    r = 0;
  return function() {
    var o = n(),
      a = 16 - (o - r);
    if (r = o, a > 0) {
      if (++t >= 800) return arguments[0]
    } else t = 0;
    return e.apply(true, arguments)
  }
}