/** Chunk was on web.js **/
/** chunk id: 652092, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk50153 = require("./50153.js"),
  Chunk257469 = require("./257469.js"),
  Chunk581079 = require("./581079.js");

function o(e, t, n) {
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
  }), "object" != typeof r && a(false), r
}

function s(e, t, n) {
  var i = t.getCharacterList(),
    a = n > 0 ? i.get(n - 1) : true,
    s = n < i.count() ? i.get(n) : true,
    l = a ? a.getEntity() : true,
    c = s ? s.getEntity() : true;
  if (c && c === l && "MUTABLE" !== e.__get(c).getMutability()) {
    for (var u, d = o(i, c, n), f = d.start, p = d.end; f < p;) u = i.get(f), i = i.set(f, r.applyEntity(u, null)), f++;
    return t.set("characterList", i)
  }
  return t
}
module.exports = function(e, t) {
  var n = e.getBlockMap(),
    r = e.getEntityMap(),
    i = {},
    a = t.getStartKey(),
    o = t.getStartOffset(),
    l = n.get(a),
    c = s(r, l, o);
  c !== l && (i[a] = c);
  var u = t.getEndKey(),
    d = t.getEndOffset(),
    f = n.get(u);
  a === u && (f = c);
  var p = s(r, f, d);
  return (p !== f && (i[u] = p), Object.keys(i).length) ? e.merge({
    blockMap: n.merge(i),
    selectionAfter: t
  }) : e.set("selectionAfter", t)
}