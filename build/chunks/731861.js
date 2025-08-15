/** Chunk was on 91584 **/
/** chunk id: 731861, original params: t,e,r (module,exports,require) **/
"use strict";
var Chunk619083 = require("./619083.js"),
  Chunk65183 = require("./65183.js");
module.exports = function(t, e, r) {
  var o = t.getBlockMap(),
    a = e.getStartKey(),
    u = e.getStartOffset(),
    s = e.getEndKey(),
    c = e.getEndOffset(),
    l = o.skipUntil(function(t, e) {
      return e === a
    }).takeUntil(function(t, e) {
      return e === s
    }).toOrderedMap().merge(i.OrderedMap([
      [s, o.get(s)]
    ])).map(function(t, e) {
      var i = e === s ? c : t.getLength();
      return n(t, e === a ? u : 0, i, r)
    });
  return t.merge({
    blockMap: o.merge(l),
    selectionBefore: e,
    selectionAfter: e
  })
}