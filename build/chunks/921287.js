/** Chunk was on web.js **/
/** chunk id: 921287, original params: e,t,n (module,exports,re quire) **/
"use strict";
var r, Chunk166898 = require("./166898.js"),
  Chunk65183 = require("./65183.js"),
  Chunk467159 = require("./467159.js"),
  s = Chunk65183.OrderedMap;
module.exports = {
  getDirectionMap: function(e, t) {
    r ? r.reset() : r = new i;
    var n = e.getBlockMap(),
      l = n.valueSeq().map(function(e) {
        return o(r).getDirection(e.getText())
      }),
      c = s(n.keySeq().zip(l));
    return null != t && a.is(t, c) ? t : c
  }
}