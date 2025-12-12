/** Chunk was on web.js **/
/** chunk id: 269166, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk720218 = require("./720218.js"),
  Chunk384404 = require("./384404.js"),
  Chunk511076 = require("./511076.js");
module.exports = function(e) {
  var t, n, a = e.getSelection();
  if (!a.isCollapsed()) return e;
  var s = a.getAnchorOffset();
  if (0 === s) return e;
  var l = a.getAnchorKey(),
    c = e.getCurrentContent(),
    u = c.getBlockForKey(l).getLength();
  if (u <= 1) return e;
  s === u ? (t = a.set("anchorOffset", s - 1), n = a) : n = (t = a.set("focusOffset", s + 1)).set("anchorOffset", s + 1);
  var d = o(c, t),
    f = r.removeRange(c, t, "backward"),
    p = f.getSelectionAfter(),
    _ = p.getAnchorOffset() - 1,
    m = p.merge({
      anchorOffset: _,
      focusOffset: _
    }),
    h = r.replaceWithFragment(f, m, d),
    g = i.push(e, h, "insert-fragment");
  return i.acceptSelection(g, n)
}