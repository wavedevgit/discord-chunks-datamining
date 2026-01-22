/** Chunk was on web.js **/
/** chunk id: 762710, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk797686 = require("./797686.js");
module.exports = function(e, t) {
  var n = [];
  return e.findEntityRanges(function(e) {
    return e.getEntity() === t
  }, function(e, t) {
    n.push({
      start: e,
      end: t
    })
  }), n.length || r(false), n
}