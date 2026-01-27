/** Chunk was on 38939 **/
/** chunk id: 1214, original params: t,e,r (module,exports,require) **/
"use strict";
var Chunk954055 = require("./954055.js"),
  Chunk869639 = require("./869639.js"),
  Chunk410475 = require("./410475.js");
module.exports = function(t) {
  var e, r, a = t.getSelection();
  if (!a.isCollapsed()) return t;
  var s = a.getAnchorOffset();
  if (0 === s) return t;
  var u = a.getAnchorKey(),
    c = t.getCurrentContent(),
    l = c.getBlockForKey(u).getLength();
  if (l <= 1) return t;
  s === l ? (e = a.set("anchorOffset", s - 1), r = a) : r = (e = a.set("focusOffset", s + 1)).set("anchorOffset", s + 1);
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