/** Chunk was on web.js **/
/** chunk id: 283369, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk387739 = require("./387739.js"),
  i = require("./116740.js").Map;

function a(e, t, n, a) {
  var s = e.getBlockMap(),
    o = t.getStartKey(),
    l = t.getStartOffset(),
    c = t.getEndKey(),
    u = t.getEndOffset(),
    d = s.skipUntil(function(e, t) {
      return t === o
    }).takeUntil(function(e, t) {
      return t === c
    }).concat(i([
      [c, s.get(c)]
    ])).map(function(e, t) {
      o === c ? (i = l, s = u) : (i = t === o ? l : 0, s = t === c ? u : e.getLength());
      for (var i, s, d, f = e.getCharacterList(); i < s;) d = f.get(i), f = f.set(i, a ? r.applyStyle(d, n) : r.removeStyle(d, n)), i++;
      return e.set("characterList", f)
    });
  return e.merge({
    blockMap: s.merge(d),
    selectionBefore: t,
    selectionAfter: t
  })
}
module.exports = {
  add: function(e, t, n) {
    return a(e, t, n, true)
  },
  remove: function(e, t, n) {
    return a(e, t, n, false)
  }
}