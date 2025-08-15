/** Chunk was on 91584 **/
/** chunk id: 800565, original params: t,e,r (module,exports,require) **/
"use strict";
var Chunk347760 = require("./347760.js");
module.exports = function(t) {
  var e = t.getSelection();
  if (!e.rangeCount) return null;
  var r = n(e.getRangeAt(0)),
    i = r.top,
    o = r.right,
    a = r.bottom,
    u = r.left;
  return 0 === i && 0 === o && 0 === a && 0 === u ? null : r
}