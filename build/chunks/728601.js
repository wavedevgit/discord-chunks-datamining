/** Chunk was on 38939 **/
/** chunk id: 728601, original params: t,e,r (module,exports,require) **/
"use strict";
var n = require("./116740.js").Map;
module.exports = function(t, e, r) {
  var i = e.getStartKey(),
    o = e.getEndKey(),
    a = t.getBlockMap(),
    s = a.toSeq().skipUntil(function(t, e) {
      return e === i
    }).takeUntil(function(t, e) {
      return e === o
    }).concat(n([
      [o, a.get(o)]
    ])).map(r);
  return t.merge({
    blockMap: a.merge(s),
    selectionBefore: e,
    selectionAfter: e
  })
}