/** Chunk was on 38939 **/
/** chunk id: 692001, original params: t,e,r (module,exports,require) **/
"use strict";
var Chunk595042 = require("./595042.js"),
  Chunk670200 = require("./670200.js");
module.exports = function(t, e, r, o, a) {
  var s = i(t.getSelection()),
    u = n.decode(e),
    c = u.blockKey,
    l = t.getBlockTree(c),
    f = l && l.getIn([u.decoratorKey, "leaves", u.leafKey]),
    p = n.decode(o),
    h = p.blockKey,
    d = t.getBlockTree(h),
    g = d && d.getIn([p.decoratorKey, "leaves", p.leafKey]);
  if (!f || !g) return s;
  var y = f.get("start"),
    v = g.get("start"),
    m = f ? y + r : null,
    _ = g ? v + a : null;
  if (s.getAnchorKey() === c && s.getAnchorOffset() === m && s.getFocusKey() === h && s.getFocusOffset() === _) return s;
  var b = false;
  if (c === h) {
    var S = f.get("end"),
      w = g.get("end");
    b = v === y && w === S ? a < r : v < y
  } else b = t.getCurrentContent().getBlockMap().keySeq().skipUntil(function(t) {
    return t === c || t === h
  }).first() === h;
  return s.merge({
    anchorKey: c,
    anchorOffset: m,
    focusKey: h,
    focusOffset: _,
    isBackward: b
  })
}