/** Chunk was on web.js **/
/** chunk id: 807495, original params: e (module,exports,re quire) **/
"use strict";
module.exports = function(e, t, n, r) {
  var i = t.getStartKey(),
    a = t.getEndKey(),
    s = e.getBlockMap(),
    o = s.toSeq().skipUntil(function(e, t) {
      return t === i
    }).takeUntil(function(e, t) {
      return t === a
    }).concat([
      [a, s.get(a)]
    ]).map(function(e) {
      var t = e.getDepth() + n;
      return t = Math.max(0, Math.min(t, r)), e.set("depth", t)
    });
  return s = s.merge(o), e.merge({
    blockMap: s,
    selectionBefore: t,
    selectionAfter: t
  })
}