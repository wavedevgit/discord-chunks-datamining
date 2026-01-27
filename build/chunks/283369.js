/** Chunk was on 38939 **/
/** chunk id: 283369, original params: t,e,r (module,exports,require) **/
"use strict";
var Chunk387739 = require("./387739.js"),
  i = require("./116740.js").Map;

function o(t, e, r, o) {
  var a = t.getBlockMap(),
    s = e.getStartKey(),
    u = e.getStartOffset(),
    c = e.getEndKey(),
    l = e.getEndOffset(),
    f = a.skipUntil(function(t, e) {
      return e === s
    }).takeUntil(function(t, e) {
      return e === c
    }).concat(i([
      [c, a.get(c)]
    ])).map(function(t, e) {
      s === c ? (i = u, a = l) : (i = e === s ? u : 0, a = e === c ? l : t.getLength());
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