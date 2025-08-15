/** Chunk was on 91584 **/
/** chunk id: 878694, original params: t,e,r (module,exports,require) **/
"use strict";
var n = require("./406799.js").notEmptyKey;

function i(t, e) {
  return n(e) && "MUTABLE" === t.__get(e).getMutability() ? e : null
}
module.exports = function(t, e) {
  if (e.isCollapsed()) {
    var r, n = e.getAnchorKey(),
      o = e.getAnchorOffset();
    return o > 0 ? (r = t.getBlockForKey(n).getEntityAt(o - 1)) !== t.getBlockForKey(n).getEntityAt(o) ? null : i(t.getEntityMap(), r) : null
  }
  var a = e.getStartKey(),
    u = e.getStartOffset(),
    s = t.getBlockForKey(a);
  return r = u === s.getLength() ? null : s.getEntityAt(u), i(t.getEntityMap(), r)
}