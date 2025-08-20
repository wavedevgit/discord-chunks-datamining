/** Chunk was on web.js **/
/** chunk id: 731861, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk619083 = require("./619083.js"),
  Chunk65183 = require("./65183.js");
module.exports = function(e, t, n) {
  var a = e.getBlockMap(),
    o = t.getStartKey(),
    s = t.getStartOffset(),
    l = t.getEndKey(),
    c = t.getEndOffset(),
    u = a.skipUntil(function(e, t) {
      return t === o
    }).takeUntil(function(e, t) {
      return t === l
    }).toOrderedMap().merge(i.OrderedMap([
      [l, a.get(l)]
    ])).map(function(e, t) {
      var i = t === o ? s : 0,
        a = t === l ? c : e.getLength();
      return r(e, i, a, n)
    });
  return e.merge({
    blockMap: a.merge(u),
    selectionBefore: t,
    selectionAfter: t
  })
}