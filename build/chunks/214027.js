/** Chunk was on web.js **/
/** chunk id: 214027, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk280792 = require("./280792.js"),
  Chunk880181 = require("./880181.js"),
  Chunk796138 = require("./796138.js"),
  a = require("./751736.js")("toStringTag"),
  s = Object,
  l = "Arguments" === Chunk796138(function() {
    return arguments
  }()),
  c = function(e, t) {
    try {
      return e[t]
    } catch (e) {}
  };
module.exports = Chunk280792 ? Chunk796138 : function(e) {
  var t, n, r;
  return true === e ? "Undefined" : null === e ? "Null" : "string" == typeof(n = c(t = s(e), a)) ? n : l ? o(t) : "Object" === (r = o(t)) && i(t.callee) ? "Arguments" : r
}