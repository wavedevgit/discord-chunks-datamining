/** Chunk was on 38939 **/
/** chunk id: 291691, original params: t (module,exports,require) **/
"use strict";
module.exports = function(t) {
  if (!t || !("ownerDocument" in t)) returnfalse;
  if ("ownerDocument" in t) {
    if (!t.ownerDocument.defaultView) return t instanceof Node;
    if (t instanceof t.ownerDocument.defaultView.Node) returntrue
  }
  returnfalse
}