/** Chunk was on web.js **/
/** chunk id: 561627, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk473479 = require("./473479.js"),
  Chunk762710 = require("./762710.js"),
  Chunk797686 = require("./797686.js");

function s(e, t, n, s, o, l, c) {
  var u = n.getStartOffset(),
    d = n.getEndOffset(),
    f = e.__get(o).getMutability(),
    p = c ? u : d;
  if ("MUTABLE" === f) return n;
  var _ = i(t, o).filter(function(e) {
    return p <= e.end && p >= e.start
  });
  1 != _.length && a(false);
  var h = _[0];
  if ("IMMUTABLE" === f) return n.merge({
    anchorOffset: h.start,
    focusOffset: h.end,
    isBackward: false
  });
  l || (c ? d = h.end : u = h.start);
  var m = r.getRemovalRange(u, d, t.getText().slice(h.start, h.end), h.start, s);
  return n.merge({
    anchorOffset: m.start,
    focusOffset: m.end,
    isBackward: false
  })
}
module.exports = function(e, t, n, r, i) {
  var a = r.getStartOffset(),
    o = r.getEndOffset(),
    l = t.getEntityAt(a),
    c = n.getEntityAt(o - 1);
  if (!l && !c) return r;
  var u = r;
  if (l && l === c) u = s(e, t, u, i, l, true, true);
  else if (l && c) {
    var d = s(e, t, u, i, l, false, true),
      f = s(e, n, u, i, c, false, false);
    u = u.merge({
      anchorOffset: d.getAnchorOffset(),
      focusOffset: f.getFocusOffset(),
      isBackward: false
    })
  } else if (l) {
    var p = s(e, t, u, i, l, false, true);
    u = u.merge({
      anchorOffset: p.getStartOffset(),
      isBackward: false
    })
  } else if (c) {
    var _ = s(e, n, u, i, c, false, false);
    u = u.merge({
      focusOffset: _.getEndOffset(),
      isBackward: false
    })
  }
  return u
}