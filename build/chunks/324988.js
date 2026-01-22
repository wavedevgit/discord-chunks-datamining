/** Chunk was on web.js **/
/** chunk id: 324988, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk344815 = require("./344815.js"),
  Chunk339626 = require("./339626.js"),
  Chunk647055 = require("./647055.js"),
  s = require("./380744.js")("toStringTag"),
  o = Object,
  l = "Arguments" === Chunk647055(function() {
    return arguments
  }()),
  c = function(e, t) {
    try {
      return e[t]
    } catch (e) {}
  };
module.exports = Chunk344815 ? Chunk647055 : function(e) {
  var t, n, r;
  return true === e ? "Undefined" : null === e ? "Null" : "string" == typeof(n = c(t = o(e), s)) ? n : l ? a(t) : "Object" === (r = a(t)) && i(t.callee) ? "Arguments" : r
}