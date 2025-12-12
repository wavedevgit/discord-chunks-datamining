/** Chunk was on web.js **/
/** chunk id: 62105, original params: e,t,n (module,exports,re quire) **/
"use strict";
var r = require("./733359.js").substr;
module.exports = function(e, t) {
  var n = Array(e.length).fill(null);
  return t && t.forEach(function(t) {
    for (var i = r(e, 0, t.offset).length, o = i + r(e, t.offset, t.length).length, a = i; a < o; a++) n[a] = t.key
  }), n
}