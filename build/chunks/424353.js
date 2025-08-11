/** Chunk was on 50448 **/
/** chunk id: 424353, original params: t,r,n (module,exports,require) **/
"use strict";
var e = function(t) {
  return t && t.Math === Math && t
};
module.exports = e("object" == typeof globalThis && globalThis) || e("object" == typeof window && window) || e("object" == typeof self && self) || e("object" == typeof require.g && require.g) || e("object" == typeof this && this) || function() {
  return this
}() || Function("return this")()