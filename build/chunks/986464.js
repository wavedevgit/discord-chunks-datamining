/** Chunk was on 91584 **/
/** chunk id: 986464, original params: t,e,r (module,exports,require) **/
"use strict";
var Chunk76466 = require("./76466.js"),
  Chunk102801 = require("./102801.js"),
  Chunk581079 = require("./581079.js");

function a(t, e, r) {
  var a = e.getCharacterList(),
    u = r > 0 ? a.get(r - 1) : true,
    s = r < a.count() ? a.get(r) : true,
    c = u ? u.getEntity() : true,
    l = s ? s.getEntity() : true;
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
    u = e.getStartOffset(),
    s = r.get(o),
    c = a(n, s, u);
  c !== s && (i[o] = c);
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