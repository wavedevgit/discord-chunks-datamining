/** Chunk was on 38939 **/
/** chunk id: 976427, original params: t,e,r (module,exports,require) **/
"use strict";
var Chunk116740 = require("./116740.js"),
  Chunk885578 = require("./885578.js"),
  Chunk797686 = require("./797686.js"),
  a = Chunk116740.Repeat;
module.exports = function(t, e, r, n) {
  e.isCollapsed() || o(false);
  var s = null;
  if (null != r && (s = r.length), null == s || 0 === s) return t;
  var u = t.getBlockMap(),
    c = e.getStartKey(),
    l = e.getStartOffset(),
    f = u.get(c),
    p = f.getText(),
    h = f.merge({
      text: p.slice(0, l) + r + p.slice(l, f.getLength()),
      characterList: i(f.getCharacterList(), a(n, s).toList(), l)
    }),
    d = l + s;
  return t.merge({
    blockMap: u.set(c, h),
    selectionAfter: e.merge({
      anchorOffset: d,
      focusOffset: d
    })
  })
}