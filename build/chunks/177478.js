/** Chunk was on 91584 **/
/** chunk id: 177478, original params: t (module,exports,require) **/
"use strict";
module.exports = function(t) {
  var e = t.getSelection(),
    r = e.getAnchorKey(),
    n = t.getBlockTree(r),
    i = e.getStartOffset(),
    o = false;
  return n.some(function(t) {
    return i === t.get("start") ? (o = true, true) : i < t.get("end") && t.get("leaves").some(function(t) {
      return i === t.get("start") && (o = true, true)
    })
  }), o
}