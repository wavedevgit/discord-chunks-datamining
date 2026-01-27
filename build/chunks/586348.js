/** Chunk was on 38939 **/
/** chunk id: 586348, original params: t,e,r (module,exports,require) **/
"use strict";
var Chunk573750 = require("./573750.js"),
  Chunk797686 = require("./797686.js");
module.exports = Chunk573750.isBrowser("Chrome") ? function(t) {
  for (var e = t.cloneRange(), r = [], n = t.endContainer; null != n; n = n.parentNode) {
    var o, a = n === t.commonAncestorContainer;
    a ? e.setStart(t.startContainer, t.startOffset) : e.setStart(e.endContainer, 0);
    var s = Array.from(e.getClientRects());
    if (r.push(s), a) return r.reverse(), (o = []).concat.apply(o, r);
    e.setEndBefore(n)
  }
  i(false)
} : function(t) {
  return Array.from(t.getClientRects())
}