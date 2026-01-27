/** Chunk was on web.js **/
/** chunk id: 150189, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => o
});
var Chunk559751 = require("./559751.js"),
  Chunk140851 = require("./140851.js");

function a(e, t, n) {
  var a = (0, r.A)(e),
    o = [i.kb, i.Mn].indexOf(a) >= 0 ? false : 1,
    s = "function" == typeof n ? n(Object.assign({}, t, {
      placement: e
    })) : n,
    l = s[0],
    c = s[1];
  return l = l || 0, c = (c || 0) * o, [i.kb, i.pG].indexOf(a) >= 0 ? {
    x: c,
    y: l
  } : {
    x: l,
    y: c
  }
}
let o = {
  name: "offset",
  enabled: true,
  phase: "main",
  requires: ["popperOffsets"],
  fn: function(e) {
    var t = e.state,
      n = e.options,
      r = e.name,
      o = n.offset,
      s = true === o ? [0, 0] : o,
      l = i.DD.reduce(function(e, n) {
        return e[n] = a(n, t.rects, s), e
      }, {}),
      c = l[t.placement],
      u = c.x,
      d = c.y;
    null != t.modifiersData.popperOffsets && (t.modifiersData.popperOffsets.x += u, t.modifiersData.popperOffsets.y += d), t.modifiersData[r] = l
  }
}