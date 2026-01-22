/** Chunk was on web.js **/
/** chunk id: 586348, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk573750 = require("./573750.js"),
  Chunk797686 = require("./797686.js");

function a(e) {
  for (var t = e.cloneRange(), n = [], r = e.endContainer; null != r; r = r.parentNode) {
    var a, s = r === e.commonAncestorContainer;
    s ? t.setStart(e.startContainer, e.startOffset) : t.setStart(t.endContainer, 0);
    var o = Array.from(t.getClientRects());
    if (n.push(o), s) return n.reverse(), (a = []).concat.apply(a, n);
    t.setEndBefore(r)
  }
  i(false)
}
module.exports = Chunk573750.isBrowser("Chrome") ? a : function(e) {
  return Array.from(e.getClientRects())
}