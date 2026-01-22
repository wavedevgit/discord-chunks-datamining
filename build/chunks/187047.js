/** Chunk was on web.js **/
/** chunk id: 187047, original params: e,t,n (module,exports,re quire) **/
"use strict";
var r, Chunk198668 = require("./198668.js"),
  Chunk116740 = require("./116740.js"),
  Chunk670200 = require("./670200.js"),
  o = Chunk116740.OrderedMap;
module.exports = {
  getDirectionMap: function(e, t) {
    r ? r.reset() : r = new i;
    var n = e.getBlockMap(),
      l = n.valueSeq().map(function(e) {
        return s(r).getDirection(e.getText())
      }),
      c = o(n.keySeq().zip(l));
    return null != t && a.is(t, c) ? t : c
  }
}