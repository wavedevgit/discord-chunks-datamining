/** Chunk was on 38939 **/
/** chunk id: 561627, original params: t,e,r (module,exports,require) **/
"use strict";
var Chunk473479 = require("./473479.js"),
  Chunk762710 = require("./762710.js"),
  Chunk797686 = require("./797686.js");

function a(t, e, r, a, s, u, c) {
  var l = r.getStartOffset(),
    f = r.getEndOffset(),
    p = t.__get(s).getMutability(),
    h = c ? l : f;
  if ("MUTABLE" === p) return r;
  var d = i(e, s).filter(function(t) {
    return h <= t.end && h >= t.start
  });
  1 != d.length && o(false);
  var g = d[0];
  if ("IMMUTABLE" === p) return r.merge({
    anchorOffset: g.start,
    focusOffset: g.end,
    isBackward: false
  });
  u || (c ? f = g.end : l = g.start);
  var y = n.getRemovalRange(l, f, e.getText().slice(g.start, g.end), g.start, a);
  return r.merge({
    anchorOffset: y.start,
    focusOffset: y.end,
    isBackward: false
  })
}
module.exports = function(t, e, r, n, i) {
  var o = n.getStartOffset(),
    s = n.getEndOffset(),
    u = e.getEntityAt(o),
    c = r.getEntityAt(s - 1);
  if (!u && !c) return n;
  var l = n;
  if (u && u === c) l = a(t, e, l, i, u, true, true);
  else if (u && c) {
    var f = a(t, e, l, i, u, false, true),
      p = a(t, r, l, i, c, false, false);
    l = l.merge({
      anchorOffset: f.getAnchorOffset(),
      focusOffset: p.getFocusOffset(),
      isBackward: false
    })
  } else if (u) {
    var h = a(t, e, l, i, u, false, true);
    l = l.merge({
      anchorOffset: h.getStartOffset(),
      isBackward: false
    })
  } else if (c) {
    var d = a(t, r, l, i, c, false, false);
    l = l.merge({
      focusOffset: d.getEndOffset(),
      isBackward: false
    })
  }
  return l
}