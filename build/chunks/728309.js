/** Chunk was on 38939 **/
/** chunk id: 728309, original params: t,e,r (module,exports,require) **/
"use strict";
var Chunk391561 = require("./391561.js"),
  Chunk116740 = require("./116740.js");
module.exports = function(t, e, r) {
  var o = t.getBlockMap(),
    a = e.getStartKey(),
    s = e.getStartOffset(),
    u = e.getEndKey(),
    c = e.getEndOffset(),
    l = o.skipUntil(function(t, e) {
      return e === a
    }).takeUntil(function(t, e) {
      return e === u
    }).toOrderedMap().merge(i.OrderedMap([
      [u, o.get(u)]
    ])).map(function(t, e) {
      var i = e === u ? c : t.getLength();
      return n(t, e === a ? s : 0, i, r)
    });
  return t.merge({
    blockMap: o.merge(l),
    selectionBefore: e,
    selectionAfter: e
  })
}