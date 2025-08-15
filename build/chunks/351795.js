/** Chunk was on 91584 **/
/** chunk id: 351795, original params: t,e,r (module,exports,require) **/
"use strict";
var Chunk243727 = require("./243727.js"),
  Chunk89103 = require("./89103.js"),
  Chunk581079 = require("./581079.js");

function a(t, e, r, a, u, s, c) {
  var l = r.getStartOffset(),
    f = r.getEndOffset(),
    p = t.__get(u).getMutability(),
    h = c ? l : f;
  if ("MUTABLE" === p) return r;
  var d = i(e, u).filter(function(t) {
    return h <= t.end && h >= t.start
  });
  1 != d.length && o(false);
  var g = d[0];
  if ("IMMUTABLE" === p) return r.merge({
    anchorOffset: g.start,
    focusOffset: g.end,
    isBackward: false
  });
  s || (c ? f = g.end : l = g.start);
  var y = n.getRemovalRange(l, f, e.getText().slice(g.start, g.end), g.start, a);
  return r.merge({
    anchorOffset: y.start,
    focusOffset: y.end,
    isBackward: false
  })
}
module.exports = function(t, e, r, n, i) {
  var o = n.getStartOffset(),
    u = n.getEndOffset(),
    s = e.getEntityAt(o),
    c = r.getEntityAt(u - 1);
  if (!s && !c) return n;
  var l = n;
  if (s && s === c) l = a(t, e, l, i, s, true, true);
  else if (s && c) {
    var f = a(t, e, l, i, s, false, true),
      p = a(t, r, l, i, c, false, false);
    l = l.merge({
      anchorOffset: f.getAnchorOffset(),
      focusOffset: p.getFocusOffset(),
      isBackward: false
    })
  } else if (s) {
    var h = a(t, e, l, i, s, false, true);
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