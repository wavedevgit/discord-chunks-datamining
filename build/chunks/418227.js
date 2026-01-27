/** Chunk was on 38939 **/
/** chunk id: 418227, original params: t,e,r (module,exports,require) **/
"use strict";
var Chunk954055 = require("./954055.js"),
  i = require("./661551.js")("draft_tree_data_support");
module.exports = function(t, e, r) {
  var o = t.getSelection(),
    a = t.getCurrentContent(),
    s = o,
    u = o.getAnchorKey(),
    c = o.getFocusKey(),
    l = a.getBlockForKey(u);
  if (i && "forward" === r && u !== c) return a;
  if (o.isCollapsed()) {
    if ("forward" === r) {
      if (t.isSelectionAtEndOfContent()) return a;
      if (i && o.getAnchorOffset() === a.getBlockForKey(u).getLength()) {
        var f = a.getBlockForKey(l.nextSibling);
        if (!f || 0 === f.getLength()) return a
      }
    } else if (t.isSelectionAtStartOfContent()) return a;
    if ((s = e(t)) === o) return a
  }
  return n.removeRange(a, s, r)
}