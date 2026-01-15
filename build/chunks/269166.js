/** Chunk was on web.js **/
/** chunk id: 269166, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk720218 = require("./720218.js"),
  Chunk384404 = require("./384404.js"),
  Chunk511076 = require("./511076.js");
module.exports = function(e) {
  var t, n, o = e.getSelection();
  if (!o.isCollapsed()) return e;
  var s = o.getAnchorOffset();
  if (0 === s) return e;
  var l = o.getAnchorKey(),
    c = e.getCurrentContent(),
    u = c.getBlockForKey(l).getLength();
  if (u <= 1) return e;
  s === u ? (t = o.set("anchorOffset", s - 1), n = o) : n = (t = o.set("focusOffset", s + 1)).set("anchorOffset", s + 1);
  var d = a(c, t),
    f = r.removeRange(c, t, "backward"),
    p = f.getSelectionAfter(),
    _ = p.getAnchorOffset() - 1,
    h = p.merge({
      anchorOffset: _,
      focusOffset: _
    }),
    m = r.replaceWithFragment(f, h, d),
    g = i.push(e, m, "insert-fragment");
  return i.acceptSelection(g, n)
}