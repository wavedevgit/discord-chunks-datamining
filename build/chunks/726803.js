/** Chunk was on 68880 (5dfa49b29bd374d8.js) **/
"use strict";
t.exports = function(t) {
  if (!t || !("ownerDocument" in t)) return !1;
  if ("ownerDocument" in t) {
    if (!t.ownerDocument.defaultView) return t instanceof Node;
    if (t instanceof t.ownerDocument.defaultView.Node) return !0
  }
  return !1
}