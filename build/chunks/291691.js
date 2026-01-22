/** Chunk was on web.js **/
/** chunk id: 291691, original params: e (module,exports,re quire) **/
"use strict";
module.exports = function(e) {
  if (!e || !("ownerDocument" in e)) returnfalse;
  if ("ownerDocument" in e) {
    var t = e;
    if (!t.ownerDocument.defaultView) return t instanceof Node;
    if (t instanceof t.ownerDocument.defaultView.Node) returntrue
  }
  returnfalse
}