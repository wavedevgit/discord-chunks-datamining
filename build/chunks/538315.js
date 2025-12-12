/** Chunk was on web.js **/
/** chunk id: 538315, original params: e,t,n (module,exports,re quire) **/
"use strict";
var r = Array.prototype.slice,
  Chunk560640 = require("./560640.js"),
  o = Object.keys,
  a = o ? function(e) {
    return o(e)
  } : require("./973351.js"),
  s = Object.keys;
a.shim = function() {
  return Object.keys ? ! function() {
    var e = Object.keys(arguments);
    return module && module.length === arguments.length
  }(1, 2) && (Object.keys = function(e) {
    return i(e) ? s(r.call(e)) : s(e)
  }) : Object.keys = a, Object.keys || a
}, module.exports = a