/** Chunk was on 38939 **/
/** chunk id: 187047, original params: t,e,r (module,exports,require) **/
"use strict";
var n, Chunk198668 = require("./198668.js"),
  Chunk116740 = require("./116740.js"),
  Chunk670200 = require("./670200.js"),
  s = Chunk116740.OrderedMap;
module.exports = {
  getDirectionMap: function(t, e) {
    n ? n.reset() : n = new i;
    var r = t.getBlockMap(),
      u = r.valueSeq().map(function(t) {
        return a(n).getDirection(t.getText())
      }),
      c = s(r.keySeq().zip(u));
    return null != e && o.is(e, c) ? e : c
  }
}