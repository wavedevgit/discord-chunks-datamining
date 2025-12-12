/** Chunk was on web.js **/
/** chunk id: 738719, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk964930 = require("./964930.js"),
  Chunk467159 = require("./467159.js");
module.exports = function(e, t, n, a, o) {
  var s = i(e.getSelection()),
    l = r.decode(t),
    c = l.blockKey,
    u = e.getBlockTree(c),
    d = u && u.getIn([l.decoratorKey, "leaves", l.leafKey]),
    f = r.decode(a),
    p = f.blockKey,
    _ = e.getBlockTree(p),
    m = _ && _.getIn([f.decoratorKey, "leaves", f.leafKey]);
  if (!d || !m) return s;
  var h = d.get("start"),
    g = m.get("start"),
    E = d ? h + n : null,
    b = m ? g + o : null;
  if (s.getAnchorKey() === c && s.getAnchorOffset() === E && s.getFocusKey() === p && s.getFocusOffset() === b) return s;
  var y = false;
  if (c === p) {
    var O = d.get("end"),
      v = m.get("end");
    y = g === h && v === O ? o < n : g < h
  } else y = e.getCurrentContent().getBlockMap().keySeq().skipUntil(function(e) {
    return e === c || e === p
  }).first() === p;
  return s.merge({
    anchorKey: c,
    anchorOffset: E,
    focusKey: p,
    focusOffset: b,
    isBackward: y
  })
}