/** Chunk was on web.js **/
/** chunk id: 622114, original params: e,t,n (module,exports,re quire) **/
"use strict";
var r = require("./1140.js").substr;
module.exports = function(e, t) {
  var n = Array(e.length).fill(null);
  return t && t.forEach(function(t) {
    for (var i = r(e, 0, t.offset).length, a = i + r(e, t.offset, t.length).length, s = i; s < a; s++) n[s] = t.key
  }), n
}