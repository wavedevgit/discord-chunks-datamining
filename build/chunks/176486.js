/** Chunk was on 38939 **/
/** chunk id: 176486, original params: t,e,r (module,exports,require) **/
"use strict";
var Chunk367932 = require("./367932.js"),
  i = require("./1140.js").strlen;
module.exports = function(t, e) {
  var r = [];
  return t.findEntityRanges(function(t) {
    return !!t.getEntity()
  }, function(o, a) {
    var s = t.getText(),
      u = t.getEntityAt(o);
    r.push({
      offset: i(s.slice(0, o)),
      length: i(s.slice(o, a)),
      key: Number(e[n.stringify(u)])
    })
  }), r
}