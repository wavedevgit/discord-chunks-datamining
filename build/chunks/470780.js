/** Chunk was on web.js **/
/** chunk id: 470780, original params: e,t,n (module,exports,re quire) **/
"use strict";
var r = require("./65183.js").Map;
module.exports = function(e, t, n) {
  var i = t.getStartKey(),
    o = t.getEndKey(),
    a = e.getBlockMap(),
    s = a.toSeq().skipUntil(function(e, t) {
      return t === i
    }).takeUntil(function(e, t) {
      return t === o
    }).concat(r([
      [o, a.get(o)]
    ])).map(n);
  return e.merge({
    blockMap: a.merge(s),
    selectionBefore: t,
    selectionAfter: t
  })
}