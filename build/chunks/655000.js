/** Chunk was on web.js **/
/** chunk id: 655000, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk621796 = require("./621796.js"),
  Chunk172367 = require("./172367.js"),
  Chunk148727 = require("./148727.js");
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
    _ = f.getSelectionAfter(),
    p = _.getAnchorOffset() - 1,
    h = _.merge({
      anchorOffset: p,
      focusOffset: p
    }),
    m = r.replaceWithFragment(f, h, d),
    g = i.push(e, m, "insert-fragment");
  return i.acceptSelection(g, n)
}