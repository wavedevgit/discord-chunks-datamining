/** Chunk was on web.js **/
/** chunk id: 534978, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk152477 = require("./152477.js"),
  Chunk467159 = require("./467159.js");
module.exports = function(e, t, n, o, a) {
  var s = i(e.getSelection()),
    l = r.decode(t),
    c = l.blockKey,
    u = e.getBlockTree(c),
    d = u && u.getIn([l.decoratorKey, "leaves", l.leafKey]),
    f = r.decode(o),
    _ = f.blockKey,
    p = e.getBlockTree(_),
    h = p && p.getIn([f.decoratorKey, "leaves", f.leafKey]);
  if (!d || !h) return s;
  var m = d.get("start"),
    g = h.get("start"),
    E = d ? m + n : null,
    b = h ? g + a : null;
  if (s.getAnchorKey() === c && s.getAnchorOffset() === E && s.getFocusKey() === _ && s.getFocusOffset() === b) return s;
  var y = false;
  if (c === _) {
    var O = d.get("end"),
      v = h.get("end");
    y = g === m && v === O ? a < n : g < m
  } else y = e.getCurrentContent().getBlockMap().keySeq().skipUntil(function(e) {
    return e === c || e === _
  }).first() === _;
  return s.merge({
    anchorKey: c,
    anchorOffset: E,
    focusKey: _,
    focusOffset: b,
    isBackward: y
  })
}