/** Chunk was on web.js **/
/** chunk id: 860511, original params: e,t,n (module,exports,re quire) **/
"use strict";
var r = function(e) {
  return e && e.Math === Math && e
};
module.exports = r("object" == typeof globalThis && globalThis) || r("object" == typeof window && window) || r("object" == typeof self && self) || r("object" == typeof require.g && require.g) || r("object" == typeof this && this) || function() {
  return this
}() || Function("return this")()