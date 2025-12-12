/** Chunk was on web.js **/
/** chunk id: 985407, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk65183 = require("./65183.js"),
  Chunk357415 = require("./357415.js"),
  Chunk581079 = require("./581079.js"),
  a = Chunk65183.Repeat;
module.exports = function(e, t, n, r) {
  t.isCollapsed() || o(false);
  var s = null;
  if (null != n && (s = n.length), null == s || 0 === s) return e;
  var l = e.getBlockMap(),
    c = t.getStartKey(),
    u = t.getStartOffset(),
    d = l.get(c),
    f = d.getText(),
    p = d.merge({
      text: f.slice(0, u) + n + f.slice(u, d.getLength()),
      characterList: i(d.getCharacterList(), a(r, s).toList(), u)
    }),
    _ = u + s;
  return e.merge({
    blockMap: l.set(c, p),
    selectionAfter: t.merge({
      anchorOffset: _,
      focusOffset: _
    })
  })
}