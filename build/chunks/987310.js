/** Chunk was on 66382 **/
/** chunk id: 987310, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => s
});
var Chunk195168 = require("./195168.js"),
  o = "object" == typeof exports && exports && !exports.nodeType && exports,
  a = o && "object" == typeof module && module && !module.nodeType && module,
  i = a && a.exports === o ? Chunk195168.Z.Buffer : true,
  l = i ? i.allocUnsafe : true;
let s = function(e, t) {
  if (t) return e.slice();
  var r = e.length,
    n = l ? l(r) : new e.constructor(r);
  return e.copy(n), n
}