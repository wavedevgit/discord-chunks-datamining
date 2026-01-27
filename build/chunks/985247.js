/** Chunk was on 38939 **/
/** chunk id: 985247, original params: t,e,r (module,exports,require) **/
"use strict";
var Chunk552597 = require("./552597.js");
module.exports = function(t) {
  var e = t.getSelection();
  if (!e.rangeCount) return null;
  var r = n(e.getRangeAt(0)),
    i = r.top,
    o = r.right,
    a = r.bottom,
    s = r.left;
  return 0 === i && 0 === o && 0 === a && 0 === s ? null : r
}