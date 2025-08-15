/** Chunk was on 91584 **/
/** chunk id: 398448, original params: t,e,r (module,exports,require) **/
"use strict";
var Chunk309943 = require("./309943.js"),
  i = require("./740336.js")("draft_tree_data_support");
module.exports = function(t, e, r) {
  var o = t.getSelection(),
    a = t.getCurrentContent(),
    u = o,
    s = o.getAnchorKey(),
    c = o.getFocusKey(),
    l = a.getBlockForKey(s);
  if (i && "forward" === r && s !== c) return a;
  if (o.isCollapsed()) {
    if ("forward" === r) {
      if (t.isSelectionAtEndOfContent()) return a;
      if (i && o.getAnchorOffset() === a.getBlockForKey(s).getLength()) {
        var f = a.getBlockForKey(l.nextSibling);
        if (!f || 0 === f.getLength()) return a
      }
    } else if (t.isSelectionAtStartOfContent()) return a;
    if ((u = e(t)) === o) return a
  }
  return n.removeRange(a, u, r)
}