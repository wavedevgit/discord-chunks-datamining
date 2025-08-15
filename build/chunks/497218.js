/** Chunk was on 8381 **/
/** chunk id: 497218, original params: t,e,r (module,exports,require) **/
"use strict";
var n, Chunk166898 = require("./166898.js"),
  Chunk65183 = require("./65183.js"),
  Chunk467159 = require("./467159.js"),
  u = Chunk65183.OrderedMap;
module.exports = {
  getDirectionMap: function(t, e) {
    n ? n.reset() : n = new i;
    var r = t.getBlockMap(),
      s = r.valueSeq().map(function(t) {
        return a(n).getDirection(t.getText())
      }),
      c = u(r.keySeq().zip(s));
    return null != e && o.is(e, c) ? e : c
  }
}