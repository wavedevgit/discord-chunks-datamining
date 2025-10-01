/** Chunk was on web.js **/
/** chunk id: 562531, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk441710 = require("./441710.js"),
  Chunk102736 = require("./102736.js"),
  Chunk361788 = require("./361788.js");
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