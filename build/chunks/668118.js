/** Chunk was on web.js **/
/** chunk id: 668118, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk750253 = require("./750253.js");
module.exports = function(e) {
  var t = e.ownerDocument.documentElement;
  if (!("getBoundingClientRect" in e) || !r(t, e)) return {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
  };
  var n = e.getBoundingClientRect();
  return {
    left: Math.round(n.left) - t.clientLeft,
    right: Math.round(n.right) - t.clientLeft,
    top: Math.round(n.top) - t.clientTop,
    bottom: Math.round(n.bottom) - t.clientTop
  }
}