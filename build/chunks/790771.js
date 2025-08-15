/** Chunk was on 91584 **/
/** chunk id: 790771, original params: t (module,exports,require) **/
"use strict";
module.exports = function(t) {
  if (!t || !("ownerDocument" in t)) returnfalse;
  if ("ownerDocument" in t) {
    if (!t.ownerDocument.defaultView) return t instanceof Node;
    if (t instanceof t.ownerDocument.defaultView.Node) returntrue
  }
  returnfalse
}