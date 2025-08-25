/** Chunk was on web.js **/
/** chunk id: 351795, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk243727 = require("./243727.js"),
  Chunk89103 = require("./89103.js"),
  Chunk581079 = require("./581079.js");

function a(e, t, n, a, s, l, c) {
  var u = n.getStartOffset(),
    d = n.getEndOffset(),
    f = e.__get(s).getMutability(),
    _ = c ? u : d;
  if ("MUTABLE" === f) return n;
  var p = i(t, s).filter(function(e) {
    return _ <= e.end && _ >= e.start
  });
  1 != p.length && o(false);
  var h = p[0];
  if ("IMMUTABLE" === f) return n.merge({
    anchorOffset: h.start,
    focusOffset: h.end,
    isBackward: false
  });
  l || (c ? d = h.end : u = h.start);
  var m = r.getRemovalRange(u, d, t.getText().slice(h.start, h.end), h.start, a);
  return n.merge({
    anchorOffset: m.start,
    focusOffset: m.end,
    isBackward: false
  })
}
module.exports = function(e, t, n, r, i) {
  var o = r.getStartOffset(),
    s = r.getEndOffset(),
    l = t.getEntityAt(o),
    c = n.getEntityAt(s - 1);
  if (!l && !c) return r;
  var u = r;
  if (l && l === c) u = a(e, t, u, i, l, true, true);
  else if (l && c) {
    var d = a(e, t, u, i, l, false, true),
      f = a(e, n, u, i, c, false, false);
    u = u.merge({
      anchorOffset: d.getAnchorOffset(),
      focusOffset: f.getFocusOffset(),
      isBackward: false
    })
  } else if (l) {
    var _ = a(e, t, u, i, l, false, true);
    u = u.merge({
      anchorOffset: _.getStartOffset(),
      isBackward: false
    })
  } else if (c) {
    var p = a(e, n, u, i, c, false, false);
    u = u.merge({
      focusOffset: p.getEndOffset(),
      isBackward: false
    })
  }
  return u
}