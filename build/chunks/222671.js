/** Chunk was on 8381 **/
/** chunk id: 222671, original params: t,e,r (module,exports,require) **/
"use strict";
var Chunk808570 = require("./808570.js");
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