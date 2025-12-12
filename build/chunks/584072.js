/** Chunk was on web.js **/
/** chunk id: 584072, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk591305 = require("./591305.js"),
  i = require("./733359.js").strlen;
module.exports = function(e, t) {
  var n = [];
  return e.findEntityRanges(function(e) {
    return !!e.getEntity()
  }, function(o, a) {
    var s = e.getText(),
      l = e.getEntityAt(o);
    n.push({
      offset: i(s.slice(0, o)),
      length: i(s.slice(o, a)),
      key: Number(t[r.stringify(l)])
    })
  }), n
}