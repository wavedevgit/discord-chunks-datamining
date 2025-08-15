/** Chunk was on 8381 **/
/** chunk id: 195691, original params: t,e,r (module,exports,require) **/
"use strict";
var Chunk169774 = require("./169774.js"),
  Chunk581079 = require("./581079.js");
module.exports = Chunk169774.isBrowser("Chrome") ? function(t) {
  for (var e = t.cloneRange(), r = [], n = t.endContainer; null != n; n = n.parentNode) {
    var o, a = n === t.commonAncestorContainer;
    a ? e.setStart(t.startContainer, t.startOffset) : e.setStart(e.endContainer, 0);
    var u = Array.from(e.getClientRects());
    if (r.push(u), a) return r.reverse(), (o = []).concat.apply(o, r);
    e.setEndBefore(n)
  }
  i(false)
} : function(t) {
  return Array.from(t.getClientRects())
}