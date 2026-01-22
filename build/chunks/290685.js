/** Chunk was on 47950 **/
/** chunk id: 290685, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => s
});
var Chunk947156 = require("./947156.js"),
  o = "object" == typeof exports && exports && !exports.nodeType && exports,
  a = o && "object" == typeof module && module && !module.nodeType && module,
  i = a && a.exports === o ? Chunk947156.A.Buffer : true,
  l = i ? i.allocUnsafe : true;
let s = function(e, t) {
  if (t) return e.slice();
  var r = e.length,
    n = l ? l(r) : new e.constructor(r);
  return e.copy(n), n
}