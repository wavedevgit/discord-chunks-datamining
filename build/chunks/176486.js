/** Chunk was on web.js **/
/** chunk id: 176486, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk367932 = require("./367932.js"),
  i = require("./1140.js").strlen;
module.exports = function(e, t) {
  var n = [];
  return e.findEntityRanges(function(e) {
    return !!e.getEntity()
  }, function(a, s) {
    var o = e.getText(),
      l = e.getEntityAt(a);
    n.push({
      offset: i(o.slice(0, a)),
      length: i(o.slice(a, s)),
      key: Number(t[r.stringify(l)])
    })
  }), n
}