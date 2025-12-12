/** Chunk was on web.js **/
/** chunk id: 652092, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk50153 = require("./50153.js"),
  Chunk257469 = require("./257469.js"),
  Chunk581079 = require("./581079.js");

function a(e, t, n) {
  var r;
  return i(e, function(e, t) {
    return e.getEntity() === t.getEntity()
  }, function(e) {
    return e.getEntity() === t
  }, function(e, t) {
    e <= n && t >= n && (r = {
      start: e,
      end: t
    })
  }), "object" != typeof r && o(false), r
}

function s(e, t, n) {
  var i = t.getCharacterList(),
    o = n > 0 ? i.get(n - 1) : true,
    s = n < i.count() ? i.get(n) : true,
    l = o ? o.getEntity() : true,
    c = s ? s.getEntity() : true;
  if (c && c === l && "MUTABLE" !== e.__get(c).getMutability()) {
    for (var u, d = a(i, c, n), f = d.start, p = d.end; f < p;) u = i.get(f), i = i.set(f, r.applyEntity(u, null)), f++;
    return t.set("characterList", i)
  }
  return t
}
module.exports = function(e, t) {
  var n = e.getBlockMap(),
    r = e.getEntityMap(),
    i = {},
    o = t.getStartKey(),
    a = t.getStartOffset(),
    l = n.get(o),
    c = s(r, l, a);
  c !== l && (i[o] = c);
  var u = t.getEndKey(),
    d = t.getEndOffset(),
    f = n.get(u);
  o === u && (f = c);
  var p = s(r, f, d);
  return (p !== f && (i[u] = p), Object.keys(i).length) ? e.merge({
    blockMap: n.merge(i),
    selectionAfter: t
  }) : e.set("selectionAfter", t)
}