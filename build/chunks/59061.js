/** Chunk was on 38939 **/
/** chunk id: 59061, original params: t,e,r (module,exports,require) **/
"use strict";
var Chunk387739 = require("./387739.js"),
  Chunk265930 = require("./265930.js"),
  Chunk797686 = require("./797686.js");

function a(t, e, r) {
  var a = e.getCharacterList(),
    s = r > 0 ? a.get(r - 1) : true,
    u = r < a.count() ? a.get(r) : true,
    c = s ? s.getEntity() : true,
    l = u ? u.getEntity() : true;
  if (l && l === c && "MUTABLE" !== t.__get(l).getMutability()) {
    for (var f, p, h = (i(a, function(t, e) {
        return t.getEntity() === e.getEntity()
      }, function(t) {
        return t.getEntity() === l
      }, function(t, e) {
        t <= r && e >= r && (f = {
          start: t,
          end: e
        })
      }), "object" != typeof f && o(false), f), d = h.start, g = h.end; d < g;) p = a.get(d), a = a.set(d, n.applyEntity(p, null)), d++;
    return e.set("characterList", a)
  }
  return e
}
module.exports = function(t, e) {
  var r = t.getBlockMap(),
    n = t.getEntityMap(),
    i = {},
    o = e.getStartKey(),
    s = e.getStartOffset(),
    u = r.get(o),
    c = a(n, u, s);
  c !== u && (i[o] = c);
  var l = e.getEndKey(),
    f = e.getEndOffset(),
    p = r.get(l);
  o === l && (p = c);
  var h = a(n, p, f);
  return (h !== p && (i[l] = h), Object.keys(i).length) ? t.merge({
    blockMap: r.merge(i),
    selectionAfter: e
  }) : t.set("selectionAfter", e)
}