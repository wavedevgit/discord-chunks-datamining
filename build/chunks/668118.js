/** Chunk was on 38939 **/
/** chunk id: 668118, original params: t,e,r (module,exports,require) **/
"use strict";
var Chunk750253 = require("./750253.js");
module.exports = function(t) {
  var e = t.ownerDocument.documentElement;
  if (!("getBoundingClientRect" in t) || !n(e, t)) return {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
  };
  var r = t.getBoundingClientRect();
  return {
    left: Math.round(r.left) - e.clientLeft,
    right: Math.round(r.right) - e.clientLeft,
    top: Math.round(r.top) - e.clientTop,
    bottom: Math.round(r.bottom) - e.clientTop
  }
}