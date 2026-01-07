/** Chunk was on web.js **/
/** chunk id: 538315, original params: e,t,n (module,exports,re quire) **/
"use strict";
var r = Array.prototype.slice,
  Chunk560640 = require("./560640.js"),
  a = Object.keys,
  o = a ? function(e) {
    return a(e)
  } : require("./973351.js"),
  s = Object.keys;
o.shim = function() {
  return Object.keys ? ! function() {
    var e = Object.keys(arguments);
    return e && e.length === arguments.length
  }(1, 2) && (Object.keys = function(e) {
    return i(e) ? s(r.call(e)) : s(e)
  }) : Object.keys = o, Object.keys || o
}, module.exports = o