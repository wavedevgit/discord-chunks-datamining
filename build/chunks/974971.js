/** Chunk was on web.js **/
"use strict";
var r = n(525305),
  i = n(354848),
  o = n(332916),
  a = n(641236)("toStringTag"),
  s = Object,
  l = "Arguments" === o(function() {
    return arguments
  }()),
  c = function(e, t) {
    try {
      return e[t]
    } catch (e) {}
  };
e.exports = r ? o : function(e) {
  var t, n, r;
  return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof(n = c(t = s(e), a)) ? n : l ? o(t) : "Object" === (r = o(t)) && i(t.callee) ? "Arguments" : r
}