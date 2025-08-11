/** Chunk was on web.js **/
/** chunk id: 700478, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.r(exports), require.d(exports, {
  default: () => a
});
var Chunk528734 = require("./528734.js"),
  Chunk951516 = require("./951516.js");

function o(e) {
  return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e
  } : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
  })(e)
}

function a(e) {
  var t, n;
  if ((0, i.Z)(1, arguments), e && "function" == typeof e.forEach) t = e;
  else {
    if ("object" !== o(e) || null === e) return new Date(NaN);
    t = Array.prototype.slice.call(e)
  }
  return t.forEach(function(e) {
    var t = (0, r.default)(e);
    (true === n || n > t || isNaN(t.getDate())) && (n = t)
  }), n || new Date(NaN)
}