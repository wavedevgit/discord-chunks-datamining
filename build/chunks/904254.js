/** Chunk was on web.js **/
/** chunk id: 904254, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk615386 = require("./615386.js"),
  Chunk126528 = require("./126528.js"),
  Chunk581079 = require("./581079.js");

function o(e, t, n, o, s, l, c) {
  var u = n.getStartOffset(),
    d = n.getEndOffset(),
    f = e.__get(s).getMutability(),
    p = c ? u : d;
  if ("MUTABLE" === f) return n;
  var _ = i(t, s).filter(function(e) {
    return p <= e.end && p >= e.start
  });
  1 != _.length && a(false);
  var m = _[0];
  if ("IMMUTABLE" === f) return n.merge({
    anchorOffset: m.start,
    focusOffset: m.end,
    isBackward: false
  });
  l || (c ? d = m.end : u = m.start);
  var h = r.getRemovalRange(u, d, t.getText().slice(m.start, m.end), m.start, o);
  return n.merge({
    anchorOffset: h.start,
    focusOffset: h.end,
    isBackward: false
  })
}
module.exports = function(e, t, n, r, i) {
  var a = r.getStartOffset(),
    s = r.getEndOffset(),
    l = t.getEntityAt(a),
    c = n.getEntityAt(s - 1);
  if (!l && !c) return r;
  var u = r;
  if (l && l === c) u = o(e, t, u, i, l, true, true);
  else if (l && c) {
    var d = o(e, t, u, i, l, false, true),
      f = o(e, n, u, i, c, false, false);
    u = u.merge({
      anchorOffset: d.getAnchorOffset(),
      focusOffset: f.getFocusOffset(),
      isBackward: false
    })
  } else if (l) {
    var p = o(e, t, u, i, l, false, true);
    u = u.merge({
      anchorOffset: p.getStartOffset(),
      isBackward: false
    })
  } else if (c) {
    var _ = o(e, n, u, i, c, false, false);
    u = u.merge({
      focusOffset: _.getEndOffset(),
      isBackward: false
    })
  }
  return u
}