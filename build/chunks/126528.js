/** Chunk was on web.js **/
/** chunk id: 126528, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk581079 = require("./581079.js");
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