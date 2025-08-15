/** Chunk was on 8381 **/
/** chunk id: 716818, original params: t,e,r (module,exports,require) **/
"use strict";
var Chunk359282 = require("./359282.js"),
  i = require("./65183.js").Map;

function o(t, e, r, o) {
  var a = t.getBlockMap(),
    u = e.getStartKey(),
    s = e.getStartOffset(),
    c = e.getEndKey(),
    l = e.getEndOffset(),
    f = a.skipUntil(function(t, e) {
      return e === u
    }).takeUntil(function(t, e) {
      return e === c
    }).concat(i([
      [c, a.get(c)]
    ])).map(function(t, e) {
      u === c ? (i = s, a = l) : (i = e === u ? s : 0, a = e === c ? l : t.getLength());
      for (var i, a, f, p = t.getCharacterList(); i < a;) f = p.get(i), p = p.set(i, o ? n.applyStyle(f, r) : n.removeStyle(f, r)), i++;
      return t.set("characterList", p)
    });
  return t.merge({
    blockMap: a.merge(f),
    selectionBefore: e,
    selectionAfter: e
  })
}
module.exports = {
  add: function(t, e, r) {
    return o(t, e, r, true)
  },
  remove: function(t, e, r) {
    return o(t, e, r, false)
  }
}