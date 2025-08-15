/** Chunk was on 91584 **/
/** chunk id: 96010, original params: t,e,r (module,exports,require) **/
"use strict";
var n = require("./733359.js").substr;
module.exports = function(t, e) {
  var r = Array(t.length).fill(null);
  return e && e.forEach(function(e) {
    for (var i = n(t, 0, e.offset).length, o = i + n(t, e.offset, e.length).length, a = i; a < o; a++) r[a] = e.key
  }), r
}