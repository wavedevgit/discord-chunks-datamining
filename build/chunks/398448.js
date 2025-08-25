/** Chunk was on web.js **/
/** chunk id: 398448, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk309943 = require("./309943.js"),
  i = require("./740336.js")("draft_tree_data_support");
module.exports = function(e, t, n) {
  var o = e.getSelection(),
    a = e.getCurrentContent(),
    s = o,
    l = o.getAnchorKey(),
    c = o.getFocusKey(),
    u = a.getBlockForKey(l);
  if (i && "forward" === n && l !== c) return a;
  if (o.isCollapsed()) {
    if ("forward" === n) {
      if (e.isSelectionAtEndOfContent()) return a;
      if (i && o.getAnchorOffset() === a.getBlockForKey(l).getLength()) {
        var d = a.getBlockForKey(u.nextSibling);
        if (!d || 0 === d.getLength()) return a
      }
    } else if (e.isSelectionAtStartOfContent()) return a;
    if ((s = t(e)) === o) return a
  }
  return r.removeRange(a, s, n)
}