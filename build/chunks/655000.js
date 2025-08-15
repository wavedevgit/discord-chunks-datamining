/** Chunk was on 8381 **/
/** chunk id: 655000, original params: t,e,r (module,exports,require) **/
"use strict";
var Chunk621796 = require("./621796.js"),
  Chunk172367 = require("./172367.js"),
  Chunk148727 = require("./148727.js");
module.exports = function(t) {
  var e, r, a = t.getSelection();
  if (!a.isCollapsed()) return t;
  var u = a.getAnchorOffset();
  if (0 === u) return t;
  var s = a.getAnchorKey(),
    c = t.getCurrentContent(),
    l = c.getBlockForKey(s).getLength();
  if (l <= 1) return t;
  u === l ? (e = a.set("anchorOffset", u - 1), r = a) : r = (e = a.set("focusOffset", u + 1)).set("anchorOffset", u + 1);
  var f = o(c, e),
    p = n.removeRange(c, e, "backward"),
    h = p.getSelectionAfter(),
    d = h.getAnchorOffset() - 1,
    g = h.merge({
      anchorOffset: d,
      focusOffset: d
    }),
    y = n.replaceWithFragment(p, g, f),
    v = i.push(t, y, "insert-fragment");
  return i.acceptSelection(v, r)
}