/** Chunk was on web.js **/
/** chunk id: 73768, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Mv: () => a,
  kV: () => o,
  v2: () => s
});
var Chunk321733 = require("./321733.js");

function i(e) {
  return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e
  } : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
  })(e)
}

function a(e) {
  (0, r.V)("function" == typeof e.canDrag, "Expected canDrag to be a function."), (0, r.V)("function" == typeof e.beginDrag, "Expected beginDrag to be a function."), (0, r.V)("function" == typeof e.endDrag, "Expected endDrag to be a function.")
}

function o(e) {
  (0, r.V)("function" == typeof e.canDrop, "Expected canDrop to be a function."), (0, r.V)("function" == typeof e.hover, "Expected hover to be a function."), (0, r.V)("function" == typeof e.drop, "Expected beginDrag to be a function.")
}

function s(e, t) {
  t && Array.isArray(e) ? e.forEach(function(e) {
    return s(e, false)
  }) : (0, r.V)("string" == typeof e || "symbol" === i(e), t ? "Type can only be a string, a symbol, or an array of either." : "Type can only be a string or a symbol.")
}