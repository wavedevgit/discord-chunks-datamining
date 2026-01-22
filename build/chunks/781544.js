/** Chunk was on 94678 **/
/** chunk id: 781544, original params: t,r,e (module,exports,require) **/
"use strict";
var Chunk950059 = require("./950059.js"),
  Chunk309270 = require("./309270.js"),
  Chunk459547 = require("./459547.js"),
  i = require("./61748.js")("toStringTag"),
  u = Object,
  c = "Arguments" === Chunk459547(function() {
    return arguments
  }()),
  a = function(t, r) {
    try {
      return t[r]
    } catch (t) {}
  };
module.exports = Chunk950059 ? Chunk459547 : function(t) {
  var r, e, n;
  return true === t ? "Undefined" : null === t ? "Null" : "string" == typeof(e = a(r = u(t), i)) ? e : c ? s(r) : "Object" === (n = s(r)) && o(r.callee) ? "Arguments" : n
}