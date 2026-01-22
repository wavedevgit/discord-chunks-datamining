/** Chunk was on 94678 **/
/** chunk id: 308227, original params: t,r,e (module,exports,require) **/
"use strict";
var n = function(t) {
  return t && t.Math === Math && t
};
module.exports = n("object" == typeof globalThis && globalThis) || n("object" == typeof window && window) || n("object" == typeof self && self) || n("object" == typeof require.g && require.g) || n("object" == typeof this && this) || function() {
  return this
}() || Function("return this")()