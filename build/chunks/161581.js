/** Chunk was on web.js **/
"use strict";
var r = function(e) {
  return e && e.Math === Math && e
};
e.exports = r("object" == typeof globalThis && globalThis) || r("object" == typeof window && window) || r("object" == typeof self && self) || r("object" == typeof n.g && n.g) || function() {
  return this
}() || this || Function("return this")()