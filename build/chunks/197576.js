/** Chunk was on 38939 **/
/** chunk id: 197576, original params: t,e,r (module,exports,require) **/
"use strict";
var n = require("./611122.js").notEmptyKey;

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
    s = e.getStartOffset(),
    u = t.getBlockForKey(a);
  return r = s === u.getLength() ? null : u.getEntityAt(s), i(t.getEntityMap(), r)
}