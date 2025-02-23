/** Chunk was on 38597 (284c18b018f79f5f.js) **/
"use strict";

function a(e) {
  var t = Object.prototype.toString.call(e).slice(8, -1);
  return "Object" === t && "function" == typeof e[Symbol.iterator] ? "Iterable" : "Custom" === t && e.constructor !== Object && e instanceof Object ? "Object" : t
}
r.d(t, {
  Z: () => a
})