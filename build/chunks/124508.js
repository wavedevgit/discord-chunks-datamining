/** Chunk was on web.js **/
/** chunk id: 124508, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.r(exports), require.d(exports, {
  default: () => s
});
var Chunk29583 = require("./29583.js"),
  Chunk618027 = require("./618027.js");

function a(e) {
  return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e
  } : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
  })(e)
}

function s(e) {
  var t, n;
  if ((0, i.A)(1, arguments), e && "function" == typeof e.forEach) t = e;
  else {
    if ("object" !== a(e) || null === e) return new Date(NaN);
    t = Array.prototype.slice.call(e)
  }
  return t.forEach(function(e) {
    var t = (0, r.default)(e);
    (true === n || n < t || isNaN(Number(t))) && (n = t)
  }), n || new Date(NaN)
}