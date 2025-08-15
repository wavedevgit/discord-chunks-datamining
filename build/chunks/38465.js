/** Chunk was on 8381 **/
/** chunk id: 38465, original params: t,e,r (module,exports,require) **/
"use strict";
var Chunk581079 = require("./581079.js");
module.exports = function(t, e) {
  var r = [];
  return t.findEntityRanges(function(t) {
    return t.getEntity() === e
  }, function(t, e) {
    r.push({
      start: t,
      end: e
    })
  }), r.length || n(false), r
}