/** Chunk was on web.js **/
/** chunk id: 692001, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk595042 = require("./595042.js"),
  Chunk670200 = require("./670200.js");
module.exports = function(e, t, n, a, s) {
  var o = i(e.getSelection()),
    l = r.decode(t),
    c = l.blockKey,
    u = e.getBlockTree(c),
    d = u && u.getIn([l.decoratorKey, "leaves", l.leafKey]),
    f = r.decode(a),
    p = f.blockKey,
    _ = e.getBlockTree(p),
    h = _ && _.getIn([f.decoratorKey, "leaves", f.leafKey]);
  if (!d || !h) return o;
  var m = d.get("start"),
    g = h.get("start"),
    E = d ? m + n : null,
    y = h ? g + s : null;
  if (o.getAnchorKey() === c && o.getAnchorOffset() === E && o.getFocusKey() === p && o.getFocusOffset() === y) return o;
  var b = false;
  if (c === p) {
    var O = d.get("end"),
      v = h.get("end");
    b = g === m && v === O ? s < n : g < m
  } else b = e.getCurrentContent().getBlockMap().keySeq().skipUntil(function(e) {
    return e === c || e === p
  }).first() === p;
  return o.merge({
    anchorKey: c,
    anchorOffset: E,
    focusKey: p,
    focusOffset: y,
    isBackward: b
  })
}