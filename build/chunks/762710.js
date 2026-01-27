/** Chunk was on 38939 **/
/** chunk id: 762710, original params: t,e,r (module,exports,require) **/
"use strict";
var Chunk797686 = require("./797686.js");
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