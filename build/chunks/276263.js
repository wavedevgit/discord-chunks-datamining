/** Chunk was on web.js **/
/** chunk id: 276263, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk169774 = require("./169774.js"),
  Chunk581079 = require("./581079.js");

function o(e) {
  for (var t = e.cloneRange(), n = [], r = e.endContainer; null != r; r = r.parentNode) {
    var o, a = r === e.commonAncestorContainer;
    a ? t.setStart(e.startContainer, e.startOffset) : t.setStart(t.endContainer, 0);
    var s = Array.from(t.getClientRects());
    if (n.push(s), a) return n.reverse(), (o = []).concat.apply(o, n);
    t.setEndBefore(r)
  }
  i(false)
}
module.exports = Chunk169774.isBrowser("Chrome") ? o : function(e) {
  return Array.from(e.getClientRects())
}