/** Chunk was on 50448 **/
/** chunk id: 872715, original params: t,r,n (module,exports,require) **/
"use strict";
var Chunk85712 = require("./85712.js"),
  Chunk971428 = require("./971428.js"),
  Chunk6837 = require("./6837.js"),
  u = require("./394370.js")("toStringTag"),
  s = Object,
  c = "Arguments" === Chunk6837(function() {
    return arguments
  }()),
  f = function(t, r) {
    try {
      return t[r]
    } catch (t) {}
  };
module.exports = Chunk85712 ? Chunk6837 : function(t) {
  var r, n, e;
  return true === t ? "Undefined" : null === t ? "Null" : "string" == typeof(n = f(r = s(t), u)) ? n : c ? i(r) : "Object" === (e = i(r)) && o(r.callee) ? "Arguments" : e
}