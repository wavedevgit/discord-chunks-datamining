/** Chunk was on 91584 **/
/** chunk id: 479083, original params: t,e,r (module,exports,require) **/
"use strict";
var Chunk401169 = require("./401169.js"),
  i = require("./733359.js").strlen;
module.exports = function(t, e) {
  var r = [];
  return t.findEntityRanges(function(t) {
    return !!t.getEntity()
  }, function(o, a) {
    var u = t.getText(),
      s = t.getEntityAt(o);
    r.push({
      offset: i(u.slice(0, o)),
      length: i(u.slice(o, a)),
      key: Number(e[n.stringify(s)])
    })
  }), r
}