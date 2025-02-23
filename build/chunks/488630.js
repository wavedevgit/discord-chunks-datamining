/** Chunk was on 68880 (5dfa49b29bd374d8.js) **/
"use strict";
t.exports = function(t) {
  var e = t.getSelection(),
    r = e.getAnchorKey(),
    n = t.getBlockTree(r),
    i = e.getStartOffset(),
    o = !1;
  return n.some(function(t) {
    return i === t.get("start") ? (o = !0, !0) : i < t.get("end") && t.get("leaves").some(function(t) {
      return i === t.get("start") && (o = !0, !0)
    })
  }), o
}