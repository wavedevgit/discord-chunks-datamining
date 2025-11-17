/** Chunk was on web.js **/
/** chunk id: 290963, original params: e (module,exports,re quire) **/
"use strict";
module.exports = function(e, t, n, r) {
  var i = t.getStartKey(),
    a = t.getEndKey(),
    o = e.getBlockMap(),
    s = o.toSeq().skipUntil(function(e, t) {
      return t === i
    }).takeUntil(function(e, t) {
      return t === a
    }).concat([
      [a, o.get(a)]
    ]).map(function(e) {
      var t = e.getDepth() + n;
      return t = Math.max(0, Math.min(t, r)), e.set("depth", t)
    });
  return o = o.merge(s), e.merge({
    blockMap: o,
    selectionBefore: t,
    selectionAfter: t
  })
}