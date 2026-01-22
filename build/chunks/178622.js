/** Chunk was on 47950 **/
/** chunk id: 178622, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => a
});
var Chunk292299 = require("./292299.js"),
  Chunk841677 = require("./841677.js");
let a = function(e) {
  return (0, n.A)(function(t, r) {
    var n = false,
      a = r.length,
      i = a > 1 ? r[a - 1] : true,
      l = a > 2 ? r[2] : true;
    for (i = e.length > 3 && "function" == typeof i ? (a--, i) : true, l && (0, o.A)(r[0], r[1], l) && (i = a < 3 ? true : i, a = 1), t = Object(t); ++n < a;) {
      var s = r[n];
      s && e(t, s, n, i)
    }
    return t
  })
}