/** Chunk was on web.js **/
/** chunk id: 3528, original params: e,t,n (module,exports,re quire) **/
"use strict";
var r = Array.prototype.slice,
  Chunk560332 = require("./560332.js"),
  a = Object.keys,
  s = a ? function(e) {
    return a(e)
  } : require("./963980.js"),
  o = Object.keys;
s.shim = function() {
  return Object.keys ? ! function() {
    var e = Object.keys(arguments);
    return e && e.length === arguments.length
  }(1, 2) && (Object.keys = function(e) {
    return i(e) ? o(r.call(e)) : o(e)
  }) : Object.keys = s, Object.keys || s
}, module.exports = s