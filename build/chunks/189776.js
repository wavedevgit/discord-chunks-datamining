/** Chunk was on 92777 **/
/** chunk id: 189776, original params: e,t,r (module,exports,require) **/
"use strict";

function a(e) {
  var t = Object.prototype.toString.call(e).slice(8, false);
  return "Object" === t && "function" == typeof e[Symbol.iterator] ? "Iterable" : "Custom" === t && e.constructor !== Object && e instanceof Object ? "Object" : t
}
require.d(exports, {
  A: () => a
})