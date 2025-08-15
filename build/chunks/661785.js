/** Chunk was on 8381 **/
/** chunk id: 661785, original params: t,e,r (module,exports,require) **/
"use strict";
var Chunk65183 = require("./65183.js"),
  Chunk475854 = require("./475854.js"),
  Chunk581079 = require("./581079.js"),
  a = Chunk65183.Repeat;
module.exports = function(t, e, r, n) {
  e.isCollapsed() || o(false);
  var u = null;
  if (null != r && (u = r.length), null == u || 0 === u) return t;
  var s = t.getBlockMap(),
    c = e.getStartKey(),
    l = e.getStartOffset(),
    f = s.get(c),
    p = f.getText(),
    h = f.merge({
      text: p.slice(0, l) + r + p.slice(l, f.getLength()),
      characterList: i(f.getCharacterList(), a(n, u).toList(), l)
    }),
    d = l + u;
  return t.merge({
    blockMap: s.set(c, h),
    selectionAfter: e.merge({
      anchorOffset: d,
      focusOffset: d
    })
  })
}