/** Chunk was on web.js **/
/** chunk id: 276263, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk169774 = require("./169774.js"),
  Chunk581079 = require("./581079.js");

function a(e) {
  for (var t = e.cloneRange(), n = [], r = e.endContainer; null != r; r = r.parentNode) {
    var a, o = r === e.commonAncestorContainer;
    o ? t.setStart(e.startContainer, e.startOffset) : t.setStart(t.endContainer, 0);
    var s = Array.from(t.getClientRects());
    if (n.push(s), o) return n.reverse(), (a = []).concat.apply(a, n);
    t.setEndBefore(r)
  }
  i(false)
}
module.exports = Chunk169774.isBrowser("Chrome") ? a : function(e) {
  return Array.from(e.getClientRects())
}