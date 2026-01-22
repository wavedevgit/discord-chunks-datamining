/** Chunk was on web.js **/
/** chunk id: 976427, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk116740 = require("./116740.js"),
  Chunk885578 = require("./885578.js"),
  Chunk797686 = require("./797686.js"),
  s = Chunk116740.Repeat;
module.exports = function(e, t, n, r) {
  t.isCollapsed() || a(false);
  var o = null;
  if (null != n && (o = n.length), null == o || 0 === o) return e;
  var l = e.getBlockMap(),
    c = t.getStartKey(),
    u = t.getStartOffset(),
    d = l.get(c),
    f = d.getText(),
    p = d.merge({
      text: f.slice(0, u) + n + f.slice(u, d.getLength()),
      characterList: i(d.getCharacterList(), s(r, o).toList(), u)
    }),
    _ = u + o;
  return e.merge({
    blockMap: l.set(c, p),
    selectionAfter: t.merge({
      anchorOffset: _,
      focusOffset: _
    })
  })
}