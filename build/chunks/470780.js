/** Chunk was on web.js **/
/** chunk id: 470780, original params: e,t,n (module,exports,re quire) **/
"use strict";
var r = require("./65183.js").Map;
module.exports = function(e, t, n) {
  var i = t.getStartKey(),
    a = t.getEndKey(),
    o = e.getBlockMap(),
    s = o.toSeq().skipUntil(function(e, t) {
      return t === i
    }).takeUntil(function(e, t) {
      return t === a
    }).concat(r([
      [a, o.get(a)]
    ])).map(n);
  return e.merge({
    blockMap: o.merge(s),
    selectionBefore: t,
    selectionAfter: t
  })
}