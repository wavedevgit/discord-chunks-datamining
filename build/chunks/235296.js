/** Chunk was on web.js **/
/** chunk id: 235296, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk964339 = require("./964339.js"),
  Chunk65183 = require("./65183.js");
module.exports = function(e, t, n) {
  var o = e.getBlockMap(),
    a = t.getStartKey(),
    s = t.getStartOffset(),
    l = t.getEndKey(),
    c = t.getEndOffset(),
    u = o.skipUntil(function(e, t) {
      return t === a
    }).takeUntil(function(e, t) {
      return t === l
    }).toOrderedMap().merge(i.OrderedMap([
      [l, o.get(l)]
    ])).map(function(e, t) {
      var i = t === a ? s : 0,
        o = t === l ? c : e.getLength();
      return r(e, i, o, n)
    });
  return e.merge({
    blockMap: o.merge(u),
    selectionBefore: t,
    selectionAfter: t
  })
}